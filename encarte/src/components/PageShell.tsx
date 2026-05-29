import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  tone?: "paper" | "paper2" | "accent";
  className?: string;
}

/**
 * CD booklet page — 120mm × 120mm (standard jewel case insert).
 * Fixed at 120mm using CSS mm units so export is pixel-perfect.
 * On screen it scales down to fit the viewport via the wrapper in App.
 */
export const CD_SIZE_MM = 120;

export function PageShell({ children, tone = "paper", className = "" }: PageShellProps) {
  const bg =
    tone === "accent"
      ? "bg-accent text-paper"
      : tone === "paper2"
        ? "bg-paper-2 text-ink"
        : "bg-paper text-ink";

  return (
    <div
      className={`relative overflow-hidden ${bg} ${className}`}
      style={{ width: `${CD_SIZE_MM}mm`, height: `${CD_SIZE_MM}mm` }}
    >
      {/* paper grain */}
      <div className="grain absolute inset-0" />
      {/* content — 8mm padding (standard safe area for CD booklets) */}
      <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ padding: "8mm" }}>
        {children}
      </div>
    </div>
  );
}
