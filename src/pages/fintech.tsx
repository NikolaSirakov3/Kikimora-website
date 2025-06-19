import { HeroCaseStudy } from "../components/case-study/HeroCaseStudy";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { FintechIntroSection } from "@/components/case-study/FintechIntroSection";
import { SecurityEcosystemSection } from "@/components/case-study/SecurityEcosystemSection";
import { StrategicPathwaySection } from "../components/case-study/StrategicPathwaySection";
import { SolutionsSection } from "../components/case-study/FeaturesCaseStudy";
import { FintechTestimonialSection } from "../components/case-study/FintechTestimonialSection";

function Fintech() {
  return (
    <main className="w-[99.1vw]">
      <HeroCaseStudy />
      <PartnersSection />
      <FintechIntroSection />
      <SecurityEcosystemSection />
      <StrategicPathwaySection />
      <SolutionsSection />
      <FintechTestimonialSection />
    </main>
  );
}

export { Fintech };
