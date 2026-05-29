import { useCallback, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

interface ExportButtonsProps {
  /** CSS selector or ref callback to find the page element to export */
  targetRef: React.RefObject<HTMLDivElement | null>;
  filename: string;
}

export function ExportButtons({ targetRef, filename }: ExportButtonsProps) {
  const [exporting, setExporting] = useState<"png" | "pdf" | null>(null);

  const captureCanvas = useCallback(async () => {
    if (!targetRef.current) return null;
    return html2canvas(targetRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });
  }, [targetRef]);

  const handlePNG = useCallback(async () => {
    setExporting("png");
    try {
      const canvas = await captureCanvas();
      if (!canvas) return;

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setExporting(null);
    }
  }, [captureCanvas, filename]);

  const handlePDF = useCallback(async () => {
    setExporting("pdf");
    try {
      const canvas = await captureCanvas();
      if (!canvas) return;

      const imgData = canvas.toDataURL("image/png");

      // CD booklet standard: 120mm × 120mm
      const CD_SIZE = 120;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [CD_SIZE, CD_SIZE],
      });

      pdf.addImage(imgData, "PNG", 0, 0, CD_SIZE, CD_SIZE);
      pdf.save(`${filename}.pdf`);
    } finally {
      setExporting(null);
    }
  }, [captureCanvas, filename]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePNG}
        disabled={exporting !== null}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wide text-neutral-300 hover:bg-neutral-700 border border-neutral-600 transition-colors disabled:opacity-40 disabled:cursor-wait"
      >
        {exporting === "png" ? (
          <Spinner />
        ) : (
          <DownloadIcon />
        )}
        PNG
      </button>
      <button
        onClick={handlePDF}
        disabled={exporting !== null}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wide text-neutral-300 hover:bg-neutral-700 border border-neutral-600 transition-colors disabled:opacity-40 disabled:cursor-wait"
      >
        {exporting === "pdf" ? (
          <Spinner />
        ) : (
          <DownloadIcon />
        )}
        PDF
      </button>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" opacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" opacity="0.75" />
    </svg>
  );
}
