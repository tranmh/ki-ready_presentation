// scenes-a.jsx — Scenes 1–6 (intro, agenda, what/how, examples, highlight).

// Slide 1 — Title
function Scene01({ time, duration, index, total }) {
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="Vortrag" label="Titel" bg="#FFFFFF" chrome={false}>
      {/* Background split */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
      }}>
        <div style={{ width: '54%', background: ANDRITZ.blue }} />
        <div style={{ width: '46%', background: ANDRITZ.bg }} />
      </div>

      {/* Brand "A" motif — spans the entire slide. Over the blue panel the glyph
          shows in white; over the white panel it inverts to dark blue. The A is
          the bridge between the two split sections. */}
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
           aria-hidden="true">
        <defs>
          {/* A-glyph path (raw, no symbol — symbol+use breaks fill cascade in
              some renderers, which is why the right A was rendering black). */}
          <clipPath id="s01-clip-left"><rect x="0" y="0" width="1037" height="1080" /></clipPath>
          <clipPath id="s01-clip-right"><rect x="1037" y="0" width="883" height="1080" /></clipPath>
          {/* Clip path matching the dark-blue A glyph's exact silhouette on the
              right panel — used to confine the seam-fold shadow to the A's
              body only (so the shadow never bleeds onto the white background). */}
          <clipPath id="s01-clip-aRight" clipPathUnits="userSpaceOnUse">
            <path d="M96.1,73.1L60.2,0h-24.6L0,73.1h63l-9.2-21.4h-17.1l11.1-25,20.9,46.4h27.5,0Z"
                  transform="translate(90 -160) scale(18.106 18.099)" />
          </clipPath>
          {/* Seam-fold shadow gradient — dark at the seam, fades out to the right. */}
          <linearGradient id="s01-foldShadow"
                          gradientUnits="userSpaceOnUse"
                          x1="1037" y1="0" x2="1620" y2="0">
            <stop offset="0%"  stopColor="#000000" stopOpacity="0.75" />
            <stop offset="18%" stopColor="#000000" stopOpacity="0.50" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          {/* Left-side rounding shadow — softer, narrower band on the blue
              panel where the paper curves into the fold. Darkest at the seam,
              fades out moving leftward across the blue panel. */}
          <linearGradient id="s01-foldShadowLeft"
                          gradientUnits="userSpaceOnUse"
                          x1="1037" y1="0" x2="780" y2="0">
            <stop offset="0%"   stopColor="#000000" stopOpacity="0.55" />
            <stop offset="12%"  stopColor="#000000" stopOpacity="0.36" />
            <stop offset="30%"  stopColor="#000000" stopOpacity="0.18" />
            <stop offset="55%"  stopColor="#000000" stopOpacity="0.07" />
            <stop offset="80%"  stopColor="#000000" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* White A on the blue panel — inlined path so fill cascades reliably */}
        <g clipPath="url(#s01-clip-left)">
          <path d="M96.1,73.1L60.2,0h-24.6L0,73.1h63l-9.2-21.4h-17.1l11.1-25,20.9,46.4h27.5,0Z"
                transform="translate(90 -220) scale(18.106 18.099)"
                fill="#FFFFFF" opacity="0.22" />
        </g>
        {/* Dark-blue A on the white panel — inlined path. Offset DOWN at the seam
            so the right half doesn't align with the left half — paper/origami fold. */}
        <g clipPath="url(#s01-clip-right)">
          <path d="M96.1,73.1L60.2,0h-24.6L0,73.1h63l-9.2-21.4h-17.1l11.1-25,20.9,46.4h27.5,0Z"
                transform="translate(90 -160) scale(18.106 18.099)"
                fill={ANDRITZ.blue} opacity="0.92" />
        </g>
        {/* Fold shadow — painted ONLY on the dark-blue A's surface near the seam.
            Double-clipped: first to the right panel, then to the A's silhouette.
            This sells the 3D fold without spilling shadow onto the white paper. */}
        <g clipPath="url(#s01-clip-right)">
          <g clipPath="url(#s01-clip-aRight)">
            <rect x="1037" y="0" width="700" height="1080" fill="url(#s01-foldShadow)" />
          </g>
        </g>
        {/* Left-side rounding shadow — darkens the blue panel near the seam to
            sell the paper curving into the fold. Clipped to the blue panel only. */}
        <g clipPath="url(#s01-clip-left)">
          <rect x="780" y="0" width="257" height="1080" fill="url(#s01-foldShadowLeft)" />
        </g>
      </svg>

      {/* Content layer — sits above the motif and the seam */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
      }}>
        <div style={{ width: '54%', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: 80, top: 80,
          }}>
            <In at={0.0} dur={0.5}>
              <Wordmark color="#FFFFFF" size={26} />
            </In>
          </div>
          <div style={{ position: 'absolute', left: 80, top: 280, right: 80 }}>
            <In at={0.4} dur={0.7} y={20}>
              {/* Design-system: 64×6 white bar + eyebrow above title */}
              <div style={{
                width: 64, height: 6, background: '#FFFFFF', marginBottom: 22,
              }} />
              <div style={{
                fontFamily: FONT, fontSize: 14, fontWeight: 700, color: '#FFFFFF',
                letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 28,
                opacity: 0.92,
              }}>
                Engineering Success
              </div>
            </In>
            <In at={0.7} dur={0.8} y={24}>
              <div style={{
                fontFamily: FONT, fontSize: 88, fontWeight: 700, lineHeight: 0.98,
                color: '#FFFFFF', letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                Vibe Coding
              </div>
              <div style={{
                fontFamily: FONT, fontSize: 60, fontWeight: 400, lineHeight: 1.05,
                color: '#FFFFFF', letterSpacing: '0.03em', textTransform: 'uppercase',
                marginTop: 12, opacity: 0.95,
              }}>
                im Unternehmens­kontext
              </div>
            </In>
            <In at={1.4} dur={0.6}>
              <div style={{
                marginTop: 36, fontSize: 24, lineHeight: 1.4, color: 'rgba(255,255,255,0.92)',
                fontWeight: 400, maxWidth: 760, letterSpacing: '0.01em',
              }}>
                Wenn KI den Code schreibt — und der Mensch die Richtung vorgibt.
              </div>
            </In>
          </div>
          <div style={{
            position: 'absolute', left: 80, bottom: 60, right: 80,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
          }}>
            <In at={1.8} dur={0.5}>
              <div style={{
                fontFamily: FONT, fontSize: 12, color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
              }}>
                KI-READY Summit · Nürtingen · 10. Juni 2026 · ©ANDRITZ
              </div>
            </In>
            <In at={1.8} dur={0.5}>
              <img src="assets/andritz-logo.png" alt="ANDRITZ"
                   style={{ height: 22, filter: 'brightness(0) invert(1)' }} />
            </In>
          </div>
        </div>
        <div style={{
          width: '46%', background: 'transparent', padding: '80px 80px 80px 128px', position: 'relative',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <In at={1.0} dur={0.5}>
            <div style={{ width: 48, height: 4, background: ANDRITZ.blue, marginBottom: 16 }} />
            <div style={{
              fontFamily: FONT, fontSize: 13, letterSpacing: '0.28em', fontWeight: 700,
              color: ANDRITZ.navy, textTransform: 'uppercase', marginBottom: 32,
            }}>
              Vortragende
            </div>
          </In>
          {[
            { n: 'Dipl.-Inf. Minh Cuong Tran', a: 'ANDRITZ Schuler',       accent: ANDRITZ.navy,   delay: 1.2 },
            { n: 'Jakob Ayo, B.Sc.',           a: 'Hochschule Esslingen',  accent: ANDRITZ.blue,   delay: 1.5 },
            { n: 'Viet Pham, B.Sc.',           a: 'Universität Tübingen',  accent: ANDRITZ.blueDk, delay: 1.8 },
          ].map((p, i) => (
            <In key={i} at={p.delay} dur={0.5} y={14}>
              <div style={{
                padding: '20px 24px', marginBottom: 14,
                background: ANDRITZ.paper,
                border: `1px solid ${ANDRITZ.rule}`,
                borderLeft: `4px solid ${p.accent}`,
              }}>
                <div style={{ fontSize: 26, fontWeight: 600, color: ANDRITZ.navy, letterSpacing: '0.01em' }}>{p.n}</div>
                <div style={{
                  fontSize: 14, color: p.accent, marginTop: 6,
                  fontFamily: MONO, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
                }}>{p.a}</div>
              </div>
            </In>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// Slide 2 — Agenda
function Scene02({ time, duration, index, total }) {
  const items = [
    'Was ist Vibe Coding?',
    'Wie funktioniert das?',
    '10 Praxisbeispiele im Überblick',
    'Highlight: Legacy-Modernisierung',
    'Risserkennung mit KI',
    'Fully Agentic Development',
    'Vibe Coding Patterns',
    'Persönliche Projekte',
    'Fazit',
  ];
  const owners = ['', '', '', '', 'Viet Pham', 'Jakob Ayo', 'Minh Cuong Tran', '', ''];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="Agenda" label="00:15">
      <SlideTitle eyebrow="Agenda" title="9 Stationen, 20 Minuten."
                  sub="Vom Konzept über drei tiefe Use Cases bis zum Ausblick." />
      <div style={{
        position: 'absolute', left: 80, top: 360, right: 80,
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24,
      }}>
        {items.map((it, i) => (
          <In key={i} at={0.4 + i * 0.08} dur={0.4} y={14}>
            <div style={{
              padding: '22px 24px',
              background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
              borderLeft: `3px solid ${i < 4 ? ANDRITZ.blue : i < 7 ? ANDRITZ.orange : ANDRITZ.navy}`,
              display: 'flex', alignItems: 'center', gap: 18,
              minHeight: 92,
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 28, fontWeight: 700,
                color: i < 4 ? ANDRITZ.blue : i < 7 ? ANDRITZ.orange : ANDRITZ.navy,
                fontVariantNumeric: 'tabular-nums', minWidth: 48,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div style={{ fontSize: 19, fontWeight: 600, color: ANDRITZ.ink, lineHeight: 1.25 }}>{it}</div>
                {owners[i] && (
                  <div style={{
                    fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
                    letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 6,
                  }}>
                    {owners[i]}
                  </div>
                )}
              </div>
            </div>
          </In>
        ))}
      </div>
    </Slide>
  );
}

// Slide 3 — Was ist Vibe Coding (quote + evolution stairs)
function Scene03({ time, duration, index, total }) {
  const stages = [
    { l: 'Code\nCompletion', s: 'Copilot', y: 360 },
    { l: 'Chat-basiert',     s: 'ChatGPT', y: 290 },
    { l: 'Agentic Coding',   s: 'Claude Code, Cursor', y: 220 },
    { l: 'Vibe Coding',      s: 'Intent → Result',     y: 150 },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="01 · Konzept" label="00:30">
      <SlideTitle eyebrow="Definition" title="Was ist Vibe Coding?"
                  sub="Softwareentwicklung durch natürliche Sprache — Mensch gibt die Richtung vor, KI-Agenten setzen um." />
      {/* Quote */}
      <In at={0.7} dur={0.6} style={{ position: 'absolute', left: 80, top: 380, width: 760 }}>
        <div style={{
          padding: '34px 36px',
          background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
          borderTop: `3px solid ${ANDRITZ.orange}`,
        }}>
          <div style={{ fontSize: 86, lineHeight: 0.6, color: ANDRITZ.orange, fontWeight: 700 }}>“</div>
          <div style={{ fontSize: 22, lineHeight: 1.45, color: ANDRITZ.ink, fontStyle: 'italic', marginTop: -10 }}>
            There's a new kind of coding I call <b>vibe coding</b>, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.
          </div>
          <div style={{
            marginTop: 22, fontFamily: MONO, fontSize: 13, color: ANDRITZ.mute,
            letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            — Andrej Karpathy · Feb 2025
          </div>
        </div>
      </In>
      {/* Evolution stair */}
      <div style={{ position: 'absolute', left: 920, top: 380, width: 920, height: 480 }}>
        <In at={0.5} dur={0.4}>
          <div style={{
            fontFamily: MONO, fontSize: 12, letterSpacing: '0.22em',
            color: ANDRITZ.mute, textTransform: 'uppercase',
          }}>
            Evolution der KI-Entwicklung
          </div>
        </In>
        {stages.map((st, i) => {
          const at = 1.0 + i * 0.45;
          const isLast = i === stages.length - 1;
          return (
            <In key={i} at={at} dur={0.5} y={20} style={{
              position: 'absolute', left: i * 200, top: st.y, width: 220,
            }}>
              <div style={{
                padding: '20px 18px',
                background: isLast ? ANDRITZ.navy : ANDRITZ.paper,
                color: isLast ? '#fff' : ANDRITZ.ink,
                border: `1px solid ${isLast ? ANDRITZ.navy : ANDRITZ.rule}`,
                borderLeft: `3px solid ${isLast ? ANDRITZ.orange : ANDRITZ.blue}`,
              }}>
                <div style={{
                  fontFamily: MONO, fontSize: 11,
                  color: isLast ? ANDRITZ.orange : ANDRITZ.mute,
                  letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6,
                }}>
                  Stufe {i + 1}
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.15, whiteSpace: 'pre-line' }}>
                  {st.l}
                </div>
                <div style={{
                  fontSize: 13, marginTop: 6,
                  color: isLast ? 'rgba(255,255,255,0.7)' : ANDRITZ.mute,
                }}>
                  {st.s}
                </div>
              </div>
            </In>
          );
        })}
      </div>
    </Slide>
  );
}

// Slide 4 — Wie funktioniert das? (human-in-the-loop)
function Scene04({ time, duration, index, total }) {
  const steps = [
    { n: '01', t: 'Entwickler beschreibt',  s: 'Aufgabe in natürlicher Sprache' },
    { n: '02', t: 'Agent analysiert + plant', s: 'Codebase, Architektur, Schritte' },
    { n: '03', t: 'Agent codet + testet',   s: 'Schreibt, führt aus, iteriert' },
    { n: '04', t: 'Mensch verifiziert',     s: 'Checkpoints, Review, Merge' },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="02 · Funktionsweise" label="01:30">
      <SlideTitle eyebrow="Workflow" title="Human-in-the-Loop"
                  sub={'Vier wiederkehrende Schritte. KI als „Junior-Entwickler mit Superkräften" — schnell, aber sie braucht Führung.'} />
      <div style={{ position: 'absolute', left: 80, top: 410, right: 80, display: 'flex', alignItems: 'stretch', gap: 0 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <In at={0.5 + i * 0.4} dur={0.5} y={16} style={{ flex: 1 }}>
              <div style={{
                background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
                padding: '28px 26px', position: 'relative', minHeight: 220,
              }}>
                <div style={{
                  fontFamily: MONO, fontSize: 13, color: ANDRITZ.orange,
                  letterSpacing: '0.22em', marginBottom: 14,
                }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2, color: ANDRITZ.ink }}>
                  {s.t}
                </div>
                <div style={{ marginTop: 12, fontSize: 16, color: ANDRITZ.mute, lineHeight: 1.4 }}>
                  {s.s}
                </div>
              </div>
            </In>
            {i < steps.length - 1 && (
              <In at={0.85 + i * 0.4} dur={0.3} y={0} style={{ display: 'flex', alignItems: 'center', padding: '0 8px' }}>
                <svg width="32" height="20" viewBox="0 0 32 20">
                  <path d="M0 10 L26 10 M20 4 L26 10 L20 16" stroke={ANDRITZ.blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </In>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Feedback loop */}
      <In at={2.6} dur={0.6} style={{ position: 'absolute', left: 80, top: 690, right: 80 }}>
        <div style={{
          padding: '20px 28px', background: ANDRITZ.navy, color: '#fff',
          display: 'flex', alignItems: 'center', gap: 28, justifyContent: 'space-between',
        }}>
          <div style={{
            fontFamily: MONO, fontSize: 12, color: ANDRITZ.orange,
            letterSpacing: '0.24em', textTransform: 'uppercase',
          }}>
            ↻ Iteration
          </div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>
            Werkzeuge: <b>Claude Code CLI</b> · Claude API · MCP-Server · Skills · Hooks · Subagents
          </div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
            Plan → Act → Verify → Repeat
          </div>
        </div>
      </In>
    </Slide>
  );
}

// Slide 5 — 10 Praxisbeispiele (table fills in)
function Scene05({ time, duration, index, total }) {
  const rows = [
    { n: '01', cat: 'WPF → React Migration',      tech: 'C#, XAML → React/TS',     mult: 12 },
    { n: '02', cat: 'Greybox Penetration Test',   tech: 'Security Assessment',     mult: 3.5 },
    { n: '03', cat: 'KI-gestützte Code Review',   tech: '.NET, Python, WPF',       mult: 2.5 },
    { n: '04', cat: 'Fortran AIX→Linux Migration',tech: 'Fortran, Go, Docker',     mult: 18 },
    { n: '05', cat: 'PHP 5 → PHP 8 + Go Rewrite', tech: 'PHP, Go',                 mult: 3.5 },
    { n: '06', cat: 'VB 64-bit Portierung',       tech: 'VBA, Access',             mult: 20 },
    { n: '07', cat: 'REXX → Go Modernisierung',   tech: 'REXX, Go',                mult: null, custom: 'signifikant' },
    { n: '08', cat: 'SAP ABAP Modernisierung',    tech: 'ABAP, BRF+',              mult: null, custom: 'PoC' },
    { n: '09', cat: 'Live Vibe Coding Workshop',  tech: 'JavaScript, HTML5',       mult: 5 },
    { n: '10', cat: 'IT-Inventur Automatisierung',tech: 'Data Pipeline',           mult: null, custom: 'automatisiert' },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="03 · Praxis" label="02:30">
      <SlideTitle eyebrow="Bandbreite" title="10 Praxisbeispiele im Überblick"
                  sub="Legacy-Migration · Security · Greenfield — 3× bis 20× schneller. Alle Projekte abstrahiert." />
      <div style={{ position: 'absolute', left: 80, top: 380, right: 80 }}>
        {/* Header */}
        <In at={0.2} dur={0.4} style={{
          display: 'grid', gridTemplateColumns: '60px 1fr 1fr 220px',
          gap: 20, padding: '10px 18px', borderBottom: `2px solid ${ANDRITZ.navy}`,
          fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          <span>#</span><span>Kategorie</span><span>Technologien</span><span style={{ textAlign: 'right' }}>Beschleunigung</span>
        </In>
        {rows.map((r, i) => {
          const at = 0.5 + i * 0.18;
          return (
            <In key={i} at={at} dur={0.35} y={8} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr 1fr 220px',
              gap: 20, padding: '12px 18px', alignItems: 'center',
              borderBottom: `1px solid ${ANDRITZ.rule}`,
              background: i % 2 === 0 ? ANDRITZ.paper : 'transparent',
            }}>
              <span style={{ fontFamily: MONO, color: ANDRITZ.mute, fontSize: 14 }}>{r.n}</span>
              <span style={{ fontSize: 17, color: ANDRITZ.ink, fontWeight: 600 }}>{r.cat}</span>
              <span style={{ fontFamily: MONO, fontSize: 14, color: ANDRITZ.mute }}>{r.tech}</span>
              <span style={{ textAlign: 'right' }}>
                {r.mult ? (
                  <span style={{
                    display: 'inline-block', padding: '6px 14px',
                    background: r.mult >= 10 ? ANDRITZ.orange : ANDRITZ.blue,
                    color: '#fff', fontFamily: MONO, fontSize: 16, fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}>
                    <CountUp to={r.mult} start={at - 0.3} dur={0.7}
                             decimals={Number.isInteger(r.mult) ? 0 : 1} suffix="×" />
                  </span>
                ) : (
                  <span style={{
                    display: 'inline-block', padding: '6px 14px',
                    background: 'transparent', border: `1px solid ${ANDRITZ.rule}`,
                    color: ANDRITZ.mute, fontFamily: MONO, fontSize: 13,
                  }}>
                    {r.custom}
                  </span>
                )}
              </span>
            </In>
          );
        })}
      </div>
    </Slide>
  );
}

// Slide 6 — Legacy-Highlight (bar chart)
function Scene06({ time, duration, index, total }) {
  // bars: traditional days vs KI days (logarithmic-ish scale via px)
  // Fortran: 90→10, WPF: 90→15, REXX: 60→8
  const bars = [
    { name: 'Fortran (500k LOC)',  sub: 'AIX → Linux · 15.000 Tests · Go Web-UI · Docker',
      trad: 90, ki: 10, mult: '18×', y: 0 },
    { name: 'WPF → React',         sub: '77 Dateien · 15 Telerik-Controls → MUI',
      trad: 90, ki: 15, mult: '12×', y: 1 },
    { name: 'REXX → Go',           sub: 'Gehaltsübertragung · 18.207 LOC Go · Prometheus · 46+ Error Codes',
      trad: 60, ki: 8,  mult: '7×', y: 2 },
  ];
  const maxDays = 100;
  const barMaxW = 900;
  const rowH = 140;
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="04 · Highlight" label="04:00">
      <SlideTitle eyebrow="Legacy-Modernisierung"
                  title="Traditionell vs. Vibe Coding."
                  sub={'KI ist besonders stark bei „verstandener" Transformation — klare Quelle, klares Ziel.'} />
      <div style={{ position: 'absolute', left: 80, top: 410, right: 80 }}>
        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '420px 1fr 120px',
          fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
          letterSpacing: '0.18em', textTransform: 'uppercase', paddingBottom: 12,
          borderBottom: `1px solid ${ANDRITZ.rule}`,
        }}>
          <span>Projekt-Kategorie</span>
          <span>Dauer (Tage)</span>
          <span style={{ textAlign: 'right' }}>Faktor</span>
        </div>
        {bars.map((b, i) => {
          const at = 0.5 + i * 0.6;
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '420px 1fr 120px', alignItems: 'center',
              padding: '20px 0', borderBottom: `1px solid ${ANDRITZ.rule}`, minHeight: rowH,
            }}>
              <div>
                <In at={at} dur={0.4} y={8}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: ANDRITZ.ink, lineHeight: 1.2 }}>{b.name}</div>
                  <div style={{ fontSize: 13, color: ANDRITZ.mute, marginTop: 6, lineHeight: 1.4 }}>{b.sub}</div>
                </In>
              </div>
              <div style={{ position: 'relative', height: 86, paddingLeft: 24 }}>
                {/* Traditional bar */}
                <div style={{ position: 'relative', height: 30, marginBottom: 12 }}>
                  <GrowBar x={0} y={0} w={(b.trad / maxDays) * barMaxW} h={30}
                           color={ANDRITZ.rule} start={at + 0.05} dur={0.6} />
                  <div style={{
                    position: 'absolute', left: 10, top: 6,
                    fontFamily: MONO, fontSize: 13, color: ANDRITZ.ink, fontWeight: 700,
                  }}>
                    <In at={at + 0.5} dur={0.3}>Traditionell · ~{b.trad} Tage</In>
                  </div>
                </div>
                {/* KI bar */}
                <div style={{ position: 'relative', height: 30 }}>
                  <GrowBar x={0} y={0} w={(b.ki / maxDays) * barMaxW} h={30}
                           color={ANDRITZ.orange} start={at + 0.25} dur={0.6} />
                  <div style={{
                    position: 'absolute', left: (b.ki / maxDays) * barMaxW + 12, top: 6,
                    fontFamily: MONO, fontSize: 13, color: ANDRITZ.orange, fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}>
                    <In at={at + 0.75} dur={0.3}>Mit KI · {b.ki} Tage</In>
                  </div>
                </div>
              </div>
              <In at={at + 0.9} dur={0.4} style={{ textAlign: 'right' }}>
                <div style={{
                  display: 'inline-block', padding: '8px 16px',
                  background: ANDRITZ.navy, color: '#fff',
                  fontSize: 24, fontWeight: 800, fontFamily: MONO,
                }}>
                  {b.mult}
                </div>
              </In>
            </div>
          );
        })}
      </div>
    </Slide>
  );
}

Object.assign(window, { Scene01, Scene02, Scene03, Scene04, Scene05, Scene06 });
