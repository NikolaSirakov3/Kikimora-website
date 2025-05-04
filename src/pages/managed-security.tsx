import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: {
    line1: string;
    line2: string;
  };
  description: string;
}

function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <div className="pt-20 w-[99.2vw] flex items-center justify-between min-h-[600px] px-8 md:px-16 lg:px-24 bg-[#001324]">
      <div className="mt-20 pl-20 flex flex-col gap-6 max-w-[800px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h1>
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            {subtitle.line1}
          </h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mt-6">
            {subtitle.line2}
          </h2>
        </div>
        <p className="text-gray-300 text-lg max-w-[600px]">{description}</p>
        <div>
          <Button
            variant="default"
            className="bg-[#4169E1] hover:bg-[#3154b3] text-white px-8 py-6 text-lg"
          >
            Download Brochure
          </Button>
        </div>
      </div>
      <div className="hidden md:block mt-20 pr-20">
        <img
          src="/Kikimora.png"
          alt="Kikimora Security"
          className="w-[700px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

function PartnersSection() {
  const partners = [
    { name: "Rapid7 Nexpose", logo: "/logos/rapid7.png" },
    { name: "Burp Suite Professional", logo: "/logos/burp-suite.png" },
    { name: "Nessus Professional", logo: "/logos/nessus.png" },
    { name: "Atlassian", logo: "/logos/atlassian.png" },
    { name: "Qualys", logo: "/logos/qualys.png" },
  ];

  return (
    <div className="w-full bg-[#001324] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-16 mb-16 flex-wrap">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <p className="text-white text-center max-w-[1000px] mx-auto text-lg leading-relaxed">
          Kikimora Managed Security provides comprehensive cybersecurity
          protection for SMEs, safeguarding your business from evolving threats
          while ensuring compliance and minimizing response times. Kikimora acts
          as your dedicated security team, allowing you to focus on your core
          business.
        </p>
      </div>
    </div>
  );
}

interface SecurityFeatureProps {
  title: string;
  description: string;
}

function SecurityFeature({ title, description }: SecurityFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function SecurityFeatures() {
  const features = [
    {
      title: "Cybersecurity Assessments",
      description:
        "Identify vulnerabilities, weaknesses & misconfigurations in your security posture",
    },
    {
      title: "Threat Detection & Monitoring",
      description:
        "Implement proactive defense mechanisms against evolving cyber threats",
    },
    {
      title: "Penetration Testing",
      description: "Regular tests of your infrastructure, networks and assets",
    },
    {
      title: "Compliance & Reporting",
      description: "Quick access to compliance data and comprehens",
    },
  ];

  return (
    <div className="w-full bg-[#001324] py-20 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-[#002847] rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Comprehensive SME Security, Simplified
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {features.map((feature, index) => (
              <SecurityFeature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">
              Let Kikimora handle cybersecurity, so you can focus on growing
              your business.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-[1000px] mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 px-6 py-3 rounded-lg bg-[#003A66] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-6 py-3 rounded-lg bg-[#003A66] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <Button className="px-8 py-3 bg-[#4169E1] hover:bg-[#3154b3] text-white font-bold rounded-lg">
              BOOK DEMO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManagedSecurity() {
  return (
    <main className="min-h-screen bg-[#001324]">
      <HeroSection
        title="Kikimora Managed Security:"
        subtitle={{
          line1: "SME Cybersecurity.",
          line2: "Simplified.",
        }}
        description="Kikimora Managed Security offers a blend of robust tools, tailored to meet the requirements of growing companies facing the pain of managing complex compliance and cybersecurity tasks."
      />
      <PartnersSection />
      <SecurityFeatures />
    </main>
  );
}
