import { QRCodeSVG } from "qrcode.react";
import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { SITE_URL } from "../config";

/** Página 6 — Agradecimentos + QR code para ouvir online */
export function ThankYouPage() {
  return (
    <PageShell tone="paper2">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-hand text-[36px] text-ink leading-none -rotate-1">
          obrigada,
        </h2>

        <div className="mt-5 space-y-2 max-w-[80%]">
          <div className="h-0.5 w-[92%] bg-ink-2/40 rounded" />
          <div className="h-0.5 w-[80%] bg-ink-2/40 rounded" />
          <div className="h-0.5 w-[88%] bg-ink-2/40 rounded" />
          <div className="h-0.5 w-[72%] bg-ink-2/40 rounded" />
          <div className="h-0.5 w-[60%] bg-ink-2/40 rounded" />
        </div>

        <p className="font-hand text-[20px] text-accent mt-6 -rotate-1">
          com amor, Thaís
        </p>
      </div>

      {/* Footer: QR code + selo */}
      <div className="flex justify-between items-end mt-auto">
        {/* QR code para ouvir online */}
        <div className="flex items-end gap-2">
          <QRCodeSVG
            value={`${SITE_URL}/#player`}
            size={64}
            bgColor="transparent"
            fgColor="#26251f"
            level="M"
          />
          <div>
            <Kicker className="text-[7px]">escute online</Kicker>
            <Kicker className="text-[6px] mt-0.5 text-accent">scan →</Kicker>
          </div>
        </div>

        {/* Selo "Smoking kills" */}
        <div className="w-[22mm] h-[14mm] border-[3px] border-black bg-white flex items-center justify-center p-[2px]">
          <div className="w-full h-full border border-black flex items-center justify-center">
            <span className="font-grotesk font-bold text-[9px] text-black text-center leading-tight">
              Smoking
              <br />
              kills
            </span>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
