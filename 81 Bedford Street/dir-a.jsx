// dir-a.jsx — Direction A: "Tracklist Thread"
// The cover's player widget becomes the spine of the whole booklet.
// Every spread carries a progress bar showing where you are in the 10-track album.
// Lyrics sit beside a "now playing" header; photos are the blown-up album art.

const S = 380;

// wrapper removed — DCArtboard used directly

window.PanelsA = () => [
  // 1 — FRONT COVER
  <DCArtboard width={380} height={380} key="a1" id="a-cover" label="A1 · capa">
    <Panel label="capa / frente">
      <Tag>stereo · 33⅓ rpm</Tag>
      <Title size={34} style={{ marginTop: 8 }}>Thaís<br/>Lino</Title>
      <Tag style={{ marginTop: 6, fontSize: 11, letterSpacing: '0.02em' }}>81 BEDFORD STREET</Tag>
      <PhotoSlot h={150} style={{ marginTop: 12 }}>retrato na rua<br/>(toldo verde)</PhotoSlot>
      <div style={{ marginTop: 'auto', paddingTop: 12 }}>
        <PlayerBar pos={0.55} label="May 27" sub="Thaís Lino" />
      </div>
      <Note style={{ position: 'absolute', right: 8, top: 70, width: 96 }}>player vira o fio condutor →</Note>
    </Panel>
  </DCArtboard>,

  // 2 — INSIDE: ALBUM AS A PLAYLIST
  <DCArtboard width={380} height={380} key="a2" id="a-open" label="A2 · abertura">
    <Panel label="miolo / abertura" tone="paper2">
      <Tag>now playing — the whole record</Tag>
      <Title size={20} style={{ marginTop: 10 }}>10 faixas,<br/>uma tarde</Title>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {TRACKS.slice(0, 10).map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: WF.mono, fontSize: 9, color: WF.ink2, width: 16 }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontFamily: WF.sans, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>{t}</span>
            <div style={{ flex: 1, height: 2, background: WF.faint, marginLeft: 4 }} />
            <span style={{ fontFamily: WF.mono, fontSize: 8, color: WF.ink2 }}>{2 + (i % 3)}:{(10 + i * 7) % 60 < 10 ? '0' : ''}{(10 + i * 7) % 60}</span>
          </div>
        ))}
      </div>
      <Note style={{ position: 'absolute', right: 10, bottom: 28 }}>índice = mini barras</Note>
    </Panel>
  </DCArtboard>,

  // 3 — LYRICS, "now playing" style
  <DCArtboard width={380} height={380} key="a3" id="a-lyrics" label="A3 · letra">
    <Panel label="spread de letra">
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <span style={{ width: 30, height: 30, borderRadius: 99, border: `1.5px solid ${WF.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>▶</span>
        <div>
          <Tag>faixa 06</Tag>
          <div style={{ fontFamily: WF.sans, fontWeight: 800, fontSize: 22, textTransform: 'uppercase', lineHeight: 1 }}>May 27</div>
        </div>
      </div>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Stanza rows={4} />
        <Stanza rows={4} />
        <Stanza rows={3} />
      </div>
      <div style={{ marginTop: 'auto' }}>
        <PlayerBar pos={0.6} mini />
        <Tag style={{ textAlign: 'center', marginTop: 6, fontSize: 8 }}>faixa 6 de 10</Tag>
      </div>
    </Panel>
  </DCArtboard>,

  // 4 — PHOTO as blown-up album art
  <DCArtboard width={380} height={380} key="a4" id="a-photo" label="A4 · foto">
    <Panel label="foto / arte da faixa" pad={0}>
      <PhotoSlot flex={1} style={{ border: 'none', borderRadius: 0 }}>foto cheia<br/>(detalhe de NY / placa Commerce St)</PhotoSlot>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, background: 'linear-gradient(transparent, rgba(243,238,225,0.96) 40%)' }}>
        <PlayerBar pos={0.3} label="walking around" sub="08 · Thaís Lino" mini />
      </div>
    </Panel>
  </DCArtboard>,

  // 5 — CREDITS / BACK
  <DCArtboard width={380} height={380} key="a5" id="a-credits" label="A5 · créditos/verso">
    <Panel label="créditos / verso" tone="green">
      <Tag color="rgba(243,238,225,0.7)">indie records · ir-0527 · 2026</Tag>
      <Title size={18} color={WF.paper} style={{ marginTop: 10 }}>Créditos</Title>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <Lines n={6} w={[70, 84, 60, 78, 66, 80]} color="rgba(243,238,225,0.5)" />
      </div>
      <div style={{ marginTop: 'auto', paddingTop: 12 }}>
        <PlayerBar pos={1} label="no rush" sub="fim do álbum" mini color={WF.paper} />
      </div>
      <Note style={{ position: 'absolute', right: 8, top: 64, color: WF.paper, opacity: 0.85 }}>verso em verde<br/>(cor do toldo)</Note>
    </Panel>
  </DCArtboard>,
];
