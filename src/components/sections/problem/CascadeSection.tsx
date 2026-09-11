"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";

const CASCADE = [
  {
    label: "Longer Context",
    copy: "More historical information must remain available.",
  },
  {
    label: "Larger KV Cache",
    copy: "More state must be stored and accessed.",
  },
  {
    label: "More Memory Traffic",
    copy: "More data movement increases system pressure.",
  },
  {
    label: "More Latency",
    copy: "Decoding becomes harder to keep responsive.",
  },
  {
    label: "Higher Serving Cost",
    copy: "Long-running sessions become increasingly expensive.",
  },
  {
    label: "More GPU Pressure",
    copy: "Memory and compute resources become a larger constraint.",
  },
];

export function CascadeSection() {
  return (
    <section aria-labelledby="cascade-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <AvikratImage
        def={BENCH_IMAGES.contextScaling}
        mode="aspect"
        aspectRatio="16 / 9"
        sizes="100%"
        className="mb-12"
      />
      <SectionHeader
        id="cascade-title"
        eyebrow="The Cascade"
        title="One bottleneck creates another."
        copy="Each constraint feeds the next. Following the chain shows why long-context workloads end up carrying so much — before a single token is generated."
      />
      <ol className="mx-auto mt-14 max-w-3xl">
        {CASCADE.map((step, i) => (
          <li key={step.label} className="relative flex gap-6 pb-10 last:pb-0">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              aria-hidden="true"
              className="flex flex-col items-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-electric/50 bg-surface2 text-sm font-semibold tabular-nums text-electric">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < CASCADE.length - 1 ? (
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{ height: 40 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-1 w-px bg-electric/30"
                />
              ) : null}
            </motion.span>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="group flex-1 pb-2"
            >
              <motion.span
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="block"
              >
                <motion.span
                  variants={fadeUp}
                  className="block text-base font-semibold text-ink transition-colors duration-300 group-hover:text-electric"
                >
                  {step.label}
                </motion.span>
                <motion.span
                  variants={fadeUp}
                  className="mt-2 block text-sm leading-relaxed text-soft"
                >
                  {step.copy}
                </motion.span>
              </motion.span>
            </motion.div>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-10 max-w-3xl text-xs text-faint">
        Illustrative causal chain — a conceptual description, not a measured scaling law.
      </p>
    </section>
  );
}