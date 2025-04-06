import React from "react";
import { DevelopersHero } from "@/components/developers/DevelopersHero";
import { SecurityFeatures } from "@/components/developers/SecurityFeatures";
import { ProductOverview } from "@/components/developers/ProductOverview";
import { DevelopersCaseStudy } from "@/components/home/DevelopersCaseStudy";

export function Developers() {
  return (
    <div className="w-[99.1vw]">
      <DevelopersHero />
      <SecurityFeatures />
      <ProductOverview />
      <DevelopersCaseStudy />
    </div>
  );
}
