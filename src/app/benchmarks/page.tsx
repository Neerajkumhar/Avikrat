import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { BenchHero } from "@/components/sections/benchmarks/BenchHero";
import { KnowledgeSection } from "@/components/sections/benchmarks/KnowledgeSection";
import { QualityGateSection } from "@/components/sections/benchmarks/QualityGateSection";
import { PerplexitySection } from "@/components/sections/benchmarks/PerplexitySection";
import { LatencySection } from "@/components/sections/benchmarks/LatencySection";
import { MemorySection } from "@/components/sections/benchmarks/MemorySection";
import { ContextScalingSection } from "@/components/sections/benchmarks/ContextScalingSection";
import { ExperimentDesignSection } from "@/components/sections/benchmarks/ExperimentDesignSection";
import { MatrixSection } from "@/components/sections/benchmarks/MatrixSection";
import { BenchTargetSection } from "@/components/sections/benchmarks/BenchTargetSection";
import { SuccessSection } from "@/components/sections/benchmarks/SuccessSection";
import { CollaborateSection } from "@/components/sections/benchmarks/CollaborateSection";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = pageMeta(
  "Benchmarks & Validation | AVIKRAT",
  "AVIKRAT's validation framework for measuring perplexity, latency, GPU memory and context-length scaling in long-context inference."
);

export default function BenchmarksPage() {
  return (
    <main id="main">
      <BenchHero />
      <KnowledgeSection />
      <Divider className="container-content" />
      <QualityGateSection />
      <Divider className="container-content" />
      <PerplexitySection />
      <Divider className="container-content" />
      <LatencySection />
      <Divider className="container-content" />
      <MemorySection />
      <Divider className="container-content" />
      <ContextScalingSection />
      <Divider className="container-content" />
      <ExperimentDesignSection />
      <Divider className="container-content" />
      <MatrixSection />
      <Divider className="container-content" />
      <BenchTargetSection />
      <Divider className="container-content" />
      <SuccessSection />
      <CollaborateSection />
    </main>
  );
}