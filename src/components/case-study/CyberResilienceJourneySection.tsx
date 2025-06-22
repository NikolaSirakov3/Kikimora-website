import { FC } from "react";

const journeySteps = [
  {
    number: "01",
    title: "Discover & Assess",
    description:
      "We begin with a deep dive into your unique environment, assets, data flows, and threat landscape to establish a comprehensive security baseline.",
  },
  {
    number: "02",
    title: "Unify & Prioritize",
    description:
      "We deploy the Kikimora.io platform to centralize your security data, continuously manage your attack surface, and use AI-driven analysis to prioritize the most critical risks.",
  },
  {
    number: "03",
    title: "Harden & Defend",
    description:
      "Our expert team implements proactive defenses, including system hardening, 24/7 monitoring, and rigorous penetration testing to strengthen your security posture.",
  },
  {
    number: "04",
    title: "Train & Govern",
    description:
      "We empower your staff through targeted security training and provide ongoing governance and strategic advisory to ensure continuous improvement, maturity, and compliance.",
  },
];

export const CyberResilienceJourneySection: FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Your Journey to Cyber Resilience in Four Steps
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A clear, structured, and manageable journey to healthcare
            cybersecurity excellence.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
