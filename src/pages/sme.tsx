import { SMEHero } from "@/components/home/SMEHero";
import { SMEFrontsSection } from "@/components/home/SMEFrontsSection";
// import { EUFunding } from "@/components/shared/EUFunding";

function SME() {
  return (
    <main className="w-[99.2vw]">
      <SMEHero />
      <SMEFrontsSection />
      {/* <EUFunding /> */}
    </main>
  );
}

export { SME };
