import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  Quote,
  ArrowRight,
  Award,
  Globe2,
  Users2,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutWtvSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-surface-2/40 border-b border-border overflow-hidden">
      <div className="container-wtv">
        
        {/* TOP STORY: SAMSON ITODO & EXECUTIVE MANDATE */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Executive Portrait & Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-xl -z-10" />

              <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card shadow-elev-2">
                <img
                  src="/cynthia-o.jpg"
                  alt="Cynthia Mbamalu , Director of Programs, Yiaga Africa"
                  className="w-full object-cover aspect-[4/5] object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#73BE44] uppercase tracking-wider font-semibold">
                    <Award className="h-3.5 w-3.5" />
                    <span>Yiaga Africa Leadership</span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Cynthia Mbamalu
                  </h3>
                  <p className="text-xs text-white/80 font-mono mt-0.5">
                    Director of Programs · Yiaga Africa · Convener, Watching The Vote
                  </p>
                </div>
              </div>

              {/* Floating Stat Stamp */}
              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-elev-2">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-white font-bold text-sm">
                  10+
                </span>
                <div className="text-xs">
                  <div className="font-bold text-foreground">Years of Vigilance</div>
                  <div className="text-muted-foreground text-[11px]">Protecting the Ballot</div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Mission Statement */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
              <Scale className="h-3.5 w-3.5" />
              <span>The Yiaga Africa Doctrine</span>
            </div>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Democracy is Only as Strong as the Evidence Guarding It.
            </h2>

            {/* Featured Quote */}
            <div className="mt-6 rounded-2xl border-l-4 border-primary bg-card p-5 sm:p-6 shadow-sm">
              <Quote className="h-6 w-6 text-primary/40 mb-2" />
              <p className="font-serif text-base sm:text-lg italic text-foreground leading-relaxed">
                "Watching The Vote was founded on a simple, uncompromising truth: citizens cannot defend what they cannot verify. By arming everyday Nigerians with scientific observation tools, we transform democracy from a spectator sport into an active civic safeguard."
              </p>
              <div className="mt-3 font-mono text-xs text-primary font-bold">
                — Cynthia Mbamalu, Convener, Watching The Vote
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Watching The Vote is an independent, non-partisan citizen election observation initiative launched by Yiaga Africa. Deploying across all 36 states and the Federal Capital Territory, WTV provides timely, accurate information on the conduct of accreditation, voting, and the counting of ballots to ensure that announced election results reflect the ballots cast at polling units.
            </p>

            {/* Core Integrity Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold">Absolute Non-Partisanship</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Strict neutrality with zero political affiliation or funding bias.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold">Statistically Representative</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Random sampling scientifically tested by certified statisticians.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold">Real-Time Rapid Verification</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Automated SMS double-entry validation preventing human data error.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold">Open Public Integrity Data</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Every statement, dataset, and report is published openly for audit.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">
                  Learn About Yiaga Africa <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/watching-the-vote">
                  Our Methodology & Standards
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
