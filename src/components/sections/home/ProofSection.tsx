"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const CHECKS = [
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

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="proof-title"
            eyebrow="Proof of Concept"
            title="From simulator to infrastructure."
            copy="A working simulator already predicts hidden-state structure and tracks validation behavior. It is the first step toward turning the architecture into production infrastructure."
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-soft">
            These are the evaluation dimensions the current system exercises, being prepared
            for larger-scale benchmarking.
          </p>
          <div className="mt-8">
            <Button href="/research">Explore the Research</Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="rounded-2xl border border-line bg-surface p-6 md:p-8"
        >
          <p className="eyebrow">Current validation</p>
          <ul className="mt-6 divide-y divide-line">
            {CHECKS.map((c) => (
              <motion.li
                key={c.label}
                variants={fadeUp}
                className="flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span aria-hidden="true" className="relative mt-1.5 h-2 w-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-cyan/30" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-cyan/40 [animation-duration:3s]" />
                  <span className="absolute inset-[2px] rounded-full bg-cyan" />
                </span>
                <div>
                  <h3 className="text-[0.9375rem] font-medium text-ink">{c.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{c.copy}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
