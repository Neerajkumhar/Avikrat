"use client";

import { BenchMarkShell } from "./BenchMarkShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";

export function LatencySection() {
  return (
    <BenchMarkShell
      index="05"
      label="Benchmark 02"
      title="Latency"
      sub="Make decoding faster."
      copy="Measure token generation performance under equivalent model and workload conditions."
    >
      <AvikratImage
        def={BENCH_IMAGES.latency}
        mode="aspect"
        aspectRatio="16 / 10"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <p className="mt-4 text-center text-xs text-faint">
        Conceptual image — no latency measurements are shown.
      </p>
    </BenchMarkShell>
  );
}