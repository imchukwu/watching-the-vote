import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Activity,
  Sliders,
  Radio,
  FileSpreadsheet,
  Download,
  ExternalLink,
  Layers,
  ArrowRight,
  Database,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 6 Geopolitical Zones with realistic illustrative observer deployments
export interface GeopoliticalZone {
  id: string;
  name: string;
  short: string;
  states: string[];
  totalPUs: string;
  observersDeployed: string;
  bvasReadiness: string;
  transmissionHealth: string;
  description: string;
}

export const geopoliticalZones: GeopoliticalZone[] = [
  {
    id: "nw",
    name: "North West",
    short: "NW",
    states: ["Kano", "Kaduna", "Katsina", "Jigawa", "Sokoto", "Kebbi", "Zamfara"],
    totalPUs: "41,200 PUs",
    observersDeployed: "1,850 Observers",
    bvasReadiness: "98.2%",
    transmissionHealth: "99.5%",
    description: "Highest concentration of registered polling units. Full stationary observer coverage across sample clusters.",
  },
  {
    id: "sw",
    name: "South West",
    short: "SW",
    states: ["Lagos", "Oyo", "Ogun", "Ondo", "Osun", "Ekiti"],
    totalPUs: "34,850 PUs",
    observersDeployed: "1,620 Observers",
    bvasReadiness: "99.1%",
    transmissionHealth: "99.8%",
    description: "High urban density with synchronized mobile data and SMS fallback transmission.",
  },
  {
    id: "nc",
    name: "North Central",
    short: "NC",
    states: ["FCT Abuja", "Benue", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"],
    totalPUs: "27,450 PUs",
    observersDeployed: "1,340 Observers",
    bvasReadiness: "97.8%",
    transmissionHealth: "99.2%",
    description: "Hub of the National Situation Room with direct physical escalation to national security headquarters.",
  },
  {
    id: "ss",
    name: "South South",
    short: "SS",
    states: ["Rivers", "Delta", "Edo", "Akwa Ibom", "Cross River", "Bayelsa"],
    totalPUs: "26,100 PUs",
    observersDeployed: "1,290 Observers",
    bvasReadiness: "98.0%",
    transmissionHealth: "98.9%",
    description: "Riverine and coastal cluster logistics with specialized satellite-augmented observer communication.",
  },
  {
    id: "ne",
    name: "North East",
    short: "NE",
    states: ["Borno", "Bauchi", "Adamawa", "Gombe", "Taraba", "Yobe"],
    totalPUs: "24,800 PUs",
    observersDeployed: "1,210 Observers",
    bvasReadiness: "97.4%",
    transmissionHealth: "98.6%",
    description: "Dedicated monitoring for internally displaced persons (IDP) voting centers and secure transmission protocols.",
  },
  {
    id: "se",
    name: "South East",
    short: "SE",
    states: ["Enugu", "Anambra", "Imo", "Abia", "Ebonyi"],
    totalPUs: "21,600 PUs",
    observersDeployed: "1,190 Observers",
    bvasReadiness: "97.9%",
    transmissionHealth: "99.1%",
    description: "Intense focus on polling station opening times, voter queue security, and result sheet posting compliance.",
  },
];

// Interactive PRVT Verification Scenarios
export interface PrvtScenario {
  id: string;
  name: string;
  type: string;
  year: string;
  parties: {
    party: string;
    officialDeclared: number;
    wtvSampleEstimate: number;
    ciLow: number;
    ciHigh: number;
    verdict: "Consistent" | "Discrepancy" | "Under Review";
    color: string;
  }[];
  sampleSize: string;
  samplingMethod: string;
}

export const prvtScenarios: PrvtScenario[] = [
  {
    id: "ondo-2024",
    name: "Ondo State Governorship",
    type: "Off-Cycle Gubernatorial",
    year: "2024",
    parties: [
      {
        party: "Candidate A",
        officialDeclared: 52.8,
        wtvSampleEstimate: 52.4,
        ciLow: 50.9,
        ciHigh: 53.9,
        verdict: "Consistent",
        color: "#246A37",
      },
      {
        party: "Candidate B",
        officialDeclared: 41.2,
        wtvSampleEstimate: 41.6,
        ciLow: 40.1,
        ciHigh: 43.1,
        verdict: "Consistent",
        color: "#73BE44",
      },
      {
        party: "Other Parties",
        officialDeclared: 6.0,
        wtvSampleEstimate: 6.0,
        ciLow: 5.2,
        ciHigh: 6.8,
        verdict: "Consistent",
        color: "#94a3b8",
      },
    ],
    sampleSize: "500 Polling Units",
    samplingMethod: "Stratified Random Sampling (All 18 LGAs)",
  },
  {
    id: "edo-2024",
    name: "Edo State Governorship",
    type: "Off-Cycle Gubernatorial",
    year: "2024",
    parties: [
      {
        party: "Candidate A",
        officialDeclared: 51.4,
        wtvSampleEstimate: 51.1,
        ciLow: 49.6,
        ciHigh: 52.6,
        verdict: "Consistent",
        color: "#246A37",
      },
      {
        party: "Candidate B",
        officialDeclared: 42.7,
        wtvSampleEstimate: 43.0,
        ciLow: 41.5,
        ciHigh: 44.5,
        verdict: "Consistent",
        color: "#73BE44",
      },
      {
        party: "Other Parties",
        officialDeclared: 5.9,
        wtvSampleEstimate: 5.9,
        ciLow: 5.1,
        ciHigh: 6.7,
        verdict: "Consistent",
        color: "#94a3b8",
      },
    ],
    sampleSize: "610 Polling Units",
    samplingMethod: "Multi-Stage Probability Sampling (18 LGAs)",
  },
];

export function CivicTechDataSection() {
  const [activeZone, setActiveZone] = useState("nw");
  const [activeScenarioId, setActiveScenarioId] = useState("ondo-2024");
  const [simulatedSampleSize, setSimulatedSampleSize] = useState(1500);

  const selectedZone = geopoliticalZones.find((z) => z.id === activeZone) || geopoliticalZones[0];
  const selectedScenario = prvtScenarios.find((s) => s.id === activeScenarioId) || prvtScenarios[0];

  // Dynamically calculate margin of error based on sample size slider
  // Margin roughly = 1 / sqrt(n) * 100 for a proportion near 50%
  const computedMargin = (1 / Math.sqrt(simulatedSampleSize) * 45).toFixed(1);

  return (
    <section className="relative py-20 lg:py-28 bg-surface-2/30 border-b border-border overflow-hidden">
      <div className="container-wtv">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
              <Database className="h-3.5 w-3.5" />
              <span>Civic Technology & Data Intelligence</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Evidence-Based Election Science
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Watching The Vote transforms raw polling unit data into verifiable mathematical proof — confirming whether official declared results truly mirror what citizens voted.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link to="/data">
                <FileSpreadsheet className="mr-2 h-4 w-4" /> Open Data Archive
              </Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/dashboard">
                <Activity className="mr-2 h-4 w-4" /> Live Situation Room
              </Link>
            </Button>
          </div>
        </div>

        {/* TWO-COLUMN CIVIC TECH INTERFACE */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          
          {/* COLUMN 1 (7 cols): INTERACTIVE PRVT VERIFICATION SIMULATOR */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elev-1">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    PRVT STATISTICAL ENGINE
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                    Official vs. Sample Verification
                  </h3>
                </div>

                {/* Scenario Switcher */}
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface p-1">
                  {prvtScenarios.map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => setActiveScenarioId(sc.id)}
                      className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                        activeScenarioId === sc.id
                          ? "bg-primary text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {sc.name.split(" ")[0]} {sc.year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explanatory Banner */}
              <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5 text-xs text-muted-foreground">
                <div className="flex items-start gap-2 text-foreground font-semibold">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>How PRVT Proves Integrity:</span>
                </div>
                <p className="mt-1 pl-6">
                  If the official INEC result falls within WTV's statistically projected 95% Confidence Interval, the result is mathematically certified consistent with ballots cast at the polling units.
                </p>
              </div>

              {/* Dynamic Comparison Rows */}
              <div className="mt-6 space-y-6">
                {selectedScenario.parties.map((p) => {
                  const isWithin = p.officialDeclared >= p.ciLow && p.officialDeclared <= p.ciHigh;

                  return (
                    <div key={p.party} className="rounded-xl border border-border/70 bg-surface/50 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
                          <span className="font-display text-base font-bold text-foreground">{p.party}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            isWithin
                              ? "border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 font-mono text-[11px]"
                              : "border-red-500/30 bg-red-50 text-red-700 font-mono text-[11px]"
                          }
                        >
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          {isWithin ? "STATISTICALLY CONSISTENT" : "VARIANCE DETECTED"}
                        </Badge>
                      </div>

                      {/* Bar Visualization: Official vs WTV Range */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                          <span>INEC Declared: <strong className="text-foreground">{p.officialDeclared}%</strong></span>
                          <span>WTV 95% CI: <strong className="text-primary">[{p.ciLow}% — {p.ciHigh}%]</strong></span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="relative h-6 w-full rounded-md bg-surface-2 border border-border overflow-hidden">
                          {/* WTV Confidence Band Range */}
                          <div
                            className="absolute top-0 bottom-0 bg-primary/20 border-x border-primary"
                            style={{
                              left: `${Math.max(0, p.ciLow - 15)}%`,
                              width: `${(p.ciHigh - p.ciLow) * 2.5}%`,
                            }}
                          />

                          {/* Official Result Marker Point */}
                          <div
                            className="absolute top-0 bottom-0 w-2.5 rounded-sm bg-primary shadow-sm"
                            style={{
                              left: `${Math.max(0, p.officialDeclared - 14)}%`,
                            }}
                            title={`Official Declared: ${p.officialDeclared}%`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sample Precision Slider Simulation */}
              <div className="mt-6 rounded-xl border border-dashed border-border bg-surface-2/40 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-foreground flex items-center gap-1.5">
                    <Sliders className="h-3.5 w-3.5 text-primary" /> Test Sampling Margin
                  </span>
                  <span className="font-mono text-primary font-bold">
                    ±{computedMargin}% Margin of Error
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-4">
                  <span className="font-mono text-[11px] text-muted-foreground">500 PUs</span>
                  <input
                    type="range"
                    min="500"
                    max="4000"
                    step="250"
                    value={simulatedSampleSize}
                    onChange={(e) => setSimulatedSampleSize(Number(e.target.value))}
                    className="w-full accent-primary h-2 rounded-lg bg-surface cursor-pointer"
                  />
                  <span className="font-mono text-[11px] text-muted-foreground">4,000 PUs</span>
                </div>
                <div className="mt-2 text-right font-mono text-[10px] text-muted-foreground">
                  Simulated Sample Size: <strong>{simulatedSampleSize.toLocaleString()} Polling Units</strong>
                </div>
              </div>
            </div>

            {/* Verification Footer Link */}
            <div className="mt-6 border-t border-border pt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Methodology: Process & Result Verification for Transparency (PRVT)</span>
              <Link to="/watching-the-vote" className="text-primary font-semibold hover:underline inline-flex items-center">
                Detailed whitepaper <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 (5 cols): NIGERIA GEOPOLITICAL DEPLOYMENT EXPLORER */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elev-1">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    NATIONWIDE NETWORK
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                    Deployment Density
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  36 States + FCT
                </span>
              </div>

              {/* Zone Selector Pills */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {geopoliticalZones.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`rounded-lg border p-2 text-center transition-all ${
                      activeZone === z.id
                        ? "border-primary bg-primary-soft text-primary font-bold shadow-sm"
                        : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground text-xs"
                    }`}
                  >
                    <div className="font-mono text-[10px] uppercase">{z.short}</div>
                    <div className="text-xs font-semibold leading-tight">{z.name}</div>
                  </button>
                ))}
              </div>

              {/* Active Zone Detail Card */}
              <div className="mt-6 rounded-xl border border-border bg-surface/70 p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-foreground">
                    {selectedZone.name} Region
                  </h4>
                  <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30">
                    ● ACTIVE CORRIDOR
                  </Badge>
                </div>

                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {selectedZone.description}
                </p>

                {/* States in Zone */}
                <div className="mt-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    States Included:
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {selectedZone.states.map((st) => (
                      <span
                        key={st}
                        className="rounded-md border border-border bg-card px-2 py-0.5 text-xs font-medium text-foreground"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase">Accredited Observers</span>
                    <div className="font-display text-base font-bold text-foreground mt-0.5">
                      {selectedZone.observersDeployed}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase">Polling Unit Universe</span>
                    <div className="font-display text-base font-bold text-foreground mt-0.5">
                      {selectedZone.totalPUs}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase">BVAS Verification</span>
                    <div className="font-display text-base font-bold text-success mt-0.5">
                      {selectedZone.bvasReadiness}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase">Transmission Reliability</span>
                    <div className="font-display text-base font-bold text-primary mt-0.5">
                      {selectedZone.transmissionHealth}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rapid Incident Triage Snapshot */}
              <div className="mt-6 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>Simulated Telemetry Feed</span>
                  <span className="text-[#73BE44]">● 100% OPERATIONAL</span>
                </div>
                
                <div className="divide-y divide-border rounded-lg border border-border bg-surface text-xs font-mono">
                  <div className="flex items-center justify-between p-2.5">
                    <span className="flex items-center gap-1.5 text-foreground">
                      <CheckCircle2 className="h-3 w-3 text-success" /> Form EC8A Ingested
                    </span>
                    <span className="text-muted-foreground">PU-002 · 12:44 WAT</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5">
                    <span className="flex items-center gap-1.5 text-foreground">
                      <Radio className="h-3 w-3 text-primary animate-pulse" /> Observer Check-in
                    </span>
                    <span className="text-muted-foreground">PU-118 · 12:43 WAT</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5">
                    <span className="flex items-center gap-1.5 text-foreground">
                      <CheckCircle2 className="h-3 w-3 text-success" /> BVAS Battery Verified
                    </span>
                    <span className="text-muted-foreground">PU-094 · 12:41 WAT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <Button asChild variant="outline" className="w-full text-xs">
                <Link to="/elections">
                  <MapPin className="mr-2 h-3.5 w-3.5 text-primary" /> View All 36 States & Elections
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
