import React from "react";
import { DevelopersHero } from "@/components/developers/DevelopersHero";
import { SecurityFeatures } from "@/components/developers/SecurityFeatures";
import { ProductOverview } from "@/components/developers/ProductOverview";
import { DevelopersCaseStudy } from "@/components/home/DevelopersCaseStudy";
import { RequestDemo } from "@/components/home/RequestDemo";
import { DevTestimonials } from "@/components/developers/DevTestimonials";
import { Blog } from "@/components/home/Blog";
import { GetInTouch } from "@/components/home/GetInTouch";
import { FAQ } from "@/components/developers/FAQ";

export function Developers() {
  return (
    <div className="w-[99.1vw]">
      <DevelopersHero />
      <SecurityFeatures />
      <ProductOverview />
      <DevelopersCaseStudy />
      <RequestDemo />
      <DevTestimonials />
      <Blog />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
