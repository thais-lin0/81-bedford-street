import brickTile from "../assets/brick-tile.png";
import qrCodeSite from "../assets/qr-code-site.png";
import { TRACKS } from "../data";

export const TRAY_CARD_TEST_WIDTH_MM = 150;
export const TRAY_CARD_TEST_HEIGHT_MM = 120;

/**
 * Contracapa de teste baseada na medida física informada:
 * painel traseiro de 130 mm à esquerda + duas faixas de 10 mm à direita.
 */
export function TrayCardTestPage() {
  return (
    <div
      className="relative flex flex-row-reverse overflow-hidden bg-paper-2 text-ink"
      style={{
        width: `${TRAY_CARD_TEST_WIDTH_MM}mm`,
        height: `${TRAY_CARD_TEST_HEIGHT_MM}mm`,
      }}
    >
      <div className="grain absolute inset-0" />

      {/* Primeira faixa de 1 cm — textura de tijolos */}
      <div className="relative w-[10mm] shrink-0 overflow-hidden border-r border-ink/60">
        <img
          src={brickTile}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Segunda faixa de 1 cm */}
      <div className="relative flex w-[10mm] shrink-0 items-center justify-center border-l border-dashed border-ink/60 bg-ink text-paper">
        <span
          className="whitespace-nowrap font-mono text-[7px] font-bold uppercase tracking-[0.12em]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          81 Bedford Street
        </span>
      </div>

      {/* Painel traseiro de 13 cm */}
      <div className="relative flex w-[130mm] shrink-0 flex-col p-[7mm]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-accent">
              Lino · 2026
            </div>
            <h2 className="mt-1 font-grotesk text-[24px] font-extrabold leading-none tracking-tight">
              81 BEDFORD STREET
            </h2>
          </div>
        </div>

        <div className="mt-[5mm] grid grid-flow-col grid-cols-2 grid-rows-5 gap-x-[8mm] gap-y-0">
          {TRACKS.map(([title, duration], index) => (
            <div
              key={title}
              className="flex items-baseline gap-2 border-b border-faint py-[4px]"
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

        <div className="mt-auto flex items-end justify-between border-t border-hair pt-[4mm]">
          <div className="flex h-[14mm] w-[22mm] shrink-0 items-center justify-center border-[3px] border-black bg-white p-[2px]">
            <div className="flex h-full w-full items-center justify-center border border-black">
              <span className="text-center font-grotesk text-[9px] font-bold leading-tight text-black">
                Smoking
                <br />
                kills
              </span>
            </div>
          </div>

          <div className="max-w-[42mm] font-mono text-[6.5px] leading-relaxed text-ink-2">
            <div>Letras · Lino + Claude</div>
            <div>Produção musical · Suno AI</div>
            <div className="mt-1 text-accent">bedford-street.vercel.app</div>
          </div>

          <div className="flex items-end gap-2">
            <div className="pb-1 text-right font-mono text-[6px] uppercase tracking-[0.12em] text-accent">
              escute
              <br />
              online →
            </div>
            <img
              src={qrCodeSite}
              alt="QR Code para ouvir 81 Bedford Street online"
              className="h-[19mm] w-[19mm] bg-white object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
