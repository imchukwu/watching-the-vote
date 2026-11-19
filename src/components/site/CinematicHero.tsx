import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Radio,
  CheckCircle2,
  Users,
  Eye,
  Layers,
  Sparkles,
  ChevronRight,
  BarChart3,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface HeroPerspective {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  coordinates: string;
  badge: string;
  telemetry: {
    status: string;
    verifiedUnits: string;
    transmissionRate: string;
    margin: string;
  };
}

export const heroPerspectives: HeroPerspective[] = [
  {
    id: "accreditation",
    image: "/images/wtv1.jpg",
    title: "Voter Accreditation & Queue Monitoring",
    subtitle: "Accredited observers tracking BVAS biometric verification and early polling station opening.",
    location: "POLLING UNIT · IKEJA, LAGOS",
    coordinates: "06.5984° N, 03.3515° E",
    badge: "Field Observation",
    telemetry: {
      status: "FIELD TELEMETRY LIVE",
      verifiedUnits: "1,534 PUs Sampled",
      transmissionRate: "99.4%",
      margin: "± 1.2% Margin",
    },
  },
  {
    id: "results-tally",
    image: "/images/wtv2.jpg",
    title: "Official EC8A Form & Result Audit",
    subtitle: "Independent verification of official ballots and posted PU results before collation.",
    location: "POLLING UNIT · KANO MUNICIPAL",
    coordinates: "11.9964° N, 08.5167° E",
    badge: "PRVT Statistical Audit",
    telemetry: {
      status: "PRVT SAMPLE VERIFIED",
      verifiedUnits: "98.7% Form Compliance",
      transmissionRate: "99.8%",
      margin: "95% Confidence Band",
    },
  },
  {
    id: "situation-room",
    image: "/images/wtv8.jpg",
    title: "National Situation Room Command",
    subtitle: "Data scientists, legal experts, and electoral analysts validating incoming field data in real time.",
    location: "NATIONAL HQ · ABUJA",
    coordinates: "09.0765° N, 07.3986° E",
    badge: "Central Command",
    telemetry: {
      status: "CENTRAL TRIAGE ACTIVE",
      verifiedUnits: "774 LGAs Connected",
      transmissionRate: "100%",
      margin: "Statistically Representative",
    },
  },
  {
    id: "citizen-vigilance",
    image: "/images/wtv3.jpg",
    title: "Citizen Deployment & Community Trust",
    subtitle: "Non-partisan observers rooted in local communities protecting democratic choice with scientific rigor.",
    location: "FIELD DEPLOYMENT · AKURE, ONDO",
    coordinates: "07.2571° N, 05.2058° E",
    badge: "Civic Vanguard",
    telemetry: {
      status: "COMMUNITY REPORTING",
      verifiedUnits: "8,500+ Observers Ready",
      transmissionRate: "99.1%",
      margin: "Non-Partisan Oversight",
    },
  },
];

const liveTickers = [
  { state: "Kano", message: "Accreditation ongoing with BVAS", time: "1m ago" },
  { state: "Lagos", message: "Official Form EC8A posted publicly", time: "2m ago" },
  { state: "Ondo", message: "Stationary observers reports verified", time: "3m ago" },
  { state: "Enugu", message: "Station opened on schedule with full materials", time: "5m ago" },
  { state: "Abuja HQ", message: "PRVT sample data matched within 95% CI", time: "7m ago" },
];

