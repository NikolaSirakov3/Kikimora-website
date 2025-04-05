import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { Team } from "@/components/about/Team";
import { AboutTeam } from "@/components/about/AboutTeam";
import { Journey } from "@/components/about/Journey";
import { Partners } from "@/components/about/Partners";
import { People } from "@/components/about/People";
import { Investors } from "@/components/about/Investors";

export function About() {
  return (
    <div className="w-full">
      <AboutHero />
      <Team />
      <AboutTeam />
      <Journey />
      <Partners />
      <People />
      <AboutHero />
      <Investors />
      {/* Other About page components will be added here */}
    </div>
  );
}
