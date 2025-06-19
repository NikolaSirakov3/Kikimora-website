import { HeroCaseStudy } from "../components/case-study/HeroCaseStudy";
import { FeaturesCaseStudy } from "../components/case-study/FeaturesCaseStudy";
import { InteractiveDemos } from "../components/case-study/InteractiveDemos";
import { EUFunding } from "@/components/shared/EUFunding";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { FintechIntroSection } from "@/components/case-study/FintechIntroSection";
import { SecurityEcosystemSection } from "@/components/case-study/SecurityEcosystemSection";

function Fintech() {
  return (
    <main className="w-[99.1vw]">
      <HeroCaseStudy />
      <PartnersSection />
      <FintechIntroSection />
      <SecurityEcosystemSection />
      <InteractiveDemos />
      <FeaturesCaseStudy />
      <EUFunding />
    </main>
  );
}

export { Fintech };
