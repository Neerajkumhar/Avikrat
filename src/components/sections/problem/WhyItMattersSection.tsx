"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";

const VALUE = [
  "Persistent assistants",
  "Large-document reasoning",
  "Agent workflows",
  "Continuous interactions",
];

const COST = [
  "Growing cache footprint",
  "Repeated memory access",
  "Longer decoding steps",
  "Increasing service cost",
];

export function WhyItMattersSection() {
  return (
    <section aria-labelledby="why-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <AvikratImage
        def={BENCH_IMAGES.latency}
        mode="aspect"
        aspectRatio="16 / 9"
        sizes="100%"
        className="mb-12"
      />
      <SectionHeader
        id="why-title"
        eyebrow="Why It Matters"
        title={
          <>
            Long context is useful. Paying for all of it{' '}
            <span className="text-electric">at every step</span> is the problem.
          </>
        }
        copy="Long-context capabilities are valuable — but the cost of maintaining growing context can become the limiting factor in whether they are practical."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* VALUE */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan/30 bg-surface p-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 15% 0%, rgba(34,211,197,0.08), transparent 55%)" }}
          />
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Value of Context
          </h3>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-6 space-y-4"
          >
            {VALUE.map((v, i) => (
              <motion.li key={v} variants={fadeUp} className="flex items-center gap-4">
                <span className="w-40 shrink-0 text-sm leading-snug text-soft">{v}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <motion.span
                    className="block h-full rounded-full bg-cyan/70"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${30 + i * 14}%` }}
                    viewport={viewport}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-6 text-xs text-faint">
            Value grows steadily — up to a point.
          </p>
        </div>

        {/* COST */}
        <div className="relative overflow-hidden rounded-2xl border border-electric/40 bg-surface p-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 15% 0%, rgba(59,130,246,0.1), transparent 55%)" }}
          />
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
            Cost of Carrying Context
          </h3>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-6 space-y-4"
          >
            {COST.map((c, i) => (
              <motion.li key={c} variants={fadeUp} className="flex items-center gap-4">
                <span className="w-40 shrink-0 text-sm leading-snug text-soft">{c}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <motion.span
                    className="block h-full rounded-full bg-electric/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${46 + i * 16}%` }}
                    viewport={viewport}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-6 text-xs text-faint">
            Cost keeps climbing — and compounds with every turn.
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-faint">
        Conceptual illustration of the tension — no measured values.
      </p>
    </section>
  );
}