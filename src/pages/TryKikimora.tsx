import TryKikimoraHero from "@/components/try-kikimora/TryKikimoraHero";
import CommunityFeatureSection from "@/components/try-kikimora/CommunityFeatureSection";
import TryKikimoraBenefits from "@/components/try-kikimora/TryKikimoraBenefits";
import QandASection from "@/components/try-kikimora/QandASection";

export default function TryKikimora() {
  return (
    <main className="w-[99.1vw] flex flex-col items-center justify-center px-4 py-12">
      <TryKikimoraHero />
      <CommunityFeatureSection />
      <TryKikimoraBenefits />
      <QandASection />
    </main>
  );
}
