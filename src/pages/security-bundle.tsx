import React, { useRef, useState } from "react";
import { DiscoveryCard } from "../components/ui/DiscoveryCard";
import { AnimatedLineDot } from "../components/ui/AnimatedLineDot";

const SecurityBundle: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DiscoveryCard />
              {/* Animated LineDot on hover */}
              {isHovered && (
                <div className="absolute top-[120px] left-[290px] -translate-y-full translate-x-1/2 z-20">
                  <AnimatedLineDot animate={isHovered} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityBundle;
