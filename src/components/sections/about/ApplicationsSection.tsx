"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";

const AREAS = [
  {
    title: "Enterprise Copilots",
    copy: "Persistent conversations and large document sessions.",
    image: APPS_IMAGES.enterprise,
  },
  {
    title: "Edge AI",
    copy: "Smaller persistent memory for constrained devices.",
    image: APPS_IMAGES.edge,
  },
  {
    title: "Agent Infrastructure",
    copy: "Long-running workflows without exploding state cost.",
    image: APPS_IMAGES.agent,
  },
  {
    title: "Real-Time Systems",
    copy: "Continuous context becomes more practical when memory stays bounded.",
    image: APPS_IMAGES.realtime,
  },
];

export function ApplicationsSection() {
  return (
    <section aria-labelledby="applications-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="applications-title"
        eyebrow="Potential Applications"
        title="Designed for systems that need to remember."
        copy="Where the architecture could matter — potential applications of compact persistent state."
      />
      <p className="mt-4 text-xs text-faint">
        AVIKRAT does not currently serve these markets. This illustrates where
        the direction could be useful.
      </p>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {AREAS.map((a) => (
          <motion.li key={a.title} variants={fadeUp}>
            <div className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-cyan/50">
              <AvikratImage
                def={a.image}
                mode="aspect"
                aspectRatio="16 / 9"
                sizes="(max-width: 1024px) 100vw, 50vw"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="flex flex-col gap-2 border-t border-line px-7 py-7">
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-soft">{a.copy}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}