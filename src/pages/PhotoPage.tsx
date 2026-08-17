import { PageShell } from "../components/PageShell";
import { PhotoFrame } from "../components/PhotoFrame";
import bedfordImg from "../assets/bedford-treated.jpg";
import photo02 from "../assets/photo-02.jpg";
import photo03 from "../assets/photo-03.jpg";

/** Página de fotos 1 — fotos do álbum */
export function PhotoPage1() {
  return (
    <PageShell>
      <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden">
        <div className="col-span-1 row-span-2 min-h-0 overflow-hidden">
          <PhotoFrame src={bedfordImg} alt="Bedford & Commerce" />
        </div>
        <div className="min-h-0 overflow-hidden">
          <PhotoFrame src={photo02} alt="retrato" />
        </div>
        <div className="min-h-0 overflow-hidden">
          <PhotoFrame src={photo03} alt="detalhe" />
        </div>
      </div>
    </PageShell>
  );
}

/** Polaroid placeholder — X marks where a photo will go */
function PolaroidSlot({ label = "foto" }: { label?: string }) {
  return (
    <div className="h-full bg-white p-[4px] pb-[16px] shadow-md flex flex-col">
      <div className="relative flex-1 bg-paper-2 border border-faint overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(38,37,31,0.2)" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(38,37,31,0.2)" strokeWidth="0.5" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-ink-2">
          {label}
        </span>
      </div>
    </div>
  );
}

/** Página de fotos 2 — polaroids (placeholder) */
export function PhotoPage2() {
  return (
    <PageShell>
      <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-3 overflow-hidden">
        <PolaroidSlot label="polaroid 1" />
        <PolaroidSlot label="polaroid 2" />
        <PolaroidSlot label="polaroid 3" />
        <PolaroidSlot label="polaroid 4" />
      </div>
    </PageShell>
  );
}
