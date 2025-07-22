import { PodcastHero } from "../components/podcast/PodcastHero";
import { PopularEpisodes } from "../components/podcast/PopularEpisodes";
import { AllEpisodesSection } from "../components/podcast/AllEpisodesSection";

function Podcasts() {
  const handleListenNow = () => {
    // Handle listen now action
    console.log("Listen Now clicked");
  };

  const handleSubscribe = () => {
    // Handle subscribe action
    console.log("Subscribe clicked");
  };

  return (
    <main className="w-[99.1vw]">
      <PodcastHero
        onListenNow={handleListenNow}
        onSubscribe={handleSubscribe}
      />
      <PopularEpisodes />
      <AllEpisodesSection />
    </main>
  );
}

export { Podcasts };
