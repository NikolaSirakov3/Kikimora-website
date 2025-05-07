import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function Feature({ title, description, imageSrc, imageAlt }: FeatureProps) {
  return (
    <div className="w-full max-w-5xl mb-12">
      <div className="w-full bg-[#071C2C] rounded-xl shadow-lg overflow-hidden mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-cover max-h-[340px] min-h-[220px]"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-left">
        {title}
      </h3>
      <p className="text-[#B0C4D9] text-base md:text-lg mb-4 text-left">
        {description}
      </p>
    </div>
  );
}

function FeaturesCaseStudy() {
  return (
    <section className="w-screen bg-gradient-to-br from-[#0a1a2f] to-[#071C2C] py-16 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 text-left">
          Features
        </h1>
        <p className="text-[#B0C4D9] text-base md:text-lg mb-8 text-left max-w-3xl">
          By creating a visual guide along the way, the designer or developer
          can get input from the other people involved in the website such as
          the contractor, their manager, and other members of the team.
        </p>
        <Feature
          title="Feature 1"
          description="By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the contractor, their manager, and other members of the team."
          imageSrc="/menu3.jfif"
          imageAlt="Feature 1 screenshot"
        />
        <Feature
          title="Feature 2"
          description="By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the contractor, their manager, and other members of the team."
          imageSrc="/menu4.jfif"
          imageAlt="Feature 2 screenshot"
        />
      </div>
    </section>
  );
}

export { FeaturesCaseStudy };
