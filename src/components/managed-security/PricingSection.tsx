interface PricingTier {
  title: string;
  subtitle: string;
  description: string;
  features: {
    ipAddresses: string;
    application: string;
    domains: string;
  };
  buttonColor: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Cyber Essentials",
    subtitle: "Startups & Small Teams",
    description:
      "Essential penetration testing, asset monitoring, and security training to protect small businesses from cyber threats",
    features: {
      ipAddresses: "50 IP Addresses",
      application: "1 Application",
      domains: "10 domains",
    },
    buttonColor: "bg-[#00D1A7]",
  },
  {
    title: "Cyber Advanced",
    subtitle: "Growing SMEs",
    description:
      "Enhanced security with advanced threat detection, penetration testing, and continuous infrastructure scanning of assets and endpoints",
    features: {
      ipAddresses: "150 IP Addresses",
      application: "1 application",
      domains: "10 domains",
    },
    buttonColor: "bg-[#00D1A7]",
  },
  {
    title: "Cyber Elite",
    subtitle: "Large & Regulated Organizations",
    description:
      "Enterprise-grade protection, security assessments, penetration testing, attack surface management, and proactive risk mitigation",
    features: {
      ipAddresses: "400 IP Addresses",
      application: "1 application",
      domains: "80 domains",
    },
    buttonColor: "bg-[#00D1A7]",
  },
];

export function PricingSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#001324]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Asset-Based Pricing To Meet The Precise Needs Of
            <br />
            Your Organization
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto">
            Kikimora Managed Security offers flexible packages of security,
            compliance and governance tools depending on the size, assets, and
            current needs of your organization. Benefit from enterprise-level
            protection at a fraction of the cost of maintaining an in-house
            cybersecurity team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <p className="text-gray-600 mb-6">{tier.subtitle}</p>

              <p className="text-gray-700 mb-8 flex-grow">{tier.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>{tier.features.ipAddresses}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>{tier.features.application}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>{tier.features.domains}</span>
                </div>
              </div>

              <button
                className={`${tier.buttonColor} text-white py-3 px-6 rounded-md font-medium hover:opacity-80 transition-opacity mt-auto`}
                onClick={() =>
                  window.open("https://calendly.com/o-antonov", "_blank")
                }
              >
                Book Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
