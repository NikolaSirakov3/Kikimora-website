import { HealthcareHeroSection } from "../components/case-study/HealthcareHeroSection";
import { TechnologyPartnersSection } from "../components/case-study/TechnologyPartnersSection";
import { IntroCaseStudy } from "../components/case-study/IntroCaseStudy";
import { FeaturesCaseStudy } from "../components/case-study/FeaturesCaseStudy";
import { InteractiveDemos } from "../components/case-study/InteractiveDemos";
import { DashboardShowcase } from "../components/case-study/DashboardShowcase";
import { EUFunding } from "@/components/shared/EUFunding";

function Healthcare() {
  return (
    <main className="w-[99.1vw]">
      <HealthcareHeroSection />
      <TechnologyPartnersSection />
      <IntroCaseStudy />
      <DashboardShowcase />
      <InteractiveDemos />
      <FeaturesCaseStudy />
      <EUFunding />
    </main>
  );
}

export { Healthcare };
