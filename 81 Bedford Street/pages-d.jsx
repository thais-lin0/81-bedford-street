// pages-d.jsx — hi-fi Grid Mínimo pages with real content
// Song: "in between" (track 02). Arrangement directions become score marginalia.

const TRACKS_D = [
  ['sunday', '2:54'], ['in between', '3:17'], ['loose plans', '4:02'],
  ['coffee and gray', '2:31'], ['wrong number', '3:38'], ['may 27', '4:45'],
  ['small town', '2:52'], ['walking around', '3:59'], ['maybe later', '4:06'], ['no rush', '5:13'],
];

const SONG = {
  no: '02', title: 'in between', dur: '3:17',
  intro: ['allegro · lo-fi, dry room', 'guitar stab → silence', 'bass alone, staccato', 'drums crash in — no buildup'],
  sections: [
    { label: 'verse 1', notes: ['pianissimo', 'clean guitar only', 'deadpan, spoken-sung'], lines: [
      'Neon on the window, midnight in the room',
      'Two cups on the counter, one went cold too soon',
      'You said, “Don\u2019t call it nothing,” I said, “I won\u2019t try”',
      'We were halfway to a sunrise and still staring at the sky',
    ] },
    { label: 'pre-chorus', notes: ['bass staccato', 'kick on downbeat'], lines: [
      'Every almost had a name', 'Every silence felt the same',
      'Like a match held in the rain', 'Just enough to feel the flame',
    ] },
    { label: 'chorus', notes: ['fortissimo — full band', 'raw, shouted', 'no reverb added'], lines: [
      'We were the in-between, the never-and-the-might',
      'A ghost in the hallway, a spark in the light',
      'Not a beginning, not a goodbye',
      'Just two bad timing hearts passing in the night',
      'And I still feel it when the city goes still',
      'That something we lost before it knew how to live',
      'We were the in-between, and maybe we still are',
      'A beautiful bruise, a vanished star',
    ] },
    { label: 'verse 2', notes: ['diminuendo → silence', 'half-whispered, dry'], lines: [
      'Your jacket on my chair, my song on your phone',
      'Little things that linger like they never went home',
      'I learned the shape of you in the back of my mind',
      'A map with no destination, just lines that crossed in time',
    ] },
    { label: 'bridge', notes: ['bass pedal point, legato', 'spoken, flat affect'], lines: [
      'If I say your name, it changes in the air',
      'If I look too long, I find you everywhere',
      'So I keep on walking past the place we used to be',
      'Where the almost turns to memory',
      'And memory turns to me',
    ] },
    { label: 'outro', notes: ['feedback squeal, tremolo', 'lo-fi tape hiss', 'no clean ending'], lines: [
      'Something that could happen', 'Something that never did',
      'Still lives in the hush', 'Of everything we hid',
    ] },
  ],
};

function Section({ s }) {
  return (
    <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
      <div style={{ width: 92, flexShrink: 0, textAlign: 'right' }}>
        <div style={{ fontFamily: HF.mono, fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: HF.ink, fontWeight: 700 }}>{s.label}</div>
        <div className="hf-notes" style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {s.notes.map((n, i) => <div key={i} style={{ fontFamily: HF.mono, fontSize: 7.8, lineHeight: 1.3, color: HF.accent, opacity: 0.92 }}>{n}</div>)}
        </div>
      </div>
      <div style={{ flex: 1, fontFamily: HF.lyric, fontSize: 13.5, lineHeight: 1.56, color: HF.ink, fontWeight: 400 }}>
        {s.lines.map((l, i) => <div key={i} style={{ paddingLeft: 13, textIndent: -13 }}>{l}</div>)}
      </div>
    </div>
  );
}

function ABoardD({ id, label, w, children }) {
  return <DCArtboard id={id} label={label} width={w} height={640}>{children}</DCArtboard>;
}

