import { DevelopersHero } from "@/components/developers/DevelopersHero";
import { SecurityFeatures } from "@/components/developers/SecurityFeatures";
import { ProductStatsSection } from "@/components/developers/ProductStatsSection";
import { DevelopersResourcesSection } from "@/components/developers/DevelopersResourcesSection";
import { CodeDemoSection } from "@/components/developers/CodeDemoSection";
import TryKikimoraFooter from "@/components/try-kikimora/TryKikimoraFooter";

export function Developers() {
  return (
    <div className="w-[99.1vw]">
      <DevelopersHero />
      <SecurityFeatures />
      <ProductStatsSection />
      <DevelopersResourcesSection />
      <CodeDemoSection />
      <TryKikimoraFooter />
    </div>
  );
}
