import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, SectionHeading, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, ClipboardCheck, Download, GraduationCap, LogIn, UserPlus } from "lucide-react";

export const Route = createFileRoute("/observer-portal")({
  head: () => ({
    meta: [
      { title: "Observer Portal — Watching The Vote" },
      { name: "description", content: "Register, train and access resources as an accredited Watching The Vote observer." },
      { property: "og:title", content: "Observer Portal · Watching The Vote" },
      { property: "og:description", content: "Registration, training, guidelines and downloads for WTV observers." },
    ],
    links: [{ rel: "canonical", href: "/observer-portal" }],
  }),
  component: ObserverPortalPage,
});

function ObserverPortalPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Observer portal"
        title="Join the movement protecting Nigeria's vote."
        intro="Register your interest, complete accredited training and access field resources — all in one place."
      >
        <div className="flex flex-wrap gap-3">
          <Button size="lg"><UserPlus className="mr-2 h-4 w-4" /> Apply as an observer</Button>
          <Button size="lg" variant="outline"><LogIn className="mr-2 h-4 w-4" /> Observer login</Button>
        </div>
      </PageHeader>

      <section className="container-wtv py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: UserPlus, t: "Registration", d: "Open application windows before each election cycle." },
            { i: GraduationCap, t: "Training resources", d: "Modules, quizzes and certification for accredited observers." },
            { i: ClipboardCheck, t: "Guidelines", d: "Code of conduct, ethics and non-partisanship rules." },
            { i: Download, t: "Downloads", d: "Checklists, forms and the observer handbook (PDF)." },
          ].map((c) => (
            <div key={c.t} className="surface-panel p-6">
              <c.i className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-bold">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-2/50">
        <div className="container-wtv grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Training" title="A rigorous, multi-day curriculum" intro="Every accredited observer completes classroom, simulation and ethics training." />
            <ul className="mt-6 space-y-3 text-sm">
              {["Election law and INEC procedures", "Observer code of conduct and ethics", "Reporting tools and coded SMS", "Incident classification and escalation", "Personal safety and non-partisanship"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder src="/images/wtv5.jpg" label="Observer training session" ratio="aspect-[4/3]" />
        </div>
      </section>

      <section className="container-wtv py-16">
        <SectionHeading eyebrow="FAQ" title="Observer questions" />
        <div className="mt-8 max-w-3xl">
          <Accordion type="single" collapsible>
            {[
              { q: "Who can apply?", a: "Nigerian citizens aged 18+, resident in the state they wish to observe, with a valid ID." },
              { q: "Is there a stipend?", a: "Observers receive a transport and communication allowance for election-day deployment." },
              { q: "How long does training take?", a: "Five days of blended learning: three online modules and two in-person sessions." },
              { q: "Can I withdraw after registering?", a: "Yes, but please notify us at least 14 days before election day." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}
