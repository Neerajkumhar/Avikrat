"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";

export function AppsHero() {
  return (
    <section aria-labelledby="apps-hero-title" className="relative pt-32 md:pt-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-cyan/70" />
          <motion.p variants={fadeUp} className="eyebrow">
            Applications
          </motion.p>
        </motion.div>
        <motion.h1
          id="apps-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-ink"
        >
          Where persistent context becomes{' '}
          <span className="text-cyan">infrastructure.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-soft"
        >
          Long-running AI systems increasingly need to remember more while remaining
          responsive and efficient. AVIKRAT is exploring whether compact persistent state
          can make continuous context more practical.
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
            def={APPS_IMAGES.hero}
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