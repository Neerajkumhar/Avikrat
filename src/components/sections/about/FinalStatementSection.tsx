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
        className="relative overflow-hidden rounded-3xl border border-line bg-surface"
      >
        <AvikratImage
          def={ABOUT_IMAGES.final}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/30 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
          <h2
            id="final-statement-title"
            className="max-w-xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            Constant-memory <span className="text-cyan">long-context inference.</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-soft">
            A new way to serve LLMs without paying the full context cost every
            step.
          </p>
          <p className="mt-4 text-xs text-faint">
            AVIKRAT's architectural direction — not an already proven result.
          </p>
        </div>
      </motion.div>
    </section>
  );
}