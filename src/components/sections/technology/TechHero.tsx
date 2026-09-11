"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

const STAGES = [
  { id: "history", num: "01", label: "Long History", copy: "Growing context enters the system." },
  { id: "prefill", num: "02", label: "Global Prefill", copy: "The full history is read once." },
  { id: "compress", num: "03", label: "Compression", copy: "Context compresses into a compact state." },
  { id: "persist", num: "04", label: "Compact Persistent State", copy: "A small, fixed memory persists." },
  { id: "window", num: "05", label: "Local Window", copy: "Only the recent window stays active." },
  { id: "decode", num: "06", label: "Local Decode → Next Token", copy: "Local decode emits the next token." },
];

export function TechHero() {
  return (
    <section aria-labelledby="tech-hero-title" className="relative pt-32 md:pt-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content max-w-4xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          HIDDEN STATE SIMULATOR
        </motion.p>
        <motion.h1
          id="tech-hero-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-ink"
        >
          Long history. Compact memory.
          <br />
          <span className="text-cyan">Local decoding.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-soft"
        >
          Instead of repeatedly carrying the full growing context through every decoding
          step, AVIKRAT explores a compact hidden-state representation that can persist
          across long-running inference.
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
        className="container-content mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {STAGES.map((s) => (
          <motion.li
            key={s.id}
            variants={fadeUp}
            className="group bg-surface p-6 md:p-7 transition-colors duration-300 hover:bg-surface2"
          >
            <span className="font-mono text-xs tracking-[0.22em] text-cyan">{s.num}</span>
            <p className="mt-3 text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
              {s.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-soft">{s.copy}</p>
          </motion.li>
        ))}
      </motion.ol>

      <p className="container-content mt-6 text-xs text-faint">
        Phase labels describe the intended pipeline of the Hidden State Simulator, not
        measured results.
      </p>
    </section>
  );
}