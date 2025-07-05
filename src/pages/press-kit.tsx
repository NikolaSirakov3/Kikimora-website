import React from "react";

function PressKitHero() {
  return (
    <section
      className="w-[99.12vw] min-h-[300px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#10182b] to-[#1a3270] px-4 py-20"
      role="region"
      aria-label="Press Kit Hero"
    >
      <h1
        className="text-5xl md:text-6xl font-bold text-white mb-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Press Kit
      </h1>
      <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
        Media resources, company information, and press materials for
        journalists and media professionals.
      </p>
    </section>
  );
}

export default function PressKitPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a3270]">
      <PressKitHero />
      {/* Add more sections here as needed */}
    </div>
  );
}
