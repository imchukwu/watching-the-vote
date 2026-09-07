import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, SectionHeading, ImagePlaceholder } from "@/components/site/SiteLayout";
import { UserCheck, GraduationCap, Smartphone, AlertTriangle, Database, BarChart3, ShieldCheck, ClipboardList, CalendarDays, LineChart, BookOpen } from "lucide-react";

const steps = [
  { i: UserCheck, t: "Observer recruitment", d: "An open, transparent recruitment cycle across all states." },
  { i: GraduationCap, t: "Training & accreditation", d: "Multi-day training on methodology, ethics and safety." },
  { i: Smartphone, t: "Technology deployment", d: "Custom mobile app + coded SMS for real-time reporting." },
  { i: AlertTriangle, t: "Incident reporting", d: "Live incident tracking from every observed polling unit." },
  { i: Database, t: "Data collection", d: "Standardised checklists, arrival, opening, voting, counting." },
  { i: BarChart3, t: "Process and Results Verification for Transparency", d: "Statistical verification from a random sample of PUs." },
  { i: ShieldCheck, t: "Quality assurance", d: "Multi-layer verification and call-back protocols." },
  { i: ClipboardList, t: "Election-day operations", d: "24-hour National Situation Room coordinates the response." },
  { i: LineChart, t: "Post-election analysis", d: "Rigorous quantitative + qualitative analysis." },
  { i: BookOpen, t: "Lessons learned", d: "Reforms, recommendations and a publicly-available report." },
];

export const Route = createFileRoute("/watching-the-vote")({
  head: () => ({
    meta: [
      { title: "Methodology — Watching The Vote | Yiaga Africa" },
      { name: "description", content: "How Watching The Vote works: observer recruitment, training, technology, incident reporting, PRVT and post-election analysis." },
      { property: "og:title", content: "Watching The Vote — Methodology" },
      { property: "og:description", content: "The end-to-end citizen election observation methodology used by Yiaga Africa." },
    ],
    links: [{ rel: "canonical", href: "/watching-the-vote" }],
  }),
  component: WTVPage,
});

function WTVPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Methodology"
        title="How Watching The Vote works — from observer to open data."
        intro="A ten-step, evidence-based methodology developed and refined across every major Nigerian election since 2011."
      />

      <section className="container-wtv py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.t} className="surface-panel p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-2/50">
        <div className="container-wtv grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <ImagePlaceholder src="/images/wtv3.jpg" label="PRVT infographic · sample size, MoE" ratio="aspect-[4/3]" />
          <div>
            <div className="eyebrow">Process and Results Verification for Transparency</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              A statistical guarantee, not a guess.
            </h2>
            <p className="mt-4 text-muted-foreground">
              WTV's PRVT uses a scientifically-drawn random sample of polling units, weighted for
              state and geopolitical zone. Observers report opening times, turnout, counting and
              results. We independently reconstruct the outcome and compare against INEC's official
              figures within a narrow margin of error.
            </p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <li className="rounded-md border border-border bg-card p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-primary">Sample size</div>
                <div className="mt-1 font-display text-2xl font-bold">1,521 PUs</div>
              </li>
              <li className="rounded-md border border-border bg-card p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-primary">Margin of error</div>
                <div className="mt-1 font-display text-2xl font-bold">± 1%</div>
              </li>
              <li className="rounded-md border border-border bg-card p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-primary">Coverage</div>
                <div className="mt-1 font-display text-2xl font-bold">36 states + FCT</div>
              </li>
              <li className="rounded-md border border-border bg-card p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-primary">Confidence</div>
                <div className="mt-1 font-display text-2xl font-bold">95%</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-wtv py-16">
        <SectionHeading eyebrow="Election day" title="Inside the National Situation Room" intro="24-hour, multi-agency coordination through election day and beyond." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { i: CalendarDays, t: "T-30 days", d: "Deployment, testing and rehearsal drills." },
            { i: ClipboardList, t: "Election day", d: "Live intake, verification and public briefings." },
            { i: BookOpen, t: "T+30 days", d: "Preliminary + final reports published." },
          ].map((s) => (
            <div key={s.t} className="rounded-lg border border-border bg-card p-6">
              <s.i className="h-6 w-6 text-primary" />
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{s.t}</div>
              <p className="mt-1 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
