"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

const PATH = [
  { label: "Long History", note: "The full conversation is read once." },
  { label: "Compact Persistent State", note: "What matters is preserved compactly." },
  { label: "Local Decoding", note: "Only a short window stays active." },
  { label: "Long-Running AI", note: "Systems that keep going, bounded." },
];

export function VisionSection() {
  return (
    <section aria-labelledby="vision-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="vision-title"
        eyebrow="The Vision"
        title="Make long-context AI more practical."
        copy="AVIKRAT is exploring a new way to serve long-context AI without paying the full context cost at every step."
      />

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 max-w-3xl"
      >
        {PATH.map((p, i) => (
          <motion.li
            key={p.label}
            variants={fadeUp}
            className="flex items-start gap-5 py-5"
          >
            <span aria-hidden="true" className="flex flex-col items-center self-stretch">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan" />
              {i < PATH.length - 1 ? <span className="w-px flex-1 bg-line" /> : null}
            </span>
            <div className="pb-2">
              <h3 className="text-lg font-semibold text-ink">{p.label}</h3>
              <p className="mt-1 text-sm text-soft">{p.note}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      <div className="mt-12">
        <AvikratImage
          def={ABOUT_IMAGES.vision}
          mode="aspect"
          aspectRatio="21 / 9"
          sizes="100vw"
          parallax={18}
        />
      </div>
    </section>
  );
}