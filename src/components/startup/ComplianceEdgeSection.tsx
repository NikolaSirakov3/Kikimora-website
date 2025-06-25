function ComplianceEdgeSection() {
  return (
    <section className="w-full flex flex-col items-center py-20 px-2 bg-gradient-to-b from-[#1a357a] to-[#19284a]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-2 font-conthrax">
        Turn Compliance into Your Competitive Edge
      </h2>
      <p className="text-base md:text-lg text-center text-[#31c9b7] mb-12 max-w-2xl font-montserrat">
        Don't just meet standards. Win bigger deals, faster.
      </p>
      {/* Flow steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 mb-2 text-[#31c9b7]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="text-[#31c9b7] text-sm font-semibold mt-1">
            Standards Met
          </span>
        </div>
        <svg
          className="w-6 h-6 text-[#31c9b7] mx-2 hidden md:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 mb-2 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="text-green-200 text-sm font-semibold mt-1">
            Compliance Achieved
          </span>
        </div>
        <svg
          className="w-6 h-6 text-[#31c9b7] mx-2 hidden md:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <svg
            className="w-12 h-12 mb-2 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-yellow-100 text-sm font-semibold mt-1">
            Enterprise Deals Won
          </span>
        </div>
      </div>
      {/* Testimonial */}
      <div className="w-full max-w-3xl bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center mt-4">
        <p className="italic text-[#31c9b7] text-center text-base md:text-lg mb-4">
          "Kikimora was instrumental in our ISO 27001 certification process,
          which was a key requirement for closing our largest enterprise
          client."
        </p>
        <span className="text-[#31c9b7] text-sm text-center">
          — Enterprise Customer
        </span>
      </div>
    </section>
  );
}

export { ComplianceEdgeSection };
