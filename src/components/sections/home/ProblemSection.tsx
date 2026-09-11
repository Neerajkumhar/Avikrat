"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { PROBLEM_IMAGES } from "@/lib/images";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="problem-title"
            eyebrow="01 · THE BOTTLENECK"
            title={
              <>
                Standard decoding
                <br />
                scales with <span className="text-soft font-normal">every token.</span>
              </>
            }
            copy="As context grows, standard decoding keeps expanding the KV cache. Attention cost and memory traffic climb linearly with context length — driving up compute cost and slowing latency on every turn."
          />
          <div className="mt-8 border-t border-line pt-4 font-mono text-[0.75rem] text-faint uppercase tracking-wider">
            ILLUSTRATIVE RELATIONSHIP · STANDARD TRANSFORMER DECODING
          </div>
        </div>
        <AvikratImage
          def={PROBLEM_IMAGES.hero}
          mode="aspect"
          aspectRatio="16 / 9"
          sizes="(max-width: 768px) 100vw, 50vw"
          parallax={16}
        />
      </div>
    </section>
  );
}