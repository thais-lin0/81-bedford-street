// hifi-kit.jsx — hi-fi "Grid Mínimo" system for Thaís Lino · 81 Bedford Street
// Vintage paper, Swiss grid, Archivo + Space Mono, toldo-green accent.
// Tokens use CSS vars so the Tweaks panel can retheme live.

const HF = {
  paper:  'var(--paper, #f1ebdc)',
  paper2: 'var(--paper2, #e8e0cc)',
  ink:    '#26251f',
  ink2:   'rgba(38,37,31,0.52)',
  faint:  'rgba(38,37,31,0.16)',
  hair:   'rgba(38,37,31,0.22)',
  accent: 'var(--accent, #33493d)',
  grotesk: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  mono:    "'Space Mono', ui-monospace, monospace",
  serif:   "'Newsreader', Georgia, serif",
  lyric:   "var(--lyric-font, 'Archivo', sans-serif)",
};

// subtle paper grain as an inline SVG turbulence
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

const PAGE = 640;

function Page({ children, tone = 'paper', pad = 52, footer, label }) {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', boxSizing: 'border-box',
      background: tone === 'accent' ? HF.accent : (tone === 'paper2' ? HF.paper2 : HF.paper),
      color: tone === 'accent' ? HF.paper : HF.ink,
      fontFamily: HF.grotesk, overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, backgroundSize: '180px 180px', mixBlendMode: 'multiply', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, padding: pad, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        {children}
        {footer && <div style={{ marginTop: 'auto' }}>{footer}</div>}
      </div>
    </div>
  );
}

// mono micro-label
function Kicker({ children, color, style = {} }) {
  return <div style={{ fontFamily: HF.mono, fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: color || HF.ink2, ...style }}>{children}</div>;
}

function Hair({ color, style = {} }) {
  return <div style={{ height: 1, background: color || HF.hair, ...style }} />;
}

// standard page footer: index marker · album · page no.
function Footer({ left, right }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 18 }}>
      <Kicker style={{ fontSize: 9.5 }}>{left}</Kicker>
      <Kicker style={{ fontSize: 9.5 }}>{right}</Kicker>
    </div>
  );
}

// uniform photo frame; src optional -> placeholder if absent
function PhotoFrame({ src, alt, caption, style = {}, fit = 'cover', treat = true }) {
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', height: '100%', ...style }}>
      <div style={{ position: 'relative', flex: 1, border: `1px solid ${HF.hair}`, background: HF.paper2, overflow: 'hidden' }}>
        {src ? (
          <img src={src} alt={alt || ''} className={treat ? 'hf-photo' : ''} style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'repeating-linear-gradient(45deg, rgba(38,37,31,0.06) 0 8px, transparent 8px 16px)' }}>
            <span style={{ fontFamily: HF.mono, fontSize: 10, color: HF.ink2, letterSpacing: '0.04em' }}>{alt || 'foto'}</span>
          </div>
        )}
      </div>
      {caption && <figcaption style={{ fontFamily: HF.mono, fontSize: 9.5, color: HF.ink2, marginTop: 8, letterSpacing: '0.04em' }}>{caption}</figcaption>}
    </figure>
  );
}

Object.assign(window, { HF, Page, Kicker, Hair, Footer, PhotoFrame, PAGE });
