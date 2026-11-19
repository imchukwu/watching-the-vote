import type { ReactNode } from "react";

interface PrecisionContainerProps {
  children: ReactNode;
  className?: string;
  coordinates?: string;
  dossierRef?: string;
  showRulers?: boolean;
}

/**
 * PrecisionContainer wraps content with thin 1px architectural borders,
 * corner crosshair crop-marks, and subtle cartographic coordinate stamps.
 */
export function PrecisionContainer({
  children,
  className = "",
  coordinates,
  dossierRef,
  showRulers = false,
}: PrecisionContainerProps) {
  return (
    <div
      className={`relative border border-border bg-card/90 transition-all ${className}`}
    >
      {/* 4 Precision Corner Reticles (+) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1.5 -left-1.5 font-mono text-[10px] font-bold leading-none select-none text-primary/70"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1.5 -right-1.5 font-mono text-[10px] font-bold leading-none select-none text-primary/70"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-[10px] font-bold leading-none select-none text-primary/70"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-[10px] font-bold leading-none select-none text-primary/70"
      >
        +
      </span>

      {/* Optional Top Metadata Stamp Strip */}
      {(coordinates || dossierRef) && (
        <div className="flex items-center justify-between border-b border-border/80 bg-surface px-3 py-1 font-mono text-[10px] text-muted-foreground select-none">
          <span className="flex items-center gap-1.5 tracking-wider uppercase font-medium">
            <span className="inline-block h-1 w-1 bg-primary rounded-full" />
            {dossierRef || "DOSSIER // ARCHIVAL"}
          </span>
          {coordinates && (
            <span className="tracking-widest font-mono text-muted-foreground/80">
              {coordinates}
            </span>
          )}
        </div>
      )}

      {/* Subtle Horizontal Metric Ruler */}
      {showRulers && (
        <div
          aria-hidden
          className="pointer-events-none flex h-1 w-full justify-between overflow-hidden border-b border-border/40 px-2 opacity-40 select-none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="inline-block h-full w-[1px] bg-foreground/40" />
          ))}
        </div>
      )}

      {children}
    </div>
  );
}

export function CrosshairReticle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-4 w-4 text-primary/80 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="8" cy="8" r="5" strokeDasharray="2 2" opacity="0.6" />
      <path d="M8 1v4M8 11v4M1 8h4M11 8h4" />
    </svg>
  );
}
