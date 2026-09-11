"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

export function BenchMarkShell({
  index,
  label,
  title,
  sub,
  copy,
  children,
  footer,
}: {
  index: string;
  label: string;
  title: string;
  sub: string;
  copy: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`bench-${label}-title`} className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-faint"
      >
        <span className="font-semibold text-charcoal">[{index}]</span>
        <span aria-hidden="true" className="h-px w-10 bg-line" />
        <span>{label}</span>
      </motion.div>
      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.h2
            id={`bench-${label}-title`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-charcoal uppercase"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-base font-mono text-xs uppercase tracking-wider font-semibold text-soft"
          >
            {sub}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-base md:text-lg leading-relaxed text-soft font-normal"
          >
            {copy}
          </motion.p>
        </div>
        <div className="rounded-sm border border-line bg-surface p-6 md:p-8">
          {children}
          {footer ? <div className="mt-6 border-t border-line pt-4">{footer}</div> : null}
        </div>
      </div>
    </section>
  );
}