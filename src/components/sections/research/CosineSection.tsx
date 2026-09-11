"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function CosineSection() {
  return (
    <section aria-labelledby="cosine-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="cosine-title"
            eyebrow="03 · Cosine Similarity"
            title={
              <>
                Directional agreement{' '}
                <span className="text-cyan">between states.</span>
              </>
            }
            copy="Cosine similarity measures how aligned the reconstructed representation is with the true hidden state. It is one signal among several for deciding whether the compact form retains the information generation depends on."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-faint">
            Part of the validation toolkit, not a published performance claim.
          </p>
        </div>
        <AvikratImage
          def={RESEARCH_IMAGES.cosine}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}