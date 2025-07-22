import { PodcastHero } from "../components/podcast/PodcastHero";
import { SoCyberPodcast } from "../components/podcast/SoCyberPodcast";

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
      <SoCyberPodcast />
    </main>
  );
}

export { Podcasts };
