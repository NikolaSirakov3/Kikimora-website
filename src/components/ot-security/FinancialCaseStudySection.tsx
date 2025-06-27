import React from "react";

function FinancialCaseStudySection() {
  return (
    <section
      className="w-full flex flex-col items-center py-20 px-4 bg-transparent"
      aria-labelledby="financial-case-heading"
    >
      <h2
        id="financial-case-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#111827] font-montserrat"
      >
        Proven in High-Stakes Financial Environments
      </h2>
      <div className="w-full max-w-4xl bg-[#e6f7f5] rounded-2xl p-8 md:p-12 flex flex-col items-center shadow-md">
        <div className="flex flex-col md:flex-row w-full justify-between gap-8 mb-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-[#111827]">Challenge</h3>
            <p className="text-base text-[#374151]">
              Needed to centralize security assessments, prioritize
              vulnerabilities effectively, and streamline remediation.
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-[#111827]">Solution</h3>
            <p className="text-base text-[#374151]">
              Optimized vulnerability management, reduced time-to-remediate, and
              gained full visibility of the vulnerability lifecycle.
            </p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-[#111827]">Result</h3>
            <p className="text-base text-[#374151]">
              Streamlined security operations with comprehensive vulnerability
              management platform.
            </p>
          </div>
        </div>
        <blockquote
          className="italic text-[#22223b] text-lg text-center mb-6 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Italianno', 'Dancing Script', cursive, serif",
          }}
        >
          "Should you need a S-tier, flexible, all-in-one platform for
          vulnerability management, we strongly recommend Kikimora.io."
        </blockquote>
        <cite className="not-italic text-[#31c9b7] text-base font-medium text-center block">
          — Stefan Tsonev, Head of IT Security Department, D Commerce Bank AD
        </cite>
      </div>
    </section>
  );
}

export { FinancialCaseStudySection };
