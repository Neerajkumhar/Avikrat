"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function TechCtaSection() {
  return (
    <section aria-labelledby="tech-cta-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-sm border border-line bg-surface bg-grid-pattern px-6 py-16 text-center md:py-24">
        <div className="relative mx-auto max-w-3xl">
          <SectionHeader
            id="tech-cta-title"
            eyebrow="07 · COLLABORATION DIRECTIVE"
            title="Help us turn the simulator into infrastructure."
            copy="We are seeking benchmark collaborators, enterprise pilot partners, and systems engineers to advance constant-memory AI inference."
            align="center"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Collaborate on Benchmarks</Button>
            <Button href="/contact" variant="ghost">Explore Pilot</Button>
            <Button href="/contact" variant="ghost">Talk to AVIKRAT</Button>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-faint">
            hello@avikrat.org · +91 8949207258
          </p>
        </div>
      </div>
    </section>
  );
}