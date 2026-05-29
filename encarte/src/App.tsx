import { useEffect, useRef, useState } from "react";
import { CoverPage } from "./pages/CoverPage";
import { TracklistPage } from "./pages/TracklistPage";
import { LyricsPage } from "./pages/LyricsPage";
import { PhotoPage } from "./pages/PhotoPage";
import { CreditsPage } from "./pages/CreditsPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { PlayerPage } from "./pages/PlayerPage";
import { ExportButtons } from "./components/ExportButtons";
import { TRACKS } from "./data";

const PAGES = [
  { id: "cover", label: "Capa", filename: "encarte-capa" },
  { id: "tracklist", label: "Faixas", filename: "encarte-faixas" },
  { id: "lyrics", label: "Letras", filename: "encarte-letras" },
  { id: "photos", label: "Fotos", filename: "encarte-fotos" },
  { id: "credits", label: "Créditos", filename: "encarte-creditos" },
  { id: "thanks", label: "Obrigada", filename: "encarte-obrigada" },
] as const;

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

function EncarteApp() {
  const [current, setCurrent] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const isLyricsTab = PAGES[current].id === "lyrics";

  // Scale the 120mm page to fit the container width
  useEffect(() => {
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
  }, [current, selectedTrack]);

  function renderPage() {
    switch (PAGES[current].id) {
      case "cover":
        return <CoverPage />;
      case "tracklist":
        return <TracklistPage />;
      case "lyrics":
        return (
          <LyricsPage
            trackNo={selectedTrack + 1}
            trackTitle={TRACKS[selectedTrack][0]}
            trackDur={TRACKS[selectedTrack][1]}
          />
        );
      case "photos":
        return <PhotoPage />;
      case "credits":
        return <CreditsPage />;
      case "thanks":
        return <ThankYouPage />;
    }
  }

  return (
    <div className="min-h-screen bg-neutral-800 flex flex-col items-center">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-neutral-900/90 backdrop-blur border-b border-neutral-700">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto">
          <span className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase shrink-0 mr-2">
            Encarte
          </span>
          {PAGES.map((page, i) => (
            <button
              key={page.id}
              onClick={() => setCurrent(i)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-colors shrink-0 ${
                i === current
                  ? "bg-accent text-paper"
                  : "text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {page.label}
            </button>
          ))}

          {/* Player link */}
          <a
            href="#player"
            className="px-3 py-1.5 rounded text-xs font-mono tracking-wide text-neutral-300 hover:bg-neutral-700 transition-colors shrink-0 border border-neutral-600"
          >
            ▶ Player
          </a>

          {/* Export buttons */}
          <div className="ml-auto shrink-0">
            <ExportButtons
              targetRef={pageRef}
              filename={
                isLyricsTab
                  ? `encarte-letra-${String(selectedTrack + 1).padStart(2, "0")}-${TRACKS[selectedTrack][0].replace(/\s+/g, "-")}`
                  : PAGES[current].filename
              }
            />
          </div>
        </div>
      </nav>

      {/* Content area */}
      <div className="w-full flex-1 flex">
        {/* Sidebar — only on Letras tab */}
        {isLyricsTab && (
          <aside className="w-56 shrink-0 bg-neutral-900 border-r border-neutral-700 overflow-y-auto">
            <div className="p-3">
              <h3 className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase mb-3">
                Faixas
              </h3>
              {TRACKS.map(([title, dur], i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTrack(i)}
                  className={`w-full text-left px-3 py-2 rounded mb-1 transition-colors ${
                    i === selectedTrack
                      ? "bg-accent text-paper"
                      : "text-neutral-300 hover:bg-neutral-700"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[9px] text-inherit opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-grotesk text-[12px] font-medium flex-1 truncate">
                      {title}
                    </span>
                    <span className="font-mono text-[9px] opacity-50">
                      {dur}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* Page display */}
        <main
          ref={containerRef}
          className="flex-1 px-4 py-8 md:py-12 flex flex-col items-center"
        >
          <div
            className="w-full flex justify-center overflow-hidden"
            style={{
              height: pageRef.current
                ? pageRef.current.scrollHeight * scale
                : "auto",
            }}
          >
            <div
              ref={pageRef}
              className="shadow-2xl rounded-sm overflow-hidden origin-top"
              style={{ transform: `scale(${scale})` }}
            >
              {renderPage()}
            </div>
          </div>

          {/* Size indicator */}
          <div className="mt-4 font-mono text-[9px] text-neutral-500 text-center">
            120 mm × 120 mm — tamanho real de encarte CD
          </div>

          {/* Page indicator */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="font-mono text-xs text-neutral-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← anterior
            </button>
            <span className="font-mono text-[10px] text-neutral-500">
              {current + 1} / {PAGES.length}
            </span>
            <button
              onClick={() => setCurrent(Math.min(PAGES.length - 1, current + 1))}
              disabled={current === PAGES.length - 1}
              className="font-mono text-xs text-neutral-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              próxima →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const hash = useHashRoute();

  if (hash === "#player") {
    return <PlayerPage />;
  }

  return <EncarteApp />;
}
