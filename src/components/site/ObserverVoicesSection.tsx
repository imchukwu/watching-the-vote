import { Link } from "@tanstack/react-router";
import { Quote, MapPin, Award, CheckCircle2, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ObserverStory {
  name: string;
  role: string;
  location: string;
  state: string;
  quote: string;
  impact: string;
  badge: string;
}

export const observerStories: ObserverStory[] = [
  {
    name: "Amina Bello",
    role: "Stationary Observer #1842",
    location: "Kano Municipal LGA",
    state: "Kano State",
    quote:
      "When the BVAS failed at 10 AM, tension rose sharply in our community. Because of our WTV simulation training, I calmly logged the incident code and alerted the escalation desk. Within 25 minutes, INEC technical backup arrived with a replacement battery. The queue cheered.",
    impact: "Defused tension and secured voting for 620 accredited voters.",
    badge: "BVAS Incident Resolution",
  },
  {
    name: "Emeka Okonkwo",
    role: "Lead Field Auditor",
    location: "Enugu North LGA",
    state: "Enugu State",
    quote:
      "At 6:30 PM, the counting began in open twilight. Even when rain started, everyone stayed. I verified that each ballot marked in the box was raised high and announced before being entered onto Form EC8A. Transparency isn't an abstract concept — you can see it in people's eyes.",
    impact: "Verified 100% EC8A tally compliance with all party agents signing.",
    badge: "Ballot Count Verification",
  },
  {
    name: "Folashade Adeleke",
    role: "Roving Mobile Observer",
    location: "Ikeja & Alimosho LGAs",
    state: "Lagos State",
    quote:
      "Watching The Vote gives citizens an objective standard. Before WTV, conflicting party rumors would dominate social media within minutes. Now, journalists and citizens wait for our verified situation room statements because they know we operate on pure science, not rumors.",
    impact: "Monitored 14 polling units across high-density urban clusters.",
    badge: "Countering Disinformation",
  },
  {
    name: "Ibrahim Yakubu",
    role: "IDP Center Observer",
    location: "Maiduguri Municipal",
    state: "Borno State",
    quote:
      "Observing in an internally displaced persons camp requires immense empathy and vigilance. Many voters had lost their homes, but their desire to vote was intact. Making sure their votes were counted properly was the most meaningful civic duty of my life.",
    impact: "Protected the democratic franchise of 1,200 displaced citizens.",
    badge: "Inclusive Observation",
  },
];

export function ObserverVoicesSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-surface-2/40 border-b border-border overflow-hidden">
      <div className="container-wtv">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
            <Heart className="h-3.5 w-3.5 text-primary" />
            <span>The Human Heart of WTV</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Voices from the Polling Units
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Behind every data point is an accredited Nigerian citizen standing watch from sunrise to sunset to protect the integrity of their community's vote.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {observerStories.map((story) => (
            <figure
              key={story.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-elev-2 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Badge */}
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <span className="rounded-md bg-primary-soft px-2 py-0.5 font-mono text-[10px] font-bold text-primary uppercase">
                    {story.badge}
                  </span>
                  <Quote className="h-4 w-4 text-primary/40" />
                </div>

                <blockquote className="mt-4 text-xs sm:text-sm text-foreground leading-relaxed italic">
                  "{story.quote}"
                </blockquote>

                <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 text-[11px] text-muted-foreground">
                  <strong className="text-foreground font-semibold">Civic Impact: </strong>
                  {story.impact}
                </div>
              </div>

              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-bold text-foreground">
                  {story.name}
                </div>
                <div className="text-[11px] font-mono text-primary font-medium mt-0.5">
                  {story.role}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                  <MapPin className="h-3 w-3" />
                  <span>{story.location} · {story.state}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Observer Callout Banner */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-[#1b4325] via-[#246A37] to-[#1e582e] p-8 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#73BE44]">
                CITIZEN ACCREDITATION PORTAL
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Stand Watch for Nigerian Democracy?
              </h3>
              <p className="mt-2 text-sm text-emerald-100 leading-relaxed">
                Applications for accredited non-partisan citizen observers for upcoming elections are open to all Nigerian citizens over 18 who believe in free, fair, and credible elections.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-white text-[#246A37] hover:bg-emerald-50 font-bold">
                <Link to="/observer-portal">
                  Apply to Observe <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/about">
                  Observer Code of Ethics
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