window.HiFiPages = () => [
  // COVER ------------------------------------------------------------
  <DCArtboard key="cv" id="d-cover" label="capa" width={640} height={640}>
    <Page pad={48}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Kicker>Thaís Lino</Kicker>
        <Kicker>Indie Records · IR-0527</Kicker>
      </div>
      <Hair style={{ marginTop: 12 }} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '26px 0' }}>
        <div style={{ width: 300, height: 392 }}>
          <PhotoFrame src="assets/bedford-treated.jpg" alt="81 Bedford Street" />
        </div>
      </div>
      <Hair style={{ marginBottom: 14 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: HF.grotesk, fontWeight: 800, fontSize: 30, letterSpacing: '-0.01em', lineHeight: 0.95 }}>81 BEDFORD<br/>STREET</div>
        </div>
        <Kicker style={{ textAlign: 'right' }}>LP · 2026<br/>Stereo · 33⅓</Kicker>
      </div>
    </Page>
  </DCArtboard>,

  // LYRIC SPREAD (two facing booklet pages) --------------------------
  <DCArtboard key="ly" id="d-lyric" label="letra · in between (spread)" width={1284} height={640}>
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', background: HF.paper, fontFamily: HF.grotesk }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, backgroundSize: '180px 180px', mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 2 }} />
      {/* gutter crease */}
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 40, transform: 'translateX(-50%)', background: 'linear-gradient(90deg, transparent, rgba(38,37,31,0.10) 45%, rgba(38,37,31,0.10) 55%, transparent)', zIndex: 1, pointerEvents: 'none' }} />

      {/* LEFT PAGE */}
      <div style={{ width: 642, boxSizing: 'border-box', padding: '52px 40px 44px 52px', display: 'flex', flexDirection: 'column', color: HF.ink }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Kicker>Faixa 02 · 81 Bedford Street</Kicker>
          <Kicker>3:17</Kicker>
        </div>
        <div style={{ fontFamily: HF.grotesk, fontWeight: 800, fontSize: 40, letterSpacing: '-0.015em', lineHeight: 0.9, marginTop: 10 }}>in between</div>
        <Hair style={{ margin: '16px 0 14px' }} />
        {/* intro arrangement legend */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
          <div style={{ width: 92, flexShrink: 0, textAlign: 'right', fontFamily: HF.mono, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: HF.ink }}>intro</div>
          <div className="hf-notes" style={{ flex: 1, fontFamily: HF.mono, fontSize: 8, lineHeight: 1.5, color: HF.accent, display: 'flex', flexWrap: 'wrap', gap: '2px 12px' }}>
            {SONG.intro.map((n, i) => <span key={i}>{n}{i < SONG.intro.length - 1 ? ' ·' : ''}</span>)}
          </div>
        </div>
        {SONG.sections.slice(0, 3).map((s, i) => <Section key={i} s={s} />)}
      </div>

      {/* RIGHT PAGE */}
      <div style={{ width: 642, boxSizing: 'border-box', padding: '52px 52px 44px 40px', display: 'flex', flexDirection: 'column', color: HF.ink }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Kicker>letra · t. lino</Kicker>
        </div>
        <div style={{ marginTop: 18 }}>
          {SONG.sections.slice(3).map((s, i) => <Section key={i} s={s} />)}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 14 }}>
          <Kicker style={{ fontSize: 9 }}>chorus repeats · then outro</Kicker>
          <Kicker style={{ fontSize: 9 }}>02 / 10</Kicker>
        </div>
      </div>
    </div>
  </DCArtboard>,

  // TRACKLIST / BACK -------------------------------------------------
  <DCArtboard key="tl" id="d-back" label="contracapa · faixas" width={640} height={640}>
    <Page pad={48}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Kicker>Thaís Lino</Kicker>
        <Kicker>IR-0527 · 2026</Kicker>
      </div>
      <div style={{ fontFamily: HF.grotesk, fontWeight: 800, fontSize: 30, letterSpacing: '-0.01em', marginTop: 14, lineHeight: 0.95 }}>81 BEDFORD STREET</div>
      <Hair style={{ margin: '20px 0 4px' }} />
      <div>
        {TRACKS_D.map(([t, d], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 14, padding: '8.5px 0', borderBottom: `1px solid ${HF.faint}` }}>
            <span style={{ fontFamily: HF.mono, fontSize: 11, color: HF.ink2, width: 22 }}>{String(i + 1).padStart(2, '0')}</span>
            <span style={{ fontFamily: HF.grotesk, fontSize: 15, fontWeight: 500, flex: 1 }}>{t}</span>
            <span style={{ fontFamily: HF.mono, fontSize: 10.5, color: HF.ink2 }}>{d}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 18 }}>
        <Kicker style={{ fontSize: 9, lineHeight: 1.7 }}>Voz & letras — Thaís Lino<br/>Gravado em Greenwich Village, NY</Kicker>
        <Kicker style={{ fontSize: 9 }}>Stereo · 33⅓</Kicker>
      </div>
    </Page>
  </DCArtboard>,

  // PHOTO PAGE -------------------------------------------------------
  <DCArtboard key="ph" id="d-photo" label="página de foto" width={640} height={640}>
    <Page pad={48}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
        <Kicker>Imagens</Kicker>
        <Kicker>01 — 04</Kicker>
      </div>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14 }}>
        <div style={{ gridRow: '1 / 3' }}><PhotoFrame src="assets/bedford-treated.jpg" alt="Bedford & Commerce" caption="Bedford & Commerce · May 27" /></div>
        <PhotoFrame alt="retrato" caption="retrato" />
        <PhotoFrame alt="detalhe" caption="detalhe / rua" />
      </div>
      <Hair style={{ marginTop: 16 }} />
      <Kicker style={{ fontSize: 9, marginTop: 10 }}>Molduras idênticas · suba mais fotos para preencher</Kicker>
    </Page>
  </DCArtboard>,
];
