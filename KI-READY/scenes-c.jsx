// scenes-c.jsx — Scenes 13–17 (Patterns + Personal projects + Fazit + Thanks).

// Slide 13 — Vibe Coding Patterns: Übersicht (2x2 grid)
function Scene13({ time, duration, index, total }) {
  const patterns = [
    { n: '01', t: 'Thinking Delegation',
      s: 'Auslagerung von Denkarbeit (Planung, Analyse) an einen spezialisierten Agenten. Hauptagent bleibt fokussiert.',
      icon: '🧠', color: ANDRITZ.navy },
    { n: '02', t: 'Review & TDD',
      s: 'KI schreibt Tests zuerst, dann Implementation. Mensch reviewt strategisch an Checkpoints.',
      icon: '✓', color: ANDRITZ.blue },
    { n: '03', t: 'Junior Developer',
      s: 'KI wird wie ein Junior behandelt — klare Aufgaben, eng definierter Scope, regelmäßige Reviews.',
      icon: '↗', color: ANDRITZ.orange },
    { n: '04', t: 'Fix Point Algorithm',
      s: 'Iterative Verbesserung bis zur Stabilität — KI verfeinert, bis kein Fortschritt mehr erzielt wird.',
      icon: '↻', color: ANDRITZ.orangeDk },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="07 · Patterns · Minh Cuong Tran" label="13:00">
      <SlideTitle eyebrow="Übersicht"
                  title="Vier Patterns für Vibe Coding."
                  sub="Wiederverwendbares Erfahrungswissen — lehrbar und skalierbar." />
      <div style={{ position: 'absolute', left: 80, top: 400, right: 80,
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {patterns.map((p, i) => (
          <In key={i} at={0.4 + i * 0.25} dur={0.5} y={18}>
            <div style={{
              background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
              padding: '32px 32px', minHeight: 220, position: 'relative',
              display: 'flex', alignItems: 'flex-start', gap: 24,
            }}>
              <div style={{
                width: 80, height: 80, flexShrink: 0,
                background: p.color, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 36, fontWeight: 700,
              }}>
                {p.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: MONO, fontSize: 12, color: p.color,
                  letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8,
                }}>
                  Pattern {p.n}
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, color: ANDRITZ.ink, lineHeight: 1.15 }}>
                  {p.t}
                </div>
                <div style={{ fontSize: 15, color: ANDRITZ.mute, marginTop: 12, lineHeight: 1.5 }}>
                  {p.s}
                </div>
              </div>
            </div>
          </In>
        ))}
      </div>
    </Slide>
  );
}

