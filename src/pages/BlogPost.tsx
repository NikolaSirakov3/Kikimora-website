import React from "react";
import { useParams } from "react-router-dom";

export function BlogPost() {
  const { id } = useParams();

  return (
    <div className="w-[99.1vw] bg-[#001E38] min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl text-white font-conthrax mb-4">
            Funding round completed!
          </h1>
          <p className="text-[#00E5BE] text-sm font-montserrat mb-8">
            December 15, 2023
          </p>
          <p className="text-white/60 text-lg font-montserrat mb-12">
            Kikimora has successfully secured €595K in funding for the
            development of our innovative vulnerability management software.
            This resources will be invested in product development, marketing
            and strategic partnerships.
          </p>
        </div>

        {/* Main Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="aspect-[16/9] relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002A4E] to-[#001E38] flex items-center justify-center">
              <span className="text-white/20 font-montserrat">Team Photo</span>
            </div>
            <img
              src="/team-photo.jpg"
              alt="Kikimora Team"
              className="w-full h-full object-cover relative z-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert">
            <h2 className="text-3xl text-white font-conthrax mb-6">
              Market Confidence Soars: Kikimora.io Positioned to Capitalize on
              $400B Cybersecurity Boom by 2026
            </h2>
            <p className="text-white/80 font-montserrat mb-8">
              The leading investors, Victoria Venture Partners, provided €150K,
              and the strategic partner, Amedia Ventures (a Romanian specialized
              in software development and investment in the cybersecurity
              industry), contributed €70K. As Klemen Bankovic, one of the
              partners at Amedia Ventures says:
            </p>
            <p className="text-white/80 font-montserrat mb-8">
              "Investing in Kikimora.io was a natural decision, given the
              rapidly growing cybersecurity market, expected to reach a size of
              $400B by 2026. This startup has demonstrated significant interest,
              after confirmation of market demands. The team behind Kikimora.io
              has extensive industrial experience and a deep understanding of
              market challenges. We believe in the company's growth potential,
              and we're looking forward to helping to build it."
            </p>

            <h2 className="text-3xl text-white font-conthrax mb-6">
              Back to the Roots: A Story of Innovation and Growth
            </h2>
            <p className="text-white/80 font-montserrat mb-8">
              The journey began with three small investors in late 2022 when
              Kikimora.io received €150K in funding through a convertible loan
              from investors. In the first investment round of April 2023,
              Capital Value connected "Win-win" investors with Kikimora.io. The
              company's growth and SAAS vision attracted several natural markets
              across Austria, the USA, the UK, and Germany. The year 2023
              witnessed the natural evolution of the product business into the
              newly established parent company, Kikimora.io, followed by
              extensive industry expertise in cybersecurity. The unified team of
              SecGear and Kikimora.io focused on bringing knowledge of the
              challenges they inherited, which helped to build a strong
              foundation for the company's future growth. As Klemen Bankovic
              says: "We are in the phase of product development, in the wake of
              the founder and CSO." With the second funds, our focus aims toward
              improving the product market reach of artificial intelligence.
            </p>

            <h2 className="text-3xl text-white font-conthrax mb-6">
              Kikimora.io: Shaping the Future of Vulnerability Management
            </h2>
            <p className="text-white/80 font-montserrat">
              Kikimora is a solution aimed at businesses with over 500
              employees. Through machine learning, the platform automates the
              analysis and prioritization of vulnerabilities. The platform also
              provides a centralized place for monitoring and managing the
              security risks, enabling businesses to focus on what matters most
              - protecting their assets and data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
