import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

// Component data
const componentData = {
  hero: {
    title: "The future of security is agentic",
    subtitle: "Address security concerns with speed and confidence.",
  },
  services: [
    {
      id: "asm",
      title: "Attack Surface Management",
      description:
        "Continuously discover and inventory all your internet-facing assets, including domains, subdomains, IPs, and web applications, to eliminate blind spots.",
    },
    {
      id: "pvd",
      title: "Proactive Vulnerability Discovery",
      description:
        "Automatically scan your assets for thousands of vulnerabilities, from misconfigurations to critical software flaws, before attackers can exploit them.",
    },
    {
      id: "arp",
      title: "Actionable Risk Prioritization",
      description:
        "Receive prioritized, context-rich vulnerability reports that allow your team to focus on fixing the most critical issues first, reducing your mean time to remediation.",
    },
  ],
  featureList: {
    titlePrefix: "Your Personal",
    rotatingWords: [
      "Security Analyst",
      "Cloud Security Specialist",
      "Security Administrator",
      "Risk Analyst",
      "CISO",
    ],
    features: [
      "Discovers entire external attack surface without prior knowledge.",
      "Identifies unknown assets, subdomains, and misconfigurations.",
      "Maintains continuously updated inventory of all external assets.",
      "Prioritizes vulnerabilities based on real-world risk factors.",
      "Correlates asset importance, severity, and exploitation evidence.",
      "Provides clear, actionable guidance for security focus.",
    ],
  },
};

// Reusable Components
const HeroSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="text-center py-12">
    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
      {title}
    </h1>
    <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>
  </div>
);

const ServiceDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const FeatureList = ({
  titlePrefix,
  rotatingWords,
  features,
}: {
  titlePrefix: string;
  rotatingWords: string[];
  features: string[];
}) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delayBetweenWords = 1500;

    function type() {
      const currentWord = rotatingWords[wordIndex];
      let displayText = "";

      if (isDeleting) {
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      setTypedText(displayText);

      let typeDelay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        typeDelay = delayBetweenWords;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % rotatingWords.length;
        typeDelay = 500;
      }

      timeoutId = setTimeout(type, typeDelay);
    }

    timeoutId = setTimeout(type, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [rotatingWords]);

  return (
    <div className="bg-card rounded-lg shadow-md p-6 border border-border">
      <div className="flex items-baseline mb-6">
        <h3 className="text-2xl font-bold text-foreground mr-2">
          {titlePrefix}
        </h3>
        <div className="text-2xl font-bold text-blue-500 rotating-text-container">
          <span>{typedText}</span>
          <span className="typing-cursor animate-pulse">|</span>
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-1" />
            <span className="text-foreground text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
const SecurityAnalystSection = () => {
  return (
    <div className="bg-background py-16 ml-10">
      <div className="container mx-auto px-4">
        <HeroSection
          title={componentData.hero.title}
          subtitle={componentData.hero.subtitle}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-8 justify-around">
            {componentData.services.map((service) => (
              <ServiceDescription
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="lg:col-span-3">
            <FeatureList
              titlePrefix={componentData.featureList.titlePrefix}
              rotatingWords={componentData.featureList.rotatingWords}
              features={componentData.featureList.features}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAnalystSection;
