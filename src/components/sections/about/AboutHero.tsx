"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

const PRINCIPLES = [
  "Process long history once.",
  "Preserve useful information compactly.",
  "Decode locally.",
];

export function AboutHero() {
  return (
    <section aria-labelledby="about-hero-title" className="relative pt-32 md:pt-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          About AVIKRAT
        </motion.p>
        <motion.h1
          id="about-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-ink"
        >
          Building a different way to{' '}
          <span className="text-cyan">carry context.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-soft"
        >
          AVIKRAT is exploring compact persistent state as a new architectural
          approach to long-context LLM inference.
        </motion.p>
        <motion.ul variants={fadeUp} className="mt-8 space-y-2">
          {PRINCIPLES.map((p, i) => (
            <li key={p} className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">
              <span aria-hidden="true" className="text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-soft">{p}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="container-content mt-14 md:mt-16">
        <AvikratImage
          def={ABOUT_IMAGES.hero}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
          parallax={16}
        />
      </div>
    </section>
  );
}