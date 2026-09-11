"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function ResearchHero() {
  return (
    <section aria-labelledby="research-hero-title" className="relative pt-24 md:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
          RESEARCH & SIMULATOR PROOF-OF-CONCEPT
        </motion.p>
        <motion.h1
          id="research-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          A working simulator that{' '}
          <span className="text-soft font-normal">predicts hidden state.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal"
        >
          AVIKRAT's Hidden State Simulator models the structure of persistent
          hidden states and evaluates validation convergence across key mathematical dimensions.
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