import { Hero } from "@/components/Hero";
import { MissionStatementSection } from "@/components/MissionStatementSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ExploreWork } from "@/components/ExploreWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arabic–English bilingual menstrual health education",
  description:
    "Flow for Her is an Arabic–English bilingual menstrual health education platform focused on Syria—covering puberty, periods, stigma, and period poverty with trusted resources.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Hero />
      <MissionStatementSection />
      <ImpactSection />
      <ExploreWork />
    </main>
  );
}
