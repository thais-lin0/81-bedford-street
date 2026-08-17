import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { Hair } from "../components/Hair";

const CREDITS = [
  ["artista", "lino"],
  ["letras", "thais lino + claude (anthropic)"],
  ["produção musical", "suno ai"],
  ["mixagem", "suno ai"],
  ["fotos", "thais lino"],
  ["design do encarte", "thais lino + kiro"],
  ["gravação", "greenwich village, ny"],
];

/** Página 5 — Créditos / Ficha técnica */
export function CreditsPage() {
  return (
    <PageShell>
      <Kicker className="mb-2">créditos</Kicker>

      <div className="flex-1 min-h-0 overflow-hidden">
        {CREDITS.map(([role, name], i) => (
          <div
            key={i}
            className="flex justify-between py-[5px] border-b border-faint"
          >
            <span className="font-mono text-[8.5px] text-ink-2">{role}</span>
            <span className="font-mono text-[8.5px] text-ink">{name}</span>
          </div>
        ))}

        <Hair className="mt-3 mb-2" />

        <div className="font-mono text-[7.5px] text-ink-2 leading-relaxed space-y-1">
          <p>
            Letras escritas em colaboração com Claude Code (Anthropic).
          </p>
          <p>
            Músicas geradas e produzidas com Suno AI.
          </p>
        </div>
      </div>

    </PageShell>
  );
}
