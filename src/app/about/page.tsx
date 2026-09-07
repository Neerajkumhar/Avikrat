import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "About AVIKRAT",
  "The company building infrastructure for constant-memory long-context inference."
);

export default function AboutPage() {
  return <PlaceholderPage title="About AVIKRAT" />;
}
