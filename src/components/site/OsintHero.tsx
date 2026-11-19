import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShieldAlert,
  ShieldCheck,
  Radio,
  Activity,
  Terminal,
  ArrowRight,
  Maximize2,
  RefreshCw,
  Search,
  Crosshair,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrecisionContainer } from "./PrecisionCorner";
import { osintTelemetryStats, liveTelemetryTicker } from "@/lib/osint-data";

export interface ReconTile {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  coord: string;
  cameraHash: string;
  status: string;
}

const reconTiles: ReconTile[] = [
  {
    id: "recon-1",
    src: "/images/wtv1.jpg",
    alt: "Citizen observer validating ballot arrivals at polling unit",
    title: "Voter Accreditation & Biometric Check",
    location: "POLLING UNIT · LAGOS",
    coord: "06.5244° N, 03.3792° E",
    cameraHash: "CAM-SHA256:0x7b1c4e9f",
    status: "TELEMETRY SYNCHRONIZED",
  },
  {
    id: "recon-2",
    src: "/images/wtv2.jpg",
    alt: "Ballot counting and results verification process",
    title: "Official EC8A Form Ingestion & Tally",
    location: "POLLING UNIT · KANO",
    coord: "11.9964° N, 08.5167° E",
    cameraHash: "CAM-SHA256:0x4a82fd11",
    status: "PRVT RANDOM SAMPLE VERIFIED",
  },
  {
    id: "recon-3",
    src: "/images/wtv8.jpg",
    alt: "WTV National Situation Room coordinating observer reports",
    title: "National Situation Room Triage",
    location: "NATIONAL HQ · ABUJA",
    coord: "09.0765° N, 07.3986° E",
    cameraHash: "CAM-SHA256:0x9c31e804",
    status: "CENTRAL COMMAND FEED",
  },
];

