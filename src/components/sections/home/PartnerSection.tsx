"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const OFFERS = [
  {
    num: "01",
    title: "Benchmark Collaborators",
    copy: "Validate perplexity, latency and GPU memory scaling across multi-megatoken context lengths.",
    meta: "RESEARCH · VALIDATION",
  },
  {
    num: "02",
    title: "Pilot Opportunities",
    copy: "Deploy long-context copilots, enterprise knowledge retrieval, and edge inference workloads.",
    meta: "DEPLOYMENT · PRODUCTION",
  },
  {
    num: "03",
    title: "Strategic Support",
    copy: "Help scale the reference simulator into high-performance C++/CUDA production inference engine.",
    meta: "FUNDING · ENGINEERING",
  },
];

export function PartnerSection() {
  return (
    <section aria-labelledby="partner-title" className="container-content flex min-h-[100svh] flex-col justify-center py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="partner-title"
        eyebrow="06 · COLLABORATION & INITIATIVES"
        title="Help us prove the next step."
        copy="AVIKRAT is actively seeking research collaborators to validate the constant-memory architecture at scale, and enterprise partners to evaluate real-world production workloads."
      />

      <div className="mt-14 border-t border-line">
        {OFFERS.map((o, i) => (
          <motion.div
            key={o.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="group grid gap-3 border-b border-line py-7 transition-colors duration-200 hover:bg-surface px-4 -mx-4 md:px-6 md:-mx-6 md:grid-cols-[3rem_1fr_1.4fr_auto] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-xs tracking-widest text-faint" aria-hidden="true">
                [{o.num}]
              </span>
              <h3
                className="text-lg font-bold uppercase tracking-tight text-charcoal"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                {o.title}
              </h3>
              <p className="text-sm leading-relaxed text-soft font-normal">{o.copy}</p>
              <span className="mt-1 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-charcoal">
                <span className="hidden md:inline text-faint">{o.meta}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}