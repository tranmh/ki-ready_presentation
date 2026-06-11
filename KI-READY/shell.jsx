// shell.jsx — ANDRITZ slide shell, common motion primitives, and palette.

// Palette aligned to the ANDRITZ slide design system.
//   Primary  #0075BE  ·  Dark Blue (supporting)  #003A70
//   Accents  Orange #EE7203 · Yellow #EECD00 · Green #89A429
//   Ink #1A1A1A · Mute #5A6470 · Rule #E4E7EB · Paper #FAFAFA
const ANDRITZ = {
  navy:    '#003A70',  // Dark Blue — section heads & headline grounding
  navyDk:  '#002850',  // deeper variant for dark backgrounds
  blue:    '#0075BE',  // Andritz Primary Blue
  blueDk:  '#005E92',
  orange:  '#EE7203',  // Energy accent (one per slide rule)
  orangeDk:'#B85B14',
  bg:      '#FAFAFA',  // Paper / canvas
  paper:   '#FFFFFF',
  ink:     '#1A1A1A',
  mute:    '#5A6470',
  rule:    '#E4E7EB',
  yellow:  '#EECD00',
  green:   '#89A429',
  blueTint:'#E6F1F9',
  blue50:  '#B3D6EC',
};

// Arial-first per ANDRITZ brand typography.
const FONT = 'Arial, Helvetica, "Helvetica Neue", sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace';

// Slide-level wrapper: invisible 1920×1080 frame that timestamps the playhead
// onto the video root for comment context, and renders the slide chrome.
function Slide({ index, total, section, time, duration, label, children, bg = ANDRITZ.bg, chrome = true }) {
  const t = useTime();
  // Stamp current second onto the video root for comment context.
  React.useEffect(() => {
    const root = document.getElementById('video-root');
    if (!root) return;
    const sec = Math.floor(t);
    root.setAttribute('data-screen-label', `t=${sec}s · slide ${index}/${total}`);
  }, [Math.floor(t), index, total]);
  return (
    <Sprite start={time} end={time + duration}>
      {() => (
        <div data-screen-label={`slide-${String(index).padStart(2, '0')}`} style={{
          position: 'absolute', inset: 0, background: bg, overflow: 'hidden',
          fontFamily: FONT, color: ANDRITZ.ink,
        }}>
          {chrome && <SlideChrome index={index} total={total} section={section} label={label} />}
          {children}
        </div>
      )}
    </Sprite>
  );
}

function SlideChrome({ index, total, section, label }) {
  return (
    <React.Fragment>
      {/* Top bar: ANDRITZ wordmark + section + slide counter (system: white paper, hairline rule) */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 64px',
        borderBottom: `1px solid ${ANDRITZ.rule}`,
        background: ANDRITZ.paper,
      }}>
        <Wordmark />
        <div style={{
          fontFamily: FONT, fontSize: 12, letterSpacing: '0.18em', fontWeight: 700,
          color: ANDRITZ.navy, textTransform: 'uppercase',
        }}>
          {section}
        </div>
        <div style={{
          fontFamily: FONT, fontSize: 12, fontWeight: 700,
          color: ANDRITZ.mute, letterSpacing: '0.14em',
          fontVariantNumeric: 'tabular-nums', textTransform: 'uppercase',
        }}>
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>
      {/* Bottom bar — design-system footer slug: page number + presentation slug, logo right */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 48,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 64px',
        borderTop: `1px solid ${ANDRITZ.rule}`,
        background: ANDRITZ.paper,
        fontFamily: FONT, fontSize: 11, color: ANDRITZ.mute, fontWeight: 700,
        letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        <span>
          <span style={{ color: ANDRITZ.navy, fontWeight: 700 }}>
            {String(index).padStart(2, '0')}
          </span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          KI-READY Summit · Vibe Coding im Unternehmenskontext · ©ANDRITZ
        </span>
        <img src="assets/andritz-logo.png" alt="ANDRITZ" style={{ height: 18 }} />
      </div>
      {/* Slide progress bar */}
      <SlideProgress index={index} total={total} />
    </React.Fragment>
  );
}

function SlideProgress({ index, total }) {
  return (
    <div style={{
      position: 'absolute', top: 68, left: 0, right: 0, height: 3,
      background: ANDRITZ.rule,
    }}>
      <div style={{
        height: '100%', width: `${(index / total) * 100}%`,
        background: ANDRITZ.blue,
      }} />
    </div>
  );
}

