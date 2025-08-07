import { Button } from "@/components/ui/button";
import {
  FaHeart,
  FaMusic,
  FaMicrophone,
  FaGlobe,
  FaPlay,
} from "react-icons/fa";

interface PodcastHeroProps {
  episodeNumber?: number;
  title?: string;
  description?: string;
  onListenNow?: () => void;
  onSubscribe?: () => void;
}

export function PodcastHero({
  episodeNumber = 42,
  title = "The Future of Artificial Intelligence with Dr. Evelyn Reed",
  description = "We sit down with renowned AI researcher Dr. Evelyn Reed to demystify neural networks, discuss the ethics of machine learning, and predict how AI will reshape our daily lives in the next decade.",
  onListenNow,
  onSubscribe,
}: PodcastHeroProps) {
  const platformIcons = [
    { icon: FaHeart, label: "Spotify" },
    { icon: FaMusic, label: "Apple Music" },
    { icon: FaMicrophone, label: "Podcast" },
    { icon: FaGlobe, label: "Web" },
    { icon: FaPlay, label: "YouTube" },
  ];

  return (
    <section className="w-full bg-[#001E38] min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        {/* Platform Icons Bar */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-white/80 font-montserrat text-lg">
            Listen On:
          </span>
          <div className="flex items-center gap-6">
            {platformIcons.map((platform, index) => (
              <button
                key={index}
                className="text-white/60 hover:text-white transition-colors duration-200 p-2"
                aria-label={platform.label}
              >
                <platform.icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Episode Details */}
          <div className="space-y-6">
            {/* Latest Episode Label */}
            <div className="inline-block bg-[#00E5BE]/20 text-[#00E5BE] px-4 py-2 rounded-lg text-sm font-montserrat">
              Latest Episode
            </div>

            {/* Episode Title */}
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>

            {/* Episode Description */}
            <p className="text-white/70 font-montserrat text-lg leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={onListenNow}
                className="font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-colors duration-200"
              >
                <FaPlay size={20} />
                Listen Now
              </Button>
              <Button
                variant="outline"
                onClick={onSubscribe}
                className="font-bold px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </Button>
            </div>
          </div>

          {/* Right Section - Episode Thumbnail */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[480px] h-[480px] bg-[#1B2B3A] rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Episode Number */}
                <div className="text-white text-6xl font-bold z-10">
                  Ep {episodeNumber}
                </div>

                {/* Optional: Add a subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5BE]/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
