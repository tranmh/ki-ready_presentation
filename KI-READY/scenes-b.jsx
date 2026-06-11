// scenes-b.jsx — Scenes 7–12 (Risserkennung + Fully Agentic).

// Slide 7 — Risserkennung: Problem & Use Case
function Scene07({ time, duration, index, total }) {
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="05 · Risserkennung · Viet Pham" label="05:30">
      <SlideTitle eyebrow="Use Case · Qualitätskontrolle"
                  title="Risse erkennen, wo das Auge versagt."
                  sub="Pressen-Qualitätskontrolle: kleine Risse, große Flächen, gescheiterte Vorgängerprojekte." />
      {/* Top: two real crack inspection images, side by side */}
      <div style={{ position: 'absolute', left: 80, top: 384, right: 80, display: 'flex', gap: 24, justifyContent: 'center' }}>
        {[
          { src: (window.__resources && window.__resources.crackV2) || 'assets/crack-v2.jpg', cap: 'Pressblech · Aufnahme 02' },
          { src: (window.__resources && window.__resources.crackV1) || 'assets/crack-v1.jpg', cap: 'Pressblech · Aufnahme 01' },
        ].map((img, i) => (
          <In key={i} at={0.4 + i * 0.15} dur={0.6} style={{ position: 'relative' }}>
            <div style={{ position: 'relative', background: '#1F2937', overflow: 'hidden' }}>
              <img src={img.src} alt={img.cap} style={{ display: 'block', height: 372, width: 'auto' }} />
            </div>
          </In>
        ))}
      </div>
      {/* Bottom: problem points as a three-column row */}
      <div style={{ position: 'absolute', left: 80, top: 792, right: 80 }}>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { t: 'Kleine Risse, große Flächen', s: 'Hochauflösende Aufnahmen, sub-mm Defekte über m²-Werkstücken.' },
            { t: 'Hohe False-Negative-Kosten',  s: 'Ein übersehener Riss = Ausschuss bei der Folge-Charge.' },
            { t: '2 Jahre Vorlauf — gescheitert', s: 'Klassische CV-Ansätze und vortrainierte CNNs scheiterten an Domain-Shift.' },
          ].map((p, i) => (
            <In key={i} at={0.8 + i * 0.25} dur={0.45} y={14} style={{ flex: 1 }}>
              <div style={{
                height: '100%', padding: '18px 22px', background: ANDRITZ.paper,
                border: `1px solid ${ANDRITZ.rule}`, borderLeft: `3px solid ${ANDRITZ.orange}`,
              }}>
                <div style={{ fontSize: 19, fontWeight: 700, color: ANDRITZ.ink, marginBottom: 6 }}>
                  {p.t}
                </div>
                <div style={{ fontSize: 15, color: ANDRITZ.mute, lineHeight: 1.45 }}>
                  {p.s}
                </div>
              </div>
            </In>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// Slide 8 — Risserkennung: Ansatz & Methodik (pipeline)
function Scene08({ time, duration, index, total }) {
  const pipe = [
    { left: 0,   w: 270, l: 'Klassifizierte\nDatensätze',  s: 'Riss / kein Riss' },
    { left: 330, w: 270, l: 'Initialprompt\ndefinieren', note: 'simpler Start-Prompt', s: 'Basis für die KI', human: true },
    { left: 660, w: 270, l: 'LLM optimiert\nden Prompt', note: 'via Gemini 3.1 Flash', s: 'Selbstoptimierung' },
    { left: 990, w: 270, l: 'Verifikation +\nAccuracy',  s: 'Confusion-Matrix' },
  ];
  // small right-pointing connector
  const Arrow = ({ left, at, c = ANDRITZ.blue }) => (
    <In at={at} dur={0.3} y={0} style={{ position: 'absolute', left, top: 174 }}>
      <svg width="60" height="24" viewBox="0 0 60 24">
        <path d="M0 12 H50 M42 5 L50 12 L42 19" stroke={c} strokeWidth="2"
              fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </In>
  );
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="05 · Risserkennung · Viet Pham" label="06:45">
      <SlideTitle eyebrow="Ansatz · Methodik"
                  title="Loop Engineering."
                  sub="Statt CNN-Training: Gemini 3.1 Flash klassifiziert, die LLM verfeinert ihre Anweisung selbst." />
      {/* Flowchart with decision branch */}
      <div style={{ position: 'absolute', left: 80, top: 430, right: 80, height: 400 }}>

        {/* NEIN feedback loop — arcs from the diamond back over the row into Step 02 */}
        <In at={3.0} dur={0.6} y={0} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="280" viewBox="0 0 1760 280" style={{ overflow: 'visible' }}>
            <path d="M1395 112 V40 Q1395 24 1379 24 H811 Q795 24 795 40 V92"
                  stroke={ANDRITZ.orange} strokeWidth="2.5" fill="none"
                  strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="7 6" />
            <path d="M788 83 L795 93 L802 83" stroke={ANDRITZ.orange} strokeWidth="2.5"
                  fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </In>
        <In at={3.2} dur={0.4} y={0} style={{ position: 'absolute', left: 1075, top: 12 }}>
          <div style={{
            background: ANDRITZ.bg, padding: '3px 12px', whiteSpace: 'nowrap',
            fontFamily: MONO, fontSize: 13, color: ANDRITZ.orange,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
          }}>
            NEIN
          </div>
        </In>

        {/* Step boxes */}
        {pipe.map((p, i) => (
          <In key={i} at={0.4 + i * 0.3} dur={0.4} y={14}
              style={{ position: 'absolute', left: p.left, top: 95, width: p.w }}>
            <div style={{
              background: ANDRITZ.paper, color: ANDRITZ.ink,
              border: `1px solid ${ANDRITZ.rule}`,
              padding: '20px 22px', height: 180, boxSizing: 'border-box',
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 12, color: ANDRITZ.orange,
                letterSpacing: '0.22em', marginBottom: 12,
              }}>
                STEP {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.2, whiteSpace: 'pre-line' }}>
                {p.l}
              </div>
              {p.note && (
                <div style={{ fontSize: 13, marginTop: 8, lineHeight: 1.35, color: ANDRITZ.mute, fontStyle: 'italic' }}>
                  {p.note}
                </div>
              )}
              <div style={{ fontSize: 13, marginTop: 8, lineHeight: 1.4, color: ANDRITZ.mute }}>
                {p.s}
              </div>
            </div>
          </In>
        ))}

        {/* Connectors between steps + into the diamond */}
        <Arrow left={270}  at={0.6} />
        <Arrow left={600}  at={0.9} />
        <Arrow left={930}  at={1.2} />
        <Arrow left={1260} at={1.5} />

        {/* Decision diamond */}
        <In at={1.7} dur={0.45} y={0} style={{ position: 'absolute', left: 1320, top: 110, width: 150, height: 150 }}>
          <div style={{ position: 'relative', width: 150, height: 150 }}>
            <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', inset: 0 }}>
              <polygon points="75,2 148,75 75,148 2,75"
                       fill={ANDRITZ.paper} stroke={ANDRITZ.blue} strokeWidth="2" />
            </svg>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px',
            }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: ANDRITZ.blue, letterSpacing: '0.18em', marginBottom: 5 }}>
                PRÜFUNG
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.15, color: ANDRITZ.ink }}>
                Accuracy ≥ Ziel?
              </div>
            </div>
          </div>
        </In>

        {/* JA branch → terminal */}
        <Arrow left={1470} at={2.2} c={ANDRITZ.green} />
        <In at={2.2} dur={0.3} y={0} style={{ position: 'absolute', left: 1486, top: 150 }}>
          <div style={{ fontFamily: MONO, fontSize: 13, color: ANDRITZ.green, fontWeight: 700, letterSpacing: '0.1em' }}>
            JA
          </div>
        </In>
        <In at={2.4} dur={0.45} y={14} style={{ position: 'absolute', left: 1530, top: 125, width: 230 }}>
          <div style={{
            background: ANDRITZ.green, color: '#fff', height: 120, boxSizing: 'border-box',
            padding: '16px 22px', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', textAlign: 'center',
          }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.85)' }}>
              ENDZUSTAND
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 6 }}>LLM terminiert</div>
          </div>
        </In>

      </div>


    </Slide>
  );
}

