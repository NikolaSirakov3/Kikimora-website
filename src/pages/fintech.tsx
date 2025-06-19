import { HeroCaseStudy } from "../components/case-study/HeroCaseStudy";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { FintechIntroSection } from "@/components/case-study/FintechIntroSection";
import { SecurityEcosystemSection } from "@/components/case-study/SecurityEcosystemSection";
import { StrategicPathwaySection } from "../components/case-study/StrategicPathwaySection";
import { EUFunding } from "@/components/shared/EUFunding";
import { SolutionsSection } from "../components/case-study/FeaturesCaseStudy";

function Fintech() {
  return (
    <main className="w-[99.1vw]">
      <HeroCaseStudy />
      <PartnersSection />
      <FintechIntroSection />
      <SecurityEcosystemSection />
      <StrategicPathwaySection />
      <SolutionsSection />
      <EUFunding />
    </main>
  );
}

export { Fintech };
