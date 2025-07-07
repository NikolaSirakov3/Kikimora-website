import React from "react";
import { DiscoveryCard } from "../components/ui/DiscoveryCard";

const SecurityBundle: React.FC = () => {
  return (
    <div className="min-h-screen w-[99.12vw] bg-gray-100">
      {/* Hero Section */}
      <section className="mt-10">
        <div className="max-w-[1300px] mx-auto py-20 flex flex-col md:flex-row gap-8 items-start relative">
          {/* Discovery Card */}
          <div className="flex-shrink-0 md:mr-8 mb-8 md:mb-0 relative z-10">
            <DiscoveryCard />
            {/* Connector Line SVG */}
            <svg
              className="hidden md:block absolute top-2 right-[-180px] z-20"
              width="220"
              height="120"
              viewBox="0 0 220 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: "none" }}
            >
              {/* Line */}
              <line
                x1="10"
                y1="10"
                x2="210"
                y2="110"
                stroke="#B0B6BE"
                strokeWidth="2"
              />
              {/* Start Dot */}
              <circle cx="10" cy="10" r="3" fill="#B0B6BE" />
              {/* End Dot */}
              <circle cx="210" cy="110" r="3" fill="#B0B6BE" />
            </svg>
          </div>
          {/* Security Center Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/security-centre.svg"
              alt="Security Center"
              className="w-[80vw] md:w-[60vw] h-[70vh] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityBundle;
