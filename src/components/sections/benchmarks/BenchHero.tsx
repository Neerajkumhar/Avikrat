"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { StatusPill } from "@/components/ui/StatusPill";
import { BENCH_IMAGES } from "@/lib/images";

export function BenchHero() {
  return (
    <section aria-labelledby="bench-hero-title" className="relative pt-24 md:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
          BENCHMARKS & SYSTEM VALIDATION
        </motion.p>
        <motion.h1
          id="bench-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Performance claims need{' '}
          <span className="text-soft font-normal">a baseline.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal"
        >
          The Hidden State Simulator is engineered toward empirical long-context
          inference improvements. The core target is rigorous measurement against matched
          conventional transformer decoding baselines.
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
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs">
          <div className="flex items-center gap-2">
            <StatusPill kind="observed" />
            <span className="text-faint uppercase">Currently available</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusPill kind="validating" />
            <span className="text-faint uppercase">Requires measurement</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusPill kind="target" />
            <span className="text-faint uppercase">Architectural Hypothesis</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}