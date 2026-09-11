"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { HOME_IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <AvikratImage def={HOME_IMAGES.hero} mode="fill" parallax={24} />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/65 to-[#06080F]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_18%,transparent_35%,rgba(6,8,15,0.7)_90%)]"
      />

      <div className="container-content relative flex min-h-[92svh] flex-col justify-end pt-40 pb-16 md:pb-24">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={fadeUp} className="eyebrow">
            AI INFRASTRUCTURE · LONG-CONTEXT INFERENCE
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="mt-6 text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tight text-ink"
          >
            Long context.
            <br />
            <span className="text-cyan brightness-110">Without the growing cost.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            AVIKRAT is building a new approach to long-context LLM inference using compact
            persistent hidden states and local decoding.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/technology">Explore the Technology</Button>
            <Button href="/contact" variant="ghost">Work With Us</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}