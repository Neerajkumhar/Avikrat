"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function TechCtaSection() {
  return (
    <section aria-labelledby="tech-cta-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,211,197,0.09), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <SectionHeader
            id="tech-cta-title"
            eyebrow="Get Involved"
            title="Help us turn the simulator into infrastructure."
            copy="We are looking for benchmark collaborators, pilot opportunities and strategic support to validate and advance the technology."
            align="center"
          />
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Collaborate on Benchmarks</Button>
            <Button href="/contact" variant="ghost">Explore a Pilot</Button>
            <Button href="/contact" variant="ghost">Talk to AVIKRAT</Button>
          </div>
          <p className="mt-8 text-sm text-faint">
            hello@avikrat.org · +91 8949207258
          </p>
        </div>
      </div>
    </section>
  );
}