"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { StatusPill } from "@/components/ui/StatusPill";

const ROWS = [
  {
    measurement: "Perplexity",
    why: "Model quality",
    current: "POC / validation framework",
    currentKind: "observed" as const,
    next: "Matched baseline run",
  },
  {
    measurement: "Latency",
    why: "Generation efficiency",
    current: "Not yet established",
    currentKind: "validating" as const,
    next: "Token/sec + latency measurement",
  },
  {
    measurement: "GPU Memory",
    why: "Memory scaling",
    current: "Not yet established",
    currentKind: "validating" as const,
    next: "Memory curve measurement",
  },
  {
    measurement: "Context Scaling",
    why: "Behavior at increasing context",
    current: "Not yet established",
    currentKind: "validating" as const,
    next: "Scaling benchmark",
  },
];

export function MatrixSection() {
  return (
    <section aria-labelledby="bench-matrix-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="eyebrow">
        09 / Benchmark Matrix
      </motion.p>
      <motion.h2
        id="bench-matrix-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
      >
        Where each measurement{' '}
        <span className="text-cyan">stands.</span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-4 max-w-2xl text-sm leading-relaxed text-faint"
      >
        Precise status language. Nothing is marked as proven unless the evidence exists.
      </motion.p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 space-y-4"
      >
        {ROWS.map((r) => (
          <motion.div
            key={r.measurement}
            variants={fadeUp}
            className="grid gap-x-6 gap-y-3 rounded-2xl border border-line bg-surface p-5 md:grid-cols-[0.9fr_1fr_1fr_1.2fr] md:items-center"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">{r.measurement}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-faint">Why it matters</p>
              <p className="mt-1 text-sm text-soft">{r.why}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-faint">Current state</p>
              <p className="mt-1 flex flex-wrap items-center gap-2">
                <StatusPill kind={r.currentKind} text={r.current} />
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-faint">Next step</p>
              <p className="mt-1 text-sm text-soft">{r.next}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}