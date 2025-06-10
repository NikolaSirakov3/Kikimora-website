import { HeroSection } from "@/components/managed-security/HeroSection";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { SecurityFeatures } from "@/components/managed-security/SecurityFeatures";
import { ROISection } from "@/components/managed-security/ROISection";
import { AdvantagesSection } from "@/components/managed-security/AdvantagesSection";
import { TestimonialSection } from "@/components/managed-security/TestimonialSection";

export default function ManagedSecurity() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        title="Effortless Security for businesses of all sizes!"
        description="Kikimora Managed Security offers a blend of robust tools, tailored to meet the requirements of growing companies facing the pain of managing complex compliance and cybersecurity tasks."
      />
      <PartnersSection />
      <SecurityFeatures />
      <ROISection />
      <AdvantagesSection />
      <TestimonialSection />
    </main>
  );
}
