import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CinematicHero } from "@/components/site/CinematicHero";
import { VisualProcessStory } from "@/components/site/VisualProcessStory";
import { CivicTechDataSection } from "@/components/site/CivicTechDataSection";
import { HumanDocumentaryGallery } from "@/components/site/HumanDocumentaryGallery";
import { AboutWtvSection } from "@/components/site/AboutWtvSection";
import { ElectionsAndReportsShowcase } from "@/components/site/ElectionsAndReportsShowcase";
import { ObserverVoicesSection } from "@/components/site/ObserverVoicesSection";
import { PartnerCivicAlliance } from "@/components/site/PartnerCivicAlliance";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Watching The Vote — Yiaga Africa | Citizen Election Observation" },
      {
        name: "description",
        content:
          "Yiaga Africa's Watching The Vote (WTV) deploys accredited citizen observers, process and results verification for transparency (PRVT), and open election data to safeguard democratic integrity across Nigeria.",
      },
      { property: "og:title", content: "Watching The Vote — Yiaga Africa" },
      {
        property: "og:description",
        content:
          "Independent citizen election observation, PRVT statistical verification, and open election data across all 36 Nigerian states + FCT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* 1. CINEMATIC HERO: EXTRAORDINARY VISUAL IMPACT & COMMAND TELEMETRY */}
      <CinematicHero />

      {/* 2. VISUAL PROCESS STORYTELLING: 6 CONNECTED ACTIVITIES */}
      <VisualProcessStory />

      {/* 3. TECHNOLOGY & DATA: INTERACTIVE PRVT VERIFICATION & DEPLOYMENT DENSITY */}
      <CivicTechDataSection />

      {/* 4. HUMAN-CENTRED VISUAL STORYTELLING: ASYMMETRICAL PHOTO ESSAY & LIGHTBOX */}
      <HumanDocumentaryGallery />

      {/* 5. ABOUT WATCHING THE VOTE: SAMSON ITODO & EXECUTIVE MANDATE */}
      <AboutWtvSection />

      {/* 6. ELECTIONS ARCHIVE, EVIDENCE REPORTS & SITUATION ROOM BULLETINS */}
      <ElectionsAndReportsShowcase />

      {/* 7. OBSERVER VOICES & IMPACT HIGHLIGHTS */}
      <ObserverVoicesSection />

      {/* 8. GLOBAL CIVIC PARTNERS & ALLIANCE */}
      <PartnerCivicAlliance />
    </SiteLayout>
  );
}
