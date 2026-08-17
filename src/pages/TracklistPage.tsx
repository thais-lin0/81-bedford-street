import qrCodeSite from "../assets/qr-code-site.png";
import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { Hair } from "../components/Hair";
import { TRACKS } from "../data";

/** Verso físico do encarte — tracklist, agradecimento e acesso ao álbum online. */
export function TracklistPage() {
  return (
    <PageShell tone="paper2">
      <div className="flex items-baseline justify-between">
        <Kicker>Lino</Kicker>
        <Kicker className="text-[7px] text-accent">verso · encarte</Kicker>
      </div>

      <h2 className="mt-1 font-grotesk text-[21px] font-extrabold leading-[0.95] tracking-tight">
        81 BEDFORD STREET
      </h2>

      <Hair className="mb-0.5 mt-2" />

      <div className="min-h-0 flex-1 overflow-hidden">
        {TRACKS.map(([title, duration], index) => (
          <div
            key={title}
            className="flex items-baseline gap-2 border-b border-faint py-[3px]"
          >
            <span className="w-4 font-mono text-[8px] text-ink-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-grotesk text-[10.5px] font-medium">
              {title}
            </span>
            <span className="font-mono text-[8px] text-ink-2">
              {duration}
            </span>
          </div>
        ))}
      </div>

      <Hair className="mb-2 mt-2" />

      <div className="flex items-end justify-between gap-3">
        <div className="shrink-0 -rotate-1">
          <div className="font-hand text-[24px] leading-none text-ink">
            obrigada,
          </div>
          <div className="mt-1 font-hand text-[14px] leading-none text-accent">
            
          </div>
        </div>

        <div className="flex h-[12mm] w-[19mm] shrink-0 items-center justify-center border-[2px] border-black bg-white p-[2px]">
          <div className="flex h-full w-full items-center justify-center border border-black">
            <span className="text-center font-grotesk text-[7px] font-bold leading-tight text-black">
              Smoking
              <br />
              kills
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-end gap-2">
          <div className="pb-0.5 text-right">
            <Kicker className="text-[6px]">escute online</Kicker>
            <Kicker className="mt-0.5 text-[5.5px] text-accent">scan →</Kicker>
          </div>
          <img
            src={qrCodeSite}
            alt="QR Code para ouvir 81 Bedford Street online"
            className="h-[18mm] w-[18mm] bg-white object-contain"
          />
        </div>
      </div>
    </PageShell>
  );
}
