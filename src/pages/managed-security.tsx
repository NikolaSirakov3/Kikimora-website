import { HeroSection } from "@/components/managed-security/HeroSection";
import { SecurityFeatures } from "@/components/managed-security/SecurityFeatures";
import { ROISection } from "@/components/managed-security/ROISection";
import { AdvantagesSection } from "@/components/managed-security/AdvantagesSection";
import { ComprehensiveServicesSection } from "@/components/managed-security/ComprehensiveServicesSection";
import { PricingSection } from "@/components/managed-security/PricingSection";
import { SecurityROISection } from "@/components/managed-security/SecurityROISection";
import { AddonGovernanceSection } from "@/components/managed-security/AddonGovernanceSection";

export default function ManagedSecurity() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SecurityFeatures />
      <ROISection />
      <AdvantagesSection />
      <SecurityROISection />
      <ComprehensiveServicesSection />
      <PricingSection />
      <AddonGovernanceSection />
    </main>
  );
}
