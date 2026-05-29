import { useRef, useState, useEffect } from "react";
import { TRACKS } from "../data";
import coverImg from "../assets/bedford-treated.jpg";

/** Player online — página para ouvir o álbum */
export function PlayerPage() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const trackFile = `/musicas/${String(currentTrack + 1).padStart(2, "0")}-${TRACKS[currentTrack][0].replace(/\s+/g, "-")}.mp3`;

  useEffect(() => {
    setProgress(0);
    setCurrentTime(0);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentTrack]);

  function togglePlay() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }

  function handleTimeUpdate() {
    if (!audioRef.current) return;
    const { currentTime: ct, duration: d } = audioRef.current;
    setCurrentTime(ct);
    setDuration(d || 0);
    setProgress(d ? ct / d : 0);
  }

  function handleEnded() {
    setIsPlaying(false);
    if (currentTrack < TRACKS.length - 1) {
      setCurrentTrack(currentTrack + 1);
      setTimeout(() => {
        audioRef.current?.play();
        setIsPlaying(true);
      }, 300);
    }
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * duration;
  }

  function formatTime(s: number) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  function prevTrack() {
    if (currentTrack > 0) setCurrentTrack(currentTrack - 1);
  }

  function nextTrack() {
    if (currentTrack < TRACKS.length - 1) setCurrentTrack(currentTrack + 1);
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="w-full max-w-sm mx-auto px-6 py-10">
        {/* Back to encarte */}
        <a
          href="#"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide uppercase text-ink-2 hover:text-accent transition-colors mb-6"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Ver encarte
        </a>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src={trackFile}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onLoadedMetadata={handleTimeUpdate}
        />

        {/* Album art */}
        <div className="w-full aspect-square rounded overflow-hidden shadow-lg">
          <img
            src={coverImg}
            alt="81 Bedford Street"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Now playing */}
        <div className="mt-5">
          <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-2">
            Thaís Lino · 81 Bedford Street
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-mono text-[10px] text-ink-2">
              {String(currentTrack + 1).padStart(2, "0")}
            </span>
            <h2 className="font-grotesk font-bold text-[20px] text-ink flex-1">
              {TRACKS[currentTrack][0]}
            </h2>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="mt-4 h-1.5 bg-faint rounded-full cursor-pointer relative"
          onClick={handleSeek}
        >
          <div
            className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className="absolute top-1/2 w-3 h-3 bg-accent rounded-full shadow"
            style={{ left: `${progress * 100}%`, transform: "translate(-50%, -50%)" }}
          />
        </div>

        {/* Time */}
        <div className="flex justify-between mt-1.5">
          <span className="font-mono text-[9px] text-ink-2">
            {formatTime(currentTime)}
          </span>
          <span className="font-mono text-[9px] text-ink-2">
            -{formatTime(duration - currentTime)}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-5">
          <button
            onClick={prevTrack}
            disabled={currentTrack === 0}
            className="text-ink disabled:opacity-30 transition-opacity"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-accent text-paper flex items-center justify-center shadow-md hover:scale-105 transition-transform"
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
            onClick={nextTrack}
            disabled={currentTrack === TRACKS.length - 1}
            className="text-ink disabled:opacity-30 transition-opacity"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* Tracklist */}
        <div className="mt-8 border-t border-faint">
          {TRACKS.map(([title, dur], i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentTrack(i);
                setTimeout(() => {
                  audioRef.current?.play();
                  setIsPlaying(true);
                }, 100);
              }}
              className={`w-full flex items-baseline gap-3 py-2.5 border-b border-faint text-left transition-colors ${
                i === currentTrack
                  ? "text-accent"
                  : "text-ink hover:text-accent"
              }`}
            >
              <span className="font-mono text-[10px] w-5 opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-grotesk text-[13px] font-medium flex-1">
                {title}
              </span>
              {i === currentTrack && isPlaying && (
                <span className="text-[10px] animate-pulse">♪</span>
              )}
              <span className="font-mono text-[10px] opacity-50">{dur}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
