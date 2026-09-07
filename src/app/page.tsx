import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ArchitectureSection } from "@/components/sections/home/ArchitectureSection";
import { ScalingSection } from "@/components/sections/home/ScalingSection";
import { ApplicationsSection } from "@/components/sections/home/ApplicationsSection";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { PartnerSection } from "@/components/sections/home/PartnerSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Divider className="container-content" />
      <ProblemSection />
      <ArchitectureSection />
      <Divider className="container-content" />
      <ScalingSection />
      <ApplicationsSection />
      <Divider className="container-content" />
      <ProofSection />
      <PartnerSection />
      <FinalCtaSection />
    </main>
  );
}
