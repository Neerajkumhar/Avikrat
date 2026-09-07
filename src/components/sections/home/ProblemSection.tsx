"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProblemDiagram } from "@/components/visualizations/ProblemDiagram";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="problem-title"
            eyebrow="The Problem"
            title={
              <>
                Standard decoding
                <br />
                scales with <span className="text-electric">every token.</span>
              </>
            }
            copy="As context grows, standard decoding keeps expanding the KV cache. Attention cost and memory traffic climb with it — driving up cost and slowing decoding on every turn."
          />
          <p className="mt-6 text-xs text-faint">
            Illustrative relationship — not measured benchmark data.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-10">
          <ProblemDiagram />
        </div>
      </div>
    </section>
  );
}
