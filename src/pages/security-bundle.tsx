import React, { useRef } from "react";
import { DiscoveryCard } from "../components/ui/DiscoveryCard";
import { SecurityTrainingCard } from "../components/ui/SecurityTrainingCard";
import { LoginCard } from "../components/ui/LoginCard";

const SecurityBundle: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);

  return (
    <div className="min-h-screen w-[99.12vw] bg-gray-100">
      {/* Hero Section */}
      <section className="mt-10">
        <div className="max-w-[1300px] mx-auto py-20 flex flex-col md:flex-row gap-0 items-start relative">
          {/* Security Center Image */}
          <div className="flex-1 flex justify-center items-center relative">
            <img
              ref={laptopRef}
              src="/security-centre.svg"
              alt="Security Center"
              className="w-[80vw] md:w-[60vw] h-[70vh] object-contain"
            />
            {/* Discovery Card Overlapping */}
            <div
              ref={cardRef}
              className="absolute z-10"
              style={{ top: "-30px", left: 0 }}
            >
              <DiscoveryCard />
            </div>
            {/* Security Training Card Overlapping, below DiscoveryCard */}
            <div className="absolute z-10" style={{ top: "180px", left: 0 }}>
              <SecurityTrainingCard />
            </div>
            {/* Login Card Overlapping, below SecurityTrainingCard */}
            <div className="absolute z-10" style={{ top: "370px", left: 0 }}>
              <LoginCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityBundle;
