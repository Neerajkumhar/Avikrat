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
            aspectRatio="16 / 9"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            id="scaling-title"
            eyebrow="03 · PERFORMANCE MODEL"
            title="Designed for flatter scaling."
            copy="Context expands continuously. The cost baseline should remain fixed. By reading history once into a compact persistent state, AVIKRAT aims to keep per-token compute and memory overhead flat across extended sequence lengths."
          />
          <p className="mt-6 max-w-lg font-mono text-[0.75rem] uppercase tracking-wider text-faint border-t border-line pt-4">
            ARCHITECTURE OBJECTIVE · SIMULATOR VALIDATION MODEL
          </p>
        </div>
      </div>
    </section>
  );
}