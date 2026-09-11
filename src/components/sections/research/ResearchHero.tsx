"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function ResearchHero() {
  return (
    <section aria-labelledby="research-hero-title" className="relative pt-32 md:pt-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          RESEARCH / PROOF OF CONCEPT
        </motion.p>
        <motion.h1
          id="research-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-ink"
        >
          A working simulator that{' '}
          <span className="text-cyan">predicts hidden state.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-soft"
        >
          AVIKRAT's Hidden State Simulator predicts the structure of compact persistent
          hidden states and tracks validation behavior across the concepts below. These are
          capabilities the simulator provides — not validated scores.
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
            def={RESEARCH_IMAGES.hero}
            mode="aspect"
            aspectRatio="21 / 9"
            sizes="100vw"
            parallax={16}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}