"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

const TRADITIONAL = [
  "KV cache grows with every extra token",
  "Memory and attention cost rise with context length",
  "Long conversations become increasingly expensive to maintain",
];

const HIDDEN_STATE = [
  "Compact persistent state is kept fixed-size",
  "Local decoding operates on a short token window",
  "Inference cost is designed to stay much flatter as context increases",
];

export function TwoWaysSection() {
  return (
    <section aria-labelledby="two-ways-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="two-ways-title"
        eyebrow="The Comparison"
        title="Two ways to carry context."
        copy="One carries everything forward. The other carries a compact state and decodes locally. The difference shows up as context grows."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-soft">Traditional Inference</h3>
          <ul className="mt-5 space-y-3">
            {TRADITIONAL.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-soft">
                <span aria-hidden="true" className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-electric/70" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-cyan/40 bg-surface p-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Hidden-State Simulator</h3>
          <ul className="mt-5 space-y-3">
            {HIDDEN_STATE.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-soft">
                <span aria-hidden="true" className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-cyan" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <AvikratImage
          def={TECH_IMAGES.state}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
          parallax={16}
        />
      </div>
      <p className="mt-4 text-xs text-faint">
        Conceptual visualization of a compact persistent state — not a measured chart.
      </p>
    </section>
  );
}