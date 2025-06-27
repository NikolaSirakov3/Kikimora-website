import { OTSecurityHero } from "@/components/ot-security/OTSecurityHero";
import { TrustedByCriticalIndustriesSection } from "@/components/ot-security/TrustedByCriticalIndustriesSection";
import { RiskCardsSection } from "@/components/ot-security/RiskCardsSection";

function OTSecurityPage() {
  return (
    <main className="w-[100vw]">
      <OTSecurityHero />
      <TrustedByCriticalIndustriesSection />
      <RiskCardsSection />
    </main>
  );
}

export { OTSecurityPage as default };
