import React from "react";
import { Team } from "@/components/about/Team";
import { AboutTeam } from "@/components/about/AboutTeam";

export function About() {
  return (
    <div className="w-full">
      <Team />
      <AboutTeam />
      {/* Other About page components will be added here */}
    </div>
  );
}
