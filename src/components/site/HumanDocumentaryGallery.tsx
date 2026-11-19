import { useState } from "react";
import {
  Camera,
  MapPin,
  Calendar,
  Eye,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface DocumentaryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: "Field Observers" | "Voter Engagement" | "Situation Room & Tech" | "Result Audits";
  location: string;
  date: string;
  aspect: "featured" | "tall" | "wide" | "square";
  observerRole: string;
}

export const documentaryPhotos: DocumentaryPhoto[] = [
  {
    id: "doc-1",
    src: "/images/wtv1.jpg",
    title: "Voter Accreditation & Biometric Check",
    caption:
      "An accredited Watching The Vote stationary observer monitors the verification of a voter using the Bimodal Voter Accreditation System (BVAS) at an open polling unit in Ikeja.",
    category: "Field Observers",
    location: "Ikeja, Lagos State",
    date: "General Election",
    aspect: "featured",
    observerRole: "Stationary Observer #2104",
  },
  {
    id: "doc-2",
    src: "/images/wtv2.jpg",
    title: "Official Form EC8A Audit & Tally Verification",
    caption:
      "Observing the public sorting and ballot tallying process. Every vote is cross-checked against the official result declaration sheet before being recorded for PRVT statistical verification.",
    category: "Result Audits",
    location: "Kano Municipal, Kano State",
    date: "Gubernatorial Observation",
    aspect: "tall",
    observerRole: "Lead Field Auditor",
  },
  {
    id: "doc-3",
    src: "/images/wtv3.jpg",
    title: "Citizen Deployment & Morning Briefing",
    caption:
      "Accredited citizen monitors wearing official Yiaga Africa vests coordinate their arrival schedules and communications protocols outside a local government distribution center.",
    category: "Field Observers",
    location: "Akure South, Ondo State",
    date: "Off-Cycle Election",
    aspect: "wide",
    observerRole: "LGA Supervisor Team",
  },
  {
    id: "doc-4",
    src: "/images/wtv4.jpg",
    title: "The Patience of Nigerian Democracy",
    caption:
      "Citizens assemble in orderly queues from early morning, under umbrellas and community shelters, determined to exercise their constitutional right to vote.",
    category: "Voter Engagement",
    location: "Enugu North, Enugu State",
    date: "State Election",
    aspect: "wide",
    observerRole: "Field Documentarian",
  },
  {
    id: "doc-5",
    src: "/images/wtv5.jpg",
    title: "Rigorous Non-Partisan Observer Workshop",
    caption:
      "Intensive five-day methodology training: observers undergo simulation drills, ethics swearing-in, and digital reporting practice using coded checklists.",
    category: "Field Observers",
    location: "Abuja Training Center",
    date: "Pre-Deployment Batch 11",
    aspect: "square",
    observerRole: "Master Trainer",
  },
  {
    id: "doc-6",
    src: "/images/wtv6.jpg",
    title: "Secret Ballot & Polling Booth Integrity",
    caption:
      "Monitoring the setup of voting cubicles to guarantee that voters mark their ballots in complete privacy, free from voter intimidation or undue influence.",
    category: "Voter Engagement",
    location: "Ibadan South-West, Oyo State",
    date: "General Election",
    aspect: "tall",
    observerRole: "Stationary Observer #1428",
  },
  {
    id: "doc-7",
    src: "/images/wtv7.jpg",
    title: "Public Sunset Counting & Collation",
    caption:
      "Ballots are counted in the open before the community and party agents as twilight descends. Observers ensure transparency until the final Form EC8A is pasted on the wall.",
    category: "Result Audits",
    location: "Port Harcourt, Rivers State",
    date: "Gubernatorial Collation",
    aspect: "wide",
    observerRole: "Collation Center Monitor",
  },
  {
    id: "doc-8",
    src: "/images/wtv8.jpg",
    title: "National Situation Room Command",
    caption:
      "The central brain of Watching The Vote in Abuja. Data analysts, statisticians, and legal observers ingest real-time SMS streams and compute confidence intervals live.",
    category: "Situation Room & Tech",
    location: "National Situation Room, Abuja",
    date: "Election Day Operation",
    aspect: "featured",
    observerRole: "Chief Statistical Analyst",
  },
  {
    id: "doc-9",
    src: "/images/wtv9.jpg",
    title: "Encrypted Mobile Data Transmission",
    caption:
      "A field observer uses custom mobile reporting software to transmit coded verification checklists directly into the central database within seconds of PU closure.",
    category: "Situation Room & Tech",
    location: "Maiduguri, Borno State",
    date: "Off-Cycle Monitoring",
    aspect: "square",
    observerRole: "Roving Mobile Observer",
  },
];

const categories = [
  "All Stories",
  "Field Observers",
  "Voter Engagement",
  "Result Audits",
  "Situation Room & Tech",
] as const;

export function HumanDocumentaryGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All Stories");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All Stories"
      ? documentaryPhotos
      : documentaryPhotos.filter((p) => p.category === activeCategory);

  const openLightbox = (photoId: string) => {
    const idx = documentaryPhotos.findIndex((p) => p.id === photoId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % documentaryPhotos.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + documentaryPhotos.length) % documentaryPhotos.length);
    }
  };

  const activeLightboxPhoto = lightboxIndex !== null ? documentaryPhotos[lightboxIndex] : null;

  return (
    <section className="relative py-20 lg:py-28 bg-background border-b border-border">
      <div className="container-wtv">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase font-mono">
              <Camera className="h-3.5 w-3.5" />
              <span>Human-Centred Field Dispatches</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Democracy in the Frame
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Authentic documentary photography capturing the dedication of accredited Nigerian citizens guarding the vote in every senatorial district.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-surface-2/60 p-1.5 text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ASYMMETRICAL EDITORIAL PHOTO GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, i) => {
            // Apply varied card styling for visual rhythm
            const isFeatured = photo.aspect === "featured" || (i === 0 && activeCategory === "All Stories");

            return (
              <article
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300 hover:shadow-elev-2 hover:border-primary/40 flex flex-col ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Photo container */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-950 ${
                    isFeatured ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[4/3] sm:aspect-[1/1]"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge className="bg-[#246A37] text-white border-0 text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {photo.category}
                    </Badge>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Bottom Location & Role Stamp on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-300 font-medium">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{photo.location}</span>
                      <span>·</span>
                      <span>{photo.observerRole}</span>
                    </div>
                    <h3 className="mt-1 font-display text-lg sm:text-xl font-bold leading-tight text-white group-hover:text-emerald-200 transition-colors">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative Caption */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-card">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {photo.caption}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-primary" /> {photo.date}
                    </span>
                    <span className="text-primary font-semibold group-hover:underline inline-flex items-center">
                      Inspect dispatch →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && activeLightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-50 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev / Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 hidden sm:grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-[#0d1610] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid lg:grid-cols-12 max-h-[85vh]">
              {/* Photo Area */}
              <div className="lg:col-span-8 flex items-center justify-center bg-black overflow-hidden max-h-[55vh] lg:max-h-[85vh]">
                <img
                  src={activeLightboxPhoto.src}
                  alt={activeLightboxPhoto.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Details & Documentary Sidebar */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#0d1811] text-white border-t lg:border-t-0 lg:border-l border-white/10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#73BE44] font-semibold">
                      {activeLightboxPhoto.category}
                    </span>
                    <span className="font-mono text-xs text-white/50">
                      {lightboxIndex + 1} / {documentaryPhotos.length}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold leading-tight text-white">
                    {activeLightboxPhoto.title}
                  </h3>

                  <p className="mt-4 text-sm text-emerald-100/80 leading-relaxed">
                    {activeLightboxPhoto.caption}
                  </p>

                  {/* Metadata Pill Box */}
                  <div className="mt-6 space-y-3 border-y border-white/10 py-4 font-mono text-xs">
                    <div className="flex items-center justify-between text-white/70">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#73BE44]" /> Location:
                      </span>
                      <strong className="text-white">{activeLightboxPhoto.location}</strong>
                    </div>

                    <div className="flex items-center justify-between text-white/70">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#73BE44]" /> Deployment:
                      </span>
                      <strong className="text-white">{activeLightboxPhoto.date}</strong>
                    </div>

                    <div className="flex items-center justify-between text-white/70">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#73BE44]" /> Observer Role:
                      </span>
                      <strong className="text-white">{activeLightboxPhoto.observerRole}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                  <span className="text-white/50">Yiaga Africa · WTV Archive</span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={prevLightbox}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Prev
                    </Button>
                    <Button
                      size="sm"
                      onClick={nextLightbox}
                      className="bg-[#246A37] hover:bg-[#1b5029] text-white"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
