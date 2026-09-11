"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { claimTarget } from "@/lib/site";
import { StatusPill } from "@/components/ui/StatusPill";

const FLOW = [
  { step: "TARGET", note: "the pitch asks for a bounded-cost ceiling", kind: "target" as const },
  { step: "VALIDATE", note: "measure against matched baselines", kind: "validating" as const },
  { step: "COMPARE", note: "check quality, latency, memory", kind: "validating" as const },
  { step: "PROVE", note: "evidence before any result claim", kind: "target" as const },
];

export function BenchTargetSection() {
  const heading = claimTarget.charAt(0).toUpperCase() + claimTarget.slice(1);
  const metric = claimTarget.match(/(\d+%)/)?.[1] ?? "";
  const parts = metric ? heading.split(metric) : [heading];

  return (
    <section aria-labelledby="bench-target-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="eyebrow">
            10 / The Target
          </motion.p>
          <motion.h2
            id="bench-target-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-ink"
          >
            {parts[0]}
            {metric && <span className="text-cyan">{metric}</span>}
            {parts[1] ?? ""}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-5 text-base leading-relaxed text-soft"
          >
            The current pitch positions this as a target for compact-state decoding. That
            target requires validation against matched baselines and competitive model
            quality.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mt-5">
            <StatusPill kind="target" text="Target / hypothesis" />
            <p className="mt-3 text-sm text-faint">Target ≠ result. Nothing is claimed until the gate clears.</p>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="rounded-2xl border border-line bg-surface p-6 md:p-8"
        >
          {FLOW.map((f, i) => (
            <motion.div key={f.step} variants={fadeUp}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-line" aria-hidden="true" />
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-ink">{f.step}</p>
                </div>
                <p className="text-right text-xs text-faint">{f.note}</p>
              </div>
              {i < FLOW.length - 1 ? (
                <div aria-hidden="true" className="ml-[3px] h-6 w-px bg-gradient-to-b from-line to-line" />
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}