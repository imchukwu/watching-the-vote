import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, SectionHeading } from "@/components/site/SiteLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Download, LineChart, ScrollText } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { stateActivity } from "@/lib/wtv-data";

export const Route = createFileRoute("/data")({
  head: () => ({
    meta: [
      { title: "Data & Research — Watching The Vote" },
      { name: "description", content: "Open election datasets, methodology notes, research publications and interactive visualisations." },
      { property: "og:title", content: "Data & Research · Watching The Vote" },
      { property: "og:description", content: "Anonymised polling-unit datasets, dashboards and methodology from Yiaga Africa's WTV." },
    ],
    links: [{ rel: "canonical", href: "/data" }],
  }),
  component: DataPage,
});

function DataPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Data & research"
        title="Open, reproducible election data."
        intro="Anonymised polling-unit datasets, methodology notes and interactive visualisations for researchers, journalists and civic technologists."
      />

      <section className="container-wtv py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Database, t: "Open datasets", d: "PU-level micro-data from 2015–2024, CSV / Parquet." },
            { i: LineChart, t: "Dashboards", d: "Live and archived interactive dashboards for each election." },
            { i: ScrollText, t: "Methodology", d: "Sampling design, weighting and QA protocols in plain English." },
            { i: Download, t: "Research briefs", d: "Peer-reviewed papers, working papers and policy briefs." },
          ].map((c) => (
            <Card key={c.t}>
              <CardHeader className="pb-2"><c.i className="h-6 w-6 text-primary" /></CardHeader>
              <CardContent>
                <h3 className="font-display text-base font-bold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card>
            <CardHeader><CardTitle className="text-base">Observer coverage by state</CardTitle></CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stateActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="state" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="observers" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Featured datasets</CardTitle></CardHeader>
            <CardContent className="divide-y divide-border">
              {[
                { n: "2023 General Election · PU-level results", s: "CSV · 42 MB" },
                { n: "2024 Ondo Governorship · Observer reports", s: "Parquet · 8 MB" },
                { n: "2019 Presidential · PVT sample", s: "CSV · 12 MB" },
                { n: "Nationwide Turnout Series 2011–2023", s: "CSV · 3 MB" },
              ].map((d) => (
                <div key={d.n} className="flex items-center justify-between py-3">
                  <div>
                    <div className="text-sm font-semibold">{d.n}</div>
                    <div className="text-xs text-muted-foreground">{d.s}</div>
                  </div>
                  <Button size="sm" variant="outline"><Download className="mr-1 h-3.5 w-3.5" /> Download</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <SectionHeading eyebrow="Publications" title="Recent research" intro="A rolling selection of the latest peer-reviewed and working papers." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <article key={i} className="surface-panel p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Working Paper · {2026 - i}</div>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug">
                Placeholder title of a rigorous research paper on Nigerian elections
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A short abstract describing the research question, methodology and headline findings.
              </p>
              <div className="mt-4 flex gap-2">
                <Button size="sm">Download PDF</Button>
                <Button size="sm" variant="ghost">Cite</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
