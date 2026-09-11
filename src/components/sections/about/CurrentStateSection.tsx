"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusPill } from "@/components/ui/StatusPill";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { ABOUT_IMAGES } from "@/lib/images";

const SIGNALS = [
  {
    label: "True vs Predicted Context Slices",
    copy: "Compares the simulated hidden state against the observed structure of the context.",
  },
  {
    label: "Error Metrics",
    copy: "Tracks how predicted state diverges from the reference across runs.",
  },
  {
    label: "Cosine Similarity",
    copy: "Measures structural alignment between prediction and reference.",
  },
  {
    label: "Checkpoint Selection",
    copy: "Determines which slices of context are worth persisting.",
  },
];

export function CurrentStateSection() {
  return (
    <section aria-labelledby="current-state-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-center gap-3">
            <StatusPill kind="observed" text="Current Proof of Concept" />
          </div>
          <SectionHeader
            id="current-state-title"
            eyebrow="Where We Are Today"
            title="A working simulator is already in place."
            copy="A working simulator already predicts hidden-state structure and tracks validation behavior."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-soft">
            These are the evaluation dimensions the current system exercises.
            They are capabilities the simulator provides — not validated
            benchmark scores.
          </p>
        </div>

        <div>
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <p className="eyebrow">Current validation signals</p>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-6 divide-y divide-line"
            >
              {SIGNALS.map((s) => (
                <motion.li
                  key={s.label}
                  variants={fadeUp}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="relative mt-1.5 h-2 w-2 shrink-0"
                  >
                    <span className="absolute inset-0 rounded-full bg-cyan/30" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan/40 [animation-duration:3s] motion-reduce:hidden" />
                    <span className="absolute inset-[2px] rounded-full bg-cyan" />
                  </span>
                  <div>
                    <h3 className="text-[0.9375rem] font-medium text-ink">{s.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-soft">{s.copy}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="mt-8">
            <AvikratImage
              def={ABOUT_IMAGES.poc}
              mode="aspect"
              aspectRatio="16 / 9"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="mt-4 max-w-lg text-xs leading-relaxed text-faint">
            A hidden-state simulation visualizes how a predicted persistent
            state can be checked against a reference — the basis for the
            validation signals above, pending larger-scale benchmarking.
          </p>
        </div>
      </div>
    </section>
  );
}