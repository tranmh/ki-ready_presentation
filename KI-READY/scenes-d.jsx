// scenes-d.jsx — Slide 19: OpenPairing multi-device showcase

// ─── OpenPairing brand tokens ─────────────────────────────────────────────
const OP = {
  green:    '#2a6e35',
  greenDk:  '#1d5027',
  bg:       '#0d1410',
  live:     '#c84800',
  boardL:   '#c9b99a',
  boardD:   '#7d6549',
  cream:    '#f0ece3',
  statsBar: '#141a15',
  muted:    '#7a8a78',
};

// 2×2 checkerboard logo mark + wordmark
function OPLogo({ size = 10 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: Math.round(size * 0.55) }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5,
        width: size * 2, height: size * 2, flexShrink: 0,
      }}>
        {[OP.green, 'rgba(255,255,255,0.88)', 'rgba(255,255,255,0.88)', OP.green].map((bg, i) => (
          <div key={i} style={{ background: bg }} />
        ))}
      </div>
      <span style={{
        fontFamily: FONT, fontSize: size, fontWeight: 700,
        color: '#fff', letterSpacing: '-0.01em',
      }}>OpenPairing</span>
    </div>
  );
}

// Decorative chess piece grid
function OPChessGrid({ cols, rows, cell }) {
  const PIECES = '♔♕♖♗♘♙♚♛♜♝♞♟';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, ${cell}px)` }}>
      {Array.from({ length: rows * cols }, (_, i) => {
        const r = Math.floor(i / cols), c = i % cols;
        const light = (r + c) % 2 === 0;
        return (
          <div key={i} style={{
            width: cell, height: cell,
            background: light ? OP.boardL : OP.boardD,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: cell * 0.56,
            color: light ? 'rgba(58,41,16,0.48)' : 'rgba(201,185,154,0.58)',
          }}>
            {PIECES[(r * cols + c) % PIECES.length]}
          </div>
        );
      })}
    </div>
  );
}

// ─── PHONE MOCKUP ─────────────────────────────────────────────────────────
function OPPhoneMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: 192, height: 400,
        background: 'linear-gradient(148deg, #2e2e30 0%, #101010 100%)',
        borderRadius: 44,
        border: '2px solid rgba(255,255,255,0.09)',
        boxShadow: '0 28px 70px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.06)',
        overflow: 'hidden', position: 'relative',
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 22, background: '#000', borderRadius: 14, zIndex: 10,
        }} />
        {/* Screen */}
        <div style={{
          position: 'absolute', inset: 2, borderRadius: 42, overflow: 'hidden',
          background: OP.bg, display: 'flex', flexDirection: 'column',
        }}>
          {/* Status bar */}
          <div style={{
            height: 40, display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', padding: '0 14px 6px', flexShrink: 0,
          }}>
            <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: '#fff' }}>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {[5, 7, 9, 11].map((h, i) => (
                <div key={i} style={{ width: 3, height: h, background: '#fff', borderRadius: 1 }} />
              ))}
              <div style={{
                width: 20, height: 10, border: '1.5px solid rgba(255,255,255,0.55)',
                borderRadius: 2, marginLeft: 3, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: '1.5px', right: '3px', background: '#fff', borderRadius: 1 }} />
              </div>
            </div>
          </div>

          {/* Nav */}
          <div style={{
            height: 36, borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 12px', flexShrink: 0,
          }}>
            <OPLogo size={9} />
            <div style={{
              padding: '3px 9px', background: OP.green,
              fontSize: 8, fontWeight: 700, color: '#fff', fontFamily: FONT,
            }}>Anmelden</div>
          </div>

          {/* Hero */}
          <div style={{ padding: '10px 12px 8px', flexShrink: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '2px 7px', background: OP.live, marginBottom: 6,
            }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} />
              <span style={{ fontFamily: MONO, fontSize: 7, color: '#fff', letterSpacing: '0.1em', fontWeight: 700 }}>
                JETZT LIVE
              </span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 6 }}>
              Vereins- und Jugend&shy;meisterschaften Altbach
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              {[['SPIELER','35'],['RUNDE','2 / 7']].map(([l, v]) => (
                <div key={l}>
                  <div style={{ fontFamily: MONO, fontSize: 6, color: OP.muted, letterSpacing: '0.1em' }}>{l}</div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: '#fff', fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div style={{
            background: OP.statsBar, padding: '6px 12px', flexShrink: 0,
            display: 'flex', justifyContent: 'space-around',
          }}>
            {[['20','TURNIERE'],['518','SPIELER'],['1.948','PARTIEN']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>{n}</div>
                <div style={{ fontFamily: MONO, fontSize: 6, color: OP.muted, letterSpacing: '0.09em' }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Tournament list */}
          <div style={{ flex: 1, background: OP.cream, padding: '8px 10px', overflow: 'hidden' }}>
            <div style={{
              fontFamily: MONO, fontSize: 6.5, color: '#666',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5,
            }}>
              Turniere 20 gefunden
            </div>
            {[
              { t: 'Stadtmeisterschaft 2026', s: 'Laufend',      live: true },
              { t: 'Vereinsturnier Open',     s: 'Laufend',      live: true },
              { t: 'U18 Landesmeisterschaft', s: 'Vorbereitung', live: false },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '5px 6px', background: '#fff', marginBottom: 3,
                borderLeft: `2px solid ${row.live ? OP.live : '#ccc'}`,
              }}>
                <div style={{ fontSize: 8, fontWeight: 600, color: '#1a1a1a' }}>{row.t}</div>
                <div style={{
                  fontFamily: MONO, fontSize: 6, padding: '1px 4px',
                  background: row.live ? OP.live : '#ddd', color: row.live ? '#fff' : '#666',
                }}>{row.s}</div>
              </div>
            ))}
          </div>

          {/* Home bar */}
          <div style={{
            height: 20, background: OP.bg, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 44, height: 3, background: 'rgba(255,255,255,0.28)', borderRadius: 2 }} />
          </div>
        </div>

        {/* Physical buttons */}
        <div style={{ position: 'absolute', right: -2, top: 105, width: 3, height: 28, background: '#3a3a3a', borderRadius: '0 2px 2px 0' }} />
        <div style={{ position: 'absolute', right: -2, top: 148, width: 3, height: 46, background: '#3a3a3a', borderRadius: '0 2px 2px 0' }} />
        <div style={{ position: 'absolute', left: -2, top: 126, width: 3, height: 40, background: '#3a3a3a', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -2, top: 180, width: 3, height: 40, background: '#3a3a3a', borderRadius: '2px 0 0 2px' }} />
      </div>

      <div style={{
        marginTop: 12, fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>Smartphone</div>
    </div>
  );
}

// ─── LAPTOP MOCKUP ────────────────────────────────────────────────────────
function OPLaptopMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Lid */}
      <div style={{
        width: 560,
        background: '#1a1a1a',
        borderRadius: '10px 10px 0 0',
        padding: '8px 8px 0',
        boxShadow: '0 10px 50px rgba(0,0,0,0.5)',
      }}>
        {/* Webcam dot */}
        <div style={{
          height: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2d2d2d' }} />
        </div>

        {/* Screen glass — fixed height 350px */}
        <div style={{
          width: '100%', height: 350, overflow: 'hidden',
          background: OP.bg, display: 'flex', flexDirection: 'column',
        }}>
          {/* Nav */}
          <div style={{
            height: 36, background: OP.bg,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 16px', flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <OPLogo size={11} />
              <span style={{ fontFamily: FONT, fontSize: 10, color: OP.muted }}>Hilfe</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {['DE','EN','FR','RO'].map((l, i) => (
                <span key={l} style={{
                  fontFamily: MONO, fontSize: 8,
                  fontWeight: i === 0 ? 800 : 400,
                  color: i === 0 ? '#fff' : OP.muted,
                }}>{l}</span>
              ))}
              <div style={{
                padding: '3px 12px', background: OP.green,
                fontSize: 9, fontWeight: 700, color: '#fff', fontFamily: FONT,
              }}>Anmelden</div>
            </div>
          </div>

          {/* Hero */}
          <div style={{ display: 'flex', height: 172, flexShrink: 0 }}>
            <div style={{ flex: 1, padding: '12px 16px', overflow: 'hidden' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '2px 8px', background: OP.live, marginBottom: 8,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} />
                <span style={{ fontFamily: MONO, fontSize: 7, color: '#fff', letterSpacing: '0.12em', fontWeight: 700 }}>
                  JETZT LIVE
                </span>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 8 }}>
                Vereins- und Jugendmeisterschaften Altbach
              </div>
              <div style={{ display: 'flex', gap: 14, marginBottom: 9 }}>
                {[['SYSTEM','Schweizer System'],['ORT','73776 Altbach'],['SPIELER','35'],['PHASE','Runde 2 von 7']].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontFamily: MONO, fontSize: 6, color: OP.muted, letterSpacing: '0.09em' }}>{l}</div>
                    <div style={{ fontFamily: MONO, fontSize: 9, color: '#fff', fontWeight: 600, marginTop: 1 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 9 }}>
                {[1,2,3,4,5,6,7].map(n => (
                  <div key={n} style={{
                    width: 18, height: 18,
                    background: n < 3 ? OP.green : n === 3 ? OP.live : 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, fontWeight: 700, color: '#fff', fontFamily: MONO,
                  }}>{n}</div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 7 }}>
                <div style={{ padding: '5px 14px', background: OP.green, fontSize: 9, fontWeight: 700, color: '#fff', fontFamily: FONT }}>
                  Turnier öffnen →
                </div>
                <div style={{ padding: '5px 14px', border: '1px solid rgba(255,255,255,0.15)', fontSize: 9, color: '#fff', fontFamily: FONT }}>
                  Paarungen ansehen
                </div>
              </div>
            </div>
            {/* Chess board right */}
            <div style={{ width: 172, flexShrink: 0, overflow: 'hidden' }}>
              <OPChessGrid cols={7} rows={6} cell={Math.floor(172 / 7)} />
            </div>
          </div>

          {/* Stats bar */}
          <div style={{
            height: 44, background: OP.statsBar, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'space-around',
            padding: '0 14px',
          }}>
            {[['TURNIERE','20'],['SPIELER','518'],['GESPIELTE PARTIEN','1.948'],['GRÖSSTES TURNIER','Göppinger Rapid']].map(([l, v]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: MONO, fontSize: 6, color: OP.muted, letterSpacing: '0.09em', marginBottom: 2 }}>{l}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Tournament list */}
          <div style={{ flex: 1, background: OP.cream, padding: '7px 14px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>
                Turniere <span style={{ fontSize: 9, fontWeight: 400, color: '#888' }}>20 gefunden</span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {['Schweizer System 18','Rundenturnier','K.O.-System 2'].map(tag => (
                  <div key={tag} style={{
                    padding: '2px 6px', background: '#fff', border: '1px solid #d0cbc5',
                    fontSize: 7, color: '#333', fontFamily: FONT,
                  }}>{tag}</div>
                ))}
              </div>
            </div>
            {[
              { t: 'Stadtmeisterschaft 2026', r: '5 von 7', s: 'Laufend', live: true },
              { t: 'Vereinsturnier Open',     r: '3 von 9', s: 'Laufend', live: true },
              { t: 'U18 Landesmeisterschaft', r: 'Geplant', s: 'Vorber.', live: false },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '5px 8px', background: '#fff', marginBottom: 2,
                borderLeft: `2.5px solid ${row.live ? OP.live : '#ccc'}`,
              }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#1a1a1a' }}>{row.t}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ fontFamily: MONO, fontSize: 7, color: '#888' }}>Runde {row.r}</span>
                  <span style={{
                    fontFamily: MONO, fontSize: 7, padding: '1px 5px',
                    background: row.live ? OP.live : '#e0dbd4', color: row.live ? '#fff' : '#555',
                  }}>{row.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard base */}
      <div style={{
        width: 600, height: 18,
        background: 'linear-gradient(to bottom, #2a2a2a, #1e1e1e)',
        borderRadius: '0 0 6px 6px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 5, background: '#181818', borderRadius: '0 0 3px 3px',
        }} />
        <div style={{
          position: 'absolute', bottom: 3, left: '50%', transform: 'translateX(-50%)',
          width: 120, height: 8, background: 'rgba(255,255,255,0.05)',
        }} />
      </div>

      <div style={{
        marginTop: 12, fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>Desktop / Laptop</div>
    </div>
  );
}

// ─── TV MOCKUP ────────────────────────────────────────────────────────────
function OPTVMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Bezel */}
      <div style={{
        width: 460,
        background: '#1a1a1a',
        borderRadius: '12px 12px 4px 4px',
        padding: '10px 10px 10px',
        boxShadow: '0 10px 50px rgba(0,0,0,0.6)',
      }}>
        {/* Screen — 440×247 (16:9) */}
        <div style={{
          width: '100%', height: 247,
          background: OP.bg, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Top bar */}
          <div style={{
            height: 36, flexShrink: 0,
            background: 'rgba(0,0,0,0.55)',
            borderBottom: `2.5px solid ${OP.green}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 16px',
          }}>
            <OPLogo size={11} />
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '3px 12px', background: OP.live,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
              <span style={{ fontFamily: MONO, fontSize: 9, color: '#fff', letterSpacing: '0.12em', fontWeight: 700 }}>
                LIVE
              </span>
            </div>
          </div>

          {/* Tournament header */}
          <div style={{
            padding: '8px 16px 6px', flexShrink: 0,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 4 }}>
              Vereins- und Jugendmeisterschaften Altbach
            </div>
            <div style={{ display: 'flex', gap: 18 }}>
              {[['RUNDE','2 / 7'],['SYSTEM','Schweizer'],['SPIELER','35 Teilnehmer']].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontFamily: MONO, fontSize: 7, color: OP.muted }}>{l}</span>
                  <span style={{ fontFamily: MONO, fontSize: 9, color: '#fff', fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pairings table */}
          <div style={{ flex: 1, padding: '5px 16px', overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '28px 1fr 1fr 44px',
              gap: '0 8px', padding: '3px 0 4px',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              fontFamily: MONO, fontSize: 7, color: OP.muted,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2,
            }}>
              <span>Br.</span><span>Weiß</span><span>Schwarz</span>
              <span style={{ textAlign: 'center' }}>Erg.</span>
            </div>
            {[
              { b: 1, w: 'Fischer, A.',  bl: 'Müller, K.',   r: '1-0', done: true },
              { b: 2, w: 'Schmidt, P.', bl: 'Weber, L.',     r: '½-½', done: true },
              { b: 3, w: 'Bauer, M.',   bl: 'Hoffmann, J.', r: '0-1', done: true },
              { b: 4, w: 'Klein, T.',   bl: 'Wolf, S.',      r: '·',   done: false },
              { b: 5, w: 'Meyer, C.',   bl: 'Schulz, R.',    r: '·',   done: false },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '28px 1fr 1fr 44px',
                gap: '0 8px', padding: '5px 5px',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                alignItems: 'center', marginBottom: 1,
              }}>
                <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: OP.muted }}>{row.b}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>{row.w}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>{row.bl}</div>
                <div style={{
                  fontFamily: MONO, fontSize: 11, fontWeight: 800, textAlign: 'center',
                  color: !row.done
                    ? OP.muted
                    : row.r === '1-0' ? '#6ecf6e'
                    : row.r === '0-1' ? '#cf6e6e'
                    : '#cfcf6e',
                }}>{row.r}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            height: 22, flexShrink: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 16px',
          }}>
            <span style={{ fontFamily: MONO, fontSize: 8, color: OP.muted }}>openpairing.org</span>
            <span style={{ fontFamily: MONO, fontSize: 8, color: OP.muted }}>Runde 2 · 18 / 35 Ergebnisse</span>
          </div>
        </div>
      </div>

      {/* TV stand */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 42, height: 20, background: 'linear-gradient(to bottom, #242424, #1a1a1a)' }} />
        <div style={{ width: 130, height: 8, background: '#181818', borderRadius: '0 0 4px 4px' }} />
      </div>

      <div style={{
        marginTop: 8, fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>TV / Display</div>
    </div>
  );
}

