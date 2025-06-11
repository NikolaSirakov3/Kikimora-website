export function ROISection() {
  return (
    <section
      className="w-full bg-[#f6f5ff] py-16 flex flex-col items-center"
      aria-labelledby="roi-title"
    >
      <h2
        id="roi-title"
        className="text-4xl md:text-5xl font-semibold text-center text-[#0a1626] mb-12"
      >
        The Tangible ROI of Managed Security
      </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center border-t border-[#0a1626]/20 pt-12 gap-12 md:gap-0">
        <div className="flex-1 flex flex-col items-center">
          <span className="text-[5rem] text-[#4b3ff4] leading-none">
            -70%
          </span>
          <span className="mt-4 text-lg text-[#0a1626] text-center opacity-80">
            Annual Cybersecurity Operational Costs
          </span>
        </div>
        <div
          className="hidden md:block w-px h-32 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center">
          <span className="text-[5rem] text-[#4b3ff4] leading-none">
            $2.2M
          </span>
          <span className="mt-4 text-lg text-[#0a1626] text-center opacity-80">
            Data Breach Cost Reduction (avrg.)
          </span>
        </div>
        <div
          className="hidden md:block w-px h-32 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center">
          <span className="text-[5rem] text-[#4b3ff4] leading-none">
            40%
          </span>
          <span className="mt-4 text-lg text-[#0a1626] text-center opacity-80">
            Faster compliance and reporting
          </span>
        </div>
      </div>
    </section>
  );
}
