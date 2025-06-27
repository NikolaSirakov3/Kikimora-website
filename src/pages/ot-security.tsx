import { OTSecurityHero } from "@/components/ot-security/OTSecurityHero";
import { TrustedByCriticalIndustriesSection } from "@/components/ot-security/TrustedByCriticalIndustriesSection";
import { RiskCardsSection } from "@/components/ot-security/RiskCardsSection";
import { SecurityPlatformSection } from "@/components/ot-security/SecurityPlatformSection";
import { OTSecurityFeatureSection } from "@/components/ot-security/OTSecurityFeatureSection";
import { PartnershipSection } from "@/components/ot-security/PartnershipSection";

function OTSecurityPage() {
  return (
    <main className="w-[100vw]">
      <OTSecurityHero />
      <TrustedByCriticalIndustriesSection />
      <RiskCardsSection />
      <SecurityPlatformSection />
      <OTSecurityFeatureSection />
      <PartnershipSection />
    </main>
  );
}

export { OTSecurityPage as default };
