import { useState } from "react";

interface TabContentProps {
  isActive: boolean;
  title: string;
  description: string;
}

const TabContent: React.FC<TabContentProps> = ({ isActive, description }) => {
  if (!isActive) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <p className="text-gray-700 mb-6 text-center shadow-md rounded-lg p-4 bg-white">
        {description}
      </p>
    </div>
  );
};

export function SecurityEcosystemSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Achieve Continuous Compliance",
      label: "Secure Your Code, Secure Your Business",
      description:
        "Embed security directly into your development lifecycle. Our SAST/DAST testing identifies flaws before they reach production. Native Jira integration delivers actionable tickets directly to developers, while our Secure Code Training empowers your team to prevent vulnerabilities at the source.",
    },
    {
      title: "Proactive Vulnerability Management",
      label: "Stay Ahead of Threats",
      description:
        "Move beyond basic scanning with unified threat intelligence. Our platform consolidates data into a single dashboard, while the Kikimora Smart Score applies business context to prioritize the risks that truly matter. Our expert team proactively identifies vulnerabilities across your entire attack surface.",
    },
    {
      title: "Expert-Led Defense",
      label: "24/7 Security Operations",
      description:
        "Gain on-demand access to a world-class security team. Our Managed Security service functions as an extension of your own, handling everything from in-depth penetration testing and attack surface management to 24/7 monitoring and incident response.",
    },
    {
      title: "Secure Your Code, Secure Your Business",
      label: "Secure Your Code, Secure Your Business",
      description:
        "Embed security directly into your development lifecycle. Our SAST/DAST testing identifies flaws before they reach production. Native Jira integration delivers actionable tickets directly to developers, while our Secure Code Training empowers your team to prevent vulnerabilities at the source.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          A Unified Security and Compliance Ecosystem
        </h1>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center max-w-5xl">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-lg font-medium transition-colors duration-200 outline-none focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none ${
                  activeTab === index
                    ? "text-blue-600 bg-gray-50 border-b-2 border-solid border-blue-600"
                    : "text-gray-600 bg-gray-50 border-b-0"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            isActive={activeTab === index}
            title={tab.label}
            description={tab.description}
          />
        ))}
      </div>
    </section>
  );
}
