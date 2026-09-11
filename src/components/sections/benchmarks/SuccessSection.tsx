"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const CURVES = [
  {
    title: "Quality curve",
    copy: "Perplexity remains competitive.",
    d: "M 14 34 C 60 30, 110 36, 170 33 S 250 30, 300 33",
    color: "#2dd3d4",
  },
  {
    title: "Latency curve",
    copy: "Generation becomes more efficient.",
    d: "M 14 20 C 80 40, 150 58, 220 52 S 270 44, 300 40",
    color: "#3b82f6",
  },
  {
    title: "Memory curve",
    copy: "Resource pressure grows more slowly with context.",
    d: "M 14 48 C 90 44, 170 40, 240 34 S 280 30, 300 30",
    color: "#22d3c5",
  },
];

function CurveSVG({ d, color }: { d: string; color: string }) {
  return (
    <svg
      role="img"
      aria-label="A stylized curve showing the target shape for this criterion; no numerical axis or measured values are included."
      viewBox="0 0 314 70"
      className="h-auto w-full"
      fill="none"
    >
      <desc>A decorative conceptual curve. It illustrates the shape the measurement is expected to take under success; it is not data.</desc>
      <g aria-hidden="true">
        {[18, 40, 62].map((y) => (
          <line key={y} x1="8" y1={y} x2="306" y2={y} stroke="rgba(28,34,51,0.7)" strokeWidth="1" />
        ))}
        <motion.path
          d={d}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </g>
    </svg>
  );
}

export function SuccessSection() {
  return (
    <section aria-labelledby="bench-success-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-2xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          11 / What Success Looks Like
        </motion.p>
        <motion.h2
          id="bench-success-title"
          variants={fadeUp}
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Three curves.
          <br />
          <span className="text-cyan">One question.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid gap-4 md:grid-cols-3"
      >
        {CURVES.map((c) => (
          <motion.div key={c.title} variants={fadeUp} className="rounded-2xl border border-line bg-surface p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">{c.title}</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-line bg-base/50 p-3">
              <CurveSVG d={c.d} color={c.color} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-soft">{c.copy}</p>
            <p className="mt-3 inline-flex rounded-full border border-line bg-surface2/60 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-faint">
              Validation criterion
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-soft"
      >
        If all three hold under matched evaluation, the architecture has a path toward
        meaningful long-context serving advantages.
      </motion.p>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-faint"
      >
        This is a validation criterion, not a current result.
      </motion.p>
    </section>
  );
}