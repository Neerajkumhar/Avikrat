import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = pageMeta(
  "Contact AVIKRAT",
  "Talk to AVIKRAT about benchmarking, pilots, and strategic support."
);

export default function ContactPage() {
  return (
    <main id="main">
      <ContactHero />
      <ContactSection />
    </main>
  );
}