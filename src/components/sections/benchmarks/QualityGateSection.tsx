"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { StatusPill } from "@/components/ui/StatusPill";

const GATES = [
  {
    label: "QUALITY",
    question: "Does perplexity remain competitive?",
  },
  {
    label: "LATENCY",
    question: "Does decoding latency improve?",
  },
  {
    label: "MEMORY",
    question: "Does memory remain bounded as context grows?",
  },
];

export function QualityGateSection() {
  return (
    <section aria-labelledby="bench-gate-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          03 / The Quality Gate
        </motion.p>
        <motion.h2
          id="bench-gate-title"
          variants={fadeUp}
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Efficiency is only useful if{' '}
          <span className="text-cyan">quality survives.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-soft">
          The benchmark must answer three questions before any efficiency claim is
          considered. AVIKRAT has not passed this gate.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto mt-14 max-w-3xl"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {GATES.map((g) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-surface p-5 text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">{g.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-faint">{g.question}</p>
            </motion.div>
          ))}
        </div>

        <div aria-hidden="true" className="flex items-center justify-center gap-3 py-4">
          <span className="h-px w-8 bg-line" />
          <span className="font-mono text-xs text-faint">+</span>
          <span className="h-px w-8 bg-line" />
        </div>

        <motion.div variants={fadeUp} className="rounded-3xl border-2 border-electric/40 bg-electric/5 p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-electric">Validation Gate</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-soft">
            Required validation — a pass requires competitive quality, meaningful latency
            improvement and bounded memory under matched conditions.
          </p>
          <div className="mt-5 flex justify-center">
            <StatusPill kind="validating" />
          </div>
        </motion.div>

        <div aria-hidden="true" className="flex justify-center py-4">
          <span className="text-cyan">↓</span>
        </div>

        <motion.div
          variants={fadeUp}
          className="rounded-3xl border border-dashed border-line p-8 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-faint">Continue</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-faint">
            Only on evidence — conditional, not granted.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}