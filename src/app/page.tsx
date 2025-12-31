import { Hero } from "@/components/Hero";
import { MissionStatementSection } from "@/components/MissionStatementSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ExploreWork } from "@/components/ExploreWork";

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
