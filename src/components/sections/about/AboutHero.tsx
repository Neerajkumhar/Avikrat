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
    <section aria-labelledby="about-hero-title" className="relative pt-24 md:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          01 · ABOUT AVIKRAT ARCHITECTURE
        </motion.p>
        <motion.h1
          id="about-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Building a different way to{' '}
          <span className="text-soft font-normal">carry context.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal"
        >
          AVIKRAT is exploring compact persistent state as a foundational architectural
          approach to constant-memory long-context LLM inference.
        </motion.p>
        <motion.ul variants={fadeUp} className="mt-8 space-y-2.5">
          {PRINCIPLES.map((p, i) => (
            <li key={p} className="flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest text-faint">
              <span aria-hidden="true" className="text-charcoal font-semibold">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <span className="text-soft font-medium">{p}</span>
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