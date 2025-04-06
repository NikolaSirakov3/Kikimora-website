import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "overview",
    title: "Overview",
    description:
      "Streamline prioritization by clearly distinguishing between pending, resolved, and in-progress vulnerabilities.",
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "Enhance security posture with expert insights and tailored remediation strategies.",
  },
  {
    id: "jira",
    title: "Jira Integration",
    description:
      "Facilitates efficient project management and seamless integration of security tasks into development workflows.",
  },
  {
    id: "ai",
    title: "AI Assistant",
    description:
      "Accelerates vulnerability management with instant, personalized guidance and support.",
  },
  {
    id: "qualys",
    title: "Qualys Scanner",
    description:
      "Scan for vulnerabilities import the data using one of the most advanced scanners on the market included in your package",
  },
];

export function ProductOverview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="w-full bg-gradient-to-b from-[#001E38] to-[#1B0B42] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white font-conthrax mb-4">
            Check out the product
          </h2>
          <p className="text-white/60 text-lg font-montserrat max-w-3xl mx-auto">
            A platform designed to not only enhance the security and quality of
            your products but also to streamline your development processes
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden border border-white/10">
          <div className="aspect-[16/9] bg-[#1E1E1E] relative">
            {/* Placeholder for dashboard image */}
            <div className="absolute inset-0 bg-[#1E1E1E]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  {/* Three circular progress indicators */}
                  <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-[#00E5BE] opacity-20"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-[#00E5BE] border-t-transparent transform rotate-45"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            97%
                          </span>
                        </div>
                      </div>
                      <span className="text-white/60 mt-2">
                        Action Required
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-[#8B5CF6] opacity-20"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-[#8B5CF6] border-t-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            1%
                          </span>
                        </div>
                      </div>
                      <span className="text-white/60 mt-2">Working On</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-[#EC4899] opacity-20"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-[#EC4899] border-t-transparent transform -rotate-45"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            3%
                          </span>
                        </div>
                      </div>
                      <span className="text-white/60 mt-2">Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="max-w-5xl mx-auto grid grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="cursor-pointer flex flex-col h-[200px]"
              onClick={() => setActiveTab(feature.id)}
            >
              <div className="text-center mb-4">
                <h3
                  className={`text-base font-montserrat mb-2 ${
                    activeTab === feature.id ? "text-[#00E5BE]" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <div
                  className={`h-0.5 w-full transition-all duration-200 ${
                    activeTab === feature.id ? "bg-[#00E5BE]" : "bg-transparent"
                  }`}
                />
              </div>
              <p className="text-white/60 text-sm font-montserrat text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="bg-[#00E5BE] text-[#001E38] hover:bg-[#00E5BE]/90 rounded-full px-6 py-3 font-montserrat font-semibold flex items-center gap-2 mx-auto">
            Request demo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
