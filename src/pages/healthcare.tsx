import { HealthcareHeroSection } from "../components/case-study/HealthcareHeroSection";
import { TechnologyPartnersSection } from "../components/case-study/TechnologyPartnersSection";
import { HealthcareThreatsSection } from "../components/case-study/HealthcareThreatsSection";
import { FeaturesCaseStudy } from "../components/case-study/FeaturesCaseStudy";
import { ComplianceSection } from "@/components/case-study/ComplianceSection";
import { UnifiedDefenseSection } from "@/components/case-study/UnifiedDefenseSection";
import { EUFunding } from "@/components/shared/EUFunding";

function Healthcare() {
  return (
    <main className="w-[99.1vw]">
      <HealthcareHeroSection />
      <TechnologyPartnersSection />
      <HealthcareThreatsSection />
      <UnifiedDefenseSection />
      <ComplianceSection />
      <FeaturesCaseStudy />
      <EUFunding />
    </main>
  );
}

export { Healthcare };
