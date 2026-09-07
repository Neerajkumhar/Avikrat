"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { HeroDiagram } from "@/components/visualizations/HeroDiagram";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(34,211,197,0.07),transparent_55%)]" />
      <div className="container-content relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
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
            <span className="text-cyan">Without the growing cost.</span>
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          viewport={viewport}
          className="max-w-[560px] justify-self-center lg:justify-self-end"
        >
          <HeroDiagram />
        </motion.div>
      </div>
    </section>
  );
}
