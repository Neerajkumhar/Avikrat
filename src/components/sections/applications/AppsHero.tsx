"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";

export function AppsHero() {
  return (
    <section aria-labelledby="apps-hero-title" className="relative pt-24 md:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
          APPLICATIONS & PRODUCTION DOMAINS
        </motion.p>
        <motion.h1
          id="apps-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2rem,6.5vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-charcoal uppercase [text-wrap:balance]"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Where persistent context becomes{' '}
          <span className="text-soft font-normal">infrastructure.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal"
        >
          Long-running AI systems need to process massive context histories while remaining
          responsive and cost-effective. AVIKRAT explores how compact persistent state
          makes continuous long-context inference practical.
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