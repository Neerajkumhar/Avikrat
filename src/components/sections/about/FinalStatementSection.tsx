"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

export function FinalStatementSection() {
  return (
    <section aria-labelledby="final-statement-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-sm border border-line bg-surface p-8 md:p-14"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">08 · MISSION DIRECTIVE</p>
            <h2
              id="final-statement-title"
              className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-charcoal uppercase"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Constant-memory <br />
              <span className="text-soft font-normal">long-context inference.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-soft font-normal">
              A new computational paradigm to serve LLMs without paying the linear context tax on every step.
            </p>
            <p className="mt-6 font-mono text-[0.75rem] uppercase tracking-wider text-faint border-t border-line pt-4">
              AVIKRAT ARCHITECTURAL DIRECTION · RESEARCH PARADIGM
            </p>
          </div>
          <div>
            <AvikratImage
              def={ABOUT_IMAGES.final}
              mode="aspect"
              aspectRatio="16 / 9"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}