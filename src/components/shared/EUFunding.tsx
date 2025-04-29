import React from "react";

export function EUFunding() {
  return (
    <div className="w-full bg-[#001324] py-8">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
        {/* Left side - Text */}
        <div className="flex-1 pr-8">
          <p className="text-white text-sm">
            Kikimora.io has been supported by "Vitosha Venture Partners Fund I",
            a private equity fund, co-financed by the European Structural and
            Investment Funds under the operational program "Innovation and
            Competitiveness 2014-2020", managed by the Fund Manager of Financial
            Instruments in Bulgaria.
          </p>
        </div>

        {/* Right side - Logos */}
        <div className="flex items-center gap-8">
          <img
            src="/eu-flag.png"
            alt="European Union Flag"
            className="h-16 object-contain"
          />
          <img
            src="/innovation.png"
            alt="Innovation and Competitiveness Logo"
            className="h-16 object-contain"
          />
          <img
            src="/funds.png"
            alt="Fund of Funds Logo"
            className="h-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
