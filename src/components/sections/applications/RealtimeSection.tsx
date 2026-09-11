"use client";

import { AppSectionShell } from "./AppSectionShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";

const ENVIRONMENTS = ["Live signals", "Continuous monitoring", "Streaming context", "Real-time interaction"];

export function RealtimeSection() {
  return (
    <AppSectionShell
      label="04 / Real-Time Systems"
      id="realtime-title"
      title={
        <>
          Continuous context without{' '}
          <span className="text-cyan">continuously growing state.</span>
        </>
      }
      copy="Real-time systems continuously receive new information. When memory remains bounded, continuous context may become more practical to maintain."
      opportunity="AVIKRAT is exploring whether compact state can let real-time systems keep useful history without re-processing the full stream."
    >
      <AvikratImage
        def={APPS_IMAGES.realtime}
        mode="aspect"
        aspectRatio="4 / 3"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Potential real-time contexts">
        {ENVIRONMENTS.map((e) => (
          <span
            key={e}
            className="rounded-full border border-line bg-surface2/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-soft"
          >
            {e}
          </span>
        ))}
      </div>
    </AppSectionShell>
  );
}