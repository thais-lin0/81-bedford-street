// dir-c.jsx — Direction C: "Field notes / West Village scrapbook"
// A diary of a few days. Taped polaroids, handwritten captions + dates,
// lyrics typed on a typewriter sheet, a map detail of Bedford St. Personal, warm.

const SC = 380;
// wrapper removed — DCArtboard used directly

window.PanelsC = () => [
  // 1 — COVER: taped polaroid + handwritten title
  <DCArtboard width={380} height={380} key="c1" id="c-cover" label="C1 · capa">
    <Panel label="capa / frente" tone="paper2">
      <div style={{ fontFamily: WF.hand, fontSize: 40, color: WF.ink, lineHeight: 0.9, transform: 'rotate(-2deg)' }}>Thaís Lino</div>
      <div style={{ fontFamily: WF.hand, fontSize: 22, color: WF.green, transform: 'rotate(-1deg)', marginTop: 2 }}>81 bedford street</div>
      <PhotoSlot h={170} taped rotate={-3} style={{ marginTop: 18, marginLeft: 20, marginRight: 30 }}>polaroid<br/>(retrato)</PhotoSlot>
      <div style={{ fontFamily: WF.hand, fontSize: 16, color: WF.ink2, transform: 'rotate(1deg)', marginTop: 8, alignSelf: 'flex-end' }}>may, NYC</div>
    </Panel>
  </DCArtboard>,

  // 2 — OPENING NOTE / map
  <DCArtboard width={380} height={380} key="c2" id="c-open" label="C2 · abertura">
    <Panel label="nota de abertura">
      <div style={{ fontFamily: WF.hand, fontSize: 19, color: WF.ink, lineHeight: 1.15 }}>
        <div>uns dias na cherry lane,</div>
        <div>café e cinza, sem pressa…</div>
      </div>
      <PhotoSlot h={120} style={{ marginTop: 14 }}>mapa do quarteirão<br/>(Bedford & Commerce)</PhotoSlot>
      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        <PhotoSlot flex={1} h={70} taped rotate={-4}>ticket / selo</PhotoSlot>
        <div style={{ flex: 1.4 }}><Lines n={4} w={[90, 80, 86, 64]} /></div>
      </div>
      <Note style={{ position: 'absolute', right: 8, top: 14 }}>texto de abertura<br/>à mão</Note>
    </Panel>
  </DCArtboard>,

  // 3 — LYRICS on a typewriter sheet
  <DCArtboard width={380} height={380} key="c3" id="c-lyrics" label="C3 · letra">
    <Panel label="letra datilografada" tone="paper2">
      <div style={{ background: WF.paper, border: `1px solid ${WF.faint}`, padding: 16, flex: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.08)', transform: 'rotate(-0.6deg)' }}>
        <div style={{ fontFamily: WF.mono, fontSize: 11, fontWeight: 700 }}>04 — coffee and gray</div>
        <div style={{ fontFamily: WF.mono, fontSize: 8, color: WF.ink2, marginBottom: 12 }}>recorded may 27, 2026</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          <Lines n={4} w={[88, 74, 90, 66]} thick={2} />
          <Lines n={3} w={[80, 92, 70]} thick={2} />
          <Lines n={4} w={[72, 86, 64, 80]} thick={2} />
        </div>
      </div>
      <div style={{ fontFamily: WF.hand, fontSize: 16, color: WF.green, marginTop: 8, transform: 'rotate(-1deg)' }}>♪ favorita</div>
    </Panel>
  </DCArtboard>,

  // 4 — PHOTO COLLAGE
  <DCArtboard width={380} height={380} key="c4" id="c-photo" label="C4 · fotos">
    <Panel label="colagem de fotos">
      <div style={{ position: 'relative', flex: 1 }}>
        <PhotoSlot taped rotate={-5} style={{ position: 'absolute', top: 0, left: 0, width: 150, height: 150 }}>foto 1</PhotoSlot>
        <PhotoSlot taped rotate={4} style={{ position: 'absolute', top: 30, right: 0, width: 130, height: 160 }}>foto 2</PhotoSlot>
        <PhotoSlot taped rotate={-2} style={{ position: 'absolute', bottom: 0, left: 30, width: 140, height: 120 }}>foto 3</PhotoSlot>
        <div style={{ position: 'absolute', bottom: 18, right: 4, fontFamily: WF.hand, fontSize: 16, color: WF.ink2, transform: 'rotate(3deg)' }}>fim de tarde</div>
      </div>
      <Note style={{ position: 'absolute', right: 8, top: 12 }}>polaroids coladas,<br/>levemente tortas</Note>
    </Panel>
  </DCArtboard>,

  // 5 — THANK-YOU NOTE / BACK
  <DCArtboard width={380} height={380} key="c5" id="c-credits" label="C5 · créditos/verso">
    <Panel label="bilhete de agradecimento" tone="paper2">
      <div style={{ fontFamily: WF.hand, fontSize: 20, color: WF.ink, lineHeight: 1.2 }}>obrigada,</div>
      <div style={{ marginTop: 6 }}><Lines n={5} w={[92, 80, 88, 72, 60]} color={WF.ink2} thick={2} /></div>
      <div style={{ marginTop: 14, fontFamily: WF.hand, fontSize: 16, color: WF.green }}>com amor, Thaís</div>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Tag>ir-0527 · 2026</Tag>
        <PhotoSlot rotate={3} style={{ width: 70, height: 70 }}>selo</PhotoSlot>
      </div>
    </Panel>
  </DCArtboard>,
];
