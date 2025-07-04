import TryKikimoraHero from "@/components/try-kikimora/TryKikimoraHero";
import CommunityFeatureSection from "@/components/try-kikimora/CommunityFeatureSection";

export default function TryKikimora() {
  return (
    <main className="w-[99.1vw] bg-gradient-to-b from-[#181F3A] to-[#1B2340] flex flex-col items-center justify-center px-4 py-12">
      <TryKikimoraHero />
      <CommunityFeatureSection />
    </main>
  );
}
