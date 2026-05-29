// wf-kit.jsx — shared low-fi wireframe building blocks for the CD booklet exploration
// All pieces share a sketchy, hand-drawn vibe: warm paper, charcoal ink, one green accent.
// Exported to window at the bottom for the per-direction files to consume.

const WF = {
  paper: 'var(--wf-paper, #f3eee1)',
  paper2: 'var(--wf-paper2, #ece5d3)',
  ink: '#2b2a26',
  ink2: '#6f6a5d',
  faint: '#b9b2a0',
  green: 'var(--wf-accent, #33493d)',
  hand: "'Caveat', cursive",
  mono: "'Space Mono', ui-monospace, monospace",
  sans: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
};

// Hand-drawn wonky-rounded border (the classic doodle trick)
const sketchBorder = '14px 220px 18px 220px / 200px 16px 220px 14px';
const sketchBorderAlt = '220px 16px 220px 18px / 14px 200px 16px 220px';

// A square booklet panel with a sketchy frame + corner label
function Panel({ children, label, tone = 'paper', pad = 22 }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%', height: '100%',
      background: tone === 'green' ? WF.green : (tone === 'paper2' ? WF.paper2 : WF.paper),
      boxSizing: 'border-box',
      overflow: 'hidden',
      fontFamily: WF.sans,
      color: tone === 'green' ? WF.paper : WF.ink,
    }}>
      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: 'radial-gradient(rgba(120,110,90,0.08) 1px, transparent 1px)',
        backgroundSize: '4px 4px',
      }} />
      <div style={{ position: 'absolute', inset: 0, padding: pad, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      {label && (
        <div style={{
          position: 'absolute', left: 10, bottom: 8,
          fontFamily: WF.mono, fontSize: 9, letterSpacing: '0.06em',
          color: tone === 'green' ? 'rgba(243,238,225,0.7)' : WF.faint,
          textTransform: 'uppercase',
        }}>{label}</div>
      )}
    </div>
  );
}

// Diagonal-striped photo placeholder with a monospace caption of what goes there
function PhotoSlot({ children = 'foto', h, flex, rotate = 0, taped = false, style = {} }) {
  return (
    <div style={{
      position: 'relative',
      height: h, flex: flex,
      background: 'repeating-linear-gradient(45deg, rgba(120,110,90,0.13) 0 6px, transparent 6px 12px)',
      border: `1.5px dashed ${WF.ink2}`,
      borderRadius: 2,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      boxShadow: taped ? '0 2px 6px rgba(0,0,0,0.18)' : 'none',
      padding: taped ? 6 : 0,
      ...style,
    }}>
      {taped && <span style={{
        position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%) rotate(-3deg)',
        width: 46, height: 16, background: 'rgba(180,170,140,0.55)',
        borderLeft: '1px dashed rgba(0,0,0,0.15)', borderRight: '1px dashed rgba(0,0,0,0.15)',
      }} />}
      <span style={{
        fontFamily: WF.mono, fontSize: 9.5, color: WF.ink2, textAlign: 'center',
        letterSpacing: '0.02em', lineHeight: 1.4, padding: '0 8px',
      }}>{children}</span>
    </div>
  );
}

// Placeholder lyric lines — pass count and optional widths
function Lines({ n = 5, w = [92, 80, 88, 70, 84], gap = 7, color, thick = 2 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{
          height: thick, width: (w[i % w.length]) + '%',
          background: color || WF.faint, borderRadius: 2,
        }} />
      ))}
    </div>
  );
}

// A blank-verse stanza block (group of lines + gap)
function Stanza({ rows = 4, color }) {
  return <Lines n={rows} w={[90, 78, 95, 68, 84, 72]} gap={6} color={color} thick={2} />;
}

// Handwritten annotation pinned in a corner explaining the concept
function Note({ children, style = {} }) {
  return (
    <div className="wf-note" style={{
      fontFamily: WF.hand, fontSize: 16, lineHeight: 1.05, color: WF.green,
      transform: 'rotate(-2deg)', ...style,
    }}>{children}</div>
  );
}

// The recurring "player" widget motif from the cover (progress bar + transport)
function PlayerBar({ pos = 0.4, label, sub, mini = false, color }) {
  const c = color || WF.ink;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mini ? 5 : 9, alignItems: 'center', width: '100%' }}>
      {label && <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: WF.sans, fontWeight: 700, fontSize: mini ? 12 : 15, color: c }}>{label}</div>
        {sub && <div style={{ fontFamily: WF.mono, fontSize: 9, color: WF.ink2, marginTop: 2 }}>{sub}</div>}
      </div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, width: '100%' }}>
        <span style={{ fontFamily: WF.mono, fontSize: 8, color: WF.ink2 }}>1:06</span>
        <div style={{ flex: 1, height: 3, background: WF.faint, borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: (pos * 100) + '%', background: c, borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: (pos * 100) + '%', top: '50%', transform: 'translate(-50%,-50%)', width: 8, height: 8, borderRadius: 99, background: c }} />
        </div>
        <span style={{ fontFamily: WF.mono, fontSize: 8, color: WF.ink2 }}>-0:43</span>
      </div>
      {!mini && <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: c, fontSize: 13 }}>
        <span>⇄</span><span>⏮</span>
        <span style={{ width: 26, height: 26, borderRadius: 99, border: `1.5px solid ${c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>▶</span>
        <span>⏭</span><span>↻</span>
      </div>}
    </div>
  );
}

// Small caps mono label
function Tag({ children, color, style = {} }) {
  return <div style={{ fontFamily: WF.mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: color || WF.ink2, ...style }}>{children}</div>;
}

// Big bold title (Helvetica-ish)
function Title({ children, size = 30, color, style = {} }) {
  return <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: size, lineHeight: 0.92, letterSpacing: '-0.01em', color: color || WF.ink, textTransform: 'uppercase', ...style }}>{children}</div>;
}

const TRACKS = [
  'sunday', 'in between', 'loose plans', 'coffee and gray', 'wrong number',
  'may 27', 'small town', 'walking around', 'maybe later', 'no rush',
];

Object.assign(window, { WF, Panel, PhotoSlot, Lines, Stanza, Note, PlayerBar, Tag, Title, TRACKS, sketchBorder, sketchBorderAlt });
