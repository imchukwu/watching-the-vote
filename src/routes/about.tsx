import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, SectionHeading, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Target, Compass, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yiaga Africa Watching The Vote" },
      { name: "description", content: "Learn about Yiaga Africa, our history, mission, vision and leadership behind Watching The Vote." },
      { property: "og:title", content: "About Yiaga Africa · Watching The Vote" },
      { property: "og:description", content: "History, mission and leadership behind Nigeria's largest citizen election observation initiative." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2007", t: "Yiaga Africa founded", d: "A youth-led civic organisation launches in Abuja." },
  { y: "2011", t: "First election observation", d: "Pilot deployment for the 2011 general election." },
  { y: "2015", t: "PRVT introduced", d: "First Process and Results Verification for Transparency for a Nigerian presidential election." },
  { y: "2019", t: "Nation-wide WTV", d: "8,500+ observers deployed across all 36 states + FCT." },
  { y: "2023", t: "Real-time dashboard", d: "Publicly-viewable results dashboard during the general election." },
  { y: "2027", t: "Next general election", d: "Preparations underway for the 2027 general election." },
];

const leaders = [
  { n: "Samson Itodo", r: "Executive Director" },
  { n: "Cynthia Mbamalu", r: "Director of Programmes" },
  { n: "Ibrahim M. Faruk", r: "Senior Programme Manager" },
  { n: "Moshood Isah", r: "Communications Manager" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="A citizen-led movement for credible elections and democratic accountability."
        intro="Yiaga Africa is an independent, non-partisan civic organisation working to promote democratic governance, human rights and civic engagement across Africa."
      />

      <section className="container-wtv grid gap-12 py-16 md:grid-cols-2">
        {[
          { i: Target, h: "Our mission", d: "To promote democratic governance, human rights and civic engagement among African citizens." },
          { i: Compass, h: "Our vision", d: "An Africa where citizens are engaged, elections are credible, and governance is accountable." },
          { i: Award, h: "Core values", d: "Integrity, non-partisanship, courage, inclusivity and evidence-based advocacy." },
          { i: HeartHandshake, h: "Our approach", d: "Rigorous data, technology and citizen mobilisation to defend the vote and strengthen democracy." },
        ].map((b) => (
          <div key={b.h} className="surface-panel p-6">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary">
              <b.i className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{b.h}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-surface-2/50">
        <div className="container-wtv py-16">
          <SectionHeading eyebrow="Our journey" title="Two decades of civic leadership" />
          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {timeline.map((t) => (
              <li key={t.y} className="relative">
                <span className="absolute -left-[31px] mt-1 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background" />
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{t.y}</div>
                <h3 className="mt-1 font-display text-lg font-bold">{t.t}</h3>
                <p className="text-sm text-muted-foreground">{t.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-wtv py-16">
        <SectionHeading eyebrow="Leadership" title="The team behind Watching The Vote" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l, idx) => (
            <div key={l.n} className="surface-panel overflow-hidden">
              <ImagePlaceholder src={`/images/wtv${idx + 4}.jpg`} label={l.n} ratio="aspect-[4/5]" className="rounded-none border-0 border-b" />
              <div className="p-5">
                <div className="font-display text-base font-bold">{l.n}</div>
                <div className="text-xs uppercase tracking-[0.14em] text-primary">{l.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface-2/50">
        <div className="container-wtv py-16">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Is Yiaga Africa affiliated with any political party?", a: "No. Yiaga Africa is strictly non-partisan and independent." },
                { q: "How are observers selected?", a: "Through an open, competitive process. Applicants pass a screening and complete accredited training." },
                { q: "How is WTV funded?", a: "Through grants from bilateral donors, foundations and diplomatic missions. All funding is disclosed." },
                { q: "Can I use WTV data for research?", a: "Yes — anonymised polling-unit datasets are available on our Open Data portal under a permissive license." },
              ].map((f, i) => (
                <AccordionItem key={i} value={`i-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
