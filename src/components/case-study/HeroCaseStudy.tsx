function HeroCaseStudy() {
  return (
    <section className="relative w-screen min-h-[70vh] bg-[#071C2C] flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Blurred/darkened chart background overlay */}
      <img
        src="/public/illustrations/8.png" // Use a chart-like image from your assets
        alt="Background chart"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
      {/* Blue gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#071C2C]/80 to-[#071C2C]"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center">
        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-5xl leading-tight mb-4">
          From Regulatory Complexity to
          <br />
          <span className="text-[#31c9b7] text-4xl md:text-6xl lg:text-6xl block mt-2">
            Cyber Resilience
          </span>
        </h1>
        <p className="text-[#B0C4D9] text-lg md:text-2xl mb-4 font-medium">
          The Unified Security Platform for the Financial Sector.
        </p>
        <p className="text-[#B0C4D9] text-base md:text-lg mb-8 max-w-3xl mx-auto">
          Navigate DORA, NIS2, and PCI DSS, secure critical APIs, and manage
          vulnerabilities with a single platform and an expert team that grows
          with your business.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
          <button
            className="bg-[#31c9b7] hover:bg-[#2ab3a3] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
            type="button"
          >
            Request a Consultation
          </button>
          <button
            className="bg-white/10 hover:bg-white/20 text-[#31c9b7] font-semibold py-3 px-8 rounded-lg border border-[#31c9b7] shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
            type="button"
          >
            View Platform Capabilities
          </button>
        </div>
      </div>
    </section>
  );
}

export { HeroCaseStudy };
