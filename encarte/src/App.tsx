import { useEffect, useRef, useState } from "react";
import { CoverPage } from "./pages/CoverPage";
import { TracklistPage } from "./pages/TracklistPage";
import { LyricsPage } from "./pages/LyricsPage";
import { CreditsPage } from "./pages/CreditsPage";
import { PlayerPage } from "./pages/PlayerPage";
import {
  TrayCardTestPage,
  TRAY_CARD_TEST_HEIGHT_MM,
  TRAY_CARD_TEST_WIDTH_MM,
} from "./pages/TrayCardTestPage";
import { ExportButtons } from "./components/ExportButtons";
import { TRACKS } from "./data";

const PAGES = [
  {
    id: "cover",
    label: "Capa · frente",
    filename: "encarte-frente",
    widthMm: 120,
    heightMm: 120,
  },
  {
    id: "tracklist",
    label: "Verso · faixas + obrigada",
    filename: "encarte-verso",
    widthMm: 120,
    heightMm: 120,
  },
  {
    id: "tray-card-test",
    label: "Contracapa · teste 15×12",
    filename: "contracapa-teste-15x12",
    widthMm: TRAY_CARD_TEST_WIDTH_MM,
    heightMm: TRAY_CARD_TEST_HEIGHT_MM,
  },
  {
    id: "lyrics",
    label: "Letras",
    filename: "encarte-letras",
    widthMm: 120,
    heightMm: 120,
  },
  {
    id: "player",
    label: "▶ Player",
    filename: "player",
    widthMm: 120,
    heightMm: 120,
  },
  {
    id: "credits",
    label: "Créditos",
    filename: "encarte-creditos",
    widthMm: 120,
    heightMm: 120,
  },
] as const;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  const currentPage = PAGES[current];
  const isLyricsTab = currentPage.id === "lyrics";
  const isPlayerTab = currentPage.id === "player";

  // Ajusta as peças de impressão ao espaço disponível; o player é responsivo.
  useEffect(() => {
    if (isPlayerTab) {
      setScale(1);
      return;
    }

    function updateScale() {
      if (!pageRef.current || !containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth - 32;
      const pageWidth = pageRef.current.scrollWidth;
      if (pageWidth > 0) {
        setScale(Math.min(1, containerWidth / pageWidth));
      }
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [current, selectedTrack, isPlayerTab]);

  function renderBookletPage() {
    switch (currentPage.id) {
      case "cover":
        return <CoverPage />;
      case "tracklist":
        return <TracklistPage />;
      case "tray-card-test":
        return <TrayCardTestPage />;
      case "lyrics":
        return (
          <LyricsPage
            trackNo={selectedTrack + 1}
            trackTitle={TRACKS[selectedTrack][0]}
            trackDur={TRACKS[selectedTrack][1]}
          />
        );
      case "credits":
        return <CreditsPage />;
      case "player":
        return null;
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-800">
      <nav className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-neutral-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3">
          <span className="mr-2 shrink-0 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            Encarte
          </span>
          {PAGES.map((page, index) => (
            <button
              key={page.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`shrink-0 rounded px-3 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                index === current
                  ? "bg-accent text-paper"
                  : "text-neutral-300 hover:bg-neutral-700"
              } ${page.id === "player" ? "border border-neutral-600" : ""}`}
            >
              {page.label}
            </button>
          ))}

          {!isPlayerTab && (
            <div className="ml-auto shrink-0">
              <ExportButtons
                targetRef={pageRef}
                widthMm={currentPage.widthMm}
                heightMm={currentPage.heightMm}
                filename={
                  isLyricsTab
                    ? `encarte-letra-${String(selectedTrack + 1).padStart(2, "0")}-${TRACKS[selectedTrack][0].replace(/\s+/g, "-")}`
                    : currentPage.filename
                }
              />
            </div>
          )}
        </div>
      </nav>

      <div className="flex w-full flex-1">
        {isLyricsTab && (
          <aside className="w-56 shrink-0 overflow-y-auto border-r border-neutral-700 bg-neutral-900">
            <div className="p-3">
              <h3 className="mb-3 font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                Faixas
              </h3>
              {TRACKS.map(([title, duration], index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setSelectedTrack(index)}
                  className={`mb-1 w-full rounded px-3 py-2 text-left transition-colors ${
                    index === selectedTrack
                      ? "bg-accent text-paper"
                      : "text-neutral-300 hover:bg-neutral-700"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[9px] text-inherit opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 truncate font-grotesk text-[12px] font-medium">
                      {title}
                    </span>
                    <span className="font-mono text-[9px] opacity-50">
                      {duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}

        <main
          ref={containerRef}
          className={`flex flex-1 flex-col items-center px-4 py-8 md:py-12 ${
            isPlayerTab ? "min-w-0" : ""
          }`}
        >
          {isPlayerTab ? (
            <PlayerPage
              currentTrack={selectedTrack}
              onTrackChange={setSelectedTrack}
            />
          ) : (
            <>
              <div
                className="flex w-full justify-center overflow-hidden"
                style={{
                  height: pageRef.current
                    ? pageRef.current.scrollHeight * scale
                    : "auto",
                }}
              >
                <div
                  ref={pageRef}
                  className="origin-top overflow-hidden rounded-sm shadow-2xl"
                  style={{ transform: `scale(${scale})` }}
                >
                  {renderBookletPage()}
                </div>
              </div>

              <div className="mt-4 text-center font-mono text-[9px] text-neutral-500">
                {currentPage.widthMm} mm × {currentPage.heightMm} mm — tamanho real para impressão
              </div>
            </>
          )}

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="font-mono text-xs text-neutral-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← anterior
            </button>
            <span className="font-mono text-[10px] text-neutral-500">
              {current + 1} / {PAGES.length}
            </span>
            <button
              type="button"
              onClick={() => setCurrent(Math.min(PAGES.length - 1, current + 1))}
              disabled={current === PAGES.length - 1}
              className="font-mono text-xs text-neutral-400 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              próxima →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
