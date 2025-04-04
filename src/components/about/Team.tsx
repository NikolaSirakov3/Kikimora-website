import React from "react";

export function Team() {
  return (
    <div className="bg-[#001E38] py-20 w-full">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col items-center">
          {/* Header */}
          <h2 className="text-5xl text-white font-conthrax text-center mb-4">
            Meet the team
          </h2>
          <p className="text-white/60 font-montserrat text-center mb-8">
            A dream team, crafting the ultimate solution
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 mb-12">
            <button className="bg-[#00E5BE] text-[#001E38] font-montserrat font-semibold px-6 py-3 rounded-full hover:bg-[#00E5BE]/90 transition-colors">
              Book a Call with us
            </button>
            <button className="bg-[#001E38] border border-[#00E5BE] text-[#00E5BE] font-montserrat font-semibold px-6 py-3 rounded-full hover:bg-[#00E5BE]/10 transition-colors">
              Invest in Kikimora.io
            </button>
          </div>

          {/* Team image placeholder */}
          <div className="w-full aspect-[32/9] bg-[#00539B] rounded-t-3xl" />
        </div>
      </div>
    </div>
  );
}
