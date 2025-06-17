import { HeroSection } from "@/components/managed-security/HeroSection";
// import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { SecurityFeatures } from "@/components/managed-security/SecurityFeatures";
import { ROISection } from "@/components/managed-security/ROISection";
import { AdvantagesSection } from "@/components/managed-security/AdvantagesSection";
import { TestimonialSection } from "@/components/managed-security/TestimonialSection";
import { PricingSection } from "@/components/managed-security/PricingSection";
import { ContactSection } from "@/components/managed-security/ContactSection";

export default function ManagedSecurity() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SecurityFeatures />
      <ROISection />
      <AdvantagesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
