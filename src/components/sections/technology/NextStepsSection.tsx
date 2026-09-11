"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const METRICS = [
  { label: "Perplexity", note: "Quality must remain competitive." },
  { label: "Latency", note: "Decoding should improve." },
  { label: "Memory", note: "Memory should remain bounded as context grows." },
  { label: "Scaling", note: "Measure behavior across increasing context lengths." },
];

export function NextStepsSection() {
  return (
    <section aria-labelledby="next-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="next-title"
        eyebrow="The Roadmap"
        title="The next step is measurement."
        copy="The architecture is directional. Turning it into infrastructure means validating each claim against matched baselines and real workloads."
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {METRICS.map((m) => (
          <motion.li
            key={m.label}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-dashed border-line bg-surface/40 p-6 transition-colors duration-300 hover:border-cyan/40"
          >
            <span className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink group-hover:text-cyan">
                {m.label}
              </span>
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-faint/60" />
            </span>
            <p className="mt-3 text-sm leading-relaxed text-faint">{m.note}</p>
            <span className="mt-5 block h-1.5 w-full overflow-hidden rounded-full bg-line">
              <span className="block h-full w-0 rounded-full bg-cyan/40 transition-all duration-700 group-hover:w-1/3" />
            </span>
          </motion.li>
        ))}
      </motion.ul>
      <p className="mt-6 text-xs text-faint">
        Early-stage research targets — no benchmark results are claimed yet.
      </p>
    </section>
  );
}