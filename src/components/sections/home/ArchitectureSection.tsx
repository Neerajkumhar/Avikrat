"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { HOME_IMAGES } from "@/lib/images";
import { Card } from "@/components/ui/Card";

export function ArchitectureSection() {
  return (
    <section aria-labelledby="architecture-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="architecture-title"
        eyebrow="02 · ARCHITECTURAL PARADIGM"
        title="An architecture built for persistent context."
        copy="History is encoded once into a compact persistent hidden state. Subsequent decoding operates strictly over a fixed local window — decoupling long-context processing from memory growth."
      />
      <div className="mt-16">
        <AvikratImage
          def={HOME_IMAGES.architecture}
          mode="aspect"
          aspectRatio="16 / 9"
          sizes="100vw"
          parallax={24}
        />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 font-mono text-[0.8125rem]">
        <Card interactive>
          <span className="text-faint">STAGE 01</span>
          <h3 className="mt-2 text-base font-bold text-charcoal uppercase" style={{ fontFamily: "var(--font-archivo)" }}>
            Global Prefill
          </h3>
          <p className="mt-2 text-soft font-sans font-normal text-sm leading-relaxed">
            Historical context is compressed into a fixed-size, persistent hidden vector state.
          </p>
        </Card>

        <Card interactive>
          <span className="text-faint">STAGE 02</span>
          <h3 className="mt-2 text-base font-bold text-charcoal uppercase" style={{ fontFamily: "var(--font-archivo)" }}>
            Local Decoding
          </h3>
          <p className="mt-2 text-soft font-sans font-normal text-sm leading-relaxed">
            Token generation consumes only a small sliding window alongside the persistent state.
          </p>
        </Card>

        <Card interactive>
          <span className="text-faint">STAGE 03</span>
          <h3 className="mt-2 text-base font-bold text-charcoal uppercase" style={{ fontFamily: "var(--font-archivo)" }}>
            Constant Memory
          </h3>
          <p className="mt-2 text-soft font-sans font-normal text-sm leading-relaxed">
            GPU KV-cache memory footprint remains constant regardless of sequence length.
          </p>
        </Card>
      </div>
    </section>
  );
}