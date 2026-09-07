import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const groups = [
  { h: "Forms", items: ["Observer application form", "Media accreditation form", "Partnership request"] },
  { h: "Templates", items: ["Incident report template", "Situation-room brief", "Press statement template"] },
  { h: "Training manuals", items: ["Observer Handbook v6", "PVT Field Guide", "Ethics & Non-partisanship"] },
  { h: "Election checklists", items: ["Opening procedures", "Voting hours", "Counting & collation"] },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Watching The Vote" },
      { name: "description", content: "Forms, templates, training manuals and election checklists for observers, partners and journalists." },
      { property: "og:title", content: "Resources · Watching The Vote" },
      { property: "og:description", content: "Downloadable forms, templates, manuals and checklists." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Resources"
        title="Forms, templates, handbooks and checklists."
        intro="Everything observers, partners and journalists need to plug into a Watching The Vote deployment."
      />
      <section className="container-wtv grid gap-8 py-14 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.h} className="surface-panel p-6">
            <h3 className="font-display text-xl font-bold">{g.h}</h3>
            <ul className="mt-4 divide-y divide-border">
              {g.items.map((it) => (
                <li key={it} className="flex items-center justify-between gap-4 py-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm">{it}</span>
                  </div>
                  <Button size="sm" variant="outline"><Download className="mr-1 h-3.5 w-3.5" /> PDF</Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
