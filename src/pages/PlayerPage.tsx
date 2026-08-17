import { useEffect, useRef, useState } from "react";
import { SONGS, TRACKS } from "../data";
import coverImg from "../assets/bedford-treated.jpg";

interface PlayerPageProps {
  currentTrack: number;
  onTrackChange: (track: number) => void;
}

function formatTime(seconds: number) {
  if (!seconds || Number.isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

/** Player integrado ao encarte, com a letra da faixa em reprodução ao lado. */
export function PlayerPage({ currentTrack, onTrackChange }: PlayerPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const shouldAutoplayRef = useRef(false);

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

    if (shouldAutoplay) {
      audio.play().catch(() => setAudioError(true));
    }
  }, [currentTrack, trackBase]);

  function playTrack(index: number) {
    if (index === currentTrack) {
      audioRef.current?.play().catch(() => setAudioError(true));
      return;
    }

    shouldAutoplayRef.current = true;
    onTrackChange(index);
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

    const nextDuration = audio.duration || 0;
    setCurrentTime(audio.currentTime);
    setDuration(nextDuration);
    setProgress(nextDuration ? audio.currentTime / nextDuration : 0);
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
    const percentage = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    audio.currentTime = percentage * duration;
  }

  return (
    <section className="relative w-full max-w-6xl overflow-hidden rounded-sm bg-paper text-ink shadow-2xl">
      <div className="grain absolute inset-0" />

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onPlay={() => {
          setIsPlaying(true);
          setHasStarted(true);
          setAudioError(false);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onError={() => setAudioError(true)}
      >
        <source src={`${trackBase}.m4a`} type="audio/mp4" />
        <source src={`${trackBase}.mp3`} type="audio/mpeg" />
      </audio>

      <div className="relative grid lg:grid-cols-[380px_minmax(0,1fr)]">
        <div className="border-b border-faint p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="lg:sticky lg:top-24">
            <div className="mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded shadow-lg">
              <img
                src={coverImg}
                alt="Capa de 81 Bedford Street"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mx-auto mt-5 max-w-[320px]">
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-2">
                Lino · 81 Bedford Street
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-[10px] text-ink-2">
                  {String(currentTrack + 1).padStart(2, "0")}
                </span>
                <h2 className="flex-1 font-grotesk text-[20px] font-bold text-ink">
                  {title}
                </h2>
              </div>

              <div
                className="relative mt-4 h-1.5 cursor-pointer rounded-full bg-faint"
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

              <div className="mt-1.5 flex justify-between font-mono text-[9px] text-ink-2">
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
              </div>

              <div className="mt-4 flex items-center justify-center gap-8">
                <button
                  type="button"
                  onClick={() => playTrack(currentTrack - 1)}
                  disabled={currentTrack === 0}
                  className="text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Faixa anterior"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-paper shadow-md transition-transform hover:scale-105"
                  aria-label={isPlaying ? "Pausar" : "Tocar"}
                >
                  {isPlaying ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => playTrack(currentTrack + 1)}
                  disabled={currentTrack === TRACKS.length - 1}
                  className="text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Próxima faixa"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>
              </div>

              {audioError && (
                <p className="mt-3 text-center font-mono text-[9px] text-accent">
                  Não foi possível tocar este arquivo.
                </p>
              )}

              <div className="mt-6 border-t border-faint">
                {TRACKS.map(([trackTitle, trackDuration], index) => (
                  <button
                    key={trackTitle}
                    type="button"
                    onClick={() => playTrack(index)}
                    className={`flex w-full items-baseline gap-2 border-b border-faint py-2 text-left transition-colors ${
                      index === currentTrack ? "text-accent" : "text-ink hover:text-accent"
                    }`}
                  >
                    <span className="w-5 font-mono text-[9px] opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-grotesk text-[12px] font-medium">
                      {trackTitle}
                    </span>
                    {index === currentTrack && isPlaying && (
                      <span className="animate-pulse text-[10px]">♪</span>
                    )}
                    <span className="font-mono text-[9px] opacity-50">
                      {trackDuration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="min-h-[480px] p-6 sm:p-8 lg:min-h-[760px]">
          {!hasStarted ? (
            <div className="flex h-full min-h-[420px] items-center justify-center text-center">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                  Letras
                </div>
                <p className="mt-2 max-w-xs font-grotesk text-sm leading-relaxed text-ink-2">
                  Escolha uma faixa e aperte play. A letra aparece aqui enquanto você ouve.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline justify-between gap-4 border-b border-hair pb-3">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                    Letra
                  </div>
                  <h3 className="mt-1 font-grotesk text-2xl font-extrabold tracking-tight">
                    {title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-ink-2">
                  {String(currentTrack + 1).padStart(2, "0")} / {TRACKS.length}
                </span>
              </div>

              {lyrics ? (
                <div className="mt-5 max-h-[680px] overflow-y-auto pr-3 font-grotesk text-[14px] leading-[1.65] text-ink md:columns-2 md:gap-8">
                  {lyrics
                    .trim()
                    .split(/\n\s*\n/)
                    .map((stanza, index) => (
                      <p key={index} className="mb-5 whitespace-pre-line break-inside-avoid">
                        {stanza}
                      </p>
                    ))}
                </div>
              ) : (
                <div className="flex min-h-[360px] items-center justify-center">
                  <span className="font-mono text-[9px] uppercase tracking-wide text-accent opacity-70">
                    letra em breve
                  </span>
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
