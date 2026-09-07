import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { news } from "@/lib/wtv-data";
import { ArrowRight, Search } from "lucide-react";

const cats = ["All", "Election Updates", "Press Releases", "Observer Stories", "Research", "Democracy", "Technology"];

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — Watching The Vote" },
      { name: "description", content: "Election updates, press releases, observer stories, research and technology from Yiaga Africa." },
      { property: "og:title", content: "News · Watching The Vote" },
      { property: "og:description", content: "Fresh reporting from Nigeria's largest citizen election observation initiative." },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Newsroom"
        title="Election updates, press releases, observer stories."
        intro="Everything we publish, curated and searchable."
      >
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search news…" className="w-72 pl-9" />
          </div>
          {cats.map((c, i) => (
            <Button key={c} size="sm" variant={i === 0 ? "default" : "outline"}>{c}</Button>
          ))}
        </div>
      </PageHeader>

      <section className="container-wtv py-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <article className="group overflow-hidden rounded-lg border border-border bg-card">
            <ImagePlaceholder src="/images/wtv8.jpg" label="Featured story cover" ratio="aspect-[16/9]" className="rounded-none border-0 border-b" />
            <div className="p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Featured · Press Release</div>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight">
                Yiaga Africa unveils Watching The Vote roadmap for the 2027 general election
              </h2>
              <p className="mt-3 text-muted-foreground">
                The initiative will deploy over 3,800 accredited citizen observers across every LGA
                in Nigeria, with a nationwide PVT covering more than 1,500 randomly selected PUs.
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-primary">Read the announcement <ArrowRight className="ml-1 h-4 w-4" /></div>
            </div>
          </article>

          <div className="space-y-5">
            {news.map((n) => (
              <article key={n.slug} className="group grid grid-cols-[120px_1fr] gap-4 rounded-lg border border-border bg-card p-4">
                <ImagePlaceholder label={n.category} ratio="aspect-square" className="rounded-md" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{n.category}</div>
                  <h3 className="mt-1 line-clamp-2 font-display text-base font-bold leading-snug group-hover:text-primary">{n.title}</h3>
                  <div className="mt-2 text-xs text-muted-foreground">{new Date(n.date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-elev-2">
              <ImagePlaceholder label="Article cover" ratio="aspect-[16/10]" className="rounded-none border-0 border-b" />
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{cats[(i % (cats.length - 1)) + 1]}</div>
                <h3 className="mt-2 line-clamp-3 font-display text-base font-bold leading-snug group-hover:text-primary">
                  Placeholder headline for an in-depth story about elections and observation
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>12 May 2026</span><span>· 6 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav className="mt-12 flex items-center justify-center gap-2">
          {["‹", "1", "2", "3", "…", "24", "›"].map((p, i) => (
            <Button key={i} size="sm" variant={p === "1" ? "default" : "outline"}>{p}</Button>
          ))}
        </nav>
      </section>
    </SiteLayout>
  );
}
