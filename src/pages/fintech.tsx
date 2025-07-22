import { HeroCaseStudy } from "../components/case-study/HeroCaseStudy";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { FintechIntroSection } from "@/components/case-study/FintechIntroSection";
import { SecurityEcosystemSection } from "@/components/case-study/SecurityEcosystemSection";
import { StrategicPathwaySection } from "../components/case-study/StrategicPathwaySection";
import { FeaturesCaseStudy } from "../components/case-study/FeaturesCaseStudy";
import { FintechTestimonialSection } from "@/components/case-study/FintechTestimonialSection";
import { FintechConsultationSection } from "@/components/case-study/FintechConsultationSection";
import { FintechStatisticsSection } from "@/components/case-study/FintechStatisticsSection";
import { IntegratedSolutionSection } from "@/components/case-study/IntegratedSolutionSection";
import { DigitalDefenseSection } from "@/components/case-study/DigitalDefenseSection";

function Fintech() {
  return (
    <main className="w-[99.1vw]">
      <HeroCaseStudy />
      <PartnersSection />
      <FintechIntroSection />
      <SecurityEcosystemSection />
      <StrategicPathwaySection />
      <FeaturesCaseStudy />
      <FintechTestimonialSection />
      <FintechConsultationSection />
      <FintechStatisticsSection />
      <IntegratedSolutionSection />
      <DigitalDefenseSection />
    </main>
  );
}

export { Fintech };
