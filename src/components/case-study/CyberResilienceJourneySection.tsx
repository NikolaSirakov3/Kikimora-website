import { FC } from "react";

const journeySteps = [
  {
    title: "Discover & Assess",
    description:
      "We begin with a deep dive into your unique environment, assets, data flows, and threat landscape to establish a comprehensive security baseline.",
  },
  {
    title: "Unify & Prioritize",
    description:
      "We deploy the Kikimora.io platform to centralize your security data, continuously manage your attack surface, and use AI-driven analysis to prioritize the most critical risks.",
  },
  {
    title: "Harden & Defend",
    description:
      "Our expert team implements proactive defenses, including system hardening, 24/7 monitoring, and rigorous penetration testing to strengthen your security posture.",
  },
  {
    title: "Train & Govern",
    description:
      "We empower your staff through targeted security training and provide ongoing governance and strategic advisory to ensure continuous improvement, maturity, and compliance.",
  },
];

export const CyberResilienceJourneySection: FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Your Journey to Cyber Resilience in Four Steps
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A clear, structured, and manageable journey to healthcare
            cybersecurity excellence.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:grid grid-cols-[1fr_60px_2fr] gap-4 relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/3 ml-4 top-0 h-full w-0.5 bg-gray-200 z-0"
              style={{ transform: "translateX(-50%)" }}
            />
            {journeySteps.map((step, idx) => (
              <div key={idx} className="contents">
                {/* Left: Title */}
                <div className="flex justify-end items-center pr-6">
                  <h3 className="text-lg font-bold text-gray-900 text-right">
                    {step.title}
                  </h3>
                </div>
                {/* Center: Step Icon */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="h-6 flex-1" />
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border-4 border-blue-500 bg-white text-[#31c9b7] font-bold text-base">
                    {/* Dot */}
                  </div>
                  <div className="h-6 flex-1" />
                </div>
                {/* Right: Description */}
                <div className="flex items-center pl-6">
                  <p className="text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col gap-8">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full border-2 border-[#31c9b7] bg-white text-[#31c9b7] font-bold text-base mt-1" />
                  {idx !== journeySteps.length - 1 && (
                    <div
                      className="w-0.5 bg-gray-200 flex-1 my-1"
                      style={{ minHeight: "32px" }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
