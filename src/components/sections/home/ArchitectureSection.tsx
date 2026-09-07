"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArchitectureProcess } from "@/components/visualizations/ArchitectureProcess";

export function ArchitectureSection() {
  return (
    <section aria-labelledby="architecture-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="architecture-title"
        eyebrow="The Approach"
        title="An architecture built for persistent context."
        copy="History is encoded once into a small persistent state. Everything after that runs against a short local window — so the expensive part of a long conversation happens exactly once."
      />
      <div className="mt-14">
        <ArchitectureProcess />
      </div>
    </section>
  );
}