export function CinematicHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance scenes unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroPerspectives.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Rotate live ticker
  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setTickerIdx((prev) => (prev + 1) % liveTickers.length);
    }, 3800);
    return () => clearInterval(tickerTimer);
  }, []);

  const activePerspective = heroPerspectives[activeIdx];

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#0a120c] text-white flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BACKGROUND IMAGE CAROUSEL WITH SMOOTH CROSS-FADE */}
      <div className="absolute inset-0 z-0">
        {heroPerspectives.map((perspective, idx) => (
          <div
            key={perspective.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={perspective.image}
              alt={perspective.title}
              className="h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out scale-105"
            />
          </div>
        ))}

        {/* LAYERED CINEMATIC GRADIENT OVERLAYS */}
        {/* Primary directional dark gradient: deep charcoal to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e09]/95 via-[#0a150e]/85 to-[#0b1710]/55" />

        {/* Vertical depth vignette: deep bottom & subtle top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d08] via-transparent to-[#070e09]/70" />

        {/* Brand Green Ambient Illumination */}
        <div className="absolute top-1/4 -left-32 h-[550px] w-[550px] rounded-full bg-[#246A37]/25 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 h-[450px] w-[450px] rounded-full bg-[#73BE44]/15 blur-[130px] pointer-events-none" />

        {/* Cartographic subtle grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* TOP COMMAND STRIP */}
      <div className="relative z-20 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container-wtv flex flex-wrap items-center justify-between gap-3 py-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 font-mono font-bold tracking-wider text-[#73BE44] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#73BE44] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#73BE44]" />
              </span>
              <span>INDEPENDENT CITIZEN OBSERVATION</span>
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/70 font-mono text-[11px]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#73BE44]" />
              <span>YIAGA AFRICA · STATISTICAL PRVT METHODOLOGY</span>
            </span>
          </div>

          {/* Dynamic Live Ticker */}
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="hidden lg:inline text-white/50">FIELD DISPATCH:</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-white/90">
              <Radio className="h-3 w-3 text-[#73BE44] animate-pulse" />
              <strong className="text-[#73BE44]">{liveTickers[tickerIdx].state}:</strong>
              <span className="truncate max-w-[220px] sm:max-w-[320px]">{liveTickers[tickerIdx].message}</span>
              <span className="text-white/40">({liveTickers[tickerIdx].time})</span>
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HERO CONTENT GRID */}
      <div className="container-wtv relative z-20 flex-1 flex items-center py-12 md:py-16 lg:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          
          {/* LEFT: EDITORIAL COPY & CALL TO ACTION */}
          <div className="max-w-2xl">
            {/* Initiative Identity Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 backdrop-blur-md shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#73BE44]" />
              <span className="text-xs font-semibold tracking-wider text-emerald-200 uppercase font-mono">
                Nigeria's Premier Election Observation Initiative
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04] text-white">
              Eyes on Every Ballot. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#73BE44] to-emerald-200">
                Evidence for Every Citizen.
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-emerald-50/90 leading-relaxed font-light max-w-xl">
              Watching The Vote combines the human courage of citizen monitors with the statistical precision of Process and Result Verification for Transparency (PRVT) — providing independent, incontrovertible evidence to protect Nigerian democracy.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#246A37] hover:bg-[#1b5029] text-white font-bold text-base px-7 py-6 rounded-xl shadow-[0_10px_25px_rgba(36,106,55,0.4)] border border-emerald-400/30 transition-all hover:scale-[1.02]"
              >
                <Link to="/watching-the-vote">
                  Explore Observation Data <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white text-base px-6 py-6 rounded-xl backdrop-blur-md transition-all"
              >
                <Link to="/dashboard">
                  <Activity className="mr-2 h-4 w-4 text-[#73BE44]" />
                  Inside Situation Room
                </Link>
              </Button>
            </div>

            {/* Key Trust Signals */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-emerald-100/70 border-t border-white/15 pt-5">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#73BE44]" /> Non-Partisan & Independent
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#73BE44]" /> 95% Confidence Level Sampling
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#73BE44]" /> Open Data For Public Audit
              </span>
            </div>
          </div>

          {/* RIGHT: COMMAND CENTRE FLOATING TELEMETRY & PERSPECTIVE SWITCHER */}
          <div className="relative">
            {/* Main Command Telemetry Card */}
            <div className="relative rounded-2xl border border-white/20 bg-[#0d1810]/85 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header with Location & Protocol */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#246A37] text-white">
                    <Eye className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#73BE44] font-semibold">
                      {activePerspective.badge}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/90 font-medium">
                      <MapPin className="h-3 w-3 text-white/60" />
                      <span>{activePerspective.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono text-[10px] text-white/50">
                  <div>COORD:</div>
                  <div className="text-white/80">{activePerspective.coordinates}</div>
                </div>
              </div>

              {/* Active Perspective Narrative */}
              <div className="mt-4">
                <h3 className="font-display text-lg font-bold text-white">
                  {activePerspective.title}
                </h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  {activePerspective.subtitle}
                </p>
              </div>

              {/* Real-time Telemetry Grid */}
              <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase text-white/50">Observation Protocol</div>
                  <div className="mt-1 font-bold text-[#73BE44]">{activePerspective.telemetry.status}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase text-white/50">Statistical Scope</div>
                  <div className="mt-1 font-bold text-white">{activePerspective.telemetry.verifiedUnits}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase text-white/50">Data Transmission</div>
                  <div className="mt-1 font-bold text-emerald-300">{activePerspective.telemetry.transmissionRate}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-[10px] uppercase text-white/50">Precision Band</div>
                  <div className="mt-1 font-bold text-amber-300">{activePerspective.telemetry.margin}</div>
                </div>
              </div>

              {/* PERSPECTIVE SELECTOR THUMBNAILS */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-[#73BE44]" /> Switch Observation Lens
                  </span>
                  <span className="font-mono text-[11px] text-[#73BE44]">
                    {activeIdx + 1} of {heroPerspectives.length}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {heroPerspectives.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveIdx(i)}
                      className={`group relative h-14 overflow-hidden rounded-lg border text-left transition-all ${
                        i === activeIdx
                          ? "border-[#73BE44] ring-2 ring-[#73BE44]/50 shadow-md"
                          : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/50"
                      }`}
                    >
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-1 left-1.5 right-1 text-[9px] font-mono font-bold leading-tight truncate text-white">
                        {p.badge.split(" ")[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Mini Badge: Coverage Guarantee */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-xl border border-white/20 bg-[#122316]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#73BE44] text-[#0a150e]">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <div className="text-xs">
                <div className="font-bold text-white">100% Non-Partisan</div>
                <div className="text-[10px] text-white/60">Strict Citizen Observer Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS STRIP / METRICS BRIDGE TO NEXT SECTION */}
      <div className="relative z-20 border-t border-white/15 bg-black/60 backdrop-blur-md">
        <div className="container-wtv py-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="px-3 py-2">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">24+</div>
              <div className="text-[11px] uppercase tracking-wider text-[#73BE44] font-mono mt-0.5">Elections Observed</div>
              <div className="text-[10px] text-white/50 mt-0.5">General & Off-Cycle</div>
            </div>

            <div className="px-3 py-2">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">8,500+</div>
              <div className="text-[11px] uppercase tracking-wider text-[#73BE44] font-mono mt-0.5">Accredited Observers</div>
              <div className="text-[10px] text-white/50 mt-0.5">Trained Nigerian Citizens</div>
            </div>

            <div className="px-3 py-2">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">176,000+</div>
              <div className="text-[11px] uppercase tracking-wider text-[#73BE44] font-mono mt-0.5">Polling Units Reached</div>
              <div className="text-[10px] text-white/50 mt-0.5">Nationwide PU Coverage</div>
            </div>

            <div className="px-3 py-2">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">99.4%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#73BE44] font-mono mt-0.5">Data Transmission</div>
              <div className="text-[10px] text-white/50 mt-0.5">Real-Time Encrypted Stream</div>
            </div>

            <div className="px-3 py-2 col-span-2 sm:col-span-1">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">36 + FCT</div>
              <div className="text-[11px] uppercase tracking-wider text-[#73BE44] font-mono mt-0.5">States Monitored</div>
              <div className="text-[10px] text-white/50 mt-0.5">All 774 Local Gov Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
