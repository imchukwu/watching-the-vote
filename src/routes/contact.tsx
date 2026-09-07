import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yiaga Africa Watching The Vote" },
      { name: "description", content: "Reach the Watching The Vote team: media, partnerships, observer support and general inquiries." },
      { property: "og:title", content: "Contact · Watching The Vote" },
      { property: "og:description", content: "Contact Yiaga Africa's Watching The Vote team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get in touch"
        title="Reach the Watching The Vote team."
        intro="Media, partnerships, observer support or general inquiries — we'll route your message."
      />

      <section className="container-wtv grid gap-10 py-14 lg:grid-cols-[1.15fr_1fr]">
        <form className="surface-panel space-y-5 p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div><Label htmlFor="fn">Full name</Label><Input id="fn" required className="mt-2" /></div>
            <div><Label htmlFor="em">Email</Label><Input id="em" type="email" required className="mt-2" /></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div><Label htmlFor="org">Organisation</Label><Input id="org" className="mt-2" /></div>
            <div>
              <Label htmlFor="topic">Topic</Label>
              <Select defaultValue="general"><SelectTrigger id="topic" className="mt-2"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General inquiry</SelectItem>
                  <SelectItem value="media">Media & press</SelectItem>
                  <SelectItem value="partner">Partnership</SelectItem>
                  <SelectItem value="observer">Observer support</SelectItem>
                  <SelectItem value="research">Research / data</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div><Label htmlFor="sub">Subject</Label><Input id="sub" required className="mt-2" /></div>
          <div><Label htmlFor="msg">Message</Label><Textarea id="msg" required rows={6} className="mt-2" /></div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Protected by reCAPTCHA. We reply within 3 business days.</p>
            <Button type="submit" size="lg">Send message</Button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="surface-panel p-6">
            <h3 className="font-display text-lg font-bold">Head office</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Plot 1732 Emeka Anyaoku Street, Area 11, Garki, Abuja, Nigeria</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +234 (0) 908 335 4111</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> info@yiaga.org</li>
            </ul>
          </div>
          <ImagePlaceholder src="/images/wtv9.jpg" label="Google Map · Abuja office" ratio="aspect-[4/3]" />
          <div className="surface-panel p-6">
            <h3 className="font-display text-lg font-bold">Regional coordination</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lagos · Kano · Port Harcourt · Enugu — regional coordination hubs for observer
              deployment and situation-room operations.
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
