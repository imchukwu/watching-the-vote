import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Radio,
  Users,
  ShieldCheck,
  RefreshCw,
  Clock,
  Terminal,
  FileCheck,
  Search,
  Filter,
} from "lucide-react";
import { turnoutSeries, incidentBreakdown, stateActivity } from "@/lib/wtv-data";
import { evidenceDossierItems } from "@/lib/osint-data";
import { EvidenceCard } from "@/components/site/EvidenceCard";
import { PrecisionContainer } from "@/components/site/PrecisionCorner";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Election Intelligence Dashboard — Watching The Vote" },
      { name: "description", content: "Live observer check-ins, incident reports, polling-unit coverage and PRVT status." },
      { property: "og:title", content: "Election Dashboard · Watching The Vote" },
      { property: "og:description", content: "Real-time observer deployment and incident intelligence from Nigeria's elections." },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
  component: DashboardPage,
});

const CHART_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

function DashboardPage() {
  const [elapsedMinutes, setElapsedMinutes] = useState(2);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [incidentTab, setIncidentTab] = useState<"all" | "verified" | "pending" | "disputed">("all");

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setElapsedMinutes(0);
      setIsRefreshing(false);
    }, 700);
  };

  const filteredIncidents = evidenceDossierItems.filter((item) =>
    incidentTab === "all" ? true : item.status === incidentTab,
  );

  return (
    <SiteLayout>
      {/* OSINT LIVE INTELLIGENCE BRIEFING HEADER */}
      <section className="relative border-b border-border bg-surface-2/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 osint-grid opacity-30" />
        
        {/* Top Telemetry Header Ribbon */}
        <div className="border-b border-border bg-surface/80 px-4 py-1.5 font-mono text-[11px] text-muted-foreground">
          <div className="container-wtv flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-foreground font-semibold uppercase tracking-wider">
              <Terminal className="h-3 w-3 text-primary" />
              <span>SITUATION ROOM INTEL // LIVE TELEMETRY STREAM</span>
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                ● LIVE MONITORING ACTIVE
              </span>
              <span>— Updated {elapsedMinutes}m ago</span>
              <button
                onClick={triggerRefresh}
                className={`hover:text-primary transition-transform ${isRefreshing ? "animate-spin text-primary" : ""}`}
                title="Sync telemetry"
              >
                <RefreshCw className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Title & Query Filters */}
        <div className="container-wtv py-10 md:py-12 relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-bold">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>36 States + FCT Real-Time Telemetry</span>
              </div>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
                Election Operations & Incident Reconnaissance
              </h1>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl">
                Aggregated from thousands of accredited citizen monitors reporting across Nigeria's
                176,846 polling units. Every data point is geofenced and cryptographically validated.
              </p>
            </div>

            {/* Filter Selector Row */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <Select defaultValue="2027-general">
                <SelectTrigger className="w-52 h-9 rounded-xs font-mono text-xs border-border bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="font-mono text-xs">
                  <SelectItem value="2027-general">2027 General Election</SelectItem>
                  <SelectItem value="2026-osun">2026 Osun Governorship</SelectItem>
                  <SelectItem value="2024-ondo">2024 Ondo Governorship</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-36 h-9 rounded-xs font-mono text-xs border-border bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="font-mono text-xs">
                  <SelectItem value="all">All 36 States</SelectItem>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                  <SelectItem value="rivers">Rivers</SelectItem>
                  <SelectItem value="kaduna">Kaduna</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="h-9 rounded-xs font-mono text-xs border-border bg-card">
                Export Telemetry CSV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD TELEMETRY METRIC CARDS */}
      <section className="container-wtv py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Field Observers Deployed",
              val: "3,812 / 3,850",
              coord: "CORPS // 99.0%",
              delta: "99.0% OF QUOTA",
              statusText: "BIOMETRIC AUTHED",
              tint: "text-primary",
              dot: "bg-emerald-500",
            },
            {
              label: "Telemetry Check-ins",
              val: "8,942",
              coord: "STREAM // +310/HR",
              delta: "+310 PER HOUR",
              statusText: "STREAMING CONTINUOUS",
              tint: "text-emerald-600",
              dot: "bg-emerald-500",
            },
            {
              label: "Incidents In Triage",
              val: "163",
              coord: "HOTSPOT // 14 PENDING",
              delta: "149 RESOLVED",
              statusText: "14 UNDER TRIAGE",
              tint: "text-amber-600",
              dot: "bg-amber-500 animate-pulse",
            },
            {
              label: "PRVT Sample Verified",
              val: "1,048",
              coord: "CONF // 99.82%",
              delta: "±1.15% CI",
              statusText: "STATISTICALLY SOUND",
              tint: "text-primary",
              dot: "bg-emerald-500",
            },
          ].map((k) => (
            <PrecisionContainer key={k.label} coordinates={k.coord} className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                  {k.label}
                </span>
                <span className={`h-2 w-2 rounded-full ${k.dot}`} />
              </div>
              <div className="mt-2 font-mono text-3xl font-extrabold text-foreground telemetry-stat">
                {k.val}
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-2 font-mono text-[10px] text-muted-foreground">
                <span className="text-primary font-bold">{k.delta}</span>
                <span className="uppercase">{k.statusText}</span>
              </div>
            </PrecisionContainer>
          ))}
        </div>

        {/* TIME-SERIES AND INCIDENT CHARTS */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <PrecisionContainer
            coordinates="CHART // TURN-TS"
            dossierRef="CHECK-INS VS INCIDENTS"
            className="lg:col-span-2 p-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4 font-mono text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider">
                Observer Check-ins vs. Flagged Incidents (Today)
              </span>
              <span className="text-muted-foreground text-[10px]">T-SERIES // 08:00 - 19:00</span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={turnoutSeries}>
                  <defs>
                    <linearGradient id="ck" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="in" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={10} fontFamily="var(--font-mono)" />
                  <YAxis stroke="var(--muted-foreground)" fontSize={10} fontFamily="var(--font-mono)" />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 2, fontSize: 11, fontFamily: "var(--font-mono)" }} />
                  <Area type="monotone" dataKey="checkins" stroke="var(--chart-1)" fill="url(#ck)" strokeWidth={2} name="Observer Check-ins" />
                  <Area type="monotone" dataKey="incidents" stroke="var(--chart-3)" fill="url(#in)" strokeWidth={2} name="Flagged Incidents" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </PrecisionContainer>

          <PrecisionContainer
            coordinates="CHART // CAT-BRK"
            dossierRef="INCIDENT DISTRIBUTION"
            className="p-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/70 mb-4 font-mono text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider">
                Incident Breakdown
              </span>
              <span className="text-muted-foreground text-[10px]">Σ = 100</span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={incidentBreakdown} innerRadius={45} outerRadius={78} paddingAngle={2} dataKey="value">
                    {incidentBreakdown.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 2, fontSize: 11, fontFamily: "var(--font-mono)" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2 space-y-1.5 font-mono text-xs">
              {incidentBreakdown.map((b, i) => (
                <li key={b.name} className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-xs" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
                    <span className="truncate max-w-[170px]">{b.name}</span>
                  </span>
                  <span className="font-bold text-foreground">{b.value}%</span>
                </li>
              ))}
            </ul>
          </PrecisionContainer>
        </div>

        {/* EVIDENCE-FIRST INCIDENT FEED & EXPANDABLE AUDIT TRAILS */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                <FileCheck className="h-3.5 w-3.5" />
                <span>Field Evidence Triage & Provenance Ledger</span>
              </div>
              <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                Investigative Incident Artifacts
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {(["all", "verified", "pending", "disputed"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setIncidentTab(tab)}
                  className={`px-3 py-1 rounded-xs border uppercase text-[11px] font-bold transition-colors ${
                    incidentTab === tab
                      ? "bg-foreground text-background border-foreground"
                      : "bg-surface border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {filteredIncidents.map((incident, idx) => (
              <EvidenceCard key={incident.id} item={incident} defaultExpanded={idx === 0} />
            ))}
          </div>
        </div>

        {/* STATE ACTIVITY TABLE */}
        <div className="mt-10">
          <PrecisionContainer
            coordinates="TBL // 36+FCT"
            dossierRef="REGIONAL DEPLOYMENT MATRIX"
            className="p-5"
          >
            <div className="flex flex-wrap items-center justify-between pb-3 border-b border-border/70 mb-4 font-mono text-xs">
              <div>
                <span className="font-bold text-foreground uppercase tracking-wider text-sm">
                  State-by-State Observation Coverage
                </span>
                <span className="block text-muted-foreground text-[11px] mt-0.5">
                  Deployment quotas, registered polling units, and operational telemetry status.
                </span>
              </div>
              <span className="text-muted-foreground text-[11px] flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Updated 30s ago
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full font-mono text-xs text-left">
                <thead className="border-b border-border/80 uppercase text-[10px] tracking-wider text-muted-foreground bg-surface/50">
                  <tr>
                    <th className="py-2.5 px-3">State Division</th>
                    <th className="py-2.5 px-3">Registered PUs</th>
                    <th className="py-2.5 px-3">Accredited Observers</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Situation Room Feed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {stateActivity.map((s) => (
                    <tr key={s.state} className="hover:bg-accent/40 transition-colors">
                      <td className="py-3 px-3 font-bold text-foreground">{s.state}</td>
                      <td className="py-3 px-3 text-muted-foreground font-mono">{s.pu.toLocaleString()}</td>
                      <td className="py-3 px-3 font-mono font-medium">{s.observers}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`rounded-xs px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${
                            s.status === "Active"
                              ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                              : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                          }`}
                        >
                          ● {s.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <Button size="sm" variant="ghost" className="h-7 text-xs font-mono text-primary hover:underline">
                          Inspect Dossier →
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PrecisionContainer>
        </div>
      </section>
    </SiteLayout>
  );
}

