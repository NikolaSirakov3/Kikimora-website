import HeroSection from "@/components/agentic/HeroSection";
import SecurityAnalystSection from "@/components/agentic/SecurityAnalystSection";
import SecurityProcessSection from "@/components/agentic/SecurityProcessSection";
import { VulnerabilityManagementDemo } from "@/components/agentic/VulnerabilityManagementDemo";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/agentic/HeroVideoDialogDemoTopInBottomOut";
import PricingSection from "@/components/agentic/PricingSection";
import FAQSection from "@/components/agentic/FAQSection";

const AgenticPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SecurityAnalystSection />
      <SecurityProcessSection />
      <VulnerabilityManagementDemo />
      <HeroVideoDialogDemoTopInBottomOut />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default AgenticPage;
