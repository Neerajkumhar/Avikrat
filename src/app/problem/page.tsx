import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { ProblemHero } from "@/components/sections/problem/ProblemHero";
import { BottleneckSection } from "@/components/sections/problem/BottleneckSection";
import { CascadeSection } from "@/components/sections/problem/CascadeSection";
import { LongRunningSystemsSection } from "@/components/sections/problem/LongRunningSystemsSection";
import { MemoryProblemSection } from "@/components/sections/problem/MemoryProblemSection";
import { DecodingSection } from "@/components/sections/problem/DecodingSection";
import { ScalingIntuitionSection } from "@/components/sections/problem/ScalingIntuitionSection";
import { WhyItMattersSection } from "@/components/sections/problem/WhyItMattersSection";
import { QuestionSection } from "@/components/sections/problem/QuestionSection";
import { FinalCtaSection } from "@/components/sections/problem/FinalCtaSection";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = pageMeta(
  "The Long-Context Problem | AVIKRAT",
  "Why conventional long-context inference becomes increasingly expensive as context grows, and the architectural bottlenecks AVIKRAT is exploring."
);

export default function ProblemPage() {
  return (
    <main id="main">
      <ProblemHero />
      <BottleneckSection />
      <CascadeSection />
      <Divider className="container-content" />
      <LongRunningSystemsSection />
      <MemoryProblemSection />
      <Divider className="container-content" />
      <DecodingSection />
      <ScalingIntuitionSection />
      <Divider className="container-content" />
      <WhyItMattersSection />
      <QuestionSection />
      <FinalCtaSection />
    </main>
  );
}