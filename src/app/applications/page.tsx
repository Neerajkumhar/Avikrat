import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { AppsHero } from "@/components/sections/applications/AppsHero";
import { EnterpriseSection } from "@/components/sections/applications/EnterpriseSection";
import { EdgeSection } from "@/components/sections/applications/EdgeSection";
import { AgentSection } from "@/components/sections/applications/AgentSection";
import { RealtimeSection } from "@/components/sections/applications/RealtimeSection";
import { CommonThreadSection } from "@/components/sections/applications/CommonThreadSection";
import { BeforeAfterSection } from "@/components/sections/applications/BeforeAfterSection";
import { AudienceSection } from "@/components/sections/applications/AudienceSection";
import { PilotSection } from "@/components/sections/applications/PilotSection";
import { AppsCtaSection } from "@/components/sections/applications/AppsCtaSection";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = pageMeta(
  "Applications | AVIKRAT",
  "Where compact persistent state could enable more practical long-context AI: enterprise copilots, edge AI, agent infrastructure and real-time systems."
);

export default function ApplicationsPage() {
  return (
    <main id="main">
      <AppsHero />
      <EnterpriseSection />
      <Divider className="container-content" />
      <EdgeSection />
      <Divider className="container-content" />
      <AgentSection />
      <Divider className="container-content" />
      <RealtimeSection />
      <Divider className="container-content" />
      <CommonThreadSection />
      <Divider className="container-content" />
      <BeforeAfterSection />
      <AudienceSection />
      <Divider className="container-content" />
      <PilotSection />
      <AppsCtaSection />
    </main>
  );
}