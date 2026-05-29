import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { Hair } from "../components/Hair";
import { TRACKS } from "../data";

/** Página 2 — Contracapa / Tracklist */
export function TracklistPage() {
  return (
    <PageShell>
      {/* header */}
      <div className="flex justify-between items-baseline">
        <Kicker> Lino</Kicker>
      </div>

      <h2 className="font-grotesk font-extrabold text-[22px] tracking-tight leading-[0.95] mt-2">
        81 BEDFORD STREET
      </h2>

      <Hair className="mt-2 mb-1" />

      {/* track list */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {TRACKS.map(([title, duration], i) => (
          <div
            key={i}
            className="flex items-baseline gap-2 py-[5px] border-b border-faint"
          >
            <span className="font-mono text-[9px] text-ink-2 w-4">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-grotesk text-[11px] font-medium flex-1">
              {title}
            </span>
            <span className="font-mono text-[9px] text-ink-2">
              {duration}
            </span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
