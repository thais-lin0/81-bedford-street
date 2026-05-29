// dir-d.jsx — Direction D: "Minimal grid"
// Strict Swiss grid, lots of whitespace, monospace tracklist, hairline rules,
// photos in identical uniform frames. The quietest, most modern option.

const SD = 380;
// wrapper removed — DCArtboard used directly
const hair = `1px solid ${WF.faint}`;

window.PanelsD = () => [
  // 1 — COVER: minimal, centered small photo, mono tracklist below
  <DCArtboard width={380} height={380} key="d1" id="d-cover" label="D1 · capa">
    <Panel label="capa / frente" pad={26}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tag>thaís lino</Tag><Tag>ir-0527</Tag>
      </div>
      <PhotoSlot h={150} style={{ marginTop: 22, border: hair, background: 'repeating-linear-gradient(45deg, rgba(120,110,90,0.08) 0 6px, transparent 6px 12px)' }}>retrato centralizado</PhotoSlot>
      <div style={{ marginTop: 22, textAlign: 'center' }}>
        <div style={{ fontFamily: WF.sans, fontWeight: 700, fontSize: 16, letterSpacing: '0.02em' }}>81 BEDFORD STREET</div>
      </div>
      <Note style={{ position: 'absolute', right: 6, bottom: 24 }}>muito ar,<br/>centralizado</Note>
    </Panel>
  </DCArtboard>,

  // 2 — INDEX: aligned mono table
  <DCArtboard width={380} height={380} key="d2" id="d-index" label="D2 · índice">
    <Panel label="índice" pad={26}>
      <Tag style={{ marginBottom: 12 }}>faixas</Tag>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {TRACKS.map((t, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: hair }}>
            <span style={{ fontFamily: WF.mono, fontSize: 10 }}>{String(i + 1).padStart(2, '0')}　{t}</span>
            <span style={{ fontFamily: WF.mono, fontSize: 9, color: WF.ink2 }}>{2 + (i % 3)}:{String((i * 13) % 50 + 9).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
      <Note style={{ position: 'absolute', right: 8, top: 24, textAlign: 'right' }}>fios de cabelo,<br/>monospace</Note>
    </Panel>
  </DCArtboard>,

  // 3 — LYRICS: single narrow column, track no. in margin
  <DCArtboard width={380} height={380} key="d3" id="d-lyrics" label="D3 · letra">
    <Panel label="letra / coluna única" pad={26}>
      <div style={{ display: 'flex', gap: 18, flex: 1 }}>
        <div style={{ width: 28 }}>
          <div style={{ fontFamily: WF.mono, fontSize: 11, color: WF.ink2 }}>05</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: WF.sans, fontWeight: 700, fontSize: 15 }}>wrong number</div>
          <div style={{ height: 1, background: WF.faint, margin: '12px 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <Stanza rows={3} /><Stanza rows={4} /><Stanza rows={2} />
          </div>
        </div>
      </div>
      <Note style={{ position: 'absolute', right: 6, bottom: 22 }}>nº na margem,<br/>1 coluna estreita</Note>
    </Panel>
  </DCArtboard>,

  // 4 — PHOTOS: uniform 2×2 grid
  <DCArtboard width={380} height={380} key="d4" id="d-photo" label="D4 · fotos">
    <Panel label="grid de fotos 2×2" pad={26}>
      <Tag style={{ marginBottom: 12 }}>imagens — 01–04</Tag>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1 }}>
        {[1, 2, 3, 4].map(n => (
          <PhotoSlot key={n} style={{ border: hair }}>foto {n}</PhotoSlot>
        ))}
      </div>
      <Note style={{ position: 'absolute', right: 6, bottom: 22 }}>molduras<br/>idênticas</Note>
    </Panel>
  </DCArtboard>,

  // 5 — CREDITS: aligned monospace table / BACK
  <DCArtboard width={380} height={380} key="d5" id="d-credits" label="D5 · créditos/verso">
    <Panel label="créditos / verso" pad={26}>
      <Tag style={{ marginBottom: 12 }}>créditos</Tag>
      {[['voz / letras', 'thaís lino'], ['produção', '—'], ['mixagem', '—'], ['masterização', '—'], ['fotos', '—'], ['design', '—']].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: hair }}>
          <span style={{ fontFamily: WF.mono, fontSize: 9.5, color: WF.ink2 }}>{r[0]}</span>
          <span style={{ fontFamily: WF.mono, fontSize: 9.5 }}>{r[1]}</span>
        </div>
      ))}
      <Tag style={{ marginTop: 'auto' }}>indie records · 2026</Tag>
    </Panel>
  </DCArtboard>,
];
