"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

const STAGES = [
  { num: "01", title: "Global Prefill", copy: "Read the full history once.", image: TECH_IMAGES.prefill },
  { num: "02", title: "Compact State", copy: "Persist a small learned memory.", image: TECH_IMAGES.state },
  { num: "03", title: "Local Decode", copy: "Use a short recent window only.", image: TECH_IMAGES.decode },
  { num: "04", title: "Next Token", copy: "Generate efficiently.", image: TECH_IMAGES.nextToken },
];

export function FourStagesSection() {
  return (
    <section aria-labelledby="four-stages-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="four-stages-title"
        eyebrow="The Pipeline"
        title="Four stages. One persistent state."
        copy="Each stage is a single, well-defined step. Together they describe how the simulator intends to turn unbounded conversations into bounded compute."
      />
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {STAGES.map((s, i) => (
          <motion.li
            key={s.num}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-cyan/50"
          >
            <AvikratImage
              def={s.image}
              mode="aspect"
              aspectRatio="4 / 3"
              sizes="(max-width: 768px) 100vw, 25vw"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="relative flex items-baseline gap-3 p-6">
              <span aria-hidden="true" className="font-mono text-sm tracking-[0.18em] text-cyan">
                {s.num}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.copy}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <p className="mt-6 text-xs text-faint">
        Phase labels describe the intended pipeline of the Hidden State Simulator, not
        measured results. Images are conceptual.
      </p>
    </section>
  );
}