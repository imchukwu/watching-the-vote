import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, SectionHeading } from "@/components/site/SiteLayout";

const groups = [
  { h: "Government", items: ["INEC", "National Assembly", "Ministry of Foreign Affairs"] },
  { h: "Development partners", items: ["European Union", "USAID", "FCDO", "GIZ", "UNDP"] },
  { h: "Civil society", items: ["TMG", "CDD", "PLAC", "CLEEN Foundation"] },
  { h: "Donors & foundations", items: ["Ford Foundation", "MacArthur Foundation", "OSIWA", "NED", "KAS"] },
  { h: "Academic institutions", items: ["University of Ibadan", "Ahmadu Bello University", "University of Lagos"] },
  { h: "Technology partners", items: ["Google.org", "Microsoft Philanthropies", "Africa Data Hub"] },
];

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Watching The Vote" },
      { name: "description", content: "Government, development partners, civil society, donors, academic and technology partners of Watching The Vote." },
      { property: "og:title", content: "Partners · Watching The Vote" },
      { property: "og:description", content: "The institutions collaborating with Yiaga Africa on election observation." },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Partners"
        title="Working with institutions that share our commitment."
        intro="Governments, donors, civil society, academic and technology partners advancing free, fair and credible elections."
      />
      <section className="container-wtv py-14">
        {groups.map((g) => (
          <div key={g.h} className="mb-12">
            <SectionHeading eyebrow="Category" title={g.h} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {g.items.map((n) => (
                <div key={n} className="grid h-24 place-items-center rounded-md border border-dashed border-border bg-surface text-sm font-semibold text-muted-foreground">
                  {n}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