// Slide 14 — Patterns Deep-Dive (examples + effects)
function Scene14({ time, duration, index, total }) {
  const rows = [
    { p: 'Thinking Delegation', ex: 'Komplexe Architekturentscheidung an Plan-Agenten delegiert',
      eff: 'Hauptkontext bleibt schlank, bessere Entscheidungen' },
    { p: 'Review & TDD',        ex: 'Migrations-Tests vor Code generiert, dann Implementation',
      eff: 'Regression vermieden, hohe Vertrauensbasis' },
    { p: 'Junior Developer',    ex: 'Routineaufgaben (z. B. Schema-Updates) klar abgegrenzt',
      eff: 'Hohe Geschwindigkeit ohne Kontrollverlust' },
    { p: 'Fix Point',           ex: 'Iteratives Refactoring bis Linter/Tests stabil bleiben',
      eff: 'Konvergenz statt unkontrollierter Drift' },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="07 · Patterns · Minh Cuong Tran" label="14:00">
      <SlideTitle eyebrow="Vertiefung"
                  title="Ein Beispiel je Pattern."
                  sub="Pro Pattern: eine konkrete Anwendung und die beobachtete Wirkung." />
      <div style={{ position: 'absolute', left: 80, top: 400, right: 80 }}>
        {/* Header */}
        <In at={0.2} dur={0.4} style={{
          display: 'grid', gridTemplateColumns: '260px 1fr 1fr',
          gap: 24, padding: '12px 18px', borderBottom: `2px solid ${ANDRITZ.navy}`,
          fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          <span>Pattern</span><span>Beispiel</span><span>Wirkung</span>
        </In>
        {rows.map((r, i) => (
          <In key={i} at={0.5 + i * 0.3} dur={0.5} y={14} style={{
            display: 'grid', gridTemplateColumns: '260px 1fr 1fr',
            gap: 24, padding: '24px 18px', alignItems: 'flex-start',
            borderBottom: `1px solid ${ANDRITZ.rule}`,
            background: i % 2 === 0 ? ANDRITZ.paper : 'transparent',
          }}>
            <div style={{
              fontSize: 19, fontWeight: 700, color: ANDRITZ.ink,
              borderLeft: `3px solid ${i % 2 === 0 ? ANDRITZ.orange : ANDRITZ.blue}`,
              paddingLeft: 14,
            }}>
              {r.p}
            </div>
            <div style={{ fontSize: 15, color: ANDRITZ.ink, lineHeight: 1.45 }}>
              {r.ex}
            </div>
            <div style={{
              fontSize: 15, color: ANDRITZ.mute, lineHeight: 1.45, fontStyle: 'italic',
            }}>
              → {r.eff}
            </div>
          </In>
        ))}
      </div>
      <In at={2.4} dur={0.6} style={{ position: 'absolute', left: 80, bottom: 90, right: 80 }}>
        <div style={{
          padding: '18px 24px', background: ANDRITZ.navy, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{
            fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>
            Kernbotschaft
          </div>
          <div style={{ fontSize: 17, fontWeight: 500 }}>
            Patterns machen Vibe Coding <b>lehrbar</b> und <b>skalierbar</b>.
          </div>
        </div>
      </In>
    </Slide>
  );
}

// Slide 15 — Persönliche Projekte
function Scene15({ time, duration, index, total }) {
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="08 · Persönliche Projekte" label="15:00">
      <SlideTitle eyebrow="Privat-Projekte · Minh Cuong Tran"
                  title="Vibe Coding außerhalb des Büros."
                  sub="Zwei reale, im Einsatz befindliche Open-Source-Projekte aus der Schach-Community." />
      <div style={{ position: 'absolute', left: 80, top: 400, right: 80,
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        {/* TempoMate */}
        <In at={0.4} dur={0.6} y={20} style={{ height: '100%' }}>
          <div style={{
            background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
            padding: 0, overflow: 'hidden',
            height: '100%', display: 'flex', flexDirection: 'column',
          }}>
            {/* Chess clock visual */}
            <div style={{
              height: 240, background: ANDRITZ.navyDk, position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32,
            }}>
              {/* digital faces */}
              {[
                { t: '12:47', active: true },
                { t: '08:23', active: false },
              ].map((c, i) => (
                <div key={i} style={{
                  width: 220, height: 130,
                  background: c.active ? '#0E2546' : '#091B33',
                  border: c.active ? `2px solid ${ANDRITZ.orange}` : `2px solid #1A3A5E`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  fontFamily: MONO,
                }}>
                  <div style={{
                    fontSize: 11, color: c.active ? ANDRITZ.orange : '#5A7299',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                  }}>
                    {i === 0 ? 'Weiß' : 'Schwarz'}
                  </div>
                  <div style={{
                    fontSize: 56, fontWeight: 700,
                    color: c.active ? '#FFFFFF' : '#5A7299', fontVariantNumeric: 'tabular-nums',
                    marginTop: 4,
                  }}>
                    {c.t}
                  </div>
                  <div style={{
                    fontSize: 11, color: '#5A7299', marginTop: 2,
                  }}>
                    Zug {i === 0 ? '14' : '13'}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
                letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6,
              }}>
                TempoMate
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: ANDRITZ.ink, marginBottom: 8 }}>
                Professionelle Schachuhr
              </div>
              <div style={{ fontSize: 15, color: ANDRITZ.mute, lineHeight: 1.45, marginBottom: 16, flex: 1 }}>
                Web-basiert, kein Download. Im Einsatz beim <b>150-jährigen Jubiläum
                der Schachfreunde Göppingen e.V.</b>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <QRCode value="https://cuong.net/tempomate" size={96} color={ANDRITZ.navy} />
                <div>
                  <div style={{
                    fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                  }}>URL</div>
                  <div style={{ fontFamily: MONO, fontSize: 15, color: ANDRITZ.navy, fontWeight: 700 }}>
                    cuong.net/tempomate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </In>
        {/* OpenPairing */}
        <In at={0.7} dur={0.6} y={20} style={{ height: '100%' }}>
          <div style={{
            background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
            overflow: 'hidden',
            height: '100%', display: 'flex', flexDirection: 'column',
          }}>
            {/* Dashboard visual */}
            <div style={{
              height: 240, background: '#0E2546', padding: '20px 24px', position: 'relative',
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 10, color: '#5A7299',
                letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14,
              }}>
                Turnier-Dashboard
              </div>
              {[
                { t: 'Stadtmeisterschaft 2026', r: 'Runde 5 / 7', s: 'Live' },
                { t: 'Vereinsturnier Open',     r: 'Runde 3 / 9', s: 'Live' },
                { t: 'U18 Landesmeisterschaft', r: 'Geplant',     s: '15.06' },
                { t: 'Schnellschach-Cup',       r: 'Geplant',     s: '22.06' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 12px',
                  background: i < 2 ? '#15355C' : 'transparent',
                  borderLeft: i < 2 ? `2px solid ${ANDRITZ.orange}` : `2px solid transparent`,
                  marginBottom: 4,
                }}>
                  <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{row.t}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ fontFamily: MONO, fontSize: 11, color: '#5A7299' }}>{row.r}</div>
                    <div style={{
                      fontFamily: MONO, fontSize: 10, padding: '2px 8px',
                      background: i < 2 ? ANDRITZ.orange : '#1A3A5E',
                      color: '#fff', letterSpacing: '0.1em',
                    }}>
                      {row.s}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: ANDRITZ.blue,
                letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6,
              }}>
                OpenPairing
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: ANDRITZ.ink, marginBottom: 8 }}>
                Schachturnier-Verwaltung
              </div>
              <div style={{ fontSize: 15, color: ANDRITZ.mute, lineHeight: 1.45, marginBottom: 16, flex: 1 }}>
                Open-Source Turnier-Software für Schachvereine — vollständig
                durch Vibe Coding entwickelt.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <QRCode value="https://openpairing.org" size={96} color={ANDRITZ.navy} />
                <div>
                  <div style={{
                    fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                  }}>URL</div>
                  <div style={{ fontFamily: MONO, fontSize: 15, color: ANDRITZ.navy, fontWeight: 700 }}>
                    openpairing.org
                  </div>
                </div>
              </div>
            </div>
          </div>
        </In>
      </div>
    </Slide>
  );
}

