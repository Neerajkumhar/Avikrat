import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "The Long-Context Problem | AVIKRAT",
  "Why standard LLM decoding grows expensive as context lengthens."
);

export default function ProblemPage() {
  return <PlaceholderPage title="The Long-Context Problem" />;
}
