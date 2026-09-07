import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Applications | AVIKRAT",
  "Where hidden-state inference applies: enterprise copilots, edge AI, agents, real-time systems."
);

export default function ApplicationsPage() {
  return <PlaceholderPage title="Applications" />;
}
