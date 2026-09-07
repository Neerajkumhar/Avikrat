import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Research / Proof of Concept | AVIKRAT",
  "A working simulator that predicts hidden-state structure and tracks validation behavior."
);

export default function ResearchPage() {
  return <PlaceholderPage title="Research / Proof of Concept" />;
}
