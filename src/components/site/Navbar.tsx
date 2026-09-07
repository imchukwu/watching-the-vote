import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/about", label: "About" },
  { to: "/watching-the-vote", label: "Watching The Vote" },
  { to: "/elections", label: "Elections" },
  { to: "/reports", label: "Reports" },
  { to: "/news", label: "News" },
  { to: "/data", label: "Data & Research" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="border-b border-border/60 bg-surface-2/60">
        <div className="container-wtv flex h-8 items-center justify-between text-xs text-muted-foreground">
          <span className="hidden sm:inline">
            Yiaga Africa · Watching The Vote · Nigeria
          </span>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-foreground">Newsroom</Link>
          </div>
        </div>
      </div>
      <div className="container-wtv flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/watchingthevote-logo.png" alt="Yiaga Africa · Watching The Vote" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search site">
            <Search className="h-4 w-4" />
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/dashboard">Election Dashboard</Link>
          </Button>
          <button
            className="xl:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="container-wtv flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-accent"
              >
                {n.label}
                <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
