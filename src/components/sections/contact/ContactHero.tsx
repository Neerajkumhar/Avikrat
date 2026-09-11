"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-title" className="relative pt-24 md:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
          07 · DIRECT INQUIRY
        </motion.p>
        <motion.h1
          id="contact-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Talk to{' '}
          <span className="text-soft font-normal">AVIKRAT.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal"
        >
          Whether you&apos;re exploring benchmark collaborations, pilot opportunities,
          or strategic support — we&apos;re ready to talk.
        </motion.p>
      </motion.div>
    </section>
  );
}