// Slide 16 — Fazit
function Scene16({ time, duration, index, total }) {
  const bullets = [
    { n: '01', t: 'Vibe Coding ist eine Arbeitsweise — kein Werkzeug.',
      s: 'Wiederverwendbare Patterns machen sie lehrbar und skalierbar.' },
    { n: '02', t: 'Vollagentische Workflows sind heute möglich.',
      s: 'Voraussetzung: Tool-Kompetenz, Engineering-Reife, klare Grenzen.' },
    { n: '03', t: 'Domänenübergreifend einsetzbar.',
      s: 'Von Legacy-Modernisierung bis KI-Bildverarbeitung.' },
    { n: '04', t: 'Mensch + KI, nicht „Mensch oder KI".',
      s: 'Erfahrene Entwickler werden wichtiger — nicht überflüssig.' },
    { n: '05', t: '3× bis 20× Beschleunigung nachweisbar.',
      s: 'Wissenschaftlich untermauert · Bachelor-Arbeit, HS Esslingen.' },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="09 · Fazit" label="16:15">
      <SlideTitle eyebrow="Fazit" title="Fünf Erkenntnisse."
                  sub="Was wir aus 10+ Enterprise-Projekten und drei tiefen Use Cases gelernt haben." />
      <div style={{ position: 'absolute', left: 80, top: 400, right: 80,
                    display: 'flex', flexDirection: 'column', gap: 14 }}>
        {bullets.map((b, i) => (
          <In key={i} at={0.4 + i * 0.3} dur={0.5} y={16}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 28,
              padding: '20px 26px', background: ANDRITZ.paper,
              border: `1px solid ${ANDRITZ.rule}`,
              borderLeft: `4px solid ${i === 4 ? ANDRITZ.orange : ANDRITZ.navy}`,
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 22, fontWeight: 800,
                color: i === 4 ? ANDRITZ.orange : ANDRITZ.navy,
                minWidth: 56,
              }}>
                {b.n}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: ANDRITZ.ink, lineHeight: 1.25 }}>
                  {b.t}
                </div>
                <div style={{ fontSize: 15, color: ANDRITZ.mute, marginTop: 6, lineHeight: 1.4 }}>
                  {b.s}
                </div>
              </div>
            </div>
          </In>
        ))}
      </div>
    </Slide>
  );
}

