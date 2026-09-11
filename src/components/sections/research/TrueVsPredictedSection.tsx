"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function TrueVsPredictedSection() {
  return (
    <section aria-labelledby="tp-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="tp-title"
            eyebrow="01 · True vs Predicted Context Slices"
            title={
              <>
                Structure that can be predicted{' '}
                <span className="text-cyan">before it exists.</span>
              </>
            }
            copy="The simulator compares the hidden state the model would form from the true context against a compressed reconstruction. Comparing true and predicted slices is how the compact representation is validated."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-faint">
            A conceptual research capability — no numeric results are claimed.
          </p>
        </div>
        <AvikratImage
          def={RESEARCH_IMAGES.truePredicted}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}