// Wordmark — uses the official ANDRITZ logo PNG from the design-system asset set.
// On dark backgrounds the logo is reversed to white via CSS filter, per brand rules.
function Wordmark({ color = ANDRITZ.navy, size = 22 }) {
  const isDark = color === '#FFFFFF' || color === '#fff' || color === 'white';
  const logoH = Math.round(size * 1.0);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      fontFamily: FONT,
    }}>
      <img
        src="assets/andritz-logo.png"
        alt="ANDRITZ"
        style={{
          height: logoH,
          display: 'block',
          filter: isDark ? 'brightness(0) invert(1)' : 'none',
        }}
      />
      <span style={{
        fontSize: size * 0.5, fontWeight: 700, letterSpacing: '0.22em',
        color: isDark ? 'rgba(255,255,255,0.7)' : ANDRITZ.mute,
        textTransform: 'uppercase',
        paddingLeft: 14,
        borderLeft: `1px solid ${isDark ? 'rgba(255,255,255,0.25)' : ANDRITZ.rule}`,
      }}>Schuler</span>
    </div>
  );
}

// Slide-level title — implements the design-system Eyebrow + Headline group:
//   • 64×6 px primary-blue rule above the eyebrow
//   • eyebrow in Arial Bold, 0.32em tracking, UPPERCASE, dark blue
//   • headline in Arial Bold, UPPERCASE, 0.04em tracking, dark blue
//   • subhead in Arial Regular, dark blue (or muted) sentence case
function SlideTitle({
  eyebrow, title, sub,
  x = 80, y = 110, w = 1760,
  color = ANDRITZ.navy,
  onDark = false,
}) {
  const { localTime } = useSprite();
  const eyebrowOp = clamp(localTime / 0.4, 0, 1);
  const titleOp = clamp((localTime - 0.15) / 0.5, 0, 1);
  const subOp = clamp((localTime - 0.4) / 0.5, 0, 1);
  const eyebrowColor = onDark ? '#FFFFFF' : ANDRITZ.navy;
  const barColor = onDark ? '#FFFFFF' : ANDRITZ.blue;
  const titleColor = onDark ? '#FFFFFF' : color;
  const subColor = onDark ? 'rgba(255,255,255,0.85)' : ANDRITZ.mute;
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: w }}>
      {eyebrow && (
        <div style={{
          opacity: eyebrowOp,
          transform: `translateY(${(1 - eyebrowOp) * 8}px)`,
        }}>
          {/* Primary-blue rule, 64×6 — design-system spec */}
          <div style={{
            width: 64, height: 6, background: barColor, marginBottom: 18,
          }} />
          <div style={{
            fontFamily: FONT, fontSize: 14, fontWeight: 700,
            color: eyebrowColor,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            marginBottom: 18,
          }}>
            {eyebrow}
          </div>
        </div>
      )}
      {title && (
        <div style={{
          opacity: titleOp,
          transform: `translateY(${(1 - titleOp) * 12}px)`,
          fontFamily: FONT, fontSize: 60, fontWeight: 700,
          lineHeight: 1.0, letterSpacing: '0.04em', textTransform: 'uppercase',
          color: titleColor,
        }}>
          {title}
        </div>
      )}
      {sub && (
        <div style={{
          opacity: subOp,
          transform: `translateY(${(1 - subOp) * 8}px)`,
          marginTop: 22, fontSize: 22, lineHeight: 1.35,
          color: subColor, letterSpacing: '0.01em',
          maxWidth: 1200, fontWeight: 400,
        }}>
          {sub}
        </div>
      )}
    </div>
  );
}

// AGlyph — the iconic ANDRITZ "A" cut from the wordmark, used as a single anchored
// motif on covers/dividers/closings. Inline SVG path (same geometry as design-system).
function AGlyph({ width = 940, height, fill = '#FFFFFF', opacity = 0.18, style }) {
  const h = height || width * (73.1 / 96.1);
  return (
    <svg viewBox="0 0 96.1 73.1" width={width} height={h}
         aria-hidden="true" style={{ display: 'block', ...style }}>
      <path d="M96.1,73.1L60.2,0h-24.6L0,73.1h63l-9.2-21.4h-17.1l11.1-25,20.9,46.4h27.5,0Z"
            fill={fill} opacity={opacity} />
    </svg>
  );
}

