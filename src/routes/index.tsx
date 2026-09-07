import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Eye, BarChart3, Cpu, Users, Database, ShieldCheck,
  Download, FileText, MapPin, Radio, Activity, CheckCircle2,
} from "lucide-react";
import { SiteLayout, SectionHeading, ImagePlaceholder } from "@/components/site/SiteLayout";
import { DemocracyCollageHero } from "@/components/site/DemocracyCollageHero";
import { StatCounter } from "@/components/site/StatCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { stats, pillars, news, elections, partners } from "@/lib/wtv-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Watching The Vote — Yiaga Africa | Citizen Election Observation" },
      { name: "description", content: "Yiaga Africa's Watching The Vote (WTV) deploys accredited citizen observers, process and results verification for transparency and open election data to protect electoral integrity across Nigeria." },
      { property: "og:title", content: "Watching The Vote — Yiaga Africa" },
      { property: "og:description", content: "Independent citizen election observation, PRVT and open election data across Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const iconMap = { eye: Eye, chart: BarChart3, cpu: Cpu, users: Users, database: Database, shield: ShieldCheck } as const;

function HomePage() {
  return (
    <SiteLayout>
      {/* IMMERSIVE DEMOCRACY COLLAGE HERO */}
      <DemocracyCollageHero />

      {/* MISSION */}
      <section className="container-wtv py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <ImagePlaceholder src="/images/wtv2.jpg" label="Observers at a polling unit" ratio="aspect-[4/3]" />
          <div>
            <div className="eyebrow">Our mission</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              A citizen-led guarantee of transparent, credible elections in Nigeria.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Watching The Vote is Yiaga Africa's flagship election observation methodology. We
              recruit, train and deploy independent citizen observers to every corner of Nigeria,
              apply rigorous statistical methods, and provide real-time evidence to citizens, the
              media, INEC and the international community.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Non-partisan, evidence-based observation",
                "Statistical Process and Results Verification for Transparency",
                "Real-time incident reporting",
                "Open, reproducible election data",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button asChild><Link to="/about">About Yiaga Africa</Link></Button>
              <Button variant="outline" asChild><Link to="/watching-the-vote">Our methodology</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface-2/50">
        <div className="container-wtv py-14">
          <SectionHeading eyebrow="Impact by the numbers" title="A decade of citizen election observation" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-wtv py-20">
        <SectionHeading eyebrow="Core pillars" title="Six ways we protect the vote" intro="Every WTV deployment stands on the same evidence-based foundation." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <article key={p.title} className="group surface-panel p-6 transition-shadow hover:shadow-elev-2">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary opacity-80 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* MAP + ELECTIONS */}
      <section className="border-y border-border bg-surface-2/50">
        <div className="container-wtv grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="eyebrow">Nigeria coverage</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Observer deployment across all 36 states + FCT
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hover a state on the interactive map to see observer counts, incident reports and
              election status. Deep links open the state's live situation room.
            </p>
            <div className="mt-6 flex gap-4 text-xs">
              {[
                { c: "bg-success", l: "Active" },
                { c: "bg-warning", l: "Standby" },
                { c: "bg-muted-foreground/50", l: "No election" },
              ].map((k) => (
                <span key={k.l} className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${k.c}`} /> {k.l}</span>
              ))}
            </div>
            <div className="mt-8">
              <ImagePlaceholder label="Interactive Nigeria map · Leaflet" ratio="aspect-[4/3]" />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Election archive" title="Elections we're observing" />
            <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
              {elections.map((e) => (
                <Link key={e.slug} to="/elections" className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-accent">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-bold">{e.name}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                        e.status === "Upcoming" ? "bg-warning/15 text-warning" :
                        e.status === "Planning" ? "bg-primary-soft text-primary" :
                        "bg-success/15 text-success"
                      }`}>{e.status}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Activity className="h-3 w-3" /> {e.observers} observers</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.pu} PUs</span>
                      <span>{e.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="container-wtv py-20">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Latest news" title="From the situation room" />
          <Button variant="outline" asChild className="hidden md:inline-flex"><Link to="/news">All news</Link></Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <article key={n.slug} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-elev-2">
              <ImagePlaceholder label={n.category} ratio="aspect-[16/10]" className="rounded-none border-0 border-b" />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-sm bg-primary-soft px-1.5 py-0.5 font-semibold text-primary">{n.category}</span>
                  <span>{new Date(n.date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <h3 className="mt-3 line-clamp-3 font-display text-base font-bold leading-snug group-hover:text-primary">{n.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">Read more <ArrowRight className="ml-1 h-3.5 w-3.5" /></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REPORTS */}
      <section className="border-y border-border bg-surface-2/50">
        <div className="container-wtv py-20">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured reports" title="Rigorous, evidence-based analysis" />
            <Button variant="outline" asChild className="hidden md:inline-flex"><Link to="/reports">Reports library</Link></Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <article key={i} className="group flex gap-4 rounded-lg border border-border bg-card p-5">
                <div className="grid h-24 w-20 shrink-0 place-items-center rounded-sm border border-border bg-surface-2 text-muted-foreground">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {["Final Report", "Preliminary Statement", "Research Paper"][i]}
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold leading-snug">
                    {["Ondo 2024 Governorship Election: Final Observation Report", "Edo 2024: Statement on the conduct of the election", "Nigeria's Off-Cycle Governorship Elections: A Comparative Review"][i]}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{[88, 24, 72][i]} pages</span><span>·</span><span>PDF</span>
                  </div>
                  <div className="mt-auto pt-4 flex gap-2">
                    <Button size="sm" variant="secondary"><Download className="mr-1 h-3.5 w-3.5" /> Download</Button>
                    <Button size="sm" variant="ghost">Preview</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-wtv py-20">
        <SectionHeading eyebrow="Partners & funders" title="Backed by leading global institutions" align="center" />
        <div className="mt-10 overflow-hidden">
          <div className="marquee flex w-max gap-10">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="grid h-14 w-52 shrink-0 place-items-center rounded-md border border-dashed border-border bg-surface text-sm font-semibold text-muted-foreground">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-surface-2/50">
        <div className="container-wtv grid gap-6 py-20 md:grid-cols-3">
          {[
            { q: "WTV set the gold standard for citizen-led election observation in Africa.", a: "Chief Election Observer, EU EOM" },
            { q: "Their PVT gave Nigerians the confidence to trust the results.", a: "State Situation Room Coordinator" },
            { q: "Rigorous, transparent, and completely non-partisan.", a: "Academic Partner, University of Ibadan" },
          ].map((t) => (
            <figure key={t.a} className="surface-panel p-6">
              <div className="text-3xl font-serif text-primary">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA / NEWSLETTER */}
      <section className="container-wtv py-20">
        <div className="relative overflow-hidden rounded-2xl border border-border hero-gradient p-10 text-white md:p-14">
          <div aria-hidden className="absolute inset-0 grid-topo opacity-70" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="eyebrow text-white/80">Stay in the loop</div>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                Get monthly briefs on elections, observation and open data.
              </h2>
              <p className="mt-3 max-w-xl text-white/75">
                Reports, dashboards and observer stories, delivered to your inbox. No spam.
              </p>
            </div>
            <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" required placeholder="you@domain.com" aria-label="Email" className="border-white/25 bg-white/10 text-white placeholder:text-white/60" />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
