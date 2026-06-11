// app.jsx — Main app: wires up all 20 scenes inside a Stage.

const SLIDES = [
  { c: Scene01,    dur: 3.0 },
  { c: Scene02,    dur: 2.0 },
  { c: Scene03,    dur: 3.5 },
  { c: Scene04,    dur: 4.0 },
  { c: Scene05,    dur: 3.0 },
  { c: Scene06,    dur: 3.5 },
  { c: Scene07,    dur: 2.5 },
  { c: Scene08,    dur: 4.5 },
  { c: Scene09,    dur: 3.5 },
  { c: Scene10,    dur: 3.5 },
  { c: Scene11,    dur: 4.0 },
  { c: Scene12Log, dur: 8.5 },
  { c: Scene12,    dur: 4.0 },
  { c: Scene13,    dur: 2.5 },
  { c: Scene14,    dur: 3.5 },
  { c: Scene15,    dur: 2.0 },
  { c: SceneTempoMate,    dur: 7.0 },
  { c: SceneOpenPairing, dur: 5.0 },
  { c: Scene16,        dur: 3.0 },
  { c: Scene17,          dur: 4.0 },
];

// Build cumulative start times.
let cursor = 0;
const TIMINGS = SLIDES.map((s, i) => {
  const start = cursor;
  cursor += s.dur;
  return { index: i + 1, start, duration: s.dur, c: s.c };
});
const TOTAL = cursor;
const SLIDE_STARTS = TIMINGS.map(s => s.start);

function App() {
  return (
    <div id="video-root" data-screen-label="t=0s · slide 1/20" style={{
      position: 'fixed', inset: 0,
    }}>
      <Stage width={1920} height={1080} duration={TOTAL} background={ANDRITZ.bg} persistKey="kiready-video" slides={SLIDE_STARTS}>
        {TIMINGS.map((s) => {
          const Comp = s.c;
          return (
            <Comp key={s.index}
                  index={s.index}
                  total={SLIDES.length}
                  time={s.start}
                  duration={s.duration} />
          );
        })}
      </Stage>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
