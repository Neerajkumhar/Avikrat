"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const CHECKS = [
  {
    label: "True vs Predicted Context Slices",
    copy: "Compares simulated persistent state against observed attention context matrix structures.",
  },
  {
    label: "Error Metrics & Convergence",
    copy: "Tracks state prediction deviation across high-depth token generation passes.",
  },
  {
    label: "Cosine Vector Similarity",
    copy: "Measures directional alignment between compressed hidden vectors and full KV states.",
  },
  {
    label: "Checkpoint Selection Logic",
    copy: "Determines optimal sequence slicing intervals for long-context persistence.",
  },
];

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="container-content flex min-h-[100svh] flex-col justify-center py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="proof-title"
            eyebrow="05 · EMPIRICAL VALIDATION"
            title="From simulator to infrastructure."
            copy="A working simulator models hidden-state structures and measures validation convergence. It serves as the architectural foundation for production-grade inference engine development."
          />
          <p className="mt-6 max-w-md font-mono text-[0.75rem] uppercase tracking-wider text-faint border-t border-line pt-4">
            SIMULATION PIPELINE · RESEARCH EVALUATION DIMENSIONS
          </p>
          <div className="mt-8">
            <Button href="/research">Explore Research</Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="instrument-panel border border-line bg-surface p-6 md:p-8"
        >
          <p className="eyebrow">Active Simulator Benchmarks</p>
          <ul className="mt-6 divide-y divide-line">
            {CHECKS.map((c) => (
              <motion.li
                key={c.label}
                variants={fadeUp}
                className="flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span aria-hidden="true" className="relative mt-2 h-2 w-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-charcoal" />
                </span>
                <div>
                  <h3
                    className="text-base font-bold text-charcoal uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {c.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-soft font-normal">{c.copy}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
