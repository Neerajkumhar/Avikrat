"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

const FLOW = [
  { step: "01", label: "Global Prefill", note: "Read the full history once." },
  { step: "02", label: "Compact State", note: "Persist a small learned memory." },
  { step: "03", label: "Local Decode", note: "Use a short recent window only." },
  { step: "04", label: "Next Token", note: "Generate efficiently." },
];

export function BuildSection() {
  return (
    <section aria-labelledby="build-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="build-title"
        eyebrow="What We Are Building"
        title="From growing history to compact state."
        copy="AVIKRAT is developing a Hidden State Simulator for compact-state long-context inference."
      />

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-soft">
        Encode long history once into a compact hidden state, then decode using
        only a short local window instead of the full growing context.
      </p>

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {FLOW.map((f, i) => (
          <motion.li
            key={f.step}
            variants={fadeUp}
            className="group flex flex-col gap-3 bg-surface p-6 transition-colors duration-300 hover:bg-surface2 md:p-7"
          >
            <span aria-hidden="true" className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.22em] text-cyan">
                {f.step}
              </span>
              {i < FLOW.length - 1 ? (
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              ) : null}
            </span>
            <p className="text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
              {f.label}
            </p>
            <p className="text-sm leading-relaxed text-soft">{f.note}</p>
          </motion.li>
        ))}
      </motion.ol>
      <p className="mt-4 text-xs text-faint">
        Stage labels describe the intended pipeline of the Hidden State
        Simulator, not measured results.
      </p>

      <div className="mt-12">
        <AvikratImage
          def={ABOUT_IMAGES.build}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
        />
      </div>
    </section>
  );
}