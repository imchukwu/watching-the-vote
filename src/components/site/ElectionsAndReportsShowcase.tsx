import { Link } from "@tanstack/react-router";
import {
  FileText,
  Download,
  Calendar,
  MapPin,
  ArrowRight,
  Activity,
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { elections, reports, news } from "@/lib/wtv-data";

export function ElectionsAndReportsShowcase() {
  return (
    <section className="relative py-20 lg:py-28 bg-background border-b border-border">
      <div className="container-wtv">
        
        {/* SECTION 1: ELECTIONS ARCHIVE & UPCOMING DEPLOYMENTS */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
                <Activity className="h-3.5 w-3.5" />
                <span>Election Deployments & Observation Hub</span>
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Observed Elections Across Nigeria
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                Independent oversight across general elections, off-cycle gubernatorial contests, and legislative bye-elections.
              </p>
            </div>

            <Button variant="outline" asChild>
              <Link to="/elections">
                All Elections Archive <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Varied Grid for Elections */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Next Deployment */}
            <div className="relative rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-card to-card p-6 shadow-elev-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#246A37] text-white font-mono text-[11px] uppercase tracking-wider">
                    ● UPCOMING GENERAL DEPLOYMENT
                  </Badge>
                  <span className="font-mono text-xs text-primary font-bold">Feb 2027</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground leading-tight">
                  2027 Nigeria General Election
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Nationwide deployment of over 3,800 accredited citizen observers to sample polling units across all 774 Local Government Areas in Nigeria.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-xs border-t border-border/80 pt-4">
                  <div className="rounded-lg bg-surface p-2.5">
                    <span className="text-[10px] text-muted-foreground uppercase">Target Observers</span>
                    <div className="font-bold text-foreground text-sm mt-0.5">3,800+ Vetted</div>
                  </div>
                  <div className="rounded-lg bg-surface p-2.5">
                    <span className="text-[10px] text-muted-foreground uppercase">PU Coverage</span>
                    <div className="font-bold text-foreground text-sm mt-0.5">176,846 PUs</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <Button asChild className="w-full bg-[#246A37] hover:bg-[#1b5029] text-white">
                  <Link to="/observer-portal">
                    Join As Accredited Observer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Other Recent Observed Elections */}
            {elections.slice(1, 3).map((e) => (
              <div
                key={e.slug}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-elev-2 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        e.status === "Upcoming"
                          ? "border-warning/30 bg-warning/10 text-warning"
                          : e.status === "Planning"
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-success/30 bg-success/10 text-success"
                      }`}
                    >
                      {e.status}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">{e.date}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    {e.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Comprehensive Process & Result Verification with stationary observer deployment across all local councils.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-xs border-t border-border pt-4">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase">Sample Observers</span>
                      <div className="font-bold text-foreground mt-0.5">{e.observers} Monitors</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase">Polling Stations</span>
                      <div className="font-bold text-foreground mt-0.5">{e.pu} PUs</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Button asChild variant="outline" className="w-full text-xs">
                    <Link to="/reports">
                      View Election Audit & Dossier <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: FEATURED EVIDENCE REPORTS */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
                <FileText className="h-3.5 w-3.5" />
                <span>Evidence-Based Publications</span>
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Election Observation Reports
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                Rigorous, peer-reviewed statistical evaluations and comprehensive statements delivered directly to INEC, courts, media, and citizens.
              </p>
            </div>

            <Button variant="outline" asChild>
              <Link to="/reports">
                Browse Full Report Library <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ondo 2024 Governorship Election: Final Observation Report",
                type: "Final Comprehensive Report",
                pages: "88 Pages",
                date: "November 2024",
                findings: "Official outcome consistent with PRVT statistical estimates within 95% CI.",
                highlight: "PRVT Certified",
              },
              {
                title: "Edo 2024 Governorship: Statement on Collation & Results Posting",
                type: "Preliminary Post-Election Statement",
                pages: "24 Pages",
                date: "September 2024",
                findings: "Detailed analysis of INEC results portal upload bottlenecks and PU collation.",
                highlight: "Urgent Review",
              },
              {
                title: "Nigeria's Off-Cycle Governorship Elections: A Comparative Review",
                type: "Research & Policy Paper",
                pages: "72 Pages",
                date: "March 2024",
                findings: "Longitudinal study of voter turnout patterns and BVAS reliability across 6 states.",
                highlight: "Electoral Reform",
              },
            ].map((rep, idx) => (
              <article
                key={rep.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-elev-2 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30 uppercase">
                      {rep.type}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">{rep.pages}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-foreground leading-snug">
                    {rep.title}
                  </h3>

                  <div className="mt-4 rounded-xl border border-border/80 bg-surface-2/50 p-3 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">
                      Key Takeaway:
                    </span>
                    <p className="mt-1 text-foreground leading-relaxed">{rep.findings}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-mono text-[11px] text-muted-foreground">{rep.date}</span>
                  <Button size="sm" className="bg-[#246A37] hover:bg-[#1b5029] text-white text-xs">
                    <Download className="mr-1.5 h-3.5 w-3.5" /> Download PDF
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 3: LATEST DISPATCHES & FIELD BULLETINS */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Field Dispatches & Press Statements</span>
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                From the Situation Room
              </h2>
            </div>

            <Button variant="outline" asChild>
              <Link to="/news">
                All Field News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((item) => (
              <article
                key={item.slug}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-elev-2 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="rounded-md bg-primary-soft px-2 py-0.5 font-bold text-primary text-[10px] uppercase">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>

                  <h3 className="mt-3 font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-5 border-t border-border pt-3">
                  <Link
                    to="/news"
                    className="inline-flex items-center text-xs font-semibold text-primary group-hover:underline"
                  >
                    Read full bulletin <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
