import { MSSPHero } from "@/components/mssp/MSSPHero";
import { MSSPBenefitsSection } from "@/components/mssp/MSSPBenefitsSection";

export function MSSP() {
  return (
    <div className="w-[99.1vw] min-h-screen bg-[#001324]">
      <MSSPHero />
      <MSSPBenefitsSection />
    </div>
  );
}
