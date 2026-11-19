import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronRight, Activity, ShieldCheck, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/about", label: "About" },
  { to: "/watching-the-vote", label: "Methodology" },
  { to: "/elections", label: "Elections" },
  { to: "/reports", label: "Reports" },
  { to: "/news", label: "News" },
  { to: "/data", label: "Data & PRVT" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Protocol Status Bar */}
      <div className="border-b border-border/60 bg-surface/95 backdrop-blur-md font-mono text-[11px] text-muted-foreground transition-all">
        <div className="container-wtv flex h-7 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground tracking-wider uppercase">
              Yiaga Africa · Watching The Vote
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span className="hidden md:inline text-primary uppercase font-bold text-[10px]">
              CITIZEN ELECTION OBSERVATION
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
              </span>
              <span>OBSERVATION NETWORK ACTIVE</span>
            </span>
            <span className="hidden sm:inline text-muted-foreground/60 font-mono">
              [36 STATES + FCT]
            </span>
            <Link
              to="/dashboard"
              className="text-primary hover:underline font-semibold ml-2 inline-flex items-center gap-1"
            >
              Situation Room <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/95 backdrop-blur-md shadow-sm"
            : "border-border/80 bg-background/85 backdrop-blur-md"
        }`}
      >
        <div className="container-wtv flex h-16 items-center justify-between gap-6">
          {/* Official Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/watchingthevote-logo.png"
              alt="Yiaga Africa · Watching The Vote"
              className="h-10 md:h-11 w-auto object-contain transition-transform hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary font-bold bg-primary/10" }}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center gap-2.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex border-primary/30 text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/observer-portal">Observer Portal</Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-[#246A37] hover:bg-[#1b5029] text-white shadow-sm"
            >
              <Link to="/dashboard">
                <Activity className="mr-1.5 h-3.5 w-3.5" />
                Live Dashboard
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="lg:hidden border-b border-border bg-background/98 backdrop-blur-xl shadow-xl">
          <nav className="container-wtv flex flex-col py-4 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-primary/10 text-primary font-bold" }}
                className="flex items-center justify-between rounded-lg px-3.5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                {n.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}

            <div className="pt-4 border-t border-border mt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="w-full text-xs" onClick={() => setOpen(false)}>
                <Link to="/observer-portal">Observer Portal</Link>
              </Button>
              <Button asChild className="w-full bg-[#246A37] text-white text-xs" onClick={() => setOpen(false)}>
                <Link to="/dashboard">Situation Room</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
