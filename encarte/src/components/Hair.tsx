interface HairProps {
  className?: string;
}

/** Hairline rule — the Swiss grid separator */
export function Hair({ className = "" }: HairProps) {
  return <div className={`h-px bg-hair ${className}`} />;
}
