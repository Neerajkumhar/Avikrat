"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

export function WhySection() {
  return (
    <section aria-labelledby="why-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <div className="lg:order-2">
          <AvikratImage
            def={ABOUT_IMAGES.why}
            mode="aspect"
            aspectRatio="4 / 3"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="lg:order-1 lg:sticky lg:top-28">
          <SectionHeader
            id="why-title"
            eyebrow="Why AVIKRAT Exists"
            title="Longer context should not mean unlimited cost."
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-soft">
            <p>
              As context grows, conventional decoding continues to carry an
              expanding KV cache and repeated attention cost. That increases
              memory footprint, latency, serving cost and GPU pressure.
            </p>
            <p>
              AVIKRAT is exploring whether useful long-term context can instead
              be represented through a compact persistent state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}