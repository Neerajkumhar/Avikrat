"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { HOME_IMAGES } from "@/lib/images";

export function ArchitectureSection() {
  return (
    <section aria-labelledby="architecture-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="architecture-title"
        eyebrow="The Approach"
        title="An architecture built for persistent context."
        copy="History is encoded once into a small persistent state. Everything after that runs against a short local window — so the expensive part of a long conversation happens exactly once."
      />
      <div className="mt-16">
        <AvikratImage
          def={HOME_IMAGES.architecture}
          mode="aspect"
          aspectRatio="16 / 9"
          sizes="100vw"
          parallax={24}
        />
      </div>
    </section>
  );
}