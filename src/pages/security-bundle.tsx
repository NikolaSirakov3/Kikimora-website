import React from "react";
import { DiscoveryCard } from "../components/ui/DiscoveryCard";

const SecurityBundle: React.FC = () => {
  return (
    <div className="min-h-screen w-[99.12vw] bg-gray-100">
      {/* Hero Section */}
      <section className="mt-10">
        <div className="max-w-[1300px] mx-auto py-20 flex flex-col md:flex-row gap-8 items-start">
          {/* Discovery Card */}
          <div className="flex-shrink-0 md:mr-8 mb-8 md:mb-0">
            <DiscoveryCard />
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
