import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FileText,
  Filter,
  ShieldCheck,
  Clock,
  AlertTriangle,
  ArrowRight,
  Database,
  Search,
  Download,
} from "lucide-react";
import { EvidenceCard, type EvidenceStatus } from "./EvidenceCard";
import { evidenceDossierItems } from "@/lib/osint-data";
import { PrecisionContainer } from "./PrecisionCorner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EvidenceDossierSection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | EvidenceStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = evidenceDossierItems.filter((item) => {
    const matchesStatus =
      selectedFilter === "all" ? true : item.status === selectedFilter;
    const matchesSearch =
      searchQuery === ""
        ? true
        : item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.pollingUnit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const verifiedCount = evidenceDossierItems.filter((i) => i.status === "verified").length;
  const pendingCount = evidenceDossierItems.filter((i) => i.status === "pending").length;
  const disputedCount = evidenceDossierItems.filter((i) => i.status === "disputed").length;

  return (
    <section className="border-b border-border bg-surface-2/40 py-20 relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 osint-grid opacity-30" />

      <div className="container-wtv relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>INVESTIGATIVE DOSSIER & AUDIT LOG</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Evidence-First Observation Artifacts
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              Inspect raw field reports, photographic ballot sheets, and biometric verification
              trails. Every claim is bound to a four-stage cryptographic audit trail to maximize public trust.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="font-mono text-xs tracking-wider uppercase border-border bg-card">
              <Link to="/data">
                <Database className="mr-2 h-3.5 w-3.5 text-primary" />
                Raw Data Vault
              </Link>
            </Button>
            <Button asChild size="sm" className="font-mono text-xs tracking-wider uppercase font-bold bg-primary text-primary-foreground">
              <Link to="/dashboard">
                Live Situation Room <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
          {/* Status Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 rounded-xs border transition-colors uppercase font-bold flex items-center gap-1.5 ${
                selectedFilter === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-surface border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              <span>All Artifacts</span>
              <span className="rounded-xs bg-muted px-1.5 py-0.2 text-[10px] text-foreground font-mono">
                {evidenceDossierItems.length}
              </span>
            </button>

            <button
              onClick={() => setSelectedFilter("verified")}
              className={`px-3 py-1.5 rounded-xs border transition-colors uppercase font-bold flex items-center gap-1.5 ${
                selectedFilter === "verified"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-surface border-border text-muted-foreground hover:text-emerald-600 hover:bg-emerald-500/10"
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>Verified</span>
              <span className="rounded-xs bg-emerald-500/20 px-1.5 py-0.2 text-[10px] text-emerald-700 dark:text-emerald-300 font-mono">
                {verifiedCount}
              </span>
            </button>

            <button
              onClick={() => setSelectedFilter("pending")}
              className={`px-3 py-1.5 rounded-xs border transition-colors uppercase font-bold flex items-center gap-1.5 ${
                selectedFilter === "pending"
                  ? "bg-amber-600 text-white border-amber-600"
                  : "bg-surface border-border text-muted-foreground hover:text-amber-600 hover:bg-amber-500/10"
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-amber-500" />
              <span>Pending Review</span>
              <span className="rounded-xs bg-amber-500/20 px-1.5 py-0.2 text-[10px] text-amber-700 dark:text-amber-300 font-mono">
                {pendingCount}
              </span>
            </button>

            <button
              onClick={() => setSelectedFilter("disputed")}
              className={`px-3 py-1.5 rounded-xs border transition-colors uppercase font-bold flex items-center gap-1.5 ${
                selectedFilter === "disputed"
                  ? "bg-rose-600 text-white border-rose-600"
                  : "bg-surface border-border text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10"
              }`}
            >
              <AlertTriangle className="h-3.5 w-3.5 text-rose-500" />
              <span>Disputed / Anomalies</span>
              <span className="rounded-xs bg-rose-500/20 px-1.5 py-0.2 text-[10px] text-rose-700 dark:text-rose-300 font-mono">
                {disputedCount}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search ID, state, or keywords…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-8 pr-3 font-mono text-xs rounded-xs border-border bg-surface"
            />
          </div>
        </div>

        {/* Evidence Cards Feed */}
        <div className="mt-6 space-y-4">
          {filteredItems.map((item, idx) => (
            <EvidenceCard
              key={item.id}
              item={item}
              defaultExpanded={idx === 0}
            />
          ))}

          {filteredItems.length === 0 && (
            <div className="rounded-xs border border-dashed border-border p-12 text-center font-mono">
              <p className="text-sm text-muted-foreground">
                No matching evidence records found in the current filter query.
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedFilter("all");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-primary"
              >
                Reset search filters
              </Button>
            </div>
          )}
        </div>

        {/* Bottom Integrity Guarantee */}
        <div className="mt-10 rounded-xs border border-border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-3 font-mono text-xs">
            <div className="border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-4">
              <div className="text-[10px] font-bold uppercase text-primary tracking-wider">
                01 / BIOMETRIC FIELD GEOFENCING
              </div>
              <p className="mt-1.5 text-muted-foreground leading-relaxed">
                Citizen observers must authenticate via hardware key within 15 meters of registered polling coordinates.
              </p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-4">
              <div className="text-[10px] font-bold uppercase text-primary tracking-wider">
                02 / PRVT STATISTICAL CONFIDENCE
              </div>
              <p className="mt-1.5 text-muted-foreground leading-relaxed">
                Sampling variance is calculated across stratified clusters to eliminate electoral fraud in aggregate projections.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase text-primary tracking-wider">
                03 / MERKLE CHAIN AUDIT
              </div>
              <p className="mt-1.5 text-muted-foreground leading-relaxed">
                All photos and tally sheets are hashed using SHA-256 and synchronized to public civil society verification mirrors.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
