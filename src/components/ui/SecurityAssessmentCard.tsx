import React, { useState } from "react";

export function SecurityAssessmentCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col drop-shadow-xl transition-all duration-300 ease-in-out relative ${
        isHovered ? "max-h-[600px]" : "max-h-[300px]"
      }`}
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)" }}
      role="region"
      aria-label="Cybersecurity Assessment Card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Cybersecurity Assessment
      </h2>
      {/* Penetration Testing */}
      <div className="mb-3">
        <div className="bg-gray-100 rounded-lg px-6 py-3 mb-1 w-full font-semibold text-lg text-gray-700 text-center shadow-sm">
          Penetration Testing
        </div>
        <ul
          className={`list-disc list-inside space-y-1 text-gray-600 text-base transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 max-h-32 mt-2"
              : "opacity-0 max-h-0 mt-0 overflow-hidden pointer-events-none"
          }`}
          aria-hidden={!isHovered}
        >
          <li>Applications</li>
          <li>APIs</li>
          <li>SAST/DAST testing</li>
          <li>Network Infrastructure</li>
        </ul>
      </div>
      {/* Vulnerability Scanning */}
      <div className="mb-3">
        <div className="bg-gray-100 rounded-lg px-6 py-3 mb-1 w-full font-semibold text-lg text-gray-700 text-center shadow-sm">
          Vulnerability Scanning
        </div>
        <ul
          className={`list-disc list-inside space-y-1 text-gray-600 text-base transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 max-h-40 mt-2"
              : "opacity-0 max-h-0 mt-0 overflow-hidden pointer-events-none"
          }`}
          aria-hidden={!isHovered}
        >
          <li>Cloud Infrastructure</li>
          <li>Application Layer</li>
          <li>OS Layer</li>
          <li>Network Infrastructure</li>
        </ul>
      </div>
      {/* Agent Deployment */}
      <div>
        <div className="bg-gray-100 rounded-lg px-6 py-3 mb-1 w-full font-semibold text-lg text-gray-700 text-center shadow-sm">
          Agent Deployment
        </div>
        <ul
          className={`list-disc list-inside space-y-1 text-gray-600 text-base transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 max-h-32 mt-2"
              : "opacity-0 max-h-0 mt-0 overflow-hidden pointer-events-none"
          }`}
          aria-hidden={!isHovered}
        >
          <li>Vulnerability Monitoring</li>
          <li>Policy Compliance</li>
          <li>System Hardening</li>
        </ul>
      </div>
    </div>
  );
}
