"use client";

import { BenchMarkShell } from "./BenchMarkShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";

export function PerplexitySection() {
  return (
    <BenchMarkShell
      index="04"
      label="Benchmark 01"
      title="Perplexity"
      sub="Preserve model quality."
      copy="Any efficiency gain must be evaluated against a matched baseline while maintaining competitive next-token prediction quality."
      footer={
        <div className="flex flex-col items-center gap-3">
          <Button href="/contact">Define matched baseline</Button>
          <p className="text-[11px] uppercase tracking-[0.16em] text-faint">
            No benchmark result is claimed here.
          </p>
        </div>
      }
    >
      <AvikratImage
        def={BENCH_IMAGES.perplexity}
        mode="aspect"
        aspectRatio="16 / 10"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <p className="mt-4 text-center text-xs text-faint">
        Conceptual image — no measured perplexity is shown.
      </p>
    </BenchMarkShell>
  );
}