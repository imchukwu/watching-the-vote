import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  UserCheck,
  Compass,
  Eye,
  AlertTriangle,
  BarChart2,
  Share2,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  Smartphone,
  Cpu,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProcessStage {
  step: string;
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  icon: typeof UserCheck;
  highlight: string;
  metric: { value: string; label: string };
  workflow: string[];
  keyActions: string[];
}

export const processStages: ProcessStage[] = [
  {
    step: "01",
    id: "recruitment-training",
    title: "Recruitment & Rigorous Training",
    headline: "Vetted non-partisan citizens trained in sampling science and ethics",
    description:
      "Before deployment, citizen observers undergo multi-day simulation drills, methodology testing, and sign a binding non-partisan code of conduct. Only accredited citizens who pass the competence benchmark are assigned to sample polling units.",
    image: "/images/wtv5.jpg",
    icon: UserCheck,
    highlight: "Non-Partisan Vetting & Simulation Drills",
    metric: { value: "100%", label: "Vetted Non-Partisan Observers" },
    workflow: ["Community Outreach", "Civic Integrity Screening", "Simulation Testing", "Accreditation & Pledge"],
    keyActions: [
      "Rigorous background check preventing party affiliations",
      "Comprehensive training on electoral laws and INEC regulations",
      "Hands-on drills with coded observation checklists and incident logging",
    ],
  },
  {
    step: "02",
    id: "deployment-sampling",
    title: "Stratified Sample Deployment",
    headline: "Representative random sampling designed by senior statisticians",
    description:
      "WTV does not guess or rely on anecdotal reports. Observers are deployed to a statistically representative sample of polling units drawn randomly across all senatorial districts and local government areas.",
    image: "/images/wtv3.jpg",
    icon: Compass,
    highlight: "PRVT Representative Random Sample",
    metric: { value: "±1.2%", label: "Statistical Margin of Error" },
    workflow: ["Sample Stratification", "Geospatial Cluster Mapping", "Stationary PU Assignment", "Field Deployment Dispatch"],
    keyActions: [
      "Stationary observers remain at assigned PU from setup to collation",
      "Roving observer teams monitor surrounding electoral corridors",
      "Geotagged check-ins verify physical presence before voting commences",
    ],
  },
  {
    step: "03",
    id: "field-observation",
    title: "Polling-Unit Observation",
    headline: "Continuous monitoring of materials, accreditation, and secret ballot",
    description:
      "From 07:30 AM through sunset, observers document whether polling units opened on time, whether BVAS devices functioned, if voting was conducted in secret, and if vulnerable groups received priority.",
    image: "/images/wtv1.jpg",
    icon: Eye,
    highlight: "Standardized Field Verification Checklist",
    metric: { value: "65+", label: "Electoral Quality Indicators" },
    workflow: ["Arrival & Logistics Check", "Accreditation & BVAS Audit", "Voting Secrecy Monitoring", "Ballot Box Security"],
    keyActions: [
      "Minute-by-minute tracking of INEC official arrival and ballot supplies",
      "Monitoring voter accreditation and BVAS facial/fingerprint scans",
      "Protecting ballot secrecy and identifying any vote buying or intimidation",
    ],
  },
  {
    step: "04",
    id: "incident-reporting",
    title: "Real-Time Incident Triage",
    headline: "Critical alerts verified and escalated within minutes",
    description:
      "When irregularities occur — such as BVAS malfunction, violence, or missing materials — observers submit critical incident reports via encrypted SMS and dedicated mobile tools directly to the WTV triage desk.",
    image: "/images/wtv9.jpg",
    icon: AlertTriangle,
    highlight: "Rapid Multi-Tier Verification Desk",
    metric: { value: "< 15m", label: "Average Incident Escalation Time" },
    workflow: ["Observer Alert Dispatch", "Verification Phone Call", "Evidence Corroboration", "INEC & Security Escalation"],
    keyActions: [
      "Immediate verification callback to confirm incident veracity",
      "Direct line to INEC National Situation Room for corrective intervention",
      "Public escalation alerts when security or democratic integrity is threatened",
    ],
  },
  {
    step: "05",
    id: "prvt-verification",
    title: "Process & Result Verification (PRVT)",
    headline: "Independent statistical verification of official Form EC8A results",
    description:
      "When voting ends, observers observe the public ballot count and record the official figures on Form EC8A. These numbers are transmitted to the central database, generating an independent statistical estimate with 95% confidence intervals.",
    image: "/images/wtv2.jpg",
    icon: BarChart2,
    highlight: "Independent Statistical Margin Verification",
    metric: { value: "95%", label: "Confidence Interval Level" },
    workflow: ["Public Count Observation", "Form EC8A Ingestion", "Double-Entry Validation", "Statistical Range Computation"],
    keyActions: [
      "Recording exact vote counts as announced and posted at the polling unit",
      "Instant algorithmic cross-check against registered voter totals",
      "Verification of whether official declared results fall within statistical bands",
    ],
  },
  {
    step: "06",
    id: "public-integrity",
    title: "Public Integrity Briefings & Open Data",
    headline: "Informing the nation with facts, evidence, and open datasets",
    description:
      "Yiaga Africa hosts televised press conferences delivering timely, evidence-based assessments. After elections, anonymised polling-unit level microdata is published openly for citizens, media, and researchers.",
    image: "/images/wtv8.jpg",
    icon: Share2,
    highlight: "Open Civic Intelligence For All Nigerians",
    metric: { value: "100%", label: "Open & Auditable Data" },
    workflow: ["Preliminary Statement", "Televised Press Conference", "Comprehensive Final Report", "Open Micro-Data Release"],
    keyActions: [
      "Delivering factual assessments to counter rumors and disinformation",
      "Clear verdicts on whether declared outcomes reflect voter choices",
      "Publishing downloadable data tables and policy recommendations for reform",
    ],
  },
];

