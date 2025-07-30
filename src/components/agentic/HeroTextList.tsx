const textComponents = [
  {
    title: "Attack Surface Management",
    subtitle:
      "Discover subdomains, map services, and monitor public-facing assets.",
  },
  {
    title: "Asset Management",
    subtitle: "Add, track, and update IT assets with detailed visibility.",
  },
  {
    title: "Vulnerability Analysis",
    subtitle:
      "List, score, and prioritize vulnerabilities for faster resolution.",
  },
  {
    title: "Web Application Security",
    subtitle: "Scan and manage web apps with actionable security insights.",
  },
  {
    title: "Project Management",
    subtitle:
      "Track projects, link vulnerabilities, and streamline OWASP compliance.",
  },
  {
    title: "Endpoint Security",
    subtitle: "Deploy Wazuh, monitor integrity, and assess endpoint hardening.",
  },
];

const HeroTextList = () => {
  return (
    <div className="flex-1">
      <div className="space-y-2">
        {textComponents.map((component, index) => (
          <div key={index} className="space-y-0.5">
            <h3 className="text-xl font-semibold text-white">
              {component.title}
            </h3>
            <p className="text-base text-gray-400 leading-relaxed">
              {component.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTextList;
