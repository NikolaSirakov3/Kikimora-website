import React from "react";

export function OTSecurityHero() {
  return (
    <section
      className="relative w-[99.2vw] min-h-[480px] flex items-center justify-center bg-[#001E38] overflow-hidden"
      style={{ minHeight: 480 }}
    >
      {/* Blurred blue overlay */}
      <div className="absolute inset-0 bg-[#001E38] bg-opacity-90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001E38]/80 to-[#1a2a4d]/80 z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Secure the Core of Your <br className="hidden md:block" /> Operation.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          The unified cybersecurity platform for industrial enterprises. Gain
          complete visibility, master compliance, and ensure operational
          resilience from the factory floor to the cloud—on your terms, with
          on-premise control.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-lg text-base shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Schedule Your Demo"
            type="button"
          >
            Schedule Your Demo
            <span className="ml-2">→</span>
          </button>
          <button
            className="bg-white/80 text-[#2563eb] font-semibold px-8 py-4 rounded-lg text-base shadow border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
            aria-label="Explore On-Premise Options"
            type="button"
          >
            Explore On-Premise Options
          </button>
        </div>
      </div>
    </section>
  );
}
