import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cols = [
  {
    heading: "Programme",
    links: [
      { to: "/watching-the-vote", label: "Watching The Vote" },
      { to: "/elections", label: "Elections Archive" },
      { to: "/dashboard", label: "Election Dashboard" },
      { to: "/data", label: "Data & Research" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { to: "/reports", label: "Reports Library" },
      { to: "/publications", label: "Publications" },
      { to: "/resources", label: "Downloads & Forms" },
      { to: "/media", label: "Media Center" },
    ],
  },
  {
    heading: "About",
    links: [
      { to: "/about", label: "About Yiaga Africa" },
      { to: "/partners", label: "Partners" },
      { to: "/events", label: "Events" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-2/60">
      <div className="container-wtv grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/">
            <img src="/watchingthevote-logo.png" alt="Yiaga Africa · Watching The Vote" className="h-12 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            An independent, non-partisan citizen observation initiative advancing electoral
            integrity, credible elections, and democratic accountability across Nigeria.
          </p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Plot 1732 Emeka Anyaoku St., Area 11, Garki, Abuja</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +234 (0) 908 335 4111</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@yiaga.org</div>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.heading}>
            <h4 className="text-sm font-semibold text-foreground">{c.heading}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-foreground">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Monthly briefs on election observation, reports and civic data.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" required placeholder="you@domain.com" aria-label="Email address" />
            <Button type="submit">Join</Button>
          </form>
          <div className="mt-6 flex items-center gap-3 text-muted-foreground">
            {[Twitter, Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social link" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wtv flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Yiaga Africa. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Use</Link>
            <Link to="/">Accessibility</Link>
            <Link to="/">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
