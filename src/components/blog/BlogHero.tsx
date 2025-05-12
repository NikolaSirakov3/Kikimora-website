import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: Date;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Funding round completed!",
    description:
      "Kikimora has successfully secured €500k in funding for the development of our innovative vulnerability management software.",
    date: new Date("2023-12-15"),
    image: "/team-photo.jpg", // Placeholder path, replace with actual image
  },
  {
    id: 2,
    title: "Understanding the CVSS Base Score",
    description:
      "Kikimora has successfully secured €500k in funding for the development of our innovative vulnerability management software.",
    date: new Date("2023-11-28"),
    image: "/security-graph.jpg", // Placeholder path, replace with actual image
  },
  {
    id: 3,
    title: "Pulse Connect Secure - Critical 0-DAY Vulnerability",
    description:
      "An authentication bypass vulnerability that can allow an authenticated...",
    date: new Date("2023-04-22"),
    image: "/security-scan.jpg", // Placeholder path, replace with actual image
  },
  {
    id: 4,
    title: "Pulse Connect Secure - Critical 0-DAY Vulnerability",
    description:
      "An authentication bypass vulnerability that can allow an authenticated...",
    date: new Date("2023-04-22"),
    image: "/security-scan.jpg", // Placeholder path, replace with actual image
  },
  {
    id: 5,
    title: "Funding round completed!",
    description:
      "Kikimora has successfully received €500k in funding for the development of our innovative vulnerability management software.",
    date: new Date("2023-12-15"),
    image: "/team-photo.jpg", // Placeholder path, replace with actual image
  },
];

export function BlogHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <div className="next-arrow" />,
    prevArrow: <div className="prev-arrow" />,
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
    <section className="w-full bg-[#f2f4f6] pt-20 pb-32 relative z-10">
      <style>
        {`
          .slick-prev:before,
          .slick-next:before {
            color: black !important;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl text-black font-conthrax mb-4">
            In the news
          </h1>
          <p className="text-black text-lg font-montserrat">
            Key developments and breaking stories shaping the cybersecurity
            landscape.
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="px-4">
          <div className="max-w-[1200px] mx-auto">
            <Slider {...settings}>
              {blogPosts.map((post) => (
                <div key={post.id} className="px-2">
                  <Link
                    to={`/blog/${post.id}`}
                    className="w-[300px] bg-gradient-to-b from-[#002A4E] to-[#001E38] rounded-xl overflow-hidden transition-transform hover:scale-[1.01] h-full"
                  >
                    <div className="aspect-[16/9] relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#002A4E] to-[#001E38] flex items-center justify-center">
                        <span className="text-white/20 font-montserrat">
                          News Image
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-[#00E5BE] text-xs font-montserrat mb-2">
                        {format(post.date, "MMMM dd, yyyy")}
                      </div>
                      <h3 className="text-black text-lg font-conthrax mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-black font-montserrat text-sm line-clamp-3">
                        {post.description}
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
