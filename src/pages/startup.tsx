import { StartupHeroSection } from "../components/startup/HeroSection";
import { DilemmaSection } from "../components/startup/DilemmaSection";
import { CoPilotSection } from "../components/startup/CoPilotSection";
import { PlatformShowcaseSection } from "../components/startup/PlatformShowcaseSection";
import { FeaturesOverviewSection } from "../components/startup/FeaturesOverviewSection";
import { ManagedSecuritySection } from "../components/startup/ManagedSecuritySection";
import { ComplianceEdgeSection } from "../components/startup/ComplianceEdgeSection";
import { SecureGrowthSection } from "../components/startup/SecureGrowthSection";
import { EUFunding } from "@/components/shared/EUFunding";

function Startup() {
  return (
    <main className="w-[99.2vw]">
      <StartupHeroSection />
      <DilemmaSection />
      <CoPilotSection />
      <PlatformShowcaseSection />
      <FeaturesOverviewSection />
      <ManagedSecuritySection />
      <ComplianceEdgeSection />
      <SecureGrowthSection />
      <EUFunding />
    </main>
  );
}

export { Startup };
