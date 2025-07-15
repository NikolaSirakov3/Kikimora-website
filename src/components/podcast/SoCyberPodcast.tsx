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
    id: 1,
    title: "The Future of AI in Cybersecurity",
    description:
      "Exploring how artificial intelligence is revolutionizing threat detection and response in modern security operations.",
    date: new Date("2024-03-15"),
    image: "/podcast-ai.jpg",
    duration: "45:30",
  },
  {
    id: 2,
    title: "Zero Trust Architecture Deep Dive",
    description:
      "A comprehensive discussion on implementing and maintaining zero trust security models in enterprise environments.",
    date: new Date("2024-03-01"),
    image: "/podcast-zero-trust.jpg",
    duration: "52:15",
  },
  {
    id: 3,
    title: "Cloud Security Best Practices",
    description:
      "Expert insights on securing cloud infrastructure and preventing common cloud security vulnerabilities.",
    date: new Date("2024-02-15"),
    image: "/podcast-cloud.jpg",
    duration: "48:45",
  },
  {
    id: 4,
    title: "The Human Element in Security",
    description:
      "Understanding the role of human behavior in cybersecurity and strategies for building a security-first culture.",
    date: new Date("2024-02-01"),
    image: "/podcast-human.jpg",
    duration: "50:20",
  },
  {
    id: 5,
    title: "Emerging Threats in 2024",
    description:
      "Analysis of the latest cybersecurity threats and trends that organizations need to watch out for.",
    date: new Date("2024-01-15"),
    image: "/podcast-threats.jpg",
    duration: "47:10",
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
                      <div className="absolute inset-0 bg-gradient-to-b from-[#002A4E] to-[#001E38] flex items-center justify-center">
                        <span className="text-white/20 font-montserrat">
                          Podcast Thumbnail
                        </span>
                      </div>
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