export function VisualProcessStory() {
  const [activeStep, setActiveStep] = useState(0);
  const current = processStages[activeStep];
  const IconComponent = current.icon;

  return (
    <section className="relative border-y border-border bg-gradient-to-b from-background via-surface-2/40 to-background py-20 lg:py-28 overflow-hidden">
      {/* Decorative Cartographic Grid Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-wtv relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Science of Citizen Observation</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight text-foreground">
            How Watching The Vote Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            From recruit training to national televised briefings: a transparent, end-to-end scientific methodology designed to give every Nigerian citizen confidence in their elections.
          </p>
        </div>

        {/* STEPPER NAVIGATION TABS */}
        <div className="mt-14">
          <div className="relative">
            {/* Connecting Progress Line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-border -z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
              {processStages.map((stage, idx) => {
                const isCurrent = idx === activeStep;
                const isPast = idx < activeStep;
                const StepIcon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStep(idx)}
                    className={`group relative flex flex-col items-center rounded-xl p-3.5 text-center transition-all ${
                      isCurrent
                        ? "bg-card border-2 border-primary shadow-elev-2 scale-[1.02]"
                        : "bg-surface/80 border border-border hover:border-primary/40 hover:bg-surface"
                    }`}
                  >
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold transition-transform group-hover:scale-105 ${
                        isCurrent
                          ? "bg-primary text-white shadow-md shadow-primary/30"
                          : isPast
                          ? "bg-primary-soft text-primary"
                          : "bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </div>

                    <div className="mt-2.5">
                      <span className="font-mono text-[10px] font-bold text-primary tracking-widest block uppercase">
                        PHASE {stage.step}
                      </span>
                      <h4
                        className={`text-xs font-bold leading-snug line-clamp-2 mt-0.5 ${
                          isCurrent ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {stage.title}
                      </h4>
                    </div>

                    {isCurrent && (
                      <span className="absolute -bottom-1.5 h-1 w-6 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ACTIVE STAGE SHOWCASE CARD */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-elev-2">
          <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
            
            {/* LEFT / TOP: High-Resolution Authentic Field Photography */}
            <div className="relative min-h-[300px] sm:min-h-[380px] lg:col-span-6 lg:min-h-full overflow-hidden bg-slate-950">
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Bottom Image Stamp */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#246A37] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  <IconComponent className="h-3.5 w-3.5" />
                  <span>Phase {current.step} In Focus</span>
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold leading-snug text-white drop-shadow-md">
                  {current.headline}
                </h3>
              </div>
            </div>

            {/* RIGHT: In-Depth Methodological Narrative & Workflow */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10">
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                      STAGE {current.step} OF 06
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-xs font-semibold text-muted-foreground">{current.highlight}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl font-extrabold text-primary">{current.metric.value}</span>
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                      {current.metric.label}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  {current.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {current.description}
                </p>

                {/* Connected Step Workflow Diagram */}
                <div className="mt-6 rounded-xl border border-border bg-surface-2/50 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-primary" /> Stage Execution Pipeline
                  </div>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {current.workflow.map((item, idx) => (
                      <div key={item} className="flex flex-col items-center text-center p-2 rounded-lg bg-card border border-border/80">
                        <span className="font-mono text-[10px] font-bold text-primary">0{idx + 1}</span>
                        <span className="text-[11px] font-semibold text-foreground mt-0.5 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Methodological Rules */}
                <div className="mt-6 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
                    Core Operational Guarantees:
                  </div>
                  {current.keyActions.map((action) => (
                    <div key={action} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="text-xs"
                >
                  ← Previous Phase
                </Button>

                <div className="flex gap-1.5">
                  {processStages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Jump to phase ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === activeStep ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={activeStep === processStages.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(processStages.length - 1, prev + 1))}
                  className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-white"
                >
                  Next Phase <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Process Guarantee Callout Strip */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <Shield className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-sm font-bold">100% Non-Partisan</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Strict observer swearing-in preventing political party entanglement.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <FileCheck className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-sm font-bold">Form EC8A Ingestion</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Double-blind data entry ensuring every recorded vote is cross-verified.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-sm font-bold">Real-Time Escalation</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Direct situation room link to INEC and security agencies to defuse tensions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
