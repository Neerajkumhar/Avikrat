"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const OFFERS = [
  {
    title: "Benchmark Collaborators",
    copy: "Validate perplexity, latency and GPU memory scaling across multi-megatoken context lengths.",
  },
  {
    title: "Pilot Opportunities",
    copy: "Deploy long-context copilots, enterprise knowledge retrieval, and edge inference workloads.",
  },
  {
    title: "Strategic Support",
    copy: "Help scale the reference simulator into high-performance C++/CUDA production inference engine.",
  },
];

export function PartnerSection() {
  return (
    <section aria-labelledby="partner-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="partner-title"
        eyebrow="06 · COLLABORATION & INITIATIVES"
        title="Help us prove the next step."
        copy="AVIKRAT is actively seeking research collaborators to validate the constant-memory architecture at scale, and enterprise partners to evaluate real-world production workloads."
      />
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {OFFERS.map((o) => (
          <motion.li key={o.title} variants={fadeUp}>
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between gap-8 rounded-sm border border-line bg-surface p-8 transition-all duration-300 hover:border-charcoal hover:bg-surface2"
            >
              <div>
                <h3
                  className="text-lg font-bold text-charcoal uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft font-normal">{o.copy}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                GET IN TOUCH
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
