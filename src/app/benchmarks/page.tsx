import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Benchmarks & Validation | AVIKRAT",
  "Current proof-of-concept validation: context slices, error metrics, similarity, checkpoints."
);

export default function BenchmarksPage() {
  return <PlaceholderPage title="Benchmarks & Validation" />;
}
