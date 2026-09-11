import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { WhySection } from "@/components/sections/about/WhySection";
import { BuildSection } from "@/components/sections/about/BuildSection";
import { ApproachSection } from "@/components/sections/about/ApproachSection";
import { CurrentStateSection } from "@/components/sections/about/CurrentStateSection";
import { RoadmapSection } from "@/components/sections/about/RoadmapSection";
import { ApplicationsSection } from "@/components/sections/about/ApplicationsSection";
import { VisionSection } from "@/components/sections/about/VisionSection";
import { BeliefSection } from "@/components/sections/about/BeliefSection";
import { LookingForSection } from "@/components/sections/about/LookingForSection";
import { FinalStatementSection } from "@/components/sections/about/FinalStatementSection";
import { AboutCtaSection } from "@/components/sections/about/AboutCtaSection";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = pageMeta(
  "About AVIKRAT | AI Infrastructure for Long-Context Inference",
  "AVIKRAT is building infrastructure for more efficient long-context AI through compact persistent state and local decoding."
);

export default function AboutPage() {
  return (
    <main id="main">
      <AboutHero />
      <Divider className="container-content" />
      <WhySection />
      <Divider className="container-content" />
      <BuildSection />
      <Divider className="container-content" />
      <ApproachSection />
      <Divider className="container-content" />
      <CurrentStateSection />
      <Divider className="container-content" />
      <RoadmapSection />
      <Divider className="container-content" />
      <ApplicationsSection />
      <Divider className="container-content" />
      <VisionSection />
      <Divider className="container-content" />
      <BeliefSection />
      <Divider className="container-content" />
      <LookingForSection />
      <FinalStatementSection />
      <AboutCtaSection />
    </main>
  );
}