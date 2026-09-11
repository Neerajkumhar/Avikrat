"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const CHECKS = [
  { title: "Matched model", copy: "Compare equivalent model configurations." },
  { title: "Matched context", copy: "Evaluate equivalent context lengths." },
  { title: "Matched workload", copy: "Use comparable generation conditions." },
  { title: "Matched hardware", copy: "Measure under controlled hardware conditions." },
  { title: "Quality check", copy: "Verify perplexity remains competitive." },
  { title: "Resource measurement", copy: "Track latency, token/sec and GPU memory." },
];

export function ExperimentDesignSection() {
  return (
    <section aria-labelledby="bench-design-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-2xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          08 / Experiment Design
        </motion.p>
        <motion.h2
          id="bench-design-title"
          variants={fadeUp}
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Make the comparison{' '}
          <span className="text-cyan">fair.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-soft">
          A credible benchmark controls every variable that could distort a result. Exact
          experimental parameters are still to be specified; the point is the discipline.
        </motion.p>
      </motion.div>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CHECKS.map((c) => (
          <motion.li
            key={c.title}
            variants={fadeUp}
            className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-electric/50 bg-electric/10"
            >
              <span className="text-[11px] leading-none text-electric">—</span>
            </span>
            <div>
              <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-faint">{c.copy}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-faint"
      >
        The unchecked boxes are commitments before measurement, not completed steps.
      </motion.p>
    </section>
  );
}