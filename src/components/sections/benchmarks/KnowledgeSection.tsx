"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function KnowledgeSection() {
  return (
    <section aria-labelledby="bench-knowledge-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="eyebrow">
            02 / Current Proof of Concept
          </motion.p>
          <motion.h2
            id="bench-knowledge-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            What exists <span className="text-cyan">today.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-5 text-base leading-relaxed text-soft"
          >
            A working simulator already predicts hidden-state structure and tracks validation
            behavior.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-sm leading-relaxed text-faint"
          >
            These are capabilities the simulator provides — not validated scores. No numeric
            results are claimed for any of them.
          </motion.p>
        </div>
        <AvikratImage
          def={RESEARCH_IMAGES.truePredicted}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <p className="mx-auto mt-4 max-w-3xl text-xs text-faint">
        Conceptual visualization — not measured output.
      </p>
    </section>
  );
}