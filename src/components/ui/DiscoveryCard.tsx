import { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";

export function DiscoveryCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 w-70 flex flex-col drop-shadow-xl transition-all duration-300 ease-in-out relative ${
        isHovered ? "max-h-[500px]" : "max-h-[130px]"
      }`}
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)" }}
      role="region"
      aria-label="Discovery Scope and Context"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BorderBeam
        duration={3}
        size={60}
        colorFrom="#ff0000"
        colorTo="#00ff00"
        borderWidth={3}
      />
      <h2 className="text-xl font-bold text-gray-900 mb-4">Discovery</h2>
      <div className="bg-gray-100 rounded-md px-4 py-2 mb-4">
        <span className="text-md font-semibold text-gray-700">
          Scope and Context
        </span>
      </div>
      <ul
        className={`list-disc list-inside space-y-2 text-gray-600 text-base transition-all duration-300 ease-in-out ${
          isHovered
            ? "opacity-100 max-h-32 mt-2"
            : "opacity-0 max-h-0 mt-0 overflow-hidden pointer-events-none"
        }`}
        aria-hidden={!isHovered}
      >
        <li>Governance</li>
        <li>Business Logic</li>
        <li>Data Flow Analysis</li>
        <li>Threat Modeling</li>
      </ul>
    </div>
  );
}
