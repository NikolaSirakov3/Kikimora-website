function FeaturesCaseStudy() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl font-bold text-[#071C2C] mb-12 text-center">
        Solutions That Scale With Your Organization
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#071C2C] mb-4 text-center">
            Kikimora Community
          </h3>
          <p className="text-[#071C2C] text-base mb-6 text-center flex-grow">
            Ideal for emerging companies. Establish a foundational security
            baseline with monthly scans and essential compliance templates.
          </p>
          <div className="mt-auto">
            <div className="text-2xl font-extrabold text-blue-600 mb-4 text-center">
              Free
            </div>
            <button className="w-full bg-white border border-[#e5e7eb] rounded-lg py-3 font-semibold text-[#071C2C] hover:bg-[#f1f5f9] transition mb-2">
              Get Started
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#071C2C] mb-4 text-center">
            Kikimora.io Platform
          </h3>
          <p className="text-[#071C2C] text-base mb-6 text-center flex-grow">
            For scaling businesses with in-house teams. A powerful SaaS platform
            to manage your comprehensive security and compliance program.
            Pricing scales transparently with your assets.
          </p>
          <div className="mt-auto">
            <div className="text-2xl font-extrabold text-blue-600 mb-4 text-center">
              Based on Assets
            </div>
            <button className="w-full bg-[#071C2C] text-white rounded-lg py-3 font-semibold hover:bg-[#0a1a2f] transition mb-2">
              Explore the Platform
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#071C2C] mb-4 text-center">
            Kikimora Managed Security
          </h3>
          <p className="text-[#071C2C] text-base mb-6 text-center flex-grow">
            For established organizations. Delegate your security operations to
            our expert team for comprehensive, professionally managed protection
            and compliance oversight.
          </p>
          <div className="mt-auto">
            <div className="text-2xl font-extrabold text-blue-600 mb-4 text-center">
              Tiered Plans
            </div>
            <button className="w-full bg-[#071C2C] text-white rounded-lg py-3 font-semibold hover:bg-[#0a1a2f] transition mb-2">
              Discover Managed Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FeaturesCaseStudy };
