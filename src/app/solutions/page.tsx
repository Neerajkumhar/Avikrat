import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Solution / How It Works | AVIKRAT",
  "How AVIKRAT keeps inference compute nearly constant as context grows."
);

export default function SolutionsPage() {
  return <PlaceholderPage title="Solution / How It Works" />;
}
