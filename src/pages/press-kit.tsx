import React from "react";
import { PressKitHero } from "../components/press-kit/PressKitHero";
import { CompanyOverview } from "../components/press-kit/CompanyOverview";
import { MediaAssetsSection } from "../components/press-kit/MediaAssetsSection";
import { ExecutiveTeamSection } from "../components/press-kit/ExecutiveTeamSection";
import { PressReleasesSection } from "../components/press-kit/PressReleasesSection";

export default function PressKitPage() {
  return (
    <div className="flex flex-col min-h-screen w-[99.12vw]">
      <PressKitHero />
      <CompanyOverview />
      <MediaAssetsSection />
      <ExecutiveTeamSection />
      <PressReleasesSection />
    </div>
  );
}
