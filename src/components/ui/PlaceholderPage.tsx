import Link from "next/link";
import { Eyebrow } from "./Eyebrow";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main id="main">
      <section aria-labelledby="placeholder-title" className="container-content flex min-h-[70vh] flex-col items-start justify-center pt-32">
        <Eyebrow>Coming next</Eyebrow>
        <h1
          id="placeholder-title"
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-ink"
        >
          {title}
        </h1>
        <p className="mt-5 max-w-md text-soft">
          This page is being built as part of the site rollout. The technology, its
          validation, and where it applies are all described on the home page today.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyanBright"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
