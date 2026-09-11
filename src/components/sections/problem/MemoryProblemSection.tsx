"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { PROBLEM_IMAGES } from "@/lib/images";

export function MemoryProblemSection() {
  return (
    <section aria-labelledby="memory-title" className="pt-24 md:pt-32">
      <motion.div variants={stagger} initial="hidden" animate="show" className="container-content">
        <motion.p variants={fadeUp} className="eyebrow">
          The Memory Problem
        </motion.p>
        <motion.h2
          id="memory-title"
          variants={fadeUp}
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          The hidden cost is{' '}
          <span className="text-electric">memory movement.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-soft">
          As the cache grows, more information has to move between memory and compute on
          every decoding step. The system spends more time moving data than doing useful
          work.
        </motion.p>
      </motion.div>

      <div className="mt-12">
        <AvikratImage
          def={PROBLEM_IMAGES.memory}
          mode="aspect"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}