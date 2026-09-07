import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Navbar />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-2/40">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      <div className="container-wtv relative py-16 md:py-20">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.1] md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function ImagePlaceholder({
  label = "Image space",
  ratio = "aspect-[16/9]",
  className = "",
  src,
}: { label?: string; ratio?: string; className?: string; src?: string }) {
  if (src) {
    return (
      <div className={`${ratio} ${className} relative w-full overflow-hidden rounded-lg border border-border bg-surface-2`}>
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${ratio} ${className} relative w-full overflow-hidden rounded-lg border border-dashed border-border bg-surface-2 text-muted-foreground`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <path d="m21 16-5-5-9 9" />
            </svg>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em]">{label}</span>
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage:
          "linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%), linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%)",
        backgroundPosition: "0 0, 10px 10px",
        backgroundSize: "20px 20px",
      }} />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
    </div>
  );
}
