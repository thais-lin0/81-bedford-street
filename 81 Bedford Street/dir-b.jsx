// dir-b.jsx — Direction B: "Editorial / magazine"
// Big bold Helvetica typography, full-bleed photos, large page numbers,
// lyrics as two-column print spreads. Print-editorial, less player.

const SB = 380;
// wrapper removed — DCArtboard used directly

window.PanelsB = () => [
  // 1 — COVER: type dominates
  <DCArtboard width={380} height={380} key="b1" id="b-cover" label="B1 · capa">
    <Panel label="capa / frente">
      <Title size={52} style={{ marginTop: 4 }}>Thaís<br/>Lino</Title>
      <div style={{ height: 3, background: WF.ink, width: '60%', margin: '12px 0' }} />
      <Tag style={{ fontSize: 12, letterSpacing: '0.04em' }}>81 BEDFORD STREET — LP</Tag>
      <PhotoSlot h={120} style={{ marginTop: 'auto' }}>foto pequena, alinhada à base</PhotoSlot>
      <Note style={{ position: 'absolute', right: 8, top: 110 }}>tipo manda,<br/>foto secundária</Note>
    </Panel>
  </DCArtboard>,

  // 2 — SECTION DIVIDER: huge type
  <DCArtboard width={380} height={380} key="b2" id="b-divider" label="B2 · divisória">
    <Panel label="abertura / divisória" tone="paper2">
      <Tag>lado a — faixas 01–05</Tag>
      <div style={{ margin: 'auto 0' }}>
        <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: 120, lineHeight: 0.8, color: WF.ink }}>A</div>
        <Title size={20} style={{ marginTop: 8 }}>Sunday →<br/>Wrong Number</Title>
      </div>
      <Note style={{ position: 'absolute', right: 10, bottom: 30 }}>números gigantes<br/>marcam seções</Note>
    </Panel>
  </DCArtboard>,

  // 3 — LYRICS: two-column print spread
  <DCArtboard width={380} height={380} key="b3" id="b-lyrics" label="B3 · letra">
    <Panel label="spread de letra">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Title size={24}>Loose Plans</Title>
        <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: 30, color: WF.faint }}>03</div>
      </div>
      <div style={{ height: 2, background: WF.ink, margin: '10px 0 14px' }} />
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Stanza rows={4} /><Stanza rows={3} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Stanza rows={3} /><Stanza rows={4} />
        </div>
      </div>
      <Note style={{ position: 'absolute', right: 8, bottom: 26 }}>2 colunas<br/>justificadas</Note>
    </Panel>
  </DCArtboard>,

  // 4 — FULL-BLEED PHOTO with caption block
  <DCArtboard width={380} height={380} key="b4" id="b-photo" label="B4 · foto">
    <Panel label="foto full-bleed" pad={0}>
      <PhotoSlot flex={1} style={{ border: 'none', borderRadius: 0 }}>foto cheia, duotone<br/>(sépia / verde)</PhotoSlot>
      <div style={{ position: 'absolute', left: 16, bottom: 16, background: WF.paper, padding: '8px 12px', maxWidth: '70%' }}>
        <Tag>fig. 04</Tag>
        <div style={{ fontFamily: WF.sans, fontWeight: 700, fontSize: 12, marginTop: 3 }}>Bedford & Commerce, manhã.</div>
      </div>
    </Panel>
  </DCArtboard>,

  // 5 — COLOPHON / BACK
  <DCArtboard width={380} height={380} key="b5" id="b-credits" label="B5 · créditos/verso">
    <Panel label="colophon / verso">
      <Title size={20}>Ficha técnica</Title>
      <div style={{ height: 2, background: WF.ink, margin: '10px 0 12px' }} />
      <div style={{ display: 'flex', gap: 14 }}>
        <div style={{ flex: 1 }}><Tag>produção</Tag><Lines n={3} w={[80, 60, 70]} /></div>
        <div style={{ flex: 1 }}><Tag>gravação</Tag><Lines n={3} w={[70, 84, 60]} /></div>
      </div>
      <div style={{ marginTop: 14 }}><Tag>agradecimentos</Tag><Lines n={4} w={[92, 84, 88, 70]} /></div>
      <Tag style={{ marginTop: 'auto' }}>indie records · ir-0527 · 2026</Tag>
    </Panel>
  </DCArtboard>,
];
