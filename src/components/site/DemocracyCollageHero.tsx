import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Radio, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CollageTile {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  time: string;
  status: string;
}

export const collageTiles: CollageTile[] = [
  {
    id: "tile-1",
    src: "/images/wtv1.jpg",
    alt: "Accredited citizen observer monitoring voter arrival at polling unit",
    title: "Voters Arriving at Polling Station",
    location: "POLLING UNIT · LAGOS",
    time: "08:42 AM",
    status: "OBSERVATION VERIFIED",
  },
  {
    id: "tile-2",
    src: "/images/wtv2.jpg",
    alt: "Ballot paper handling and results verification process",
    title: "Ballot Inspection & Counting",
    location: "POLLING UNIT · KANO",
    time: "09:15 AM",
    status: "PRVT SAMPLE DATA",
  },
  {
    id: "tile-3",
    src: "/images/wtv8.jpg",
    alt: "WTV National Situation Room coordinating observer reports",
    title: "National Situation Room",
    location: "NATIONAL HQ · ABUJA",
    time: "11:45 AM",
    status: "SITUATION ROOM FEED",
  },
];

export function DemocracyCollageHero() {
  const [activeTileIndex, setActiveTileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance active tile every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTileIndex((prev) => (prev + 1) % collageTiles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeTile = collageTiles[activeTileIndex];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-slate-950 text-white flex flex-col justify-center">
      {/* Background Texture & Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-95" />

      {/* Topographic Grid */}
      <div className="absolute inset-0 grid-topo opacity-25 pointer-events-none" />

      {/* Ambient Glowing Orbs in WTV Logo Green (#246A37) */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#246A37]/30 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[#246A37]/20 blur-[160px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[550px] w-[550px] rounded-full bg-emerald-600/15 blur-[150px]" />

      {/* Main Hero Container */}
      <div className="container-wtv relative z-20 py-16 md:py-24 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        
        {/* LEFT COLUMN: Editorial Typography & Copy */}
        <div className="max-w-2xl">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-slate-900/80 px-4 py-1.5 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Democracy Observation · 2027 Roadmap Active
            </span>
          </div>

          {/* Headline with "THE VOTE" in Logo Dark Green (#246A37) */}
          <h1 className="mt-8 font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.86] text-white select-none">
            WATCHING <br />
            <span className="text-[#246A37] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              THE VOTE
            </span>
          </h1>

          {/* Editorial Tagline */}
          <p className="mt-6 font-serif text-xl sm:text-2xl lg:text-3xl italic text-emerald-100/90 leading-snug drop-shadow-md">
            Citizens watching. Evidence documenting. Democracy counting.
          </p>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Nigeria's independent, citizen-led election observation initiative. Deploying thousands of accredited monitors, verifying election-day processes, and safeguarding electoral integrity across all 36 states + FCT.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild className="bg-[#246A37] text-white font-bold hover:bg-[#1e582e] text-base px-7 py-6 rounded-xl shadow-lg shadow-emerald-950/40">
              <Link to="/watching-the-vote">
                Explore Methodology <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white text-base px-6 py-6 rounded-xl backdrop-blur-md">
              <Link to="/dashboard">
                Live Election Dashboard
              </Link>
            </Button>
          </div>

          {/* Quick Stats Banner */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/90 max-w-lg">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-black text-white">24+</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-emerald-400/90 font-semibold">Elections Monitored</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-black text-white">8,500+</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-emerald-400/90 font-semibold">Accredited Observers</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-black text-white">36</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-emerald-400/90 font-semibold">States + FCT</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean 3-Image Full Expansion Showcase */}
        <div
          className="relative flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Full Feature Card */}
          <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] rounded-2xl overflow-hidden border-2 border-emerald-500/80 bg-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(36,106,55,0.35)] transition-all duration-700 ease-out">
            <img
              src={activeTile.src}
              alt={activeTile.alt}
              className="h-full w-full object-cover transition-transform duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-black/20" />

            {/* Top Live Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md border border-white/20 shadow-md">
                <Radio className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                {activeTile.status}
              </span>
              <span className="rounded-full bg-slate-950/80 px-3 py-1 text-xs font-mono font-semibold text-white/90 backdrop-blur-md border border-white/15">
                {activeTile.time}
              </span>
            </div>

            {/* Bottom Location & Title Overlay */}
            <div className="absolute bottom-5 left-5 right-5 z-20">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                {activeTile.location}
              </div>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                {activeTile.title}
              </h3>
            </div>
          </div>

          {/* 3-Thumbnail Selector Controls */}
          <div className="mt-5 flex items-center justify-center gap-3.5 w-full z-30">
            {collageTiles.map((tile, idx) => {
              const isActive = idx === activeTileIndex;
              return (
                <button
                  key={tile.id}
                  onClick={() => setActiveTileIndex(idx)}
                  className={`relative group overflow-hidden rounded-xl transition-all duration-500 text-left focus:outline-none ${
                    isActive
                      ? "w-32 sm:w-40 h-20 ring-2 ring-emerald-400 scale-105 shadow-xl opacity-100"
                      : "w-24 sm:w-28 h-16 opacity-50 hover:opacity-90 hover:scale-102 border border-white/20"
                  }`}
                >
                  <img src={tile.src} alt={tile.alt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
                  {isActive && (
                    <div className="absolute bottom-1.5 left-2 right-2 text-[9px] font-bold uppercase tracking-wider text-emerald-300 truncate">
                      ACTIVE STORY
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Subtitle Indicator */}
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <Eye className="h-3.5 w-3.5 text-emerald-400" />
            <span>Click any frame or let the story auto-advance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
