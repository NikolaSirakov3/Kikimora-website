import React, { useState } from "react";

export function DefenseMechanismsCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 w-84 flex flex-col drop-shadow-xl transition-all duration-300 ease-in-out relative max-h-[500px]"
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)" }}
      role="region"
      aria-label="Defense Mechanisms Card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
        Defense
        Mechanisms
      </h2>
      <div className="bg-gray-100 rounded-md px-4 py-2 w-fit">
        <span className="text-md font-semibold text-gray-700 whitespace-nowrap">
          System Security
          Hardening
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
        <li>Windows</li>
        <li>Linux</li>
        <li>Docker</li>
        <li>Kubernetes</li>
      </ul>
    </div>
  );
}