// Slide 17 — Vielen Dank & Kontakt
function Scene17({ time, duration, index, total }) {
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="Ausklang" label="18:00" bg={ANDRITZ.blue} chrome={false}>
      {/* Brand "A" motif — single anchored, bleeding off the right edge per design system */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{ position: 'absolute', right: -240, top: -260 }}>
          <AGlyph width={1700} fill="#FFFFFF" opacity={0.16} />
        </div>
      </div>
      {/* Wordmark top */}
      <div style={{ position: 'absolute', top: 60, left: 80 }}>
        <In at={0.0} dur={0.5}>
          <Wordmark color="#FFFFFF" size={22} />
        </In>
      </div>
      {/* Main message */}
      <div style={{ position: 'absolute', left: 80, top: 240, right: 80 }}>
        <In at={0.3} dur={0.6} y={20}>
          <div style={{ width: 64, height: 6, background: '#FFFFFF', marginBottom: 22 }} />
          <div style={{
            fontFamily: FONT, fontSize: 14, fontWeight: 700, color: '#FFFFFF',
            letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 24,
            opacity: 0.92,
          }}>
            Fragen?
          </div>
        </In>
        <In at={0.6} dur={0.8} y={24}>
          <div style={{
            fontFamily: FONT, fontSize: 128, fontWeight: 700, color: '#fff', lineHeight: 0.98,
            letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            Vielen Dank.
          </div>
        </In>
        <In at={1.2} dur={0.6}>
          <div style={{
            marginTop: 32, fontSize: 26, color: 'rgba(255,255,255,0.92)',
            fontWeight: 400, lineHeight: 1.4, maxWidth: 1100, letterSpacing: '0.01em',
          }}>
            Wir freuen uns auf den Austausch — Vibe Coding lebt vom Dialog.
          </div>
        </In>
      </div>
      {/* Contact strip */}
      <div style={{ position: 'absolute', left: 80, bottom: 80, right: 80 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
          paddingTop: 36, borderTop: `1px solid rgba(255,255,255,0.18)`,
        }}>
          {[
            { name: 'Minh Cuong Tran',  inst: 'ANDRITZ Schuler',         topic: 'Vibe Coding Patterns', delay: 1.8 },
            { name: 'Jakob Ayo',        inst: 'Hochschule Esslingen',    topic: 'Fully Agentic Dev',    delay: 2.0 },
            { name: 'Viet Pham',        inst: 'Universität Tübingen',    topic: 'Risserkennung mit KI', delay: 2.2 },
          ].map((p, i) => (
            <In key={i} at={p.delay} dur={0.5} y={14}>
              <div>
                <div style={{ width: 32, height: 3, background: '#FFFFFF', marginBottom: 12, opacity: 0.7 }} />
                <div style={{
                  fontFamily: FONT, fontSize: 11, color: '#FFFFFF', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.85,
                }}>
                  {p.topic}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '0.01em' }}>{p.name}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{p.inst}</div>
              </div>
            </In>
          ))}
        </div>
        <In at={2.6} dur={0.5} style={{
          marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
        }}>
          <div style={{
            fontFamily: FONT, fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            KI-READY Summit · Nürtingen · 10.06.2026 · ©ANDRITZ
          </div>
          <img src="assets/andritz-logo.png" alt="ANDRITZ"
               style={{ height: 22, filter: 'brightness(0) invert(1)' }} />
        </In>
      </div>
    </Slide>
  );
}

// Slide 16b — TempoMate Live Demo (faithful phone mockup)
function SceneTempoMate({ time, duration, index, total }) {
  const TM_RED   = '#c41e3a';
  const LCD_BG   = '#ccd4a2';          // sage-green LCD panel
  const LCD_ON   = '#2b3c28';          // dark forest-green active segments
  const LCD_DIM  = 'rgba(43,60,40,0.13)'; // inactive segments overlay
  const HDR_BG   = '#f8f8f8';
  const FTR_BG   = '#3d3830';
  const DSEG     = '"DSEG7 Classic", monospace';
  const TM_SPEED = 5;
  const SWITCH_AT = 2.5;

  const fmt = (secs) => {
    const s = Math.max(0, Math.floor(secs));
    const m = Math.floor(s / 60);
    const ss = s % 60;
    return `${m}:${String(ss).padStart(2,'0')}`;
  };

  const features = [
    { t: 'Keine Installation',    s: 'Direkt im Browser — kein Download, kein App Store.' },
    { t: 'Alle Zeitformate',      s: 'Klassisch, Fischer, Bronstein — vollständig konfigurierbar.' },
    { t: 'Turnier-erprobt',       s: '150-jähriges Jubiläum der Schachfreunde Göppingen.' },
    { t: 'Vibe Coding in Praxis', s: 'Von der Idee bis zum produktiven Einsatz — mit Claude entwickelt.' },
  ];

  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="08 · Persönliche Projekte" label="16:30">
      <SlideTitle eyebrow="Demo · TempoMate"
                  title="Die Schachuhr im Einsatz."
                  sub="Web-basiert, kein Download — direkt im Browser öffnen und spielen." />

      <div style={{
        position: 'absolute', left: 80, top: 390, right: 80, bottom: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 72,
      }}>

        {/* LEFT: Features */}
        <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {features.map((f, i) => (
            <In key={i} at={0.6 + i * 0.25} dur={0.45} y={14}>
              <div style={{
                padding: '18px 22px', background: ANDRITZ.paper,
                border: `1px solid ${ANDRITZ.rule}`, borderLeft: `3px solid ${TM_RED}`,
              }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: ANDRITZ.ink, marginBottom: 4 }}>{f.t}</div>
                <div style={{ fontSize: 13, color: ANDRITZ.mute, lineHeight: 1.45 }}>{f.s}</div>
              </div>
            </In>
          ))}
        </div>

        {/* CENTER: Phone mockup */}
        <In at={0.0} dur={0.8} y={50}>
          <div style={{ position: 'relative' }}>

            {/* Phone shell */}
            <div style={{
              width: 300, height: 600,
              background: 'linear-gradient(150deg, #2c2c2e, #0f0f0f)',
              borderRadius: 50,
              border: '2px solid rgba(255,255,255,0.10)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)',
              overflow: 'hidden', position: 'relative',
            }}>
              {/* Dynamic island */}
              <div style={{
                position: 'absolute', top: 13, left: '50%', transform: 'translateX(-50%)',
                width: 108, height: 30, background: '#000', borderRadius: 20, zIndex: 10,
              }} />

              {/* Screen area */}
              <div style={{
                position: 'absolute', inset: 2, borderRadius: 48, overflow: 'hidden',
                background: LCD_BG,
              }}>

                {/* ── STATUS BAR ── */}
                <div style={{
                  height: 48, background: HDR_BG,
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  padding: '0 18px 7px', position: 'relative', zIndex: 5,
                }}>
                  <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: '#111' }}>9:41</span>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <svg width="13" height="10" viewBox="0 0 13 10">
                      <rect x="0"  y="5.5" width="2" height="4.5" rx="0.5" fill="#111" />
                      <rect x="3.5" y="3.5" width="2" height="6.5" rx="0.5" fill="#111" />
                      <rect x="7"  y="1.5" width="2" height="8.5" rx="0.5" fill="#111" />
                      <rect x="10.5" y="0" width="2" height="10" rx="0.5" fill="#111" />
                    </svg>
                    <svg width="19" height="9" viewBox="0 0 19 9">
                      <rect x="0" y="0.5" width="16" height="8" rx="1.5" fill="none" stroke="#111" strokeWidth="1.2" />
                      <rect x="16.5" y="2.5" width="2" height="4" rx="1" fill="rgba(0,0,0,0.3)" />
                      <rect x="1.2" y="1.7" width="12" height="5.6" rx="1" fill="#111" />
                    </svg>
                  </div>
                </div>

                {/* ── APP HEADER ── (matches screenshot exactly) */}
                <div style={{
                  height: 40, background: HDR_BG,
                  borderBottom: `2.5px solid ${TM_RED}`,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 8px',
                }}>
                  {/* Logo: chess-timer icon + TempoMate text */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: 2 }}>
                    <svg width="17" height="14" viewBox="0 0 17 14">
                      <rect x="0.75" y="0.75" width="6" height="12.5" rx="1.25" fill="none" stroke={LCD_ON} strokeWidth="1.4" />
                      <rect x="10.25" y="0.75" width="6" height="12.5" rx="1.25" fill="none" stroke={TM_RED} strokeWidth="1.4" />
                    </svg>
                    <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: LCD_ON, letterSpacing: '-0.01em' }}>Tempo</span>
                    <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: TM_RED, letterSpacing: '-0.01em' }}>Mate</span>
                  </div>
                  {/* Icon row with dividers — ⚙ | ⏸ | ↺ | ♪ | ◀ | ↻ */}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {['⚙','⏸','↺','♪','◀','↻'].map((icon, ii) => (
                      <React.Fragment key={ii}>
                        {ii > 0 && (
                          <div style={{ width: 1, height: 11, background: 'rgba(0,0,0,0.15)' }} />
                        )}
                        <div style={{
                          width: 26, height: 36,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, color: '#555',
                        }}>
                          {icon}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* ── LCD CLOCK AREA ── */}
                <div style={{
                  position: 'absolute', top: 88, left: 0, right: 0, bottom: 32,
                  background: LCD_BG,
                  border: `2.5px solid ${TM_RED}`,
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                }}>
                  <Sprite start={time + 0.3} end={time + duration} keepMounted={false}>
                    {({ localTime: lt }) => {
                      const isWhite   = lt < SWITCH_AT;
                      const whiteGame = isWhite ? lt * TM_SPEED : SWITCH_AT * TM_SPEED;
                      const blackGame = !isWhite ? (lt - SWITCH_AT) * TM_SPEED : 0;
                      const whiteSecs = 300 - whiteGame;
                      const blackSecs = 300 - blackGame;
                      const pulse     = (Math.sin(lt * Math.PI * 2.5) + 1) / 2;

                      // Renders one clock half (flipped = top panel for opponent)
                      const half = (secs, active, flipped) => (
                        <div style={{
                          flex: 1, position: 'relative',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transform: flipped ? 'rotate(180deg)' : 'none',
                        }}>
                          {/* Two indicator dots top row (as in screenshot) */}
                          <div style={{
                            position: 'absolute', top: 10, left: 0, right: 0,
                            display: 'flex', justifyContent: 'space-between', padding: '0 14px',
                          }}>
                            {/* Small always-dim left dot */}
                            <div style={{
                              width: 7, height: 7, borderRadius: '50%',
                              background: LCD_ON, opacity: 0.18,
                            }} />
                            {/* Right: open circle (inactive) or filled (active) */}
                            <div style={{
                              width: 11, height: 11, borderRadius: '50%',
                              background: active ? LCD_ON : 'transparent',
                              border: active ? 'none' : `1.5px solid rgba(43,60,40,0.35)`,
                              opacity: active ? (0.6 + pulse * 0.4) : 0.35,
                            }} />
                          </div>
                          {/* LCD digit display with inactive-segment underlay */}
                          <div style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
                            {/* "All-segments" ghost (inactive) */}
                            <div style={{
                              position: 'absolute', inset: 0,
                              fontFamily: DSEG, fontSize: 64,
                              color: LCD_DIM, lineHeight: 1,
                              userSelect: 'none', pointerEvents: 'none',
                            }}>
                              8:88
                            </div>
                            {/* Active time — always full LCD_ON color, active state shown via dot only */}
                            <div style={{
                              fontFamily: DSEG, fontSize: 64,
                              color: LCD_ON,
                              lineHeight: 1, position: 'relative',
                            }}>
                              {fmt(secs)}
                            </div>
                          </div>
                        </div>
                      );

                      return (
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                          {/* BLACK — top, flipped for that player */}
                          {half(blackSecs, !isWhite, true)}
                          {/* Horizontal divider */}
                          <div style={{ height: 1, flexShrink: 0, margin: '0 6px', background: 'rgba(43,60,40,0.18)' }} />
                          {/* WHITE — bottom */}
                          {half(whiteSecs, isWhite, false)}
                        </div>
                      );
                    }}
                  </Sprite>
                </div>

                {/* ── FOOTER ── */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: 32,
                  background: FTR_BG,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', padding: '0 14px',
                }}>
                  <span style={{ fontFamily: MONO, fontSize: 9, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.14em' }}>TIME</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontSize: 10, color: TM_RED }}>♪</span>
                    <span style={{ fontFamily: MONO, fontSize: 9, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.06em' }}>#01</span>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)' }}>▶</span>
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: 9, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.14em' }}>TIME</span>
                </div>

                {/* Tap ripple on white half when switching */}
                <Sprite start={time + 0.3 + SWITCH_AT} end={time + 0.3 + SWITCH_AT + 0.7} keepMounted={false}>
                  {({ localTime: lt }) => {
                    const p = lt / 0.7;
                    return (
                      <div style={{
                        position: 'absolute', bottom: '27%', left: '50%',
                        transform: 'translate(-50%, 50%)',
                        width: 100 * p, height: 100 * p, borderRadius: '50%',
                        background: `rgba(196,30,58,${0.3 * (1 - p)})`,
                        pointerEvents: 'none', zIndex: 20,
                      }} />
                    );
                  }}
                </Sprite>
              </div>

              {/* Physical side buttons */}
              <div style={{ position: 'absolute', right: -2, top: 148, width: 2.5, height: 30, background: '#3a3a3a', borderRadius: '0 1.5px 1.5px 0' }} />
              <div style={{ position: 'absolute', right: -2, top: 193, width: 2.5, height: 54, background: '#3a3a3a', borderRadius: '0 1.5px 1.5px 0' }} />
              <div style={{ position: 'absolute', left: -2, top: 178, width: 2.5, height: 50, background: '#3a3a3a', borderRadius: '1.5px 0 0 1.5px' }} />
              <div style={{ position: 'absolute', left: -2, top: 242, width: 2.5, height: 50, background: '#3a3a3a', borderRadius: '1.5px 0 0 1.5px' }} />
            </div>

            {/* "Tap to switch" label */}
            <Sprite start={time + 1.8} end={time + 3.2} keepMounted={false}>
              {({ localTime: lt }) => {
                const fadeIn  = Math.min(lt / 0.3, 1);
                const fadeOut = lt > 1.0 ? Math.max(0, 1 - (lt - 1.0) / 0.25) : 1;
                return (
                  <div style={{
                    position: 'absolute', bottom: -38, left: 0, right: 0,
                    textAlign: 'center', fontFamily: MONO, fontSize: 11, color: TM_RED,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    opacity: fadeIn * fadeOut, pointerEvents: 'none',
                  }}>
                    Tippen → Uhr wechseln
                  </div>
                );
              }}
            </Sprite>

          </div>
        </In>

        {/* RIGHT: QR + context */}
        <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <In at={0.5} dur={0.6} y={20}>
            <div style={{
              padding: '26px', background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
              display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start',
            }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: TM_RED, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Jetzt ausprobieren
              </div>
              <QRCode value="https://cuong.net/tempomate" size={130} color={ANDRITZ.navy} />
              <div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 3 }}>URL</div>
                <div style={{ fontFamily: MONO, fontSize: 15, color: ANDRITZ.navy, fontWeight: 700 }}>cuong.net/tempomate</div>
              </div>
            </div>
          </In>
          <In at={1.0} dur={0.6} y={14}>
            <div style={{ padding: '20px 24px', background: ANDRITZ.navy, color: '#fff' }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8 }}>Entstehung</div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>Von der Idee bis zum produktiven Einsatz — vollständig mit Vibe Coding entwickelt.</div>
            </div>
          </In>
          <In at={1.4} dur={0.5} y={12}>
            <div style={{ padding: '16px 22px', background: ANDRITZ.bg, border: `1px solid ${ANDRITZ.rule}`, borderLeft: `3px solid ${TM_RED}` }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: TM_RED, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6 }}>Tech Stack</div>
              <div style={{ fontSize: 14, color: ANDRITZ.ink, lineHeight: 1.5 }}>React · TypeScript · PWA<br />Kein Backend — läuft vollständig im Browser.</div>
            </div>
          </In>
        </div>

      </div>
    </Slide>
  );
}

Object.assign(window, { Scene13, Scene14, Scene15, Scene16, Scene17, SceneTempoMate });
