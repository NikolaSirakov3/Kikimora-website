import { AboutHeader } from "../components/about/AboutHeader";
import { MissionSection } from "../components/about/MissionSection";
import { StatsSection } from "../components/managed-security/StatsSection";

export function About() {
  return (
    <div className="w-[99.1vw]">
      <AboutHeader />
      <MissionSection />
      <StatsSection />
    </div>
  );
}
