"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { HOME_IMAGES } from "@/lib/images";

export function ScalingSection() {
  return (
    <section aria-labelledby="scaling-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <AvikratImage
            def={HOME_IMAGES.scaling}
            mode="aspect"
            aspectRatio="3 / 4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            id="scaling-title"
            eyebrow="Scaling"
            title="Designed for flatter scaling."
            copy="Context grows. The cost baseline should stay. By reading history once into a compact persistent state, AVIKRAT aims to keep per-token compute and memory nearly constant as conversations get longer."
          />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-soft">
            This is a target of the architecture, not a published production benchmark.
            The working simulator is where that target gets tested.
          </p>
        </div>
      </div>
    </section>
  );
}