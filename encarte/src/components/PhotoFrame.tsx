interface PhotoFrameProps {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
}

/** Uniform photo frame — shows image or placeholder */
export function PhotoFrame({ src, alt = "foto", caption, className = "" }: PhotoFrameProps) {
  return (
    <figure className={`m-0 flex flex-col h-full ${className}`}>
      <div className="relative flex-1 border border-hair bg-paper-2 overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover block grayscale-[20%] sepia-[15%] contrast-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(45deg,rgba(38,37,31,0.06)_0_8px,transparent_8px_16px)]">
            <span className="font-mono text-[10px] text-ink-2 tracking-wide">
              {alt}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="font-mono text-[9.5px] text-ink-2 mt-2 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
