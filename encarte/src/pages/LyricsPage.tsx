import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { Hair } from "../components/Hair";
import { SONG, SongSection } from "../data";

function Section({ s }: { s: SongSection }) {
  return (
    <div className="mb-2.5">
      <div className="flex items-baseline gap-2 mb-0.5">
        <span className="font-mono text-[7px] tracking-[0.12em] uppercase font-bold text-ink">
          {s.label}
        </span>
        <span className="font-mono text-[6px] text-accent opacity-80">
          {s.notes[0]}
        </span>
      </div>
      <div className="font-grotesk text-[8.5px] leading-[1.45] text-ink">
        {s.lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}

interface LyricsPageProps {
  trackNo: number;
  trackTitle: string;
  trackDur: string;
}

/** Página de letra — mostra a letra de uma faixa no formato 120×120mm */
export function LyricsPage({ trackNo, trackTitle, trackDur }: LyricsPageProps) {
  const leftSections = SONG.sections.slice(0, 3);
  const rightSections = SONG.sections.slice(3);

  return (
    <PageShell>
      <div className="flex justify-between items-baseline">
        <Kicker>Faixa {String(trackNo).padStart(2, "0")} · 81 Bedford Street</Kicker>
        <Kicker>{trackDur}</Kicker>
      </div>

      <h2 className="font-grotesk font-extrabold text-[22px] tracking-tight leading-[0.9] mt-1">
        {trackTitle}
      </h2>

      <Hair className="my-2" />

      <div className="font-mono text-[6.5px] text-accent mb-2 flex flex-wrap gap-x-2">
        {SONG.intro.map((n, i) => (
          <span key={i}>
            {n}
            {i < SONG.intro.length - 1 ? " ·" : ""}
          </span>
        ))}
      </div>

      <div className="flex-1 flex gap-3 min-h-0">
        <div className="flex-1 flex flex-col">
          {leftSections.map((s, i) => (
            <Section key={i} s={s} />
          ))}
        </div>
        <div className="w-px bg-faint shrink-0" />
        <div className="flex-1 flex flex-col">
          {rightSections.map((s, i) => (
            <Section key={i} s={s} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-end pt-2">
        <Kicker className="text-[8px]">letra · t. lino + claude</Kicker>
        <Kicker className="text-[8px]">{String(trackNo).padStart(2, "0")} / 10</Kicker>
      </div>
    </PageShell>
  );
}
