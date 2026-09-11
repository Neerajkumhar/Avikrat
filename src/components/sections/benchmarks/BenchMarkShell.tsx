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
        className="flex items-center gap-3"
      >
        <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-cyan">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-cyan/60" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">{label}</span>
      </motion.div>
      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.h2
            id={`bench-${label}-title`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-base font-medium text-cyan"
          >
            {sub}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-base leading-relaxed text-soft"
          >
            {copy}
          </motion.p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5 md:p-7">
          {children}
          {footer ? <div className="mt-5">{footer}</div> : null}
        </div>
      </div>
    </section>
  );
}