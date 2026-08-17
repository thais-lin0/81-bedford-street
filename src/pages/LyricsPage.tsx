import { useLayoutEffect, useRef, useState } from "react";
import { PageShell } from "../components/PageShell";
import { Kicker } from "../components/Kicker";
import { Hair } from "../components/Hair";
import { SONGS } from "../data";

/**
 * Renderiza a letra em múltiplas colunas (mínimo 2) e escolhe automaticamente
 * a combinação de nº de colunas + tamanho de fonte que preenche melhor a
 * página, mantendo a maior fonte possível que ainda caiba na altura.
 */
function AutoFitLyrics({ lyrics }: { lyrics: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(9);
  const [columns, setColumns] = useState(2);

  const stanzas = lyrics
    .trim()
    .split(/\n\s*\n/)
    .map((s) => s.split("\n"));

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const innerEl = inner;

    const MAX = 9;
    const MIN = 4;
    const available = outer.clientHeight;

    // Para cada nº de colunas, acha a maior fonte que cabe na altura.
    function bestFontFor(cols: number): number {
      innerEl.style.columnCount = String(cols);
      let size = MAX;
      innerEl.style.fontSize = `${size}px`;
      while (size > MIN && innerEl.scrollHeight > available) {
        size -= 0.25;
        innerEl.style.fontSize = `${size}px`;
      }
      return size;
    }

    // Sempre pelo menos 2 colunas; 3 colunas ajuda letras longas a
    // usarem fonte maior. Escolhe o que der a maior fonte (empate = menos colunas).
    const candidates = [2, 3];
    let bestCols = 2;
    let bestSize = 0;
    for (const cols of candidates) {
      const size = bestFontFor(cols);
      if (size > bestSize + 0.01) {
        bestSize = size;
        bestCols = cols;
      }
    }

    setColumns(bestCols);
    setFontSize(bestSize);
  }, [lyrics]);

  return (
    <div ref={outerRef} className="flex-1 min-h-0 overflow-hidden">
      <div
        ref={innerRef}
        className="gap-4 font-grotesk text-ink"
        style={{ columnCount: columns, fontSize: `${fontSize}px`, lineHeight: 1.5 }}
      >
        {stanzas.map((lines, i) => (
          <div key={i} className="mb-2 break-inside-avoid">
            {lines.map((l, j) => (
              <div key={j}>{l}</div>
            ))}
          </div>
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
  const lyrics = SONGS[trackTitle];

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

      {lyrics ? (
        <AutoFitLyrics lyrics={lyrics} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <span className="font-mono text-[9px] text-accent opacity-70 tracking-wide uppercase">
            letra em breve
          </span>
        </div>
      )}

      <div className="flex justify-between items-end pt-2">
        <Kicker className="text-[8px]">letra · t. lino + claude</Kicker>
        <Kicker className="text-[8px]">{String(trackNo).padStart(2, "0")} / 10</Kicker>
      </div>
    </PageShell>
  );
}
