"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { StatusPill } from "@/components/ui/StatusPill";
import { BENCH_IMAGES } from "@/lib/images";

export function BenchHero() {
  return (
    <section aria-labelledby="bench-hero-title" className="relative pt-32 md:pt-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-cyan/70" />
          <motion.p variants={fadeUp} className="eyebrow">
            Benchmarks / Validation
          </motion.p>
        </motion.div>
        <motion.h1
          id="bench-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-ink"
        >
          Performance claims need{' '}
          <span className="text-cyan">a baseline.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-soft"
        >
          The Hidden State Simulator is being developed toward measurable long-context
          inference improvements. The next step is rigorous comparison against matched
          conventional decoding baselines.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content mt-14 md:mt-16"
      >
        <motion.div variants={fadeUp}>
          <AvikratImage
            def={BENCH_IMAGES.hero}
            mode="aspect"
            aspectRatio="21 / 9"
            sizes="100vw"
            parallax={16}
          />
        </motion.div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-5">
          <div className="flex items-center gap-2">
            <StatusPill kind="observed" />
            <span className="text-xs text-faint">Currently available</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusPill kind="validating" />
            <span className="text-xs text-faint">Requires measurement</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusPill kind="target" />
            <span className="text-xs text-faint">Hypothesis</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}