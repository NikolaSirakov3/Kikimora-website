import HeroSection from "@/components/agentic/HeroSection";
import SecurityAnalystSection from "@/components/agentic/SecurityAnalystSection";
import SecurityProcessSection from "@/components/agentic/SecurityProcessSection";
import { VulnerabilityManagementDemo } from "@/components/agentic/VulnerabilityManagementDemo";

const AgenticPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SecurityAnalystSection />
      <SecurityProcessSection />
      <VulnerabilityManagementDemo />
    </div>
  );
};

export default AgenticPage;