// Striped placeholder block for imagery we don't have.
function Placeholder({ x, y, w, h, label, radius = 8 }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: w, height: h,
      borderRadius: radius, overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, #E5E7EB 0 14px, #D1D5DB 14px 28px)`,
      border: `1px solid ${ANDRITZ.rule}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 12, color: '#4B5563',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        background: 'rgba(255,255,255,0.85)', padding: '6px 12px', borderRadius: 4,
        border: `1px solid ${ANDRITZ.rule}`,
      }}>
        {label}
      </div>
    </div>
  );
}

// Count-up number that animates from 0 to target as localTime advances.
function CountUp({ to, start = 0, dur = 1, suffix = '', prefix = '', decimals = 0, style }) {
  const { localTime } = useSprite();
  const p = clamp((localTime - start) / dur, 0, 1);
  const eased = Easing.easeOutCubic(p);
  const v = to * eased;
  return <span style={style}>{prefix}{v.toFixed(decimals)}{suffix}</span>;
}

// Animated horizontal bar that grows from 0 to width over [start, start+dur].
function GrowBar({ x, y, w, h, color, start = 0, dur = 0.7, radius = 4 }) {
  const { localTime } = useSprite();
  const p = clamp((localTime - start) / dur, 0, 1);
  const eased = Easing.easeOutCubic(p);
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: w * eased, height: h,
      background: color, borderRadius: radius,
    }} />
  );
}

// FadeIn wrapper for any children, with delay + slide-up.
function In({ at = 0, dur = 0.5, y = 12, children, style }) {
  const { localTime } = useSprite();
  const p = clamp((localTime - at) / dur, 0, 1);
  const eased = Easing.easeOutCubic(p);
  return (
    <div style={{
      opacity: eased,
      transform: `translateY(${(1 - eased) * y}px)`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// Draws an arrow line from (x1,y1) to (x2,y2) that animates length-wise.
function ArrowLine({ x1, y1, x2, y2, color = ANDRITZ.navy, w = 2, start = 0, dur = 0.5, head = true }) {
  const { localTime } = useSprite();
  const p = clamp((localTime - start) / dur, 0, 1);
  const eased = Easing.easeInOutCubic(p);
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: x1, top: y1 - w / 2,
        width: len * eased, height: w, background: color,
        transform: `rotate(${angle}deg)`, transformOrigin: '0 50%',
      }} />
      {head && eased > 0.92 && (() => {
        const ah = 10;
        return (
          <div style={{
            position: 'absolute', left: x2, top: y2,
            width: 0, height: 0,
            borderLeft: `${ah}px solid ${color}`,
            borderTop: `${ah * 0.6}px solid transparent`,
            borderBottom: `${ah * 0.6}px solid transparent`,
            transform: `translate(-${ah}px, -${ah * 0.6}px) rotate(${angle}deg)`,
            transformOrigin: `${ah}px ${ah * 0.6}px`,
            opacity: (eased - 0.92) / 0.08,
          }} />
        );
      })()}
    </React.Fragment>
  );
}

// Real, scannable QR code rendered as SVG. Uses the global `qrcode-generator`
// library (loaded via CDN in the HTML). `value` should be a full URL.
function QRCode({ value, size = 120, color = ANDRITZ.ink, bg = '#fff', pad = 4 }) {
  const qr = React.useMemo(() => {
    if (typeof qrcode !== 'function') return null;
    try {
      // typeNumber=0 (auto), errorCorrectionLevel='M' (15% redundancy, scannable
      // even with mild damage / on-screen reflections from a phone camera)
      const q = qrcode(0, 'M');
      q.addData(value);
      q.make();
      return q;
    } catch (e) {
      return null;
    }
  }, [value]);
  if (!qr) return null;
  const n = qr.getModuleCount();
  const total = n + pad * 2;
  const cells = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (qr.isDark(r, c)) cells.push({ r, c });
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${total} ${total}`}
         shapeRendering="crispEdges"
         style={{ display: 'block', background: bg }}>
      {cells.map((cl, i) => (
        <rect key={i} x={cl.c + pad} y={cl.r + pad} width={1.02} height={1.02} fill={color} />
      ))}
    </svg>
  );
}

// Tiny QR-code visual placeholder (random-but-stable grid of dots).
function QRPlaceholder({ size = 120, color = ANDRITZ.ink, seed = 1 }) {
  const N = 21;
  const cells = [];
  // deterministic pseudo-random
  let s = seed * 9301 + 49297;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const isCorner = (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);
      let on = false;
      if (isCorner) {
        const rr = r < 7 ? r : N - 1 - r;
        const cc = c < 7 ? c : N - 1 - c;
        if (rr === 0 || rr === 6 || cc === 0 || cc === 6) on = true;
        if (rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4) on = true;
      } else {
        on = rand() > 0.55;
      }
      if (on) cells.push({ r, c });
    }
  }
  const cell = size / N;
  return (
    <div style={{
      position: 'relative', width: size, height: size,
      background: '#fff', padding: 0,
    }}>
      {cells.map((cl, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: cl.c * cell, top: cl.r * cell,
          width: cell, height: cell, background: color,
        }} />
      ))}
    </div>
  );
}

Object.assign(window, {
  ANDRITZ, FONT, MONO,
  Slide, SlideTitle, SlideChrome, SlideProgress, Wordmark, AGlyph,
  Placeholder, CountUp, GrowBar, In, ArrowLine, QRCode, QRPlaceholder,
});
