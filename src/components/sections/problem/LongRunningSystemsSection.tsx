"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";

const MESSAGE_N = [1, 20, 100, 500, 1000];

const WORKLOADS = [
  {
    title: "Long-Running Assistant",
    copy: "Persistent conversations accumulate context over time.",
    pct: [4, 22, 48, 74, 92],
  },
  {
    title: "Document-Scale Workflow",
    copy: "Large documents create substantial context windows.",
    pct: [6, 28, 52, 78, 96],
  },
  {
    title: "Agent Workflow",
    copy: "Long-running agents need to retain information across many steps.",
    pct: [5, 26, 50, 76, 94],
  },
  {
    title: "Real-Time System",
    copy: "Continuous context can become increasingly expensive to maintain.",
    pct: [8, 30, 55, 80, 98],
  },
];

export function LongRunningSystemsSection() {
  const [active, setActive] = useState(1);

  return (
    <section aria-labelledby="lr-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <AvikratImage
        def={BENCH_IMAGES.latency}
        mode="aspect"
        aspectRatio="16 / 9"
        sizes="100%"
        className="mb-12"
      />
      <SectionHeader
        id="lr-title"
        eyebrow="Long-Running Systems"
        title="Long conversations change the economics."
        copy="As interactions continue, context accumulates — and every additional turn increases the state the system has to keep carrying."
      />
      <div className="mt-14">
        <ConversationTimeline active={active} setActive={setActive} />
        <WorkloadModules workloads={WORKLOADS} />
      </div>
    </section>
  );
}

function ConversationTimeline({
  active,
  setActive,
}: {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-10">
      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.22em] text-faint">
          Conversation Timeline
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
        <span className="text-[10px] uppercase tracking-[0.22em] text-faint">
          Scroll / tap a message
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end">
        {MESSAGE_N.map((n, i) => {
          const isActive = n <= active;
          return (
            <button
              key={n}
              onClick={() => setActive(n)}
              aria-pressed={n <= active}
              className="group flex flex-1 flex-col items-center gap-2"
            >
              <span
                className={`text-xs font-semibold tabular-nums transition-colors ${
                  isActive || i === 0 ? "text-ink" : "text-faint"
                }`}
              >
                {n <= active ? `Message ${n}` : `…`}
              </span>
              <span
                className="w-full rounded-md bg-line transition-all duration-300 focus-visible:bg-electric/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={1000}
                aria-valuenow={active}
                aria-label={`${n} messages`}
                style={{ transform: `scaleY(${
                  isActive ? Math.min(100, (active / 100) * 100) : 0
                }%)` }}
              >
                <span
                  className="origin-top block h-12 bg-electric/50 transition-transform duration-700"
                  style={{ transform: isActive ? `scaleY(1)` : `scaleY(0)` }}
                />
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-faint">
        {active >= 1000
          ? "Each message adds to the state the model carries."
          : `Through Message ${active}, the accumulated context grows.`}
      </p>
    </div>
  );
}

function WorkloadModules({ workloads }: { workloads: typeof WORKLOADS }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {workloads.map((m) => (
        <motion.article
          key={m.title}
          variants={fadeUp}
          className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-electric/50"
        >
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-electric/80" />
            <h3 className="text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-electric">
              {m.title}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-soft">{m.copy}</p>

          <div className="mt-5 flex items-end justify-between gap-1" aria-hidden="true">
            {m.pct.map((p, i) => (
              <span key={i} className="w-full overflow-hidden rounded-sm bg-line">
                <span
                  className="block h-12 origin-bottom bg-electric/50 transition-transform duration-700"
                  style={{ transform: `scaleY(${p / 100})` }}
                />
              </span>
            ))}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-faint">
            Context Accumulation ↓
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}