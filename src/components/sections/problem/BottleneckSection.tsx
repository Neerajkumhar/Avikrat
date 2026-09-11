"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { PROBLEM_IMAGES } from "@/lib/images";

export function BottleneckSection() {
  return (
    <section aria-labelledby="bottleneck-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">The Core Bottleneck</p>
          <h2
            id="bottleneck-title"
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            Every extra token leaves a{' '}
            <span className="text-electric">footprint.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-soft">
            In conventional decoding, additional context increases the amount of state that
            must be carried and accessed. The result is more memory traffic and greater
            computational pressure as the sequence grows.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-10">
          <AvikratImage
            def={PROBLEM_IMAGES.memory}
            mode="aspect"
            aspectRatio="4 / 3"
            sizes="100%"
          />
          <p className="mt-4 text-center text-xs text-faint">
            Advanced GPU data-center memory architecture under increasing information load.
            Not measured data.
          </p>
        </div>
      </div>
    </section>
  );
}