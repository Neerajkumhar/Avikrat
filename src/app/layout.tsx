import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avikrat.org"),
  title: "AVIKRAT — Long context, without the growing cost",
  description:
    "AVIKRAT is building a new approach to long-context LLM inference using compact persistent hidden states and local decoding.",
  openGraph: {
    title: "AVIKRAT — Long context, without the growing cost",
    description:
      "AI infrastructure for constant-memory long-context inference.",
    url: "https://avikrat.org",
    siteName: "AVIKRAT",
    type: "website",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AVIKRAT",
  email: site.email,
  telephone: site.phone,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-base font-sans text-ink">
        <AppShell>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-[#04121a]"
          >
            Skip to content
          </a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <Navbar />
          {children}
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
