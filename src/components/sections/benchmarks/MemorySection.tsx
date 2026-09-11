"use client";

import { BenchMarkShell } from "./BenchMarkShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";

export function MemorySection() {
  return (
    <BenchMarkShell
      index="06"
      label="Benchmark 03"
      title="GPU memory"
      sub="Bound the memory footprint."
      copy="The key architectural question is whether persistent compact state can prevent memory requirements from growing in the same way as full-context decoding."
    >
      <AvikratImage
        def={BENCH_IMAGES.memory}
        mode="aspect"
        aspectRatio="16 / 10"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <p className="mt-4 text-center text-xs text-faint">
        Conceptual image — no memory measurements are shown.
      </p>
    </BenchMarkShell>
  );
}