// Slide 9 — Risserkennung: Ergebnis & Erkenntnisse (metrics count up)
function Scene09({ time, duration, index, total }) {
  const metrics = [
    { v: 96.4, suf: '%',  l: 'Accuracy',  c: ANDRITZ.navy },
    { v: 98.1, suf: '%',  l: 'Recall',    c: ANDRITZ.blue },
    { v: 94.7, suf: '%',  l: 'Precision', c: ANDRITZ.orange },
  ];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="05 · Risserkennung · Viet Pham" label="08:00">
      <SlideTitle eyebrow="Ergebnis · Erkenntnisse"
                  title="Vom 2-Jahres-Stillstand zur produktionsreifen Lösung."
                  sub="" />
      {/* metrics row */}
      <div style={{ position: 'absolute', left: 80, top: 410, right: 80,
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {metrics.map((m, i) => (
          <In key={i} at={0.4 + i * 0.25} dur={0.5} y={18}>
            <div style={{
              background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
              borderTop: `3px solid ${m.c}`, padding: '32px 26px', minHeight: 180,
            }}>
              <div style={{
                fontSize: 72, fontWeight: 800, color: m.c, lineHeight: 1.0,
                fontFamily: MONO, letterSpacing: '-0.02em',
              }}>
                <CountUp to={m.v} start={0.6 + i * 0.25} dur={1.0}
                         decimals={m.decimals != null ? m.decimals : 1} suffix={m.suf} />
              </div>
              <div style={{
                marginTop: 16, fontSize: 15, color: ANDRITZ.mute,
                letterSpacing: '0.04em', lineHeight: 1.35,
              }}>
                {m.l}
              </div>
            </div>
          </In>
        ))}
      </div>
      {/* Lessons learned */}
      <div style={{ position: 'absolute', left: 80, top: 712, right: 80,
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <In at={1.8} dur={0.5} y={14}>
          <div style={{
            padding: '22px 24px', background: ANDRITZ.bg,
            borderLeft: `3px solid ${ANDRITZ.blue}`,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 11, color: ANDRITZ.blue,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8,
            }}>
              Lesson learned
            </div>
            <div style={{ fontSize: 17, color: ANDRITZ.ink, lineHeight: 1.45 }}>
              Wo sich die Klassifikation im Prompt formulieren lässt, ist ein Vision-LLM
              eine ernstzunehmende Alternative zur klassischen CV-Pipeline.
            </div>
          </div>
        </In>
        <In at={2.1} dur={0.5} y={14}>
          <div style={{
            padding: '22px 24px', background: ANDRITZ.bg,
            borderLeft: `3px solid ${ANDRITZ.orange}`,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8,
            }}>
              Übertragbarkeit
            </div>
            <div style={{ fontSize: 17, color: ANDRITZ.ink, lineHeight: 1.45 }}>
              Übertragbar auf jede visuelle Anomalie-Erkennung mit klassifizierten
              Beispielen — Schweißnähte, Oberflächen, Verpackung.
            </div>
          </div>
        </In>
      </div>
    </Slide>
  );
}

// Slide 10 — Fully Agentic: Konzept (spectrum + closed loop)
function Scene10({ time, duration, index, total }) {
  const levels = ['Manual', 'Co-Pilot', 'Agentic', 'Fully Agentic'];
  const loop = ['Plan', 'Act', 'Observe', 'Reflect'];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="06 · Fully Agentic · Jakob Ayo" label="09:15">
      <SlideTitle eyebrow="Konzept"
                  title="Zwei Sichten auf vollautonome Entwicklung."
                  sub="Autonomie-Spektrum trifft Closed-Loop — der Agent korrigiert sich selbst, statt zu warten." />
      {/* Spectrum */}
      <div style={{ position: 'absolute', left: 80, top: 410, width: 1080 }}>
        <In at={0.3} dur={0.4}>
          <div style={{
            fontFamily: MONO, fontSize: 12, color: ANDRITZ.mute,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 18,
          }}>
            Autonomie-Spektrum
          </div>
        </In>
        <div style={{ position: 'relative', height: 120 }}>
          {/* axis */}
          <In at={0.4} dur={0.6}>
            <div style={{
              position: 'absolute', left: 0, right: 0, top: 56, height: 4,
              background: `linear-gradient(90deg, ${ANDRITZ.rule}, ${ANDRITZ.orange})`,
            }} />
          </In>
          {levels.map((lv, i) => {
            const at = 0.6 + i * 0.25;
            const isLast = i === levels.length - 1;
            return (
              <In key={i} at={at} dur={0.4} y={12} style={{
                position: 'absolute', left: `${i * 33.33}%`, top: 0, width: 160,
                transform: i === 0 ? 'translateX(0)' : 'translateX(-50%)',
                textAlign: i === 0 ? 'left' : 'center',
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: '50%',
                  background: isLast ? ANDRITZ.orange : ANDRITZ.navy,
                  border: '4px solid #fff', boxShadow: `0 0 0 2px ${isLast ? ANDRITZ.orange : ANDRITZ.navy}`,
                  margin: i === 0 ? '50px 0 0 0' : '50px auto 0',
                }} />
                <div style={{
                  marginTop: 14, fontSize: 16, fontWeight: isLast ? 800 : 600,
                  color: isLast ? ANDRITZ.orange : ANDRITZ.ink,
                }}>
                  {lv}
                </div>
              </In>
            );
          })}
        </div>
        <In at={1.8} dur={0.5} style={{ marginTop: 30 }}>
          <div style={{
            fontFamily: MONO, fontSize: 13, color: ANDRITZ.mute,
            letterSpacing: '0.04em',
          }}>
            ← zunehmender Verzicht auf menschliches Eingreifen
          </div>
        </In>

        {/* Voraussetzungen */}
        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <In at={2.2} dur={0.5} y={14}>
            <div style={{
              padding: '20px 22px', background: ANDRITZ.paper,
              border: `1px solid ${ANDRITZ.rule}`, borderLeft: `3px solid ${ANDRITZ.blue}`,
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: ANDRITZ.blue,
                letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6,
              }}>
                Voraussetzung 1
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: ANDRITZ.ink, marginBottom: 4 }}>
                Task-Verifizierbarkeit
              </div>
              <div style={{ fontSize: 14, color: ANDRITZ.mute }}>
                kein maschinell prüfbares Kriterium → keine Vollautonomie
              </div>
            </div>
          </In>
          <In at={2.4} dur={0.5} y={14}>
            <div style={{
              padding: '20px 22px', background: ANDRITZ.paper,
              border: `1px solid ${ANDRITZ.rule}`, borderLeft: `3px solid ${ANDRITZ.blue}`,
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: ANDRITZ.blue,
                letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6,
              }}>
                Voraussetzung 2
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: ANDRITZ.ink, marginBottom: 4 }}>
                Reversibilität
              </div>
              <div style={{ fontSize: 14, color: ANDRITZ.mute }}>
                git revert, DB-Tx, Sandbox-Branches — irreversible Ops bleiben gegated
              </div>
            </div>
          </In>
        </div>
      </div>

      {/* Closed loop on right — square diagram, symmetric N/E/S/W nodes */}
      {/*
        Diagram math (480×480 inner box):
          centre        = (240, 240)
          ring radius   = 100   (circle 200×200 at 140,140)
          node centres  = 180 from centre  → gap from ring edge = 80 each side
          node size     = 140 × 56  (cards), centred on each compass point
      */}
      <div style={{ position: 'absolute', right: 80, top: 400, width: 560, height: 540 }}>
        <In at={0.5} dur={0.4}>
          <div style={{
            fontFamily: MONO, fontSize: 12, color: ANDRITZ.mute,
            letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center',
          }}>
            Closed-Loop-System
          </div>
        </In>
        <div style={{ position: 'relative', width: 480, height: 480, margin: '30px auto 0' }}>
          {/* SVG connectors from circle edge to each node — drawn first so cards layer above */}
          <In at={1.0} dur={0.6}>
            <svg width="480" height="480" style={{ position: 'absolute', inset: 0 }}>
              {/* 4 short tick-lines from ring (r=100) to node edge (r=152 from centre, since node is 56 tall) */}
              {[
                { x1: 240, y1: 140, x2: 240, y2: 212 }, // N
                { x1: 340, y1: 240, x2: 368, y2: 240 }, // E
                { x1: 240, y1: 340, x2: 240, y2: 268 }, // S (rev: from bottom up)
                { x1: 140, y1: 240, x2: 112, y2: 240 }, // W
              ].map((l, i) => (
                <line key={i}
                      x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                      stroke={ANDRITZ.rule} strokeWidth="1.5" strokeDasharray="4 4" />
              ))}
            </svg>
          </In>
          {/* Centre circle */}
          <In at={0.7} dur={0.5}>
            <div style={{
              position: 'absolute', left: 140, top: 140, width: 200, height: 200,
              borderRadius: '50%', border: `2px dashed ${ANDRITZ.rule}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
                letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>
                Self-Correcting
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: ANDRITZ.ink, marginTop: 6, textAlign: 'center' }}>
                Agent-Loop
              </div>
            </div>
          </In>
          {/* Curved arc arrows between nodes (suggests circulation) */}
          <In at={1.4} dur={0.6}>
            <svg width="480" height="480" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <defs>
                <marker id="arrow-orange" viewBox="0 0 8 8" refX="6" refY="4"
                        markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0 0 L8 4 L0 8 z" fill={ANDRITZ.orange} />
                </marker>
              </defs>
              {/* four quarter arcs around centre at r=160, clockwise */}
              {[
                'M 240 80  A 160 160 0 0 1 400 240', // N → E
                'M 400 240 A 160 160 0 0 1 240 400', // E → S
                'M 240 400 A 160 160 0 0 1 80 240',  // S → W
                'M 80 240  A 160 160 0 0 1 240 80',  // W → N
              ].map((d, i) => (
                <path key={i} d={d} stroke={ANDRITZ.orange} strokeWidth="2"
                      fill="none" opacity="0.55" markerEnd="url(#arrow-orange)" />
              ))}
            </svg>
          </In>
          {/* 4 nodes — centre-anchored at NSEW, equal 180px from circle centre */}
          {[
            { cx: 240, cy: 240 - 180, label: loop[0] }, // N (60)
            { cx: 240 + 180, cy: 240, label: loop[1] }, // E (420)
            { cx: 240, cy: 240 + 180, label: loop[2] }, // S (420)
            { cx: 240 - 180, cy: 240, label: loop[3] }, // W (60)
          ].map((n, i) => {
            const W = 140, H = 56;
            return (
              <In key={i} at={1.1 + i * 0.25} dur={0.4} y={8} style={{
                position: 'absolute', left: n.cx - W / 2, top: n.cy - H / 2, width: W, height: H,
              }}>
                <div style={{
                  width: W, height: H, background: ANDRITZ.navy, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 17, fontWeight: 700, borderTop: `3px solid ${ANDRITZ.orange}`,
                  fontFamily: FONT, letterSpacing: '0.02em',
                }}>
                  {n.label}
                </div>
              </In>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}

// Slide 11 — Fully Agentic: Architektur & Workflow
// Layered diagram: Orchestrator at top → trunk bus → 4 Subagent workers,
// with Approval Gate badges on every branch. Pure pixel grid so connectors
// always align with cards (no mixing % and px like the previous version).
function Scene11({ time, duration, index, total }) {
  // Geometry — single source of truth so SVG, gates and cards line up
  const GEO = {
    W: 1760, H: 500,
    orch: { x: 620, y: 0, w: 520, h: 120 },
    trunkY: 200,
    subY: 360, subH: 140,
    subs: [
      { x: 0,    label: 'Test-Gen',  sub: 'Schreibt Tests vor der Implementation', code: 'jest · pytest · go test', accent: ANDRITZ.blue },
      { x: 460,  label: 'Code',      sub: 'Implementiert Feature, hält API-Contract', code: 'src/ · diff · compile', accent: ANDRITZ.blue },
      { x: 920,  label: 'Lint/Verify',sub: 'Statische + dynamische Prüfung',         code: 'eslint · types · tests', accent: ANDRITZ.blue },
      { x: 1380, label: 'Refactor',  sub: 'Vereinfacht, entfernt Duplikate',         code: 'rename · extract',       accent: ANDRITZ.blue },
    ],
    subW: 380,
  };
  // sub centre X = x + subW/2
  const orchBottomX = GEO.orch.x + GEO.orch.w / 2;
  const orchBottomY = GEO.orch.y + GEO.orch.h;

  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="06 · Fully Agentic · Jakob Ayo" label="10:30">
      <SlideTitle eyebrow="Architektur · Workflow"
                  title="Orchestrator + Subagents mit Approval Gates."
                  sub="Ein Hauptagent plant und delegiert. Vier spezialisierte Subagenten arbeiten parallel. Nach jedem Schritt steht ein Approval Gate." />

      <div style={{
        position: 'absolute', left: 80, top: 400, width: GEO.W, height: GEO.H,
      }}>
        {/* SVG connectors — single layer, pixel-perfect to GEO */}
        <svg width={GEO.W} height={GEO.H}
             style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <defs>
            <marker id="s11-arrow" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill={ANDRITZ.navy} />
            </marker>
          </defs>
          {/* trunk drop from orchestrator */}
          <Sprite start={time + 0.9} end={time + duration} keepMounted={false}>
            {({ localTime }) => {
              const pDrop  = clamp(localTime / 0.35, 0, 1);
              const pTrunk = clamp((localTime - 0.3) / 0.5, 0, 1);
              const pBranch= clamp((localTime - 0.7) / 0.5, 0, 1);
              // trunk extents
              const trunkX1 = GEO.subs[0].x + GEO.subW / 2;
              const trunkX2 = GEO.subs[GEO.subs.length - 1].x + GEO.subW / 2;
              const trunkLen = trunkX2 - trunkX1;
              return (
                <g stroke={ANDRITZ.navy} fill="none" strokeLinecap="round">
                  {/* vertical drop */}
                  <line x1={orchBottomX} y1={orchBottomY}
                        x2={orchBottomX} y2={orchBottomY + (GEO.trunkY - orchBottomY) * pDrop}
                        strokeWidth="2" />
                  {/* horizontal trunk, grows out from centre both ways */}
                  <line x1={orchBottomX} y1={GEO.trunkY}
                        x2={orchBottomX - (orchBottomX - trunkX1) * pTrunk} y2={GEO.trunkY}
                        strokeWidth="2" />
                  <line x1={orchBottomX} y1={GEO.trunkY}
                        x2={orchBottomX + (trunkX2 - orchBottomX) * pTrunk} y2={GEO.trunkY}
                        strokeWidth="2" />
                  {/* 4 vertical branches down to subagents (with arrowheads) */}
                  {GEO.subs.map((s, i) => {
                    const cx = s.x + GEO.subW / 2;
                    const y2 = GEO.trunkY + (GEO.subY - GEO.trunkY) * pBranch;
                    return (
                      <line key={i}
                            x1={cx} y1={GEO.trunkY}
                            x2={cx} y2={y2}
                            strokeWidth="2"
                            markerEnd={pBranch > 0.95 ? 'url(#s11-arrow)' : undefined} />
                    );
                  })}
                </g>
              );
            }}
          </Sprite>
        </svg>

        {/* Orchestrator card */}
        <In at={0.2} dur={0.5} style={{
          position: 'absolute', left: GEO.orch.x, top: GEO.orch.y,
          width: GEO.orch.w, height: GEO.orch.h,
        }}>
          <div style={{
            width: '100%', height: '100%',
            background: ANDRITZ.navy, color: '#fff', padding: '22px 28px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(27,58,107,0.15)',
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 12, color: ANDRITZ.orange,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ width: 22, height: 2, background: ANDRITZ.orange }} />
              Orchestrator
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.15 }}>
              Planner + Coordinator
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 4, fontFamily: MONO }}>
              ticket → plan → delegate → review
            </div>
          </div>
        </In>

        {/* Approval Gate badges — one per branch, centred horizontally on subagent,
            placed at vertical midpoint of branch line */}
        {GEO.subs.map((s, i) => {
          const cx = s.x + GEO.subW / 2;
          const cy = (GEO.trunkY + GEO.subY) / 2;
          const R = 26;
          return (
            <In key={'g' + i} at={1.45 + i * 0.1} dur={0.4} y={0} style={{
              position: 'absolute', left: cx - R, top: cy - R, width: R * 2, height: R * 2,
            }}>
              <div style={{
                width: R * 2, height: R * 2, borderRadius: '50%',
                background: '#fff', border: `2px solid ${ANDRITZ.orange}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(232,119,34,0.25)',
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <path d="M5 11 L9 15 L17 7"
                        stroke={ANDRITZ.orange} strokeWidth="2.6"
                        fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{
                position: 'absolute', left: '50%', top: -22, transform: 'translateX(-50%)',
                fontFamily: MONO, fontSize: 10, color: ANDRITZ.orange,
                letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                fontWeight: 700,
              }}>
                Gate
              </div>
            </In>
          );
        })}

        {/* 4 Subagent worker cards */}
        {GEO.subs.map((s, i) => (
          <In key={'s' + i} at={1.7 + i * 0.12} dur={0.5} y={14} style={{
            position: 'absolute', left: s.x, top: GEO.subY, width: GEO.subW, height: GEO.subH,
          }}>
            <div style={{
              width: '100%', height: '100%', background: ANDRITZ.paper,
              border: `1px solid ${ANDRITZ.rule}`, borderTop: `3px solid ${s.accent}`,
              padding: '18px 22px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontFamily: MONO, fontSize: 10, color: s.accent,
                  letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8,
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  Worker {String(i + 1).padStart(2, '0')}
                  <span style={{ flex: 1, height: 1, background: ANDRITZ.rule }} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: ANDRITZ.ink, lineHeight: 1.15 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 13, color: ANDRITZ.mute, marginTop: 6, lineHeight: 1.35 }}>
                  {s.sub}
                </div>
              </div>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: ANDRITZ.mute,
                letterSpacing: '0.04em',
                paddingTop: 8, borderTop: `1px dashed ${ANDRITZ.rule}`,
              }}>
                {s.code}
              </div>
            </div>
          </In>
        ))}
      </div>

      {/* Footer note */}
      <In at={2.6} dur={0.5} style={{ position: 'absolute', left: 80, top: 920, right: 80 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 22,
          padding: '20px 26px', background: ANDRITZ.navy, color: '#fff',
        }}>
          <div style={{
            fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
            letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700,
            whiteSpace: 'nowrap',
          }}>
            ✓ Approval Gate
          </div>
          <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.18)' }} />
          <div style={{ fontSize: 17, color: '#fff', lineHeight: 1.4 }}>
            Kontrollierte Eskalation statt Drift — Fehler werden früh gefangen, nicht erst beim Merge.
          </div>
          <div style={{ flex: 1 }} />
          <div style={{
            fontFamily: MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            Plan → Act → Verify
          </div>
        </div>
      </In>
    </Slide>
  );
}

