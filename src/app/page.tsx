import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ArchitectureSection } from "@/components/sections/home/ArchitectureSection";
import { ScalingSection } from "@/components/sections/home/ScalingSection";
import { ApplicationsSection } from "@/components/sections/home/ApplicationsSection";
import { ProofSection } from "@/components/sections/home/ProofSection";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ProblemSection />
      <ArchitectureSection />
      <ScalingSection />
      <ApplicationsSection />
      <ProofSection />
    </main>
  );
}
