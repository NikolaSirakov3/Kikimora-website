import { HeroSection } from "@/components/managed-security/HeroSection";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { PricingComponent } from "@/components/home/PricingComponent";
import { TestimonialSection } from "@/components/managed-security/TestimonialSection";
import { SecureOrganization } from "../components/managed-security/SecureOrganization";
import { PricingSection } from "../components/managed-security/PricingSection";
import { GovernanceSection } from "../components/managed-security/GovernanceSection";
import { SecurityOverview } from "../components/managed-security/SecurityOverview";
import { ConsultationForm } from "../components/managed-security/ConsultationForm";

export default function PricingInfo() {
  return (
    <main className="min-h-screen bg-[#001324]">
      <HeroSection />
      <PartnersSection />
      <PricingComponent />
      <TestimonialSection />
      <SecureOrganization />
      <PricingSection />
      <GovernanceSection />
      <SecurityOverview />
      <ConsultationForm />
    </main>
  );
}