// Slide 12 — Fully Agentic: Praxis & Erkenntnisse
function Scene12({ time, duration, index, total }) {
  const steps = ['Orchestrator nimmt Prompt auf', 'Subagents implementieren + testen',
                 'Approval nach jeder Task', 'PR zur finalen Review'];
  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="06 · Fully Agentic · Jakob Ayo" label="11:45">
      <SlideTitle eyebrow="Praxis · Erkenntnisse"
                  title="Ein Prompt, vier Schritte, fertiger PR."
                  sub="Pick the right scope — Autonomie-Level an Task-Komplexität koppeln." />
      {/* Prompt block */}
      <In at={0.4} dur={0.6} style={{ position: 'absolute', left: 80, top: 410, right: 80 }}>
        <div style={{
          padding: '32px 36px', background: ANDRITZ.navy, color: '#fff',
          position: 'relative',
        }}>
          <div style={{
            fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
            letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12,
          }}>
            Orchestrator-Prompt
          </div>
          <div style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.35, fontStyle: 'italic' }}>
            "You are an orchestrator — plan and make decisions only.
            Spawn subagents to do the coding, testing and validation.
            Resolve GitHub issues 15–18 and fix them fully agentically."
          </div>
        </div>
      </In>
      {/* 4 steps strip */}
      <div style={{ position: 'absolute', left: 80, top: 600, right: 80,
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {steps.map((s, i) => (
          <In key={i} at={1.2 + i * 0.3} dur={0.4} y={12}>
            <div style={{
              background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
              padding: '20px 20px', position: 'relative', minHeight: 130,
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 28, fontWeight: 800, color: ANDRITZ.orange,
                fontVariantNumeric: 'tabular-nums', marginBottom: 8,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: ANDRITZ.ink, lineHeight: 1.3 }}>
                {s}
              </div>
            </div>
          </In>
        ))}
      </div>
      {/* what works / what doesn't */}
      <div style={{ position: 'absolute', left: 80, top: 800, right: 80,
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <In at={2.6} dur={0.5} y={10}>
          <div style={{
            padding: '18px 22px', background: ANDRITZ.paper,
            borderLeft: `4px solid #1F8A5B`, border: `1px solid ${ANDRITZ.rule}`,
          }}>
            <div style={{ fontSize: 14, color: '#1F8A5B', fontWeight: 700, marginBottom: 4 }}>✓ Funktioniert</div>
            <div style={{ fontSize: 15, color: ANDRITZ.ink, lineHeight: 1.4 }}>
              Klar abgegrenzter Scope mit definiertem Erfolgskriterium → läuft autonom durch.
            </div>
          </div>
        </In>
        <In at={2.8} dur={0.5} y={10}>
          <div style={{
            padding: '18px 22px', background: ANDRITZ.paper,
            borderLeft: `4px solid #C0392B`, border: `1px solid ${ANDRITZ.rule}`,
          }}>
            <div style={{ fontSize: 14, color: '#C0392B', fontWeight: 700, marginBottom: 4 }}>✗ Funktioniert nicht</div>
            <div style={{ fontSize: 15, color: ANDRITZ.ink, lineHeight: 1.4 }}>
              Open-ended Architektur, neuartige Algorithmen → Agent driftet oder zirkelt.
            </div>
          </div>
        </In>
      </div>
    </Slide>
  );
}

// Slide 12 — Fully Agentic: Live Terminal Log (real-world example)
// Shows a multi-issue autonomous workflow streaming into a terminal,
// with aggregated stats sliding in on the right.
function Scene12Log({ time, duration, index, total }) {
  // Log lines (kind: meta | agent | done | commit)
  const LOG = [
    { k: 'meta',   t: 'Issues 15–18 confirmed open. Starting with issue 15 — delegating to a sonnet subagent.' },
    { k: 'agent',  t: 'Agent(Fix issue #15) Sonnet 4.6' },
    { k: 'done',   t: 'Done (56 tool uses · 98.8k tokens · 7m 11s)' },
    { k: 'meta',   t: 'Issue 15 implementation done. Now spawning close-issue subagent to commit.' },
    { k: 'agent',  t: 'Agent(Close issue #15) Sonnet 4.6' },
    { k: 'done',   t: 'Done (7 tool uses · 16.7k tokens · 1m 40s)' },
    { k: 'commit', t: 'Issue 15 ✓ committed cleanly. Moving to issue 16.' },
    { k: 'agent',  t: 'Agent(Fix issue #16) Sonnet 4.6' },
    { k: 'done',   t: 'Done (44 tool uses · 106.1k tokens · 6m 39s)' },
    { k: 'meta',   t: 'Issue 16 implementation done. Spawning close-issue subagent.' },
    { k: 'agent',  t: 'Agent(Close issue #16) Sonnet 4.6' },
    { k: 'done',   t: 'Done (9 tool uses · 16.9k tokens · 34s)' },
    { k: 'commit', t: 'Issues 15 and 16 done. Now starting issue 17.' },
    { k: 'agent',  t: 'Agent(Fix issue #17) Sonnet 4.6' },
    { k: 'done',   t: 'Done (65 tool uses · 75.4k tokens · 11m 30s)' },
    { k: 'agent',  t: 'Agent(Close issue #17) Sonnet 4.6' },
    { k: 'done',   t: 'Done (10 tool uses · 18.8k tokens · 41s)' },
    { k: 'commit', t: 'Issue 17 ✓. Moving to the final issue 18.' },
    { k: 'agent',  t: 'Agent(Fix issue #18) Sonnet 4.6' },
    { k: 'done',   t: 'Done (67 tool uses · 95.0k tokens · 5m 57s)' },
    { k: 'agent',  t: 'Agent(Close issue #18) Sonnet 4.6' },
    { k: 'done',   t: 'Done (10 tool uses · 21.2k tokens · 44s)' },
    { k: 'commit', t: 'All 4 issues closed. Branch ready for review.' },
  ];

  // Color per line kind
  const colorOf = (k) => ({
    meta:   '#9BB5C7',
    agent:  '#7BD389',
    done:   '#6FA8DC',
    commit: '#F6C66B',
  })[k];

  // Stagger: each line appears every X seconds, starting at 0.5s.
  const STEP = 0.32;
  const START = 0.5;

  return (
    <Slide index={index} total={total} time={time} duration={duration}
           section="06 · Fully Agentic · Jakob Ayo" label="11:45">
      <SlideTitle eyebrow="Praxis · echtes Log"
                  title="Vier Issues, autonom — in einer Sitzung."
                  sub="Hauptagent spawnt Fix- und Close-Subagenten je Issue. Mensch greift nur am Branch-Ende ein." />

      {/* Terminal */}
      <div style={{
        position: 'absolute', left: 80, top: 410, width: 1200, height: 600,
        background: '#0E1116', border: `1px solid #1F2A36`,
        boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        {/* Terminal title bar */}
        <div style={{
          height: 32, background: '#161B22', borderBottom: '1px solid #1F2A36',
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8,
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          <div style={{
            flex: 1, textAlign: 'center', fontFamily: MONO, fontSize: 11,
            color: '#6B7E8F', letterSpacing: '0.08em',
          }}>
            claude-code — orchestrator · ~/andritz/repo · zsh
          </div>
        </div>
        {/* Log body */}
        <div style={{
          flex: 1, padding: '18px 24px', fontFamily: MONO, fontSize: 14.5,
          lineHeight: 1.55, color: '#E1E7EE', overflow: 'hidden',
        }}>
          {LOG.map((line, i) => {
            const at = START + i * STEP;
            return (
              <In key={i} at={at} dur={0.22} y={4} style={{ marginBottom: 4 }}>
                {line.k === 'agent' && (
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span style={{ color: '#7BD389' }}>●</span>
                    <span style={{ color: '#E1E7EE' }}>{line.t}</span>
                  </div>
                )}
                {line.k === 'done' && (
                  <div style={{ display: 'flex', gap: 10, paddingLeft: 22, color: '#9BB5C7' }}>
                    <span style={{ color: '#6FA8DC' }}>└</span>
                    <span>{line.t}</span>
                  </div>
                )}
                {line.k === 'meta' && (
                  <div style={{ color: '#9BB5C7', marginTop: 8 }}>{line.t}</div>
                )}
                {line.k === 'commit' && (
                  <div style={{ color: '#F6C66B', marginTop: 8, fontWeight: 600 }}>
                    {line.t}
                  </div>
                )}
              </In>
            );
          })}
          {/* blinking cursor at end */}
          <Sprite start={time + START + LOG.length * STEP} end={time + duration}>
            {({ localTime }) => (
              <span style={{
                display: 'inline-block', width: 9, height: 18,
                background: '#7BD389',
                opacity: Math.floor(localTime * 2) % 2 === 0 ? 1 : 0.15,
                verticalAlign: 'middle', marginTop: 6,
              }} />
            )}
          </Sprite>
        </div>
      </div>

      {/* Right-hand aggregate panel */}
      <div style={{
        position: 'absolute', left: 1320, top: 410, width: 520, height: 600,
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <In at={0.3} dur={0.5}>
          <div style={{
            padding: '20px 22px', background: ANDRITZ.navy, color: '#fff',
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10,
            }}>
              Session-Bilanz
            </div>
            <div style={{
              fontSize: 22, fontWeight: 700, lineHeight: 1.25,
            }}>
              4 GitHub Issues · 8 Subagenten · 1 PR
            </div>
            <div style={{
              fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 8, lineHeight: 1.5,
            }}>
              Pro Issue: Fix-Subagent → Close-Subagent → Commit.
              Orchestrator hält den Plan, Subagenten halten den Kontext.
            </div>
          </div>
        </In>

        {/* Stat tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { v: 318, suf: '',   d: 0, l: 'Tool-Aufrufe',    c: ANDRITZ.blue,   at: 2.5 },
            { v: 449, suf: 'k',  d: 0, l: 'Tokens insgesamt', c: ANDRITZ.blue,   at: 2.8 },
            { v: 36,  suf: ' min', d: 0, l: 'Wall-Clock',     c: ANDRITZ.orange, at: 3.1 },
            { v: 0,   suf: '',   d: 0, l: 'Manuelle Eingriffe', c: ANDRITZ.orange, at: 3.4, big: true },
          ].map((m, i) => (
            <In key={i} at={m.at} dur={0.5} y={14}>
              <div style={{
                background: ANDRITZ.paper, border: `1px solid ${ANDRITZ.rule}`,
                borderTop: `3px solid ${m.c}`, padding: '16px 18px', minHeight: 96,
              }}>
                <div style={{
                  fontSize: 36, fontWeight: 800, color: m.c, lineHeight: 1.0,
                  fontFamily: MONO, letterSpacing: '-0.01em',
                }}>
                  <CountUp to={m.v} start={m.at - 0.2} dur={0.9}
                           decimals={m.d} suffix={m.suf} />
                </div>
                <div style={{
                  marginTop: 8, fontSize: 12, color: ANDRITZ.mute,
                  letterSpacing: '0.04em', lineHeight: 1.3,
                }}>
                  {m.l}
                </div>
              </div>
            </In>
          ))}
        </div>

        {/* Pattern callout */}
        <In at={3.8} dur={0.6} y={14}>
          <div style={{
            padding: '16px 20px', background: ANDRITZ.bg,
            borderLeft: `3px solid ${ANDRITZ.orange}`,
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 11, color: ANDRITZ.orange,
              letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 4,
            }}>
              Pattern: Fix → Close → Move on
            </div>
            <div style={{ fontSize: 14, color: ANDRITZ.ink, lineHeight: 1.45 }}>
              Saubere Subagent-Grenzen halten den Kontext pro Issue klein —
              keine Drift zwischen Issues.
            </div>
          </div>
        </In>
      </div>
    </Slide>
  );
}

Object.assign(window, { Scene07, Scene08, Scene09, Scene10, Scene11, Scene12, Scene12Log });
