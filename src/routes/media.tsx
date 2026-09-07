import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ImagePlaceholder, SectionHeading } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Camera, Download, Mail, Play } from "lucide-react";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media Center — Watching The Vote" },
      { name: "description", content: "Photos, videos, press kit, brand assets and media contacts for Yiaga Africa's Watching The Vote." },
      { property: "og:title", content: "Media Center · Watching The Vote" },
      { property: "og:description", content: "Journalist-ready photos, videos, press kit and brand assets." },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Media center"
        title="Photos, videos and press-ready resources."
        intro="Everything the newsroom needs to cover Watching The Vote."
      />

      <section className="container-wtv py-12">
        <Tabs defaultValue="photos">
          <TabsList>
            <TabsTrigger value="photos"><Camera className="mr-1 h-4 w-4" /> Photos</TabsTrigger>
            <TabsTrigger value="videos"><Play className="mr-1 h-4 w-4" /> Videos</TabsTrigger>
            <TabsTrigger value="press"><Download className="mr-1 h-4 w-4" /> Press kit</TabsTrigger>
            <TabsTrigger value="contacts"><Mail className="mr-1 h-4 w-4" /> Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <ImagePlaceholder key={i} src={`/images/wtv${(i % 9) + 1}.jpg`} label={`Photo ${i + 1}`} ratio="aspect-square" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-lg border border-border bg-card">
                  <div className="relative">
                    <ImagePlaceholder src={`/images/wtv${((i + 3) % 9) + 1}.jpg`} label="Video thumbnail" ratio="aspect-video" className="rounded-none border-0 border-b" />
                    <div className="absolute inset-0 grid place-items-center"><div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><Play className="h-5 w-5" /></div></div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Documentary</div>
                    <h3 className="mt-1 font-display text-base font-bold leading-snug">Placeholder video title</h3>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="press" className="mt-8">
            <SectionHeading eyebrow="Press kit" title="Brand assets & fact sheets" />
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {["Yiaga Africa logo pack", "WTV brand guidelines", "Fact sheet 2026", "Leadership bios", "Photography usage license", "Media Q&A"].map((n) => (
                <div key={n} className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                  <div className="text-sm font-medium">{n}</div>
                  <Button size="sm" variant="outline"><Download className="mr-1 h-3.5 w-3.5" /> Download</Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="mt-8">
            <div className="surface-panel max-w-xl p-6">
              <h3 className="font-display text-lg font-bold">Media contacts</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between border-b border-border pb-3"><span>Moshood Isah · Communications Manager</span><span className="text-primary">media@yiaga.org</span></li>
                <li className="flex items-center justify-between"><span>Press desk · +234 908 335 4111</span><span className="text-primary">press@yiaga.org</span></li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </SiteLayout>
  );
}
