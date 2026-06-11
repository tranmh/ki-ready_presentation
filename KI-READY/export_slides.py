#!/usr/bin/env python3
"""Export the animated KI-READY deck to PDF.

Drives the React Stage in headless Chromium: freezes the rAF animation loop so
the playhead stays put, seeks to the settled end-state of each slide window via
localStorage + reload, element-screenshots the 1920x1080 slide frame, then
assembles all pages into slides.pdf.
"""
import os
from playwright.sync_api import sync_playwright
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, "pdf-export")
os.makedirs(OUT_DIR, exist_ok=True)

# Scene durations, in app.jsx order (SLIDES array). MUST mirror app.jsx exactly;
# the guard below cross-checks the count against the deck's own slide total.
DURS = [3.0, 2.0, 3.5, 4.0, 3.0, 3.5, 2.5, 4.5, 3.5, 3.5,
        4.0, 8.5, 4.0, 2.5, 3.5, 2.0, 7.0, 5.0, 3.0, 4.0]

# Cumulative start times -> settled capture time (just before the cut, so every
# element has fully entered; no scene uses exit-fades, so nothing has left yet).
starts, cursor = [], 0.0
for d in DURS:
    starts.append(cursor)
    cursor += d
captures = [s + d - 0.05 for s, d in zip(starts, DURS)]

URL = "http://localhost:8000/index-source.html"
PERSIST_KEY = "kiready-video:t"

# Freeze rAF before any page script runs: React 18 schedules via MessageChannel,
# so rendering still works, but the Stage's autoplay loop can never advance time.
FREEZE = "window.requestAnimationFrame=function(){return 0};window.cancelAnimationFrame=function(){};"

png_paths = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1920, "height": 1080},
                            device_scale_factor=2)
    page.add_init_script(FREEZE)

    # First load to establish the origin for localStorage.
    page.goto(URL, wait_until="networkidle")

    # Drift guard: the deck stamps "… · slide N/<total>" on #video-root. If DURS
    # has fallen out of sync with app.jsx's SLIDES array, fail loudly here rather
    # than producing a silently wrong/short PDF.
    stamp = page.wait_for_selector('#video-root[data-screen-label]', timeout=15000)
    stamp_label = stamp.get_attribute("data-screen-label")
    total = int(stamp_label.rsplit("/", 1)[1])
    if total != len(DURS):
        raise SystemExit(
            f"DURS has {len(DURS)} entries but the deck reports {total} slides "
            f"({stamp_label!r}). Update DURS in export_slides.py to mirror app.jsx.")

    for i, t in enumerate(captures, start=1):
        label = f"slide-{i:02d}"
        page.evaluate("([k,v]) => localStorage.setItem(k, v)", [PERSIST_KEY, str(t)])
        page.reload(wait_until="networkidle")
        # Correctness gate: confirm the intended slide actually mounted.
        frame = page.wait_for_selector(f'[data-screen-label="{label}"]', timeout=15000)
        try:
            page.evaluate("document.fonts.ready")
        except Exception:
            pass
        page.wait_for_timeout(500)  # let fonts/layout settle
        out = os.path.join(OUT_DIR, f"{label}.png")
        frame.screenshot(path=out)
        png_paths.append(out)
        print(f"captured {label} at t={t:.2f}s")

    browser.close()

# Assemble PDF (RGBA -> RGB for PIL multipage output).
imgs = [Image.open(p).convert("RGB") for p in png_paths]
pdf_path = os.path.join(HERE, "slides.pdf")
imgs[0].save(pdf_path, save_all=True, append_images=imgs[1:])
print(f"\nWrote {pdf_path} ({len(imgs)} pages)")
