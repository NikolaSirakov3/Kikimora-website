import { StartupHeroSection } from "../components/startup/HeroSection";
import { DilemmaSection } from "../components/startup/DilemmaSection";
// import { EUFunding } from "@/components/shared/EUFunding";

function Startup() {
  return (
    <main className="w-[99.1vw]">
      <StartupHeroSection />
      <DilemmaSection />
      {/* <EUFunding /> */}
    </main>
  );
}

export { Startup };
