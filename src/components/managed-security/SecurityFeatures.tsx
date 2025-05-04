import { Button } from "@/components/ui/button";

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

export function SecurityFeatures() {
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
