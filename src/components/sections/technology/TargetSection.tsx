"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { claimTarget } from "@/lib/site";

export function TargetSection() {
  const heading = claimTarget.charAt(0).toUpperCase() + claimTarget.slice(1);
  const metric = claimTarget.match(/(\d+%)/)?.[1] ?? "";
  const parts = metric ? heading.split(metric) : [heading];

  return (
    <section aria-labelledby="target-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="eyebrow">The Target</p>
        <h2
          id="target-title"
          className="mt-6 text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink"
        >
          {parts[0]}
          {metric && <span className="text-cyan">{metric}</span>}
          {parts[1] ?? ""}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-soft">
          The current pitch targets long-context inference cost reduction through
          compact-state decoding. This target must be validated against matched baselines
          while maintaining competitive model quality.
        </p>
      </motion.div>
    </section>
  );
}