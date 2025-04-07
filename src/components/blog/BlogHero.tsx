import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

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
  return (
    <section className="w-full bg-[#001E38] pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl text-white font-conthrax mb-4">
            The latest news about
            <br />
            Cybersecurity
          </h1>
          <p className="text-white/60 text-lg font-montserrat">
            Our blog features insights on new features, security trends, and
            best coding practices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="flex flex-col gap-8">
          {/* Featured Post (Full width) */}
          <Link
            to={`/blog/${blogPosts[0].id}`}
            className="w-full bg-gradient-to-b from-[#002A4E] to-[#001E38] rounded-2xl overflow-hidden transition-transform hover:scale-[1.01]"
          >
            <div className="aspect-[16/5.4] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#002A4E] to-[#001E38] flex items-center justify-center">
                <span className="text-white/20 font-montserrat">
                  Team Photo
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="text-[#00E5BE] text-sm font-montserrat mb-4">
                {format(blogPosts[0].date, "MMMM dd, yyyy")}
              </div>
              <h2 className="text-white text-2xl font-conthrax mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-white/60 font-montserrat">
                {blogPosts[0].description}
              </p>
            </div>
          </Link>

          {/* Two Column Grid for Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1, 5).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-gradient-to-b from-[#002A4E] to-[#001E38] rounded-2xl overflow-hidden transition-transform hover:scale-[1.01]"
              >
                <div className="aspect-[16/9] relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#002A4E] to-[#001E38] flex items-center justify-center">
                    <span className="text-white/20 font-montserrat">
                      Blog Image
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#00E5BE] text-sm font-montserrat mb-3">
                    {format(post.date, "MMMM dd, yyyy")}
                  </div>
                  <h3 className="text-white text-xl font-conthrax mb-3">
                    {post.title}
                  </h3>
                  <p className="text-white/60 font-montserrat text-sm">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
