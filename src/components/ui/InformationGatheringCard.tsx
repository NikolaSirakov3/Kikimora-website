import { useState } from "react";

export function InformationGatheringCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 w-70 flex flex-col drop-shadow-xl transition-all duration-300 ease-in-out relative ${
        isHovered ? "max-h-[500px]" : "max-h-[130px]"
      }`}
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)" }}
      role="region"
      aria-label="Information Gathering Card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Information Gathering
      </h2>
      <div className="flex flex-row gap-6">
        <div className="w-1/3">
          <div className="bg-gray-100 rounded-md px-4 py-2 mb-2 w-fit">
            <span className="text-md font-semibold text-gray-700 whitespace-nowrap">
              Asset Inventory
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
            <li>Cloud Infrastructure</li>
            <li>Application Layer</li>
            <li>OS Layer</li>
            <li>Network Infrastructure</li>
          </ul>
        </div>
        <div className="w-2/3">
          <div className="bg-gray-100 rounded-md px-4 py-2 mb-2 w-fit">
            <span className="text-md font-semibold text-gray-700 whitespace-nowrap pr-20">
              Attack Surface Management
            </span>
          </div>
          <div
            className={`grid grid-cols-2 gap-x-4 space-y-1 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
              isHovered
                ? "opacity-100 max-h-40 mt-2"
                : "opacity-0 max-h-0 mt-0 overflow-hidden pointer-events-none"
            }`}
            aria-hidden={!isHovered}
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Certificate Issues</li>
              <li>Exposed Services</li>
              <li>User Accounts Monitoring</li>
              <li>Unapproved Software</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Network Segmentation</li>
              <li>Domain Issues</li>
              <li>File Integrity Monitoring</li>
              <li>Data Leakage Issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
