"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

const STAGES = [
  { id: "history", num: "01", label: "Long History Stream", copy: "Expanding input sequence context enters the system pipeline." },
  { id: "prefill", num: "02", label: "Global Prefill Pass", copy: "Full context history is processed once to construct hidden state representations." },
  { id: "compress", num: "03", label: "State Compression", copy: "Sequence representations collapse into a compact persistent vector." },
  { id: "persist", num: "04", label: "Persistent Vector Core", copy: "Small fixed-size hidden state persists across subsequent inference turns." },
  { id: "window", num: "05", label: "Local Window Buffer", copy: "Only recent tokens remain active in the local decoding cache." },
  { id: "decode", num: "06", label: "Local Decode Execution", copy: "Local attention pass resolves against persistent state to emit next token." },
];

export function TechHero() {
  return (
    <section aria-labelledby="tech-hero-title" className="relative pt-24 md:pt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
          HIDDEN STATE SIMULATOR · TECHNICAL SPECIFICATION
        </motion.p>
        <motion.h1
          id="tech-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Long history. Compact memory.
          <br />
          <span className="text-soft font-normal">Local decoding.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal"
        >
          Instead of repeatedly carrying full context history through every decoding
          step, AVIKRAT introduces a compact hidden-state representation that persists
          across long-running LLM inference passes.
        </motion.p>
      </motion.div>

      <div className="container-content mt-14 md:mt-16">
        <AvikratImage
          def={TECH_IMAGES.hero}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
          parallax={16}
        />
      </div>

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="container-content mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {STAGES.map((s) => (
          <motion.li
            key={s.id}
            variants={fadeUp}
            className="group bg-surface p-6 md:p-7 transition-colors duration-300 hover:bg-surface2"
          >
            <span className="font-mono text-xs tracking-widest text-charcoal font-semibold">[{s.num}]</span>
            <h3
              className="mt-3 text-base font-bold text-charcoal uppercase tracking-tight"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              {s.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-soft font-normal">{s.copy}</p>
          </motion.li>
        ))}
      </motion.ol>

      <p className="container-content mt-6 font-mono text-[0.75rem] uppercase tracking-wider text-faint">
        PIPELINE SPECIFICATION · HIDDEN STATE SIMULATOR MODEL
      </p>
    </section>
  );
}