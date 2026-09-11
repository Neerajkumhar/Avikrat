"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

export function AppSectionShell({
  label,
  id,
  title,
  copy,
  opportunity,
  children,
}: {
  label: string;
  id: string;
  title: React.ReactNode;
  copy: string;
  opportunity?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex items-center gap-3"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">{label}</span>
        <span aria-hidden="true" className="h-px w-10 bg-cyan/60" />
      </motion.div>
      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.h2
            id={id}
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
            className="mt-5 text-base leading-relaxed text-soft"
          >
            {copy}
          </motion.p>
          {opportunity ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-6 rounded-2xl border border-cyan/25 bg-cyan/5 p-5"
            >
              <p className="text-sm leading-relaxed text-soft">
                <span className="text-cyan">The opportunity.</span> {opportunity}
              </p>
            </motion.div>
          ) : null}
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5 md:p-7">{children}</div>
      </div>
    </section>
  );
}