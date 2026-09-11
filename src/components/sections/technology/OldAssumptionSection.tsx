"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { PROBLEM_IMAGES } from "@/lib/images";

export function OldAssumptionSection() {
  return (
    <section aria-labelledby="old-assumption-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="old-assumption-title"
        eyebrow="The Problem"
        title="The old assumption: keep carrying the context."
        copy={
          "Traditional long-context inference treats history as a growing payload. Every added token expands the KV cache, and every decoding step re-reads more of it — so memory, latency, and serving cost climb together."
        }
      />
      <div className="mt-14">
        <AvikratImage
          def={PROBLEM_IMAGES.hero}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
          parallax={20}
        />
      </div>
      <p className="mt-4 text-xs text-faint">
        Conceptual visualization of growing context — not measured benchmark data.
      </p>
    </section>
  );
}