import { useEffect, useRef, useState } from "react";
import { SONGS, TRACKS } from "./data";
import coverImg from "./assets/bedford-treated.jpg";

function formatTime(seconds: number) {
  if (!seconds || Number.isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

const CREDITS = [
  ["artista", "lino"],
  ["letras", "thais lino + claude (anthropic)"],
  ["produção musical", "suno ai"],
  ["mixagem", "suno ai"],
  ["fotos", "thais lino"],
  ["design", "thais lino + kiro"],
  ["gravação", "greenwich village, ny"],
];

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const shouldAutoplayRef = useRef(false);
  const lyricsRef = useRef<HTMLElement>(null);

  const [title] = TRACKS[currentTrack];
  const lyrics = SONGS[title];
  const trackBase = `/musicas/${String(currentTrack + 1).padStart(2, "0")}-${title.replace(/\s+/g, "-")}`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const shouldAutoplay = shouldAutoplayRef.current;
    shouldAutoplayRef.current = false;
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setAudioError(false);
    audio.load();

    // Detect when all sources have failed
    function handleSourceError() {
      if (audio && audio.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        setAudioError(true);
      }
    }
    audio.addEventListener("error", handleSourceError);

    if (shouldAutoplay) {
      audio.play().catch(() => setAudioError(true));
    }

    return () => {
      audio.removeEventListener("error", handleSourceError);
    };
  }, [currentTrack, trackBase]);

  function playTrack(index: number) {
    if (index === currentTrack && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.load();
        audioRef.current.play().catch(() => setAudioError(true));
      }
      return;
    }
    shouldAutoplayRef.current = true;
    setCurrentTrack(index);
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setAudioError(true));
    } else {
      audio.pause();
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;
    if (!audio) return;
    const d = audio.duration || 0;
    setCurrentTime(audio.currentTime);
    setDuration(d);
    setProgress(d ? audio.currentTime / d : 0);
  }

  function handleEnded() {
    setIsPlaying(false);
    if (currentTrack < TRACKS.length - 1) {
      playTrack(currentTrack + 1);
    }
  }

  function handleSeek(event: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    audio.currentTime = pct * duration;
  }

  function scrollToLyrics() {
    lyricsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-ink text-paper">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onPlay={() => { setIsPlaying(true); setAudioError(false); }}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      >
        <source src={`${trackBase}.m4a`} type="audio/mp4" />
        <source src={`${trackBase}.mp3`} type="audio/mpeg" />
      </audio>

      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={coverImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Album cover */}
          <div className="w-64 sm:w-72 md:w-80 aspect-square overflow-hidden rounded shadow-2xl ring-1 ring-white/10">
            <img
              src={coverImg}
              alt="Capa de 81 Bedford Street"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
              Lino
            </p>
            <h1 className="mt-2 font-grotesk text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              81 Bedford Street
            </h1>
            <p className="mt-3 font-mono text-[11px] tracking-wide text-paper/50">
              LP · 2026 · 10 faixas
            </p>
          </div>

          {/* Play button */}
          <button
            type="button"
            onClick={() => { playTrack(0); scrollToLyrics(); }}
            className="mt-8 flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-paper shadow-lg transition-transform hover:scale-105"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ouvir agora
          </button>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-paper/40">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ═══ PLAYER + TRACKLIST ═══ */}
      <section ref={lyricsRef} className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-14">
          {/* Left: player controls */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            {/* Now playing */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded shadow-md">
                <img src={coverImg} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-grotesk text-lg font-bold">{title}</p>
                <p className="font-mono text-[10px] text-paper/50">
                  {String(currentTrack + 1).padStart(2, "0")} / {TRACKS.length}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-5">
              <div
                className="relative h-1.5 cursor-pointer rounded-full bg-paper/10"
                onClick={handleSeek}
                role="slider"
                aria-label="Progresso da música"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  style={{ width: `${progress * 100}%` }}
                />
                <div
                  className="absolute top-1/2 h-3 w-3 rounded-full bg-accent shadow"
                  style={{ left: `${progress * 100}%`, transform: "translate(-50%, -50%)" }}
                />
              </div>
              <div className="mt-1.5 flex justify-between font-mono text-[10px] text-paper/55">
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
              </div>
            </div>

            {/* Transport controls */}
            <div className="mt-4 flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={() => currentTrack > 0 && playTrack(currentTrack - 1)}
                disabled={currentTrack === 0}
                className="text-paper/70 transition-opacity hover:text-paper disabled:opacity-30"
                aria-label="Faixa anterior"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-paper shadow-md transition-transform hover:scale-105"
                aria-label={isPlaying ? "Pausar" : "Tocar"}
              >
                {isPlaying ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                onClick={() => currentTrack < TRACKS.length - 1 && playTrack(currentTrack + 1)}
                disabled={currentTrack === TRACKS.length - 1}
                className="text-paper/70 transition-opacity hover:text-paper disabled:opacity-30"
                aria-label="Próxima faixa"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {audioError && (
              <p className="mt-3 text-center font-mono text-[9px] text-red-400">
                Não foi possível tocar este arquivo.
              </p>
            )}

            {/* Tracklist */}
            <div className="mt-8 border-t border-paper/10 pt-4">
              <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                Faixas
              </h3>
              {TRACKS.map(([trackTitle, trackDuration], index) => (
                <button
                  key={trackTitle}
                  type="button"
                  onClick={() => playTrack(index)}
                  className={`flex w-full items-baseline gap-2 rounded px-2 py-2 text-left transition-colors ${
                    index === currentTrack
                      ? "bg-accent/20 text-accent"
                      : "text-paper/70 hover:bg-paper/5 hover:text-paper"
                  }`}
                >
                  <span className="w-5 font-mono text-[11px] text-paper/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 truncate font-grotesk text-[13px] font-medium">
                    {trackTitle}
                  </span>
                  {index === currentTrack && isPlaying && (
                    <span className="animate-pulse text-[10px]">♪</span>
                  )}
                  <span className="font-mono text-[11px] text-paper/60">
                    {trackDuration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: lyrics */}
          <div className="min-h-[50vh]">
            <div className="mb-6 border-b border-paper/10 pb-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                Letra
              </p>
              <h2 className="mt-1 font-grotesk text-2xl font-extrabold tracking-tight sm:text-3xl">
                {title}
              </h2>
            </div>

            {lyrics ? (
              <div className="font-grotesk text-[15px] leading-[1.8] text-paper/80">
                {lyrics
                  .trim()
                  .split(/\n\s*\n/)
                  .map((stanza, index) => (
                    <p key={index} className="mb-6 whitespace-pre-line">
                      {stanza}
                    </p>
                  ))}
              </div>
            ) : (
              <div className="flex min-h-[200px] items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-wide text-paper/30">
                  letra em breve
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ CREDITS ═══ */}
      <footer className="border-t border-paper/10 bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h3 className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
            Créditos
          </h3>

          <div className="mx-auto max-w-md">
            {CREDITS.map(([role, name], i) => (
              <div
                key={i}
                className="flex justify-between border-b border-paper/5 py-3"
              >
                <span className="font-mono text-[12px] text-paper/50">{role}</span>
                <span className="font-mono text-[12px] text-paper/80">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-2 text-center font-mono text-[11px] leading-relaxed text-paper/50">
            <p>Letras escritas em colaboração com Claude (Anthropic).</p>
            <p>Músicas geradas e produzidas com Suno AI.</p>
          </div>

          <div className="mt-12 text-center font-mono text-[10px] text-paper/30">
            © 2026 Lino
          </div>
        </div>
      </footer>
    </div>
  );
}
