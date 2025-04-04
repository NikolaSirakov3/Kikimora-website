import React from "react";
import { Team } from "@/components/about/Team";
import { AboutTeam } from "@/components/about/AboutTeam";
import { Journey } from "@/components/about/Journey";

export function About() {
  return (
    <div className="w-full">
      <Team />
      <AboutTeam />
      <Journey />
      {/* Other About page components will be added here */}
    </div>
  );
}
