import { SMEHero } from "@/components/home/SMEHero";
import { SMEFrontsSection } from "@/components/home/SMEFrontsSection";
import { PlatformFeaturesSection } from "@/components/home/PlatformFeaturesSection";
// import { EUFunding } from "@/components/shared/EUFunding";

function SME() {
  return (
    <main className="w-[99.2vw]">
      <SMEHero />
      <SMEFrontsSection />
      <PlatformFeaturesSection />
      {/* <EUFunding /> */}
    </main>
  );
}

export { SME };
