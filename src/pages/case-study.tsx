import { HeroCaseStudy } from "../components/case-study/HeroCaseStudy";
import { IntroCaseStudy } from "../components/case-study/IntroCaseStudy";
import { FeaturesCaseStudy } from "../components/case-study/FeaturesCaseStudy";
import { InteractiveDemos } from "../components/case-study/InteractiveDemos";
import { EUFunding } from "@/components/shared/EUFunding";

function CaseStudy() {
  return (
    <main className="w-[99.2vw]">
      <HeroCaseStudy />
      <IntroCaseStudy />
      <InteractiveDemos />
      <FeaturesCaseStudy />
      <EUFunding />
    </main>
  );
}

export { CaseStudy };
