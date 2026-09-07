"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const OFFERS = [
  {
    title: "Benchmark Collaborators",
    copy: "Validate perplexity, latency and GPU memory at larger context lengths.",
  },
  {
    title: "Pilot Opportunities",
    copy: "Explore long-context assistants, enterprise workflows and edge inference.",
  },
  {
    title: "Strategic Support",
    copy: "Help turn the simulator into production infrastructure.",
  },
];

export function PartnerSection() {
  return (
    <section aria-labelledby="partner-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="partner-title"
        eyebrow="Partners"
        title="Help us prove the next step."
        copy="AVIKRAT is looking for collaborators to validate the architecture at scale and partners to take it into real workloads."
      />
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {OFFERS.map((o) => (
          <motion.li key={o.title} variants={fadeUp}>
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-cyan/50"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{o.copy}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan">
                Get in touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
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
