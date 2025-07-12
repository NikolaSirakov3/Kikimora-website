import {
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

function SMEFrontsSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#111827]">
        The Two Fronts of the European SME's Digital Battle
      </h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
        {/* Left: Cyberattacks */}
        <div className="flex-1 bg-red-50 rounded-xl p-8 flex flex-col items-center shadow-md">
          <ShieldExclamationIcon
            className="w-14 h-14 text-red-500 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-bold text-center mb-6 text-[#111827]">
            A Rising Tide of Cyberattacks
          </h3>
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-red-600 mb-1">43%</div>
              <div className="text-[#374151] text-base font-montserrat">
                of all cyberattacks target small and medium-sized businesses
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-red-600 mb-1">
                €120,000
              </div>
              <div className="text-[#374151] text-base font-montserrat">
                The average cost of a single data breach for an SME
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-red-600 mb-1">60%</div>
              <div className="text-[#374151] text-base font-montserrat">
                of attacked small businesses fail within 6 months
              </div>
            </div>
          </div>
        </div>
        {/* Right: Compliance */}
        <div className="flex-1 bg-yellow-50 rounded-xl p-8 flex flex-col items-center shadow-md">
          <ExclamationTriangleIcon
            className="w-14 h-14 text-yellow-600 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-bold text-center mb-6 text-[#111827]">
            A New Wave of Compliance Demands
          </h3>
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white rounded-lg p-6 text-center shadow border">
              <div className="text-2xl font-bold text-yellow-700 mb-1">
                NIS2
              </div>
              <div className="text-[#374151] text-base font-montserrat">
                Your enterprise clients are now required to audit your security
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow border">
              <div className="text-2xl font-bold text-yellow-700 mb-1">
                DORA
              </div>
              <div className="text-[#374151] text-base font-montserrat">
                Required for any tech provider in the EU financial supply chain
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow border">
              <div className="text-2xl font-bold text-yellow-700 mb-1">
                GDPR
              </div>
              <div className="text-[#374151] text-base font-montserrat">
                Mandatory data protection for all businesses handling EU citizen
                data
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 text-center text-lg text-[#111827] font-montserrat font-medium">
        Falling behind on either front puts your business, your finances, and
        your client relationships at risk.
      </div>
    </section>
  );
}

export { SMEFrontsSection };
