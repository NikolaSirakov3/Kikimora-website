import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ArrowSquareRight, ArrowSquareLeft } from "@phosphor-icons/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useYouTubePodcasts } from "../../hooks/use-youtube-podcasts";

// Fallback episodes in case YouTube API fails
const fallbackEpisodes = [
  {
    id: "episode7",
    title: "Starting a career in 2025 | Whitehat Riddles Episode 7",
    description: "Watch on YouTube: Episode 7 of the White Hat Riddles Podcast.",
    publishedAt: "2025-08-05T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/SmartRisk.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/SmartRisk.png", width: 480, height: 360 },
    },
    duration: "1:12:35",
  },
  {
    id: "episode6",
    title: "First Steps in Cybersecurity Strategy | White Hat Riddles Episode 6",
    description: "Watch on YouTube: Episode 6 of the White Hat Riddles Podcast.",
    publishedAt: "2025-07-18T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/Personal Security.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/Personal Security.png", width: 480, height: 360 },
    },
    duration: "1:12:35",
  },
  {
    id: "episode5",
    title: "Smart Risk | White Hat Riddles Podcast Ep. 05",
    description: "Watch on YouTube: Episode 5 of the White Hat Riddles Podcast.",
    publishedAt: "2025-06-24T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/SmartRisk.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/SmartRisk.png", width: 480, height: 360 },
    },
    duration: "1:12:35",
  },
  {
    id: "episode4",
    title: "Hybrid Warfare | White Hat Riddles Podcast Ep. 04",
    description: "Watch on YouTube: Episode 4 of the White Hat Riddles Podcast.",
    publishedAt: "2025-05-27T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/Hybrid Warfare.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/Hybrid Warfare.png", width: 480, height: 360 },
    },
    duration: "1:38:17",
  },
  {
    id: "episode3",
    title: "Personal Security | White Hat Riddles Podcast Ep. 03",
    description: "Watch on YouTube: Episode 3 of the White Hat Riddles Podcast.",
    publishedAt: "2025-04-24T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/Personal Security.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/Personal Security.png", width: 480, height: 360 },
    },
    duration: "1:10:07",
  },
  {
    id: "episode2",
    title: "Understanding Ransomware | White Hat Riddles Podcast Ep. 02",
    description: "Watch on YouTube: Episode 2 of the White Hat Riddles Podcast.",
    publishedAt: "2025-04-15T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/Ransomware.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/Ransomware.png", width: 480, height: 360 },
    },
    duration: "50:41",
  },
  {
    id: "episode1",
    title: "Conversational AI security with Kristian Kamber, Splx.ai | White Hat Riddles Podcast Ep. 01",
    description: "Welcome to White Hat Riddles, episode 1 - A podcast where we dive into essential cybersecurity knowledge, analyze current trends, and explore the innovations and investments pushing the industry forward.",
    publishedAt: "2025-03-05T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/AI Security.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/AI Security.png", width: 480, height: 360 },
    },
    duration: "52:29",
  },
];

export function SoCyberPodcast() {
  // Use YouTube API to fetch podcast episodes from your channel
  const { episodes, loading, error } = useYouTubePodcasts({
    channelId: "UCfW3aw7jTQwqepbcE3etsTw", // Your actual channel ID
    autoFetch: true,
  });

  // Use fetched episodes or fallback to static data
  const podcastEpisodes = episodes.length > 0 ? episodes : fallbackEpisodes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: (
      <div className="next-arrow">
        <ArrowSquareRight size={32} weight="bold" className="text-white" />
      </div>
    ),
    prevArrow: (
      <div className="prev-arrow">
        <ArrowSquareLeft size={32} weight="bold" className="text-white" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-[#001E38] pt-20 pb-32">
      <style>
        {`
          .slick-prev:before,
          .slick-next:before {
            display: none !important;
          }
          .slick-prev,
          .slick-next {
            top: 110px !important;
            width: 32px !important;
            height: 32px !important;
            z-index: 1;
          }
          .slick-prev {
            left: -40px !important;
          }
          .slick-next {
            right: -40px !important;
          }
          .slick-prev:hover,
          .slick-next:hover {
            opacity: 0.8;
          }
          .slick-dots li button:before {
            color: #fff !important;
            opacity: 0.5;
          }
          .slick-dots .slick-active button:before {
            color: #fff !important;
            opacity: 1;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl text-white   mb-4">SoCyber Podcast</h1>
          <p className="text-white/60 text-lg font-montserrat">
            Expert insights and deep dives into the world of cybersecurity
            through our engaging podcast series.
          </p>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center py-8">
            <div className="text-white text-lg">
              Loading podcast episodes...
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <div className="text-red-400 text-lg mb-4">
              Error loading episodes: {error}
            </div>
            <div className="text-white/60">Using fallback episodes</div>
          </div>
        )}

        {/* Podcast Carousel */}
        <div className="px-4">
          <div className="max-w-[1200px] mx-auto">
            <Slider {...settings}>
              {podcastEpisodes.map((episode) => (
                <div key={episode.id} className="px-2">
                  <Link
                    to={`/podcast/${episode.id}`}
                    className="w-[300px] bg-gradient-to-b from-[#002A4E] to-[#001E38] rounded-xl overflow-hidden transition-transform hover:scale-[1.01] h-full"
                  >
                    <div className="aspect-[16/9] relative">
                      <img
                        src={
                          episode.thumbnails?.medium?.url ||
                          episode.thumbnails?.high?.url ||
                          "/podcast-thumbs/AI Security.png"
                        }
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-[#00E5BE] text-xs font-montserrat">
                          {format(
                            new Date(episode.publishedAt),
                            "MMMM dd, yyyy"
                          )}
                        </div>
                        <div className="text-[#00E5BE] text-xs font-montserrat">
                          {episode.duration}
                        </div>
                      </div>
                      <h3 className="text-white text-lg   mb-2 line-clamp-2">
                        {episode.title}
                      </h3>
                      <p className="text-white/60 font-montserrat text-sm line-clamp-3">
                        {episode.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
