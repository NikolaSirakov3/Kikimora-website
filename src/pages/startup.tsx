import { StartupHeroSection } from "../components/startup/HeroSection";
import { IntroCaseStudy } from "../components/case-study/IntroCaseStudy";
import { FeaturesCaseStudy } from "../components/case-study/FeaturesCaseStudy";
import { InteractiveDemos } from "../components/case-study/InteractiveDemos";
import { DashboardShowcase } from "../components/case-study/DashboardShowcase";
import { EUFunding } from "@/components/shared/EUFunding";

function Startup() {
  return (
    <main className="w-[99.1vw]">
      <StartupHeroSection />
      <IntroCaseStudy />
      <DashboardShowcase />
      <InteractiveDemos />
      <FeaturesCaseStudy />
      <EUFunding />
    </main>
  );
}

export { Startup };
