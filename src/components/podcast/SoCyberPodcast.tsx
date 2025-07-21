import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ArrowSquareRight, ArrowSquareLeft } from "@phosphor-icons/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  date: Date;
  image: string;
  duration: string;
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 5,
    title: "White Hat Riddles Podcast Ep. 05",
    description: "Watch on YouTube: Episode 5 of the White Hat Riddles Podcast.",
    date: new Date("2024-06-01"), // Placeholder date
    image: "/podcast-thumbs/SmartRisk.png",
    duration: "1:12:35", // Placeholder duration
  },
  {
    id: 4,
    title: "White Hat Riddles Podcast Ep. 04",
    description: "Watch on YouTube: Episode 4 of the White Hat Riddles Podcast.",
    date: new Date("2024-05-01"), // Placeholder date
    image: "/podcast-thumbs/Ransomware.png",
    duration: "1:30:16", // Placeholder duration
  },
  {
    id: 3,
    title: "White Hat Riddles Podcast Ep. 03",
    description: "Watch on YouTube: Episode 3 of the White Hat Riddles Podcast.",
    date: new Date("2024-04-01"), // Placeholder date
    image: "/podcast-thumbs/Personal Security.png",
    duration: "1:07:40", // Placeholder duration
  },
  {
    id: 2,
    title: "Understanding Ransomware | White Hat Riddles Podcast Ep. 02",
    description:
      "SoCyber321 views3 months ago. 50 minutes. Watch on YouTube: https://youtu.be/Ch9BhBxgUp4",
    date: new Date("2024-03-01"), // Placeholder date
    image: "/podcast-thumbs/Hybrid Warfare.png",
    duration: "50:41", // Placeholder duration
  },
  {
    id: 1,
    title:
      "Conversational AI security with Kristian Kamber, Splx.ai | White Hat Riddles Podcast Ep. 01",
    description:
      "Welcome to White Hat Riddles, episode 1 - A podcast where we dive into essential cybersecurity knowledge, analyze current trends, and explore the innovations and investments pushing the industry forward. Watch on YouTube: https://youtu.be/eEqAtV5pjdE",
    date: new Date("2024-02-01"), // Placeholder date
    image: "/podcast-thumbs/AI Security.png",
    duration: "52:29", // Placeholder duration
  },
];

export function SoCyberPodcast() {
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
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-[#00E5BE] text-xs font-montserrat">
                          {format(episode.date, "MMMM dd, yyyy")}
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
