"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusPill } from "@/components/ui/StatusPill";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

const DIRECTIONS = [
  {
    title: "Benchmark",
    status: { kind: "validating" as const, text: "Next" },
    copy: "Validate perplexity, latency and GPU memory at larger context lengths.",
  },
  {
    title: "Pilot",
    status: { kind: "observed" as const, text: "Validation" },
    copy: "Explore long-context assistants, enterprise workflows and edge inference.",
  },
  {
    title: "Infrastructure",
    status: { kind: "target" as const, text: "Opportunity" },
    copy: "Turn the simulator into production infrastructure.",
  },
];

export function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="roadmap-title"
        eyebrow="From POC to Infrastructure"
        title="From simulator to production infrastructure."
        copy="The simulator is the foundation for the next stage of validation and development."
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {DIRECTIONS.map((d) => (
          <motion.li
            key={d.title}
            variants={fadeUp}
            className="group rounded-2xl border border-dashed border-line bg-surface/40 p-7 transition-colors duration-300 hover:border-cyan/40"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs tracking-[0.22em] text-cyan">
                {String(DIRECTIONS.indexOf(d) + 1).padStart(2, "0")}
              </span>
              <StatusPill kind={d.status.kind} text={d.status.text} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
              {d.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-soft">{d.copy}</p>
            <p className="mt-5 text-xs text-faint">Future direction — not yet built or measured.</p>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-12">
        <AvikratImage
          def={ABOUT_IMAGES.progress}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
        />
      </div>
      <p className="mt-4 text-xs text-faint">
        These are directions under exploration, not completed programs.
      </p>
    </section>
  );
}