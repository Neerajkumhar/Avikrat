"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const COLUMNS = [
  { env: "ENTERPRISE", expensive: "STATE / COMPUTE PRESSURE" },
  { env: "EDGE", expensive: "MEMORY / COMPUTE PRESSURE" },
  { env: "AGENTS", expensive: "STATE / COMPUTE PRESSURE" },
  { env: "REAL-TIME", expensive: "MEMORY / STATE PRESSURE" },
] as const;

export function CommonThreadSection() {
  return (
    <section aria-labelledby="thread-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          The Common Thread
        </motion.p>
        <motion.h2
          id="thread-title"
          variants={fadeUp}
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Four environments.
          <br />
          <span className="text-cyan">One underlying problem.</span>
        </motion.h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {COLUMNS.map((c, ci) => (
          <motion.div
            key={c.env}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{ delay: ci * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-line bg-surface p-5"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(34,211,197,0.07), transparent 60%)` }}
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-ink">{c.env}</p>

            <dl className="relative mt-6 space-y-6">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-faint">What grows?</dt>
                <dd className="mt-1 text-sm font-medium text-soft">Context</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-faint">What becomes expensive?</dt>
                <dd className="mt-1 text-sm font-medium text-soft">{c.expensive}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-faint">What AVIKRAT explores?</dt>
                <dd className="mt-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{ delay: 0.5 + ci * 0.1 }}
                    animate={{ opacity: [1, 0.6, 1] }}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan/50 bg-cyan/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    Compact Persistent State
                  </motion.span>
                </dd>
              </div>
            </dl>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-3 text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-faint">
          <span>Different applications</span>
          <span aria-hidden="true" className="text-cyan">→</span>
          <span>same fundamental long-context challenge</span>
          <span aria-hidden="true" className="text-cyan">→</span>
          <span className="text-cyan">potentially shared architectural solution</span>
        </div>
      </motion.div>
    </section>
  );
}