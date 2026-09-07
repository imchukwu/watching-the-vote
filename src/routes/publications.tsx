import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const kinds = ["Books", "Research papers", "Reports", "Policy briefs", "Infographics", "Manuals", "Guidelines"];

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Watching The Vote" },
      { name: "description", content: "Books, research papers, reports, policy briefs, infographics, manuals and guidelines from Yiaga Africa." },
      { property: "og:title", content: "Publications · Watching The Vote" },
      { property: "og:description", content: "The full library of Yiaga Africa publications." },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Publications"
        title="A decade of scholarship on Nigerian elections."
        intro="Books, research papers, reports, policy briefs, infographics, manuals and guidelines — freely available."
      >
        <div className="flex flex-wrap gap-2">
          {["All", ...kinds].map((k, i) => (
            <Button key={k} size="sm" variant={i === 0 ? "default" : "outline"}>{k}</Button>
          ))}
        </div>
      </PageHeader>

      <section className="container-wtv py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <article key={i} className="group overflow-hidden rounded-lg border border-border bg-card">
              <ImagePlaceholder src={`/images/wtv${(i % 9) + 1}.jpg`} label="Publication cover" ratio="aspect-[3/4]" className="rounded-none border-0 border-b" />
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{kinds[i % kinds.length]}</div>
                <h3 className="mt-2 line-clamp-2 font-display text-base font-bold leading-snug">
                  Placeholder publication title for a piece of Yiaga Africa scholarship
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">2024 · PDF · 4.2MB</span>
                  <Button size="sm" variant="outline"><Download className="mr-1 h-3.5 w-3.5" /> Download</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
