import { StartupHeroSection } from "../components/startup/HeroSection";
import { DilemmaSection } from "../components/startup/DilemmaSection";
import { CoPilotSection } from "../components/startup/CoPilotSection";
import { PlatformShowcaseSection } from "../components/startup/PlatformShowcaseSection";
import { FeaturesOverviewSection } from "../components/startup/FeaturesOverviewSection";
// import { EUFunding } from "@/components/shared/EUFunding";

function Startup() {
  return (
    <main className="w-[99.1vw]">
      <StartupHeroSection />
      <DilemmaSection />
      <CoPilotSection />
      <PlatformShowcaseSection />
      <FeaturesOverviewSection />
      {/* <EUFunding /> */}
    </main>
  );
}

export { Startup };
