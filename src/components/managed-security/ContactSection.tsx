export function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="w-full max-w-7xl bg-[#0D1321] rounded-lg p-8">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-6">
          Add-on: Governance
        </h2>
        <h3 className="text-2xl md:text-3xl text-[#31c9b7] text-center mb-3">
          TAILORED PRICING
        </h3>
        <p className="text-center text-white max-w-3xl mb-6 px-4 mx-auto">
          Delegate the core components of managing your IT infrastructure to a
          dedicated expert, allowing leadership to focus on core operations
          rather than cybersecurity complexity.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl px-4 mx-auto">
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-3 text-white">
              Governance Features:
            </h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Gap analysis and risk management
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Security procedures and policy maintenance
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Security strategy development
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Business continuity/disaster recovery training
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Operational-level involvement (approvals, audits)
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advisory on emerging technology
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Development of internal security team
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/5 mt-10 mr-20 bg-blue-900 text-white py-4 px-6 rounded-lg shadow-white shadow-md h-[180px]">
            <p className="text-base">
              The governance module provides a stable foundation for companies
              operating in high-risk, data-sensitive, or critical service
              sectors.
            </p>
            <button
              className="mt-3 bg-[#31c9b7] text-white font-medium px-8 py-2 rounded-lg text-base hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2 transition"
              aria-label="Schedule a Demo"
              type="button"
              onClick={() =>
                window.open("mailto:contact@kikimora.io", "_blank")
              }
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
