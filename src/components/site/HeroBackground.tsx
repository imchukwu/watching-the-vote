import {
  ShieldCheck, BarChart3, MapPin, Eye, Radio, CheckCircle2,
  Database, Users, Activity, Globe
} from "lucide-react";

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Topographic Grid Overlay */}
      <div className="absolute inset-0 grid-topo opacity-40" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-emerald-500/15 blur-[120px] animate-pulse" />
      <div className="absolute top-1/4 -right-32 h-[550px] w-[550px] rounded-full bg-[#246A37]/30 blur-[130px]" />
      <div className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />

      {/* Floating Icon Nodes Placed Across Grid Points (Icons only, no text) */}
      <div className="container-wtv relative h-full">
        {/* Node 1: Top Left */}
        <div className="absolute top-[8%] left-[4%] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-300 shadow-lg backdrop-blur-md animate-float">
          <ShieldCheck className="h-5 w-5" />
        </div>

        {/* Node 2: Top Mid-Left */}
        <div className="absolute top-[14%] left-[26%] flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-emerald-400 shadow-md backdrop-blur-md animate-float-delayed">
          <MapPin className="h-4 w-4" />
        </div>

        {/* Node 3: Top Right */}
        <div className="absolute top-[10%] right-[14%] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-300 shadow-lg backdrop-blur-md animate-float-slow">
          <BarChart3 className="h-5 w-5" />
        </div>

        {/* Node 4: Mid-Left */}
        <div className="absolute top-[42%] left-[2%] flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-amber-300 shadow-md backdrop-blur-md animate-float-slow">
          <Radio className="h-4.5 w-4.5" />
        </div>

        {/* Node 5: Mid-Center Left */}
        <div className="absolute top-[52%] left-[28%] flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-emerald-300 shadow-md backdrop-blur-md animate-float">
          <Eye className="h-4 w-4" />
        </div>

        {/* Node 6: Mid-Right */}
        <div className="absolute top-[38%] right-[4%] flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-300 shadow-md backdrop-blur-md animate-float-delayed">
          <CheckCircle2 className="h-4.5 w-4.5" />
        </div>

        {/* Node 7: Bottom-Left */}
        <div className="absolute bottom-[18%] left-[6%] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-400 shadow-lg backdrop-blur-md animate-float-delayed">
          <Database className="h-5 w-5" />
        </div>

        {/* Node 8: Bottom Mid-Left */}
        <div className="absolute bottom-[8%] left-[22%] flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-amber-300 shadow-md backdrop-blur-md animate-float">
          <Activity className="h-4 w-4" />
        </div>

        {/* Node 9: Bottom Right */}
        <div className="absolute bottom-[12%] right-[10%] flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-emerald-300 shadow-md backdrop-blur-md animate-float-slow">
          <Users className="h-4.5 w-4.5" />
        </div>

        {/* Node 10: Bottom Center-Right */}
        <div className="absolute bottom-[24%] right-[32%] flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-emerald-400 shadow-md backdrop-blur-md animate-float">
          <Globe className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
