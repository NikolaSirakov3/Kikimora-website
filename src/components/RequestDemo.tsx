import React from "react";
import { Button } from "@/components/ui/button";

export function RequestDemo() {
  return (
    <div className="bg-[#001E38]">
      {/* Full-width section with gradient background */}
      <div className="w-screen relative -ml-[50vw] left-1/2">
        <div className="bg-gradient-to-r from-[#2A1D4C] via-[#1B4E5F] to-[#003D37] py-20">
          <div className="px-[5%] mx-auto max-w-[1400px] flex justify-between items-center">
            {/* Left side - Content */}
            <div className="max-w-[800px]">
              <div className="flex flex-col mb-8 leading-none">
                <span className="text-5xl text-white font-conthrax">
                  Secure your code now,
                </span>
                <span className="text-5xl text-white font-conthrax mt-2">
                  request a free demo
                </span>
              </div>
              <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-8 py-6 font-montserrat">
                Request Demo
              </Button>
            </div>

            {/* Right side - Illustration */}
            <div className="w-[400px] h-[300px] bg-[#00539B] rounded-2xl ">
              {/* Placeholder for isometric illustration */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
