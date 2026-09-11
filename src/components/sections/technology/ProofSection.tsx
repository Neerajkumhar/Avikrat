"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

const CONCEPTS = [
  "True vs Predicted Context Slices",
  "Error Metrics",
  "Cosine Similarity",
  "Checkpoint Selection",
];

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="proof-title"
        eyebrow="Working Simulator"
        title="From architecture to working simulator."
        copy="A working simulator already predicts hidden-state structure and tracks validation behavior."
      />

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <AvikratImage
          def={RESEARCH_IMAGES.hero}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 55vw"
          parallax={16}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col gap-5"
        >
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-soft">
            This provides the concrete base for next-token perplexity and cost
            benchmarking.
          </motion.p>
          <motion.ul variants={fadeUp} className="space-y-2.5">
            {CONCEPTS.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-soft">
                <span aria-hidden="true" className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-cyan" />
                {c}
              </li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="text-xs text-faint">
            The simulator provides these capabilities — no numeric results are claimed.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href="/benchmarks">Explore Validation</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}