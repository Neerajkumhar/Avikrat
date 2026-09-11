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
        className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-faint"
      >
        <span>{label}</span>
        <span aria-hidden="true" className="h-px w-12 bg-line" />
      </motion.div>
      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.h2
            id={id}
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
            className="mt-5 text-base md:text-lg leading-relaxed text-soft font-normal"
          >
            {copy}
          </motion.p>
          {opportunity ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-8 rounded-sm border border-line bg-surface2 p-6"
            >
              <p className="text-sm leading-relaxed text-soft">
                <span className="font-semibold text-charcoal uppercase tracking-wider font-mono text-xs block mb-1">
                  THE OPPORTUNITY
                </span>{" "}
                {opportunity}
              </p>
            </motion.div>
          ) : null}
        </div>
        <div className="rounded-sm border border-line bg-surface p-6 md:p-8">{children}</div>
      </div>
    </section>
  );
}