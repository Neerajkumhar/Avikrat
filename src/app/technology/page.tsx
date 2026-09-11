import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { TechHero } from "@/components/sections/technology/TechHero";
import { OldAssumptionSection } from "@/components/sections/technology/OldAssumptionSection";
import { ShiftSection } from "@/components/sections/technology/ShiftSection";
import { FourStagesSection } from "@/components/sections/technology/FourStagesSection";
import { TwoWaysSection } from "@/components/sections/technology/TwoWaysSection";
import { WhyItMattersSection } from "@/components/sections/technology/WhyItMattersSection";
import { ProofSection } from "@/components/sections/technology/ProofSection";
import { NextStepsSection } from "@/components/sections/technology/NextStepsSection";
import { TargetSection } from "@/components/sections/technology/TargetSection";
import { TechCtaSection } from "@/components/sections/technology/TechCtaSection";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = pageMeta(
  "Technology — Hidden State Simulator | AVIKRAT",
  "AVIKRAT's Hidden State Simulator explores encoding long context into compact persistent state with local decoding — from architecture to working simulator."
);

export default function TechnologyPage() {
  return (
    <main id="main">
      <TechHero />
      <OldAssumptionSection />
      <ShiftSection />
      <Divider className="container-content" />
      <FourStagesSection />
      <TwoWaysSection />
      <Divider className="container-content" />
      <WhyItMattersSection />
      <ProofSection />
      <Divider className="container-content" />
      <NextStepsSection />
      <Divider className="container-content" />
      <TargetSection />
      <TechCtaSection />
    </main>
  );
}