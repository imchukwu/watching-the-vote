import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CalendarDays, MapPin } from "lucide-react";

const upcoming = [
  { d: "12 Sep 2026", t: "Nigeria Election Integrity Forum", city: "Abuja", type: "Conference" },
  { d: "24 Sep 2026", t: "Observer Deployment Briefing · Osun 2026", city: "Osogbo", type: "Briefing" },
  { d: "05 Oct 2026", t: "Webinar: Reading the 2027 Political Landscape", city: "Online", type: "Webinar" },
  { d: "22 Oct 2026", t: "Youth Democracy Dialogue", city: "Lagos", type: "Dialogue" },
];

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Watching The Vote" },
      { name: "description", content: "Upcoming and past Watching The Vote conferences, webinars, election briefings and dialogues." },
      { property: "og:title", content: "Events · Watching The Vote" },
      { property: "og:description", content: "Conferences, webinars, election briefings and civic dialogues." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Events"
        title="Conferences, webinars, election briefings."
        intro="Public dialogues, closed-door briefings and virtual convenings on election integrity and democratic reform."
      />

      <section className="container-wtv py-12">
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-8">
            <div className="space-y-4">
              {upcoming.map((e) => (
                <article key={e.t} className="surface-panel grid gap-4 p-6 md:grid-cols-[120px_1fr_auto] md:items-center">
                  <div className="rounded-md bg-primary-soft p-4 text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{e.d.split(" ")[1]}</div>
                    <div className="font-display text-2xl font-bold text-primary">{e.d.split(" ")[0]}</div>
                    <div className="text-xs text-primary/80">{e.d.split(" ")[2]}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{e.type}</div>
                    <h3 className="mt-1 font-display text-lg font-bold">{e.t}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.city}</span>
                      <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {e.d}</span>
                    </div>
                  </div>
                  <div className="flex gap-2"><Button>Register</Button><Button variant="outline">Details</Button></div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-lg border border-border bg-card">
                  <ImagePlaceholder src={`/images/wtv${(i % 9) + 1}.jpg`} label="Past event" ratio="aspect-[16/10]" className="rounded-none border-0 border-b" />
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-[0.14em] text-primary">Recording available</div>
                    <h3 className="mt-1 font-display text-base font-bold">Placeholder past event title</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="mt-8">
            <ImagePlaceholder src="/images/wtv9.jpg" label="Calendar view" ratio="aspect-[16/9]" />
          </TabsContent>
        </Tabs>
      </section>
    </SiteLayout>
  );
}
