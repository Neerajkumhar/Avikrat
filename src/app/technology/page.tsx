import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Technology | AVIKRAT",
  "The Hidden State Simulator — encoding long context into compact persistent state."
);

export default function TechnologyPage() {
  return <PlaceholderPage title="Technology / Hidden State Simulator" />;
}
