import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { ResearchHero } from "@/components/sections/research/ResearchHero";
import { TrueVsPredictedSection } from "@/components/sections/research/TrueVsPredictedSection";
import { ErrorMetricsSection } from "@/components/sections/research/ErrorMetricsSection";
import { CosineSection } from "@/components/sections/research/CosineSection";
import { CheckpointSection } from "@/components/sections/research/CheckpointSection";
import { ResearchCtaSection } from "@/components/sections/research/ResearchCtaSection";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = pageMeta(
  "Research / Proof of Concept | AVIKRAT",
  "A working simulator that predicts hidden-state structure and tracks validation behavior."
);

export default function ResearchPage() {
  return (
    <main id="main">
      <ResearchHero />
      <TrueVsPredictedSection />
      <Divider className="container-content" />
      <ErrorMetricsSection />
      <Divider className="container-content" />
      <CosineSection />
      <Divider className="container-content" />
      <CheckpointSection />
      <ResearchCtaSection />
    </main>
  );
}