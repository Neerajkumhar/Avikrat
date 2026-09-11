"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { PROBLEM_IMAGES } from "@/lib/images";

export function DecodingSection() {
  return (
    <section aria-labelledby="decoding-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">Traditional Decoding</p>
          <h2
            id="decoding-title"
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            Traditional decoding keeps{' '}
            <span className="text-electric">reaching backward.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-soft">
            Every new token depends on what came before. In conventional decoding, that means
            repeatedly attending across the full accumulated history — so the dependency
            region grows with every step.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-10">
          <AvikratImage
            def={PROBLEM_IMAGES.decoding}
            mode="aspect"
            aspectRatio="16 / 9"
            sizes="100%"
          />
        </div>
      </div>
    </section>
  );
}