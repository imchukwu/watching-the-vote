import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, FileText, Quote } from "lucide-react";
import { reports } from "@/lib/wtv-data";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports Library — Watching The Vote" },
      { name: "description", content: "Search, filter and download every WTV observation report, preliminary statement and research paper." },
      { property: "og:title", content: "Reports Library · Watching The Vote" },
      { property: "og:description", content: "Preliminary statements, final reports, research and policy briefs from every observed election." },
    ],
    links: [{ rel: "canonical", href: "/reports" }],
  }),
  component: ReportsPage,
});

function ReportsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Reports library"
        title="Rigorous, downloadable, citable."
        intro="Every WTV publication with preview, download, metadata and a formatted academic citation."
      />

      <section className="container-wtv py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Keyword</label>
              <div className="relative mt-2">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search reports…" className="pl-9" />
              </div>
            </div>
            {[
              { l: "Election", opts: ["All elections", "General 2023", "Ondo 2024", "Edo 2024", "Osun 2026"] },
              { l: "Year", opts: ["All years", "2026", "2024", "2023", "2019", "2015"] },
              { l: "Type", opts: ["All types", "Final Report", "Preliminary Statement", "Research", "Policy Brief"] },
              { l: "State", opts: ["All states", "FCT", "Lagos", "Kano", "Rivers"] },
            ].map((g) => (
              <div key={g.l}>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{g.l}</label>
                <Select defaultValue={g.opts[0]}>
                  <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                  <SelectContent>{g.opts.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            ))}
            <Button className="w-full">Apply filters</Button>
          </aside>

          <div className="space-y-5">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span><strong className="text-foreground">{reports.length}</strong> of 420 reports</span>
              <Select defaultValue="new">
                <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Newest first</SelectItem>
                  <SelectItem value="old">Oldest first</SelectItem>
                  <SelectItem value="az">A → Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {reports.map((r) => (
              <article key={r.id} className="surface-panel grid gap-5 p-6 md:grid-cols-[120px_1fr_auto] md:items-center">
                <div className="grid aspect-[3/4] w-24 place-items-center rounded-sm border border-border bg-surface-2 text-muted-foreground">
                  <FileText className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{r.type} · {r.election}</div>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug">{r.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{r.year}</span>
                    <span>{r.pages} pages</span>
                    <span>PDF · 4.2 MB</span>
                    <span>ISBN 978-978-000-000-{r.id.slice(-1)}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="sm"><Download className="mr-1 h-4 w-4" /> Download</Button>
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm" variant="ghost"><Quote className="mr-1 h-4 w-4" /> Cite</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