// ─── SLIDE 19: OpenPairing Demo ───────────────────────────────────────────
function SceneOpenPairing({ time, duration, index, total }) {
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="08 · Persönliche Projekte" label="17:30">
      <SlideTitle
        eyebrow="Demo · OpenPairing"
        title="Schachturnier-Verwaltung. Überall."
        sub="Web-basiert, mehrsprachig, Open Source — auf jedem Gerät sofort einsatzbereit." />

      <div style={{
        position: 'absolute', left: 80, top: 390, right: 80, bottom: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48,
      }}>
        <In at={0.0} dur={0.8} y={40}>
          <OPPhoneMockup />
        </In>
        <In at={0.35} dur={0.8} y={40}>
          <OPLaptopMockup />
        </In>
        <In at={0.7} dur={0.8} y={40}>
          <OPTVMockup />
        </In>
      </div>

      {/* URL strip — bottom right, above footer */}
      <In at={1.6} dur={0.5} style={{ position: 'absolute', bottom: 64, right: 80 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <QRCode value="https://openpairing.org" size={68} color={ANDRITZ.navy} />
          <div>
            <div style={{
              fontFamily: MONO, fontSize: 10, color: ANDRITZ.mute,
              letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2,
            }}>URL</div>
            <div style={{ fontFamily: MONO, fontSize: 15, color: ANDRITZ.navy, fontWeight: 700 }}>
              openpairing.org
            </div>
          </div>
        </div>
      </In>
    </Slide>
  );
}

Object.assign(window, { SceneOpenPairing });