export function OsintHero() {
  const [activeReconIndex, setActiveReconIndex] = useState(0);
  const [elapsedMinutes, setElapsedMinutes] = useState(2);
  const [currentTimecode, setCurrentTimecode] = useState("12:12:26 WAT");
  const [isSyncing, setIsSyncing] = useState(false);

  // Timecode & Elapsed update simulation
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      const secs = String(now.getSeconds()).padStart(2, "0");
      setCurrentTimecode(`${hours}:${mins}:${secs} WAT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setElapsedMinutes(0);
      setIsSyncing(false);
    }, 800);
  };

  const activeRecon = reconTiles[activeReconIndex];

  return (
    <section className="relative border-b border-border bg-background text-foreground overflow-hidden">
      {/* Background Cartographic Coordinate Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 osint-grid opacity-60" />

      {/* Subtle Archival Warm Gradient for editorial depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-[at_top_right] from-primary/5 via-transparent to-transparent opacity-70"
      />

      {/* TOP LIVE INTELLIGENCE BRIEFING BAR */}
      <div className="border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="container-wtv flex flex-wrap items-center justify-between gap-3 py-2 text-xs font-mono">
          {/* Classification & Protocol Stamp */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 font-bold tracking-widest text-primary uppercase">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span>CLASSIFICATION: PUBLIC INTEGRITY DOSSIER</span>
            </span>
            <span className="hidden md:inline-block text-border font-light">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-muted-foreground">
              <span>PROTOCOL:</span>
              <strong className="text-foreground">PRVT-SAMPLING v3.2</strong>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-muted-foreground">
              <span>REGISTRY:</span>
              <code className="text-foreground">WTV-NG-ELECTION-2027</code>
            </span>
          </div>

          {/* Real-time Status Indicator + Timecode */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="font-bold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase text-[11px]">
                ● LIVE MONITORING ACTIVE
              </span>
              <span className="text-muted-foreground text-[11px]">
                — Updated {elapsedMinutes}m ago
              </span>
              <button
                onClick={triggerSync}
                title="Refresh Telemetry Sync"
                className={`text-muted-foreground hover:text-primary transition-transform ${
                  isSyncing ? "animate-spin text-primary" : ""
                }`}
              >
                <RefreshCw className="h-3 w-3" />
              </button>
            </div>

            <span className="hidden sm:inline-block text-border font-light">|</span>
            <span className="hidden sm:inline-block font-mono text-[11px] font-semibold text-muted-foreground">
              {currentTimecode}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN BRIEFING HERO CONTENT */}
      <div className="container-wtv py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          
          {/* LEFT: Authoritative Briefing Headline & Context */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-xs border border-border bg-surface px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
              <Crosshair className="h-3.5 w-3.5 text-primary" />
              <span>National Situation Room Reconnaissance</span>
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Watching The Vote.{" "}
              <span className="text-primary block mt-1">
                Evidence-Led Election Intelligence.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Nigeria's authoritative citizen-led election observation initiative.
              Combining statistically representative random sampling (PRVT),
              geospatially geofenced incident telemetry, and cryptographically
              anchored audit trails across all 36 states and the FCT.
            </p>

            {/* Direct Action Hub */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-11 rounded-xs font-mono text-xs tracking-wider uppercase font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                <Link to="/dashboard">
                  <Activity className="mr-2 h-4 w-4" />
                  Launch Live Situation Dashboard
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="h-11 rounded-xs font-mono text-xs tracking-wider uppercase font-semibold border-border bg-surface hover:bg-accent text-foreground">
                <Link to="/watching-the-vote">
                  Inspect PRVT Methodology <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Quick Coordinate Footprint */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
              <div>
                <span className="text-foreground font-semibold">GEO-COVERAGE:</span> 774 / 774 LGAs
              </div>
              <div>
                <span className="text-foreground font-semibold">AUDIT ANCHOR:</span> SHA-256 Public Proof
              </div>
              <div>
                <span className="text-foreground font-semibold">METHOD:</span> PRVT Multi-stage Stratification
              </div>
            </div>
          </div>

          {/* RIGHT: OSINT Photographic Reconnaissance Visualizer */}
          <div>
            <PrecisionContainer
              coordinates={activeRecon.coord}
              dossierRef={`RECON FEED // ${activeRecon.id.toUpperCase()}`}
              showRulers
              className="shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={activeRecon.src}
                  alt={activeRecon.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                />

                {/* Tactical Reticle Grid Overlay */}
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30" />

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1.5 rounded-xs bg-slate-950/85 px-2.5 py-1 text-emerald-400 border border-emerald-500/30 backdrop-blur-md font-bold">
                    <Radio className="h-3 w-3 text-emerald-400 animate-pulse" />
                    {activeRecon.status}
                  </span>
                  <span className="rounded-xs bg-slate-950/85 px-2.5 py-1 text-slate-300 border border-white/10 backdrop-blur-md">
                    {activeRecon.cameraHash}
                  </span>
                </div>

                {/* Center Crosshair watermark */}
                <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center opacity-25">
                  <div className="h-16 w-16 border border-emerald-400/60 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    {activeRecon.location}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                    {activeRecon.title}
                  </h3>
                </div>
              </div>

              {/* Recon Selector Tabs */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-surface text-xs font-mono">
                {reconTiles.map((tile, idx) => {
                  const isActive = idx === activeReconIndex;
                  return (
                    <button
                      key={tile.id}
                      onClick={() => setActiveReconIndex(idx)}
                      className={`p-2.5 text-left transition-colors flex flex-col justify-between ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      <span className="text-[10px] opacity-70">FRAME 0{idx + 1}</span>
                      <span className="truncate text-[11px]">{tile.location.split("·")[1]?.trim() || tile.location}</span>
                    </button>
                  );
                })}
              </div>
            </PrecisionContainer>
          </div>
        </div>

        {/* PRECISION TELEMETRY TICKER STATS (OSINT SPECIFICATION #2) */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-3 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2 uppercase tracking-wider font-semibold text-foreground">
              <Activity className="h-3.5 w-3.5 text-primary" />
              <span>National Observation Telemetry Matrix</span>
            </span>
            <span className="hidden sm:inline-block">SAMPLING WEIGHT: STRATIFIED MULTI-STAGE</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {osintTelemetryStats.map((stat) => {
              const isAlert = stat.statusCode === "alert";
              return (
                <PrecisionContainer
                  key={stat.id}
                  coordinates={stat.reticleCoord}
                  className={`p-4 transition-all hover:border-primary/60 ${
                    isAlert ? "border-amber-500/50 bg-amber-500/[0.03]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                      {stat.label}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isAlert
                          ? "bg-amber-500 animate-pulse"
                          : "bg-emerald-500"
                      }`}
                    />
                  </div>

                  <div className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-foreground telemetry-stat">
                    {stat.value}
                  </div>

                  <div className="mt-2 flex items-center justify-between font-mono text-[10px] border-t border-border/50 pt-2 text-muted-foreground">
                    <span className="text-primary font-bold">{stat.delta}</span>
                    <span className="uppercase tracking-wider">{stat.statusText}</span>
                  </div>
                </PrecisionContainer>
              );
            })}
          </div>
        </div>

        {/* LIVE DISPATCH TICKER STREAM */}
        <div className="mt-8 border border-border bg-surface/70 px-4 py-2.5 rounded-xs font-mono text-xs flex items-center gap-3 overflow-hidden">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-primary shrink-0">
            <Radio className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>INCIDENT TICKER:</span>
          </span>

          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-muted-foreground">
            {liveTelemetryTicker.map((t) => (
              <span key={t.id} className="inline-flex items-center gap-2">
                <span className="text-foreground font-semibold">{t.time}</span>
                <span className="opacity-60">[{t.location}]</span>
                <span
                  className={
                    t.type === "disputed"
                      ? "text-rose-600 dark:text-rose-400 font-medium"
                      : t.type === "pending"
                      ? "text-amber-600 dark:text-amber-400 font-medium"
                      : "text-foreground"
                  }
                >
                  {t.message}
                </span>
                <span className="text-border">/</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
