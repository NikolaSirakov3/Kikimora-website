import { ShieldCheck, Radar, Activity, FileBarChart2 } from "lucide-react";

interface SecurityFeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

function SecurityFeature({ title, description, icon }: SecurityFeatureProps) {
  return (
    <div className="flex flex-col items-start text-left p-8 bg-[#232F47] rounded-2xl border border-[#2D3A54] shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#2B3957] min-h-[120px] w-full max-w-[360px] mx-auto">
      <span className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#23304A] mb-6">
        {icon}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
  );
}

export function SecurityFeatures() {
  const features = [
    {
      title: "Cybersecurity Assessments",
      description:
        "Identify vulnerabilities, weaknesses & misconfigurations in your security posture.",
      icon: <ShieldCheck size={36} strokeWidth={2.2} color="#A3AED0" />,
    },
    {
      title: "Detection & Monitoring",
      description:
        "Implement proactive defense mechanisms against evolving cyber threats.",
      icon: <Radar size={36} strokeWidth={2.2} color="#A3AED0" />,
    },
    {
      title: "Penetration Testing",
      description: "Regular tests of your infrastructure, networks and assets.",
      icon: <Activity size={36} strokeWidth={2.2} color="#A3AED0" />,
    },
    {
      title: "Compliance & Reporting",
      description:
        "Quick access to compliance data and comprehensive executive reporting.",
      icon: <FileBarChart2 size={36} strokeWidth={2.2} color="#A3AED0" />,
    },
  ];

  return (
    <section className="w-full bg-[#0B1424] py-28 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white text-center mb-6 leading-tight">
          Comprehensive Security, Simplified.
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-6xl mb-16">
          Kikimora Managed Security provides comprehensive cybersecurity
          protection for SMEs, safeguarding your business from evolving threats
          while ensuring compliance and minimizing response times. Kikimora acts
          as your dedicated security team, allowing you to focus on your core
          business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center">
          {features.map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <SecurityFeature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
