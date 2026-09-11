"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function ErrorMetricsSection() {
  return (
    <section aria-labelledby="error-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <AvikratImage
          def={RESEARCH_IMAGES.error}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="error-title"
            eyebrow="02 · Error Metrics"
            title={
              <>
                Measured as distance from{' '}
                <span className="text-cyan">the true state.</span>
              </>
            }
            copy="The discrepancy between true and predicted structures is tracked through error metrics, providing a quantitative signal for how well the compact representation preserves the behavior that matters for generation."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-faint">
            The metrics substantiate where the compact representation is close — and where
            it still deviates.
          </p>
        </div>
      </div>
    </section>
  );
}