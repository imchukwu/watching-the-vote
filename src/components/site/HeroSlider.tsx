import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const heroSlides = [
  {
    src: "/images/wtv1.jpg",
    alt: "Accredited Observers at Polling Units across Nigeria",
    caption: "Accredited Observers at Polling Units",
  },
  {
    src: "/images/wtv2.jpg",
    alt: "Process and Results Verification for Transparency",
    caption: "Data Collection & Result Verification",
  },
  {
    src: "/images/wtv3.jpg",
    alt: "Citizen-led Election Integrity Monitoring",
    caption: "Real-time Election Integrity Monitoring",
  },
  {
    src: "/images/wtv5.jpg",
    alt: "Observer Training & Capacity Building",
    caption: "Nationwide Observer Capacity Building",
  },
  {
    src: "/images/wtv8.jpg",
    alt: "WTV Situation Room & Press Briefing",
    caption: "National Situation Room & Press Briefings",
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => {
      clearInterval(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-slate-900">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className="relative min-w-0 flex-[0_0_100%] aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-16 text-xs font-semibold text-white/90 drop-shadow-md">
                <span className="inline-block rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white">
                  {slide.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-slate-950/70 text-white backdrop-blur border border-white/30 transition-all hover:bg-slate-900 hover:scale-110 focus:outline-none"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-slate-950/70 text-white backdrop-blur border border-white/30 transition-all hover:bg-slate-900 hover:scale-110 focus:outline-none"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
