import { DevelopersHero } from "@/components/developers/DevelopersHero";
import { SecurityFeatures } from "@/components/developers/SecurityFeatures";
import { ProductStatsSection } from "@/components/developers/ProductStatsSection";

export function Developers() {
  return (
    <div className="w-[99.1vw]">
      <DevelopersHero />
      <SecurityFeatures />
      <ProductStatsSection />
    </div>
  );
}
