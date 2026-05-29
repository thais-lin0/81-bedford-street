import { CSSProperties, ReactNode } from "react";

interface KickerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Mono micro-label — uppercase, tracked */
export function Kicker({ children, className = "", style }: KickerProps) {
  return (
    <div
      className={`font-mono text-[10px] tracking-[0.16em] uppercase text-ink-2 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
