import React from "react";

export function DiscoveryCard() {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 w-80 min-h-[320px] flex flex-col drop-shadow-xl border border-gray-100"
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)" }}
      role="region"
      aria-label="Discovery Scope and Context"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Discovery</h2>
      <div className="bg-gray-100 rounded-md px-4 py-2 mb-4">
        <span className="text-lg font-semibold text-gray-700">
          Scope and
          <br />
          Context
        </span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
        <li>Governance</li>
        <li>Business Logic</li>
        <li>Data Flow Analysis</li>
        <li>Threat Modeling</li>
      </ul>
    </div>
  );
}
