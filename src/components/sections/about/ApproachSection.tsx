"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

const BLOCKS = [
  { num: "01", title: "Global Prefill", copy: "Read the full history once.", image: TECH_IMAGES.prefill },
  { num: "02", title: "Compact State", copy: "Persist a small learned memory.", image: TECH_IMAGES.state },
  { num: "03", title: "Local Decode", copy: "Use a short recent window only.", image: TECH_IMAGES.decode },
  { num: "04", title: "Next Token", copy: "Generate efficiently.", image: TECH_IMAGES.nextToken },
];

export function ApproachSection() {
  return (
    <section aria-labelledby="approach-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="approach-title"
        eyebrow="Our Approach"
        title="Four ideas shape the architecture."
        copy="Each idea is a single, well-defined step. Together they describe how the simulator intends to turn unbounded conversations into bounded compute."
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {BLOCKS.map((b) => (
          <motion.li
            key={b.num}
            variants={fadeUp}
            className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-cyan/50"
          >
            <AvikratImage
              def={b.image}
              mode="aspect"
              aspectRatio="16 / 10"
              sizes="(max-width: 768px) 100vw, 25vw"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="border-t border-line px-6 py-6">
              <p className="font-mono text-xs tracking-[0.22em] text-cyan">{b.num}</p>
              <h3 className="mt-2 text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{b.copy}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <p className="mt-6 text-xs text-faint">
        Stage labels describe the intended pipeline of the Hidden State
        Simulator, not measured results. Images are conceptual.
      </p>
    </section>
  );
}