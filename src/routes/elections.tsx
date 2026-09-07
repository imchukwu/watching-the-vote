import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { elections } from "@/lib/wtv-data";
import { ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/elections")({
  head: () => ({
    meta: [
      { title: "Elections Archive — Watching The Vote" },
      { name: "description", content: "Browse every election observed by Yiaga Africa, from the 2011 general election to the upcoming 2027 cycle." },
      { property: "og:title", content: "Elections Archive · Watching The Vote" },
      { property: "og:description", content: "Deployment, situation room, reports, data and gallery from each observed election." },
    ],
    links: [{ rel: "canonical", href: "/elections" }],
  }),
  component: ElectionsPage,
});

function ElectionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Elections archive"
        title="Every election we've observed — from 2011 to 2027."
        intro="Deployment, situation room, reports, press statements, data and gallery for each cycle."
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search elections…" className="w-72 pl-9" />
          </div>
          {["All", "General", "Governorship", "Off-cycle", "Bye-elections"].map((f, i) => (
            <Button key={f} size="sm" variant={i === 0 ? "default" : "outline"}>{f}</Button>
          ))}
        </div>
      </PageHeader>

      <section className="container-wtv py-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {elections.map((e) => (
            <article key={e.slug} className="surface-panel flex flex-col p-6">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-primary/30 text-primary">{e.date}</Badge>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  e.status === "Upcoming" ? "bg-warning/15 text-warning" :
                  e.status === "Planning" ? "bg-primary-soft text-primary" :
                  "bg-success/15 text-success"
                }`}>{e.status}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{e.name}</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Observers</dt><dd className="mt-0.5 font-semibold">{e.observers}</dd></div>
                <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Polling units</dt><dd className="mt-0.5 font-semibold">{e.pu}</dd></div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                {["Overview", "Deployment", "Situation Room", "Reports", "Press", "Data", "Gallery", "Timeline"].map((s) => (
                  <span key={s} className="rounded-full bg-surface-2 px-2.5 py-1">{s}</span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button variant="ghost" asChild><Link to="/elections">Open election page <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
