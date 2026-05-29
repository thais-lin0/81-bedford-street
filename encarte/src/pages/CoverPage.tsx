import coverImg from "../assets/bedford-treated.jpg";

/** Página 1 — Capa frontal (foto full-bleed com tipografia sobreposta) */
export function CoverPage() {
  return (
    <div
      className="relative overflow-hidden bg-[#e8e0cc]"
      style={{ width: "120mm", height: "120mm" }}
    >
      {/* Foto full-bleed */}
      <img
        src={coverImg}
        alt="81 Bedford Street"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay escuro sutil na base para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Header — artista + selo */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-[6mm]">
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-white/90 drop-shadow-sm">
           Lino
        </span>

      </div>

      {/* Título grande — canto inferior esquerdo */}
      <div className="absolute bottom-0 left-0 right-0 p-[6mm] flex justify-between items-end">
        <h1 className="font-grotesk font-extrabold text-[28px] leading-[0.88] tracking-tight text-white drop-shadow-md">
          81 BEDFORD
          <br />
          STREET
        </h1>

        {/* Info — canto inferior direito */}
        <div className="text-right">
          <div className="font-mono text-[8px] tracking-[0.14em] uppercase text-white/80 leading-relaxed">
            LP · 2026
          </div>
        </div>
      </div>
    </div>
  );
}
