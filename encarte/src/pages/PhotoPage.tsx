import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { Hair } from "../components/Hair";
import { PhotoFrame } from "../components/PhotoFrame";
import bedfordImg from "../assets/bedford-treated.jpg";
import photo02 from "../assets/photo-02.jpg";
import photo03 from "../assets/photo-03.jpg";

/** Página 4 — Grid de fotos */
export function PhotoPage() {
  return (
    <PageShell>
      <div className="flex justify-between items-baseline mb-3">
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-[1.3fr_1fr] grid-rows-[1fr_1fr] gap-2.5 overflow-hidden">
        <div className="row-span-2 min-h-0 overflow-hidden">
          <PhotoFrame
            src={bedfordImg}
            alt="Bedford & Commerce"
          />
        </div>
        <div className="min-h-0 overflow-hidden">
          <PhotoFrame
            src={photo02}
            alt="retrato"
          />
        </div>
        <div className="min-h-0 overflow-hidden">
          <PhotoFrame
            src={photo03}
            alt="detalhe"
          />
        </div>
      </div>

      <Hair className="mt-3" />

    </PageShell>
  );
}
