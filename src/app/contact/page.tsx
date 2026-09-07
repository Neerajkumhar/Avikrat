import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Contact AVIKRAT",
  "Talk to AVIKRAT about benchmarking, pilots, and strategic support."
);

export default function ContactPage() {
  return <PlaceholderPage title="Contact AVIKRAT" />;
}
