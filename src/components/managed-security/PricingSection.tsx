export function PricingSection() {
  return (
    <section className="w-full bg-white pt-8 pb-0 flex flex-col items-center">
      <h2 className="text-5xl text-[#001324] text-center mb-4">
        Pricing Plans
      </h2>
      <div className="w-24 h-0.5 bg-[#001324] mx-auto mb-12" />
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-8">
        {/* Cyber Essentials */}
        <div className="bg-[#071126] rounded-xl flex flex-col w-full max-w-xs px-8 py-10 shadow-lg">
          <div className="flex flex-col min-h-[180px]">
            <h3 className="text-3xl font-bold text-white mb-2">
              Cyber Essentials
            </h3>
            <p className="text-white text-base mb-6">
              Essential penetration testing, asset monitoring, and security
              training to protect small businesses from cyber threats.
            </p>
            <div className="flex items-end mb-6">
              <span className="text-white text-2xl font-light mr-1">~</span>
              <span className="text-white text-3xl font-bold">€2000</span>
              <span className="text-white text-lg font-light ml-1">/month</span>
            </div>
          </div>
          <div className="border-t border-[#3a4b6f] my-4" />
          <ul className="text-white text-base space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>50 IP Addresses
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>1 Application
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>10 domains
            </li>
          </ul>
          <button
            className="bg-[#7c3aed] text-white font-medium py-3 rounded-full mt-auto hover:opacity-90 transition-opacity"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
            aria-label="Contact us for Cyber Essentials"
          >
            Contact us
          </button>
        </div>
        {/* Cyber Advanced */}
        <div className="bg-[#071126] rounded-xl flex flex-col w-full max-w-xs px-8 py-10 shadow-lg">
          <div className="flex flex-col min-h-[180px]">
            <h3 className="text-3xl font-bold text-white mb-2">
              Cyber Advanced
            </h3>
            <p className="text-white text-base mb-6">
              Enhanced security with advanced threat detection, penetration
              testing, and continuous infrastructure scanning of assets and end
              points.
            </p>
            <div className="flex items-end mb-6">
              <span className="text-white text-2xl font-light mr-1">~</span>
              <span className="text-white text-3xl font-bold">€5000</span>
              <span className="text-white text-lg font-light ml-1">/month</span>
            </div>
          </div>
          <div className="border-t border-[#3a4b6f] my-4" />
          <ul className="text-white text-base space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>150 IP Addresses
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>1 Application
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>10 domains
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>Social media management
            </li>
          </ul>
          <button
            className="bg-[#7c3aed] text-white font-medium py-3 rounded-full mt-auto hover:opacity-90 transition-opacity"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
            aria-label="Contact us for Cyber Advanced"
          >
            Contact us
          </button>
        </div>
        {/* Cyber Elite Enterprise */}
        <div className="bg-[#071126] rounded-xl flex flex-col w-full max-w-xs px-8 py-10 shadow-lg">
          <div className="flex flex-col min-h-[180px]">
            <h3 className="text-3xl font-bold text-white mb-2">
              Cyber Elite Enterprise
            </h3>
            <p className="text-white text-base mb-6">
              Enterprise-grade protection, security assessments, penetration
              testing, attack surface management, and proactive risk mitigation.
            </p>
            <div className="flex items-end mb-6">
              <span className="text-white text-2xl font-light mr-1">~</span>
              <span className="text-white text-3xl font-bold">€10000</span>
              <span className="text-white text-lg font-light ml-1">/month</span>
            </div>
          </div>
          <div className="border-t border-[#3a4b6f] my-4" />
          <ul className="text-white text-base space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>400 IP Addresses
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>1 Application
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7c3aed]">✓</span>80 domains
            </li>
          </ul>
          <button
            className="bg-[#7c3aed] text-white font-medium py-3 rounded-full mt-auto hover:opacity-90 transition-opacity"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
            aria-label="Contact us for Cyber Elite Enterprise"
          >
            Contact us
          </button>
        </div>
      </div>
      <div className="text-center text-[#001324] text-base mb-2">
        Not seeing the right plan for you? We offer flexible pricing solutions
        for every business.
      </div>
      <div className="text-center text-[#001324] text-base mb-12">
        Reach out for a customised plan tailored to the needs of your
        organization.
      </div>
    </section>
  );
}
