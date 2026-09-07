import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ArchitectureSection } from "@/components/sections/home/ArchitectureSection";
import { ScalingSection } from "@/components/sections/home/ScalingSection";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ProblemSection />
      <ArchitectureSection />
      <ScalingSection />
    </main>
  );
}
