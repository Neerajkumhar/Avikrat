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

export function LookingForSection() {
  return (
    <section aria-labelledby="looking-for-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="looking-for-title"
        eyebrow="What We Are Looking For"
        title="Help us prove the next step."
        copy="AVIKRAT is looking for collaborators to validate the architecture at scale and partners to take it toward real workloads."
      />
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12"
      >
        {OFFERS.map((o, i) => (
          <motion.li key={o.title} variants={fadeUp} className="border-t border-line">
            <Link
              href="/contact"
              className="group flex items-center justify-between gap-6 py-8 md:py-10"
            >
              <div className="flex items-baseline gap-5">
                <span aria-hidden="true" className="font-mono text-xs tracking-[0.22em] text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-cyan md:text-2xl">
                    {o.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-soft">{o.copy}</p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="hidden items-center gap-2 text-sm font-medium text-cyan sm:flex"
              >
                Get in touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
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