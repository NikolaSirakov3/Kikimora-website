import { HeroCaseStudy } from "../components/case-study/HeroCaseStudy";
import { IntroCaseStudy } from "../components/case-study/IntroCaseStudy";

function CaseStudy() {
  return (
    <main className="w-[99.2vw]">
      <HeroCaseStudy />
      <IntroCaseStudy />
      {/* Other sections will go here */}
    </main>
  );
}

export { CaseStudy };
