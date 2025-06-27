function TrustedByCriticalIndustriesSection() {
  return (
    <section
      className="w-full flex flex-col items-center py-16 px-4 bg-[#f8f9fa]"
      aria-labelledby="trusted-heading"
    >
      <h2
        id="trusted-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#111827] font-conthrax"
      >
        Trusted by Leaders in Critical Industries
      </h2>
      <p className="text-base md:text-lg text-center text-[#374151] mb-8 max-w-2xl">
        Organizations in high-stakes, regulated environments trust Kikimora to
        secure their operations.
      </p>
      <div className="flex flex-row flex-wrap gap-8 items-center justify-center text-xl md:text-2xl font-bold text-gray-500">
        <span className="tracking-wide">D Commerce Bank AD</span>
        <span className="tracking-wide">DRONAMICS</span>
        <span className="tracking-wide">+ More</span>
      </div>
    </section>
  );
}

export { TrustedByCriticalIndustriesSection };
