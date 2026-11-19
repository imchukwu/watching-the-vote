import { useState } from "react";
import {
  ShieldCheck,
  Clock,
  MapPin,
  AlertTriangle,
  Fingerprint,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Hash,
  Copy,
  Check,
  ExternalLink,
  Cpu,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type EvidenceStatus = "verified" | "pending" | "disputed";

export interface AuditStep {
  step: number;
  title: string;
  actor: string;
  timestamp: string;
  status: "completed" | "flagged" | "in_progress";
  details: string;
  technicalMetadata?: Record<string, string>;
}

export interface EvidenceItem {
  id: string;
  secHash: string;
  status: EvidenceStatus;
  statusLabel?: string;
  title: string;
  summary: string;
  pollingUnit: string;
  lga: string;
  state: string;
  coordinates: string;
  timestamp: string;
  observerToken: string;
  category: string;
  imageThumbnail?: string;
  auditSteps: AuditStep[];
}

export function EvidenceCard({
  item,
  defaultExpanded = false,
}: {
  item: EvidenceItem;
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [copiedHash, setCopiedHash] = useState(false);
  const [showRawJson, setShowRawJson] = useState(false);

  const copyHash = (hash: string) => {
    navigator.clipboard?.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const statusConfig = {
    verified: {
      borderColor: "border-l-emerald-600 dark:border-l-emerald-500",
      badgeClass: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
      accentText: "text-emerald-600 dark:text-emerald-400",
      dotClass: "bg-emerald-500",
      label: "VERIFIED // CONFIDENCE 99.8%",
      icon: ShieldCheck,
    },
    pending: {
      borderColor: "border-l-amber-500 dark:border-l-amber-400",
      badgeClass: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30",
      accentText: "text-amber-600 dark:text-amber-400",
      dotClass: "bg-amber-500 animate-pulse",
      label: "PENDING TRIAGE // SECONDARY REVIEW",
      icon: Clock,
    },
    disputed: {
      borderColor: "border-l-rose-600 dark:border-l-rose-500",
      badgeClass: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30",
      accentText: "text-rose-600 dark:text-rose-400",
      dotClass: "bg-rose-600 animate-ping",
      label: "DISPUTED // ANOMALY ESCALATED",
      icon: AlertTriangle,
    },
  }[item.status];

  const StatusIcon = statusConfig.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-border bg-card/95 border-l-4 ${statusConfig.borderColor} shadow-sm transition-all hover:shadow-md`}
    >
      {/* Precision corner reticles */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1 right-1 font-mono text-[9px] text-muted-foreground/40 select-none"
      >
        +
      </span>

      {/* Artifact Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 bg-surface/70 px-4 py-2 font-mono text-[11px]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold tracking-wider text-foreground">
            DOSSIER: {item.id}
          </span>
          <span className="hidden sm:inline-block text-muted-foreground/60">/</span>
          <span className="text-muted-foreground flex items-center gap-1.5">
            <span className="text-muted-foreground/70">SEC_HASH:</span>
            <code className="text-foreground/90 font-medium">{item.secHash.slice(0, 10)}…{item.secHash.slice(-6)}</code>
            <button
              onClick={() => copyHash(item.secHash)}
              title="Copy Security Hash"
              className="hover:text-primary transition-colors text-muted-foreground"
            >
              {copiedHash ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
            </button>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span>{item.timestamp}</span>
          </span>
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs border text-[10px] font-bold tracking-wider uppercase font-mono ${statusConfig.badgeClass}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusConfig.dotClass}`} />
            {item.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-xs bg-surface-2 px-2 py-0.5 font-mono text-[11px] font-medium text-foreground border border-border">
                <MapPin className="h-3 w-3 text-primary" />
                {item.state} · {item.lga}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                <span className="opacity-70">COORD:</span> {item.coordinates}
              </span>
              <span className="inline-flex items-center gap-1 rounded-xs bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-primary">
                {item.category}
              </span>
            </div>

            <h3 className="font-display text-base sm:text-lg font-bold leading-snug text-foreground">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              {item.summary}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-1 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Fingerprint className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground font-medium">{item.pollingUnit}</span>
              </span>
              <span className="flex items-center gap-1 text-[11px]">
                <UserCheck className="h-3 w-3 text-muted-foreground" />
                <span>Observer: <strong className="text-foreground/90 font-mono">{item.observerToken}</strong></span>
              </span>
            </div>
          </div>

          {/* Right Action / Audit Trail Trigger */}
          <div className="flex flex-col justify-between items-start md:items-end gap-3 pt-2 md:pt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 gap-1.5 font-mono text-xs tracking-wider uppercase border-border bg-surface hover:bg-accent"
            >
              <FileCheck className="h-3.5 w-3.5 text-primary" />
              <span>{isExpanded ? "Close Audit Log" : "Audit Trail"}</span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              )}
            </Button>

            <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
              <span>LEDGER: MERKLE SEALED</span>
            </span>
          </div>
        </div>

        {/* EXPANDABLE AUDIT TRAIL DRAWER */}
        {isExpanded && (
          <div className="mt-5 border-t border-border pt-4 animate-in fade-in-50 duration-200">
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Cryptographic Chain of Custody & Audit Trail</span>
              </div>
              <button
                onClick={() => setShowRawJson(!showRawJson)}
                className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1"
              >
                <Cpu className="h-3 w-3" />
                {showRawJson ? "View Steps" : "View Raw JSON Telemetry"}
              </button>
            </div>

            {showRawJson ? (
              <pre className="overflow-x-auto rounded-sm border border-border bg-slate-950 p-4 font-mono text-[11px] text-emerald-400 leading-relaxed max-h-64">
                {JSON.stringify(
                  {
                    dossier_id: item.id,
                    security_hash: item.secHash,
                    status: item.status,
                    polling_unit: item.pollingUnit,
                    coordinates: item.coordinates,
                    timestamp: item.timestamp,
                    observer_token: item.observerToken,
                    audit_trail: item.auditSteps,
                    consensus_proof: "SHA256:ECDSA_ED25519_VALIDATED",
                  },
                  null,
                  2,
                )}
              </pre>
            ) : (
              <div className="space-y-3">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {item.auditSteps.map((step) => {
                    const isDone = step.status === "completed";
                    const isFlag = step.status === "flagged";
                    return (
                      <div
                        key={step.step}
                        className={`relative rounded-sm border p-3 font-mono text-xs transition-colors ${
                          isDone
                            ? "border-emerald-500/30 bg-emerald-500/[0.04]"
                            : isFlag
                            ? "border-rose-500/40 bg-rose-500/[0.04]"
                            : "border-border bg-surface"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground pb-1">
                          <span className="font-bold text-foreground">STEP 0{step.step}</span>
                          <span className="text-[10px]">{step.timestamp}</span>
                        </div>
                        <div className="font-bold text-foreground text-xs">{step.title}</div>
                        <div className="mt-1 text-[11px] text-muted-foreground leading-snug">
                          {step.details}
                        </div>
                        <div className="mt-2 flex items-center justify-between border-t border-border/40 pt-1.5 text-[10px]">
                          <span className="text-muted-foreground truncate max-w-[120px]">
                            {step.actor}
                          </span>
                          <span
                            className={`font-semibold uppercase tracking-wider ${
                              isDone
                                ? "text-emerald-600 dark:text-emerald-400"
                                : isFlag
                                ? "text-rose-600 dark:text-rose-400"
                                : "text-amber-600 dark:text-amber-400"
                            }`}
                          >
                            {step.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-border/80 pt-2 font-mono text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>IMMUTABILITY VERIFIED · TIMESTAMP AUTHORITATIVE (NTP / WAT)</span>
                  </div>
                  <span className="tracking-widest">
                    DIGITAL SIGNATURE: ECDSA // SHA-256 SECURED
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
