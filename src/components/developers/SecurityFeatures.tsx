import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SecurityFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: SecurityFeature[] = [
  {
    id: 1,
    icon: "📱",
    title: "Proactive Vulnerability Detection",
    description:
      "Quickly identify and mitigate vulnerabilities for each of your deliveries, ensuring a more stable and secure product offering",
  },
  {
    id: 2,
    icon: "🔄",
    title: "Streamlined Workflows for Higher Efficiency",
    description:
      "Integrate Kikimora.io within your current workflow to decrease time spent on project management, while increasing the value of your service",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Competitive Advantage through More Value",
    description:
      "Higher security distinguishes your service in the market, attracting customers and improving retention for a stronger market position",
  },
  {
    id: 4,
    icon: "💼",
    title: "Improved CRM through transparency & trust",
    description:
      "Share your Kikimora.io reports with clients ensuring transparency and trust, encouraging long-term partnerships and sustained growth",
  },
  {
    id: 5,
    icon: "📈",
    title: "Scalable and Adaptable to Growth",
    description:
      "A security solution that integrates effortlessly with your development process supports scalable growth without compromising security, enabling expansion into new markets or technologies",
  },
  {
    id: 6,
    icon: "💰",
    title: "Reduced Costs",
    description:
      "Addressing security issues early in the development process avoids costly post-release fixes, leading to significant long-term savings",
  },
  {
    id: 7,
    icon: "✅",
    title: "Proactive Compliance Support",
    description:
      "Help your software development services not only keep pace with evolving regulatory changes but stay ahead of them via proactive measures",
  },
];

export function SecurityFeatures() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-b from-[#001E38] to-[#1B0B42] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white font-conthrax mb-4">
            Enhance security. Stay compliant
          </h2>
          <p className="text-white/60 text-lg font-montserrat">
            Advanced Security, Simplified
          </p>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-b from-[#001E38] to-[#1B0B42]"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === feature.id ? null : feature.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left group bg-transparent"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white font-montserrat font-semibold">
                    {feature.title}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#00E5BE] transition-transform duration-200 bg-transparent stroke-[#00E5BE] fill-transparent",
                    expandedId === feature.id ? "transform rotate-180" : ""
                  )}
                />
              </button>

              {expandedId === feature.id && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-white/60 font-montserrat">
                    {feature.description}
                  </p>
                  {feature.id === 7 && (
                    <a
                      href="#"
                      className="text-[#00E5BE] hover:underline font-montserrat block mt-2"
                    >
                      Learn More about upcoming regulations
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
