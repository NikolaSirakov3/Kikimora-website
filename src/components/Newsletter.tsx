import React from "react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <div className="bg-[#001E38] py-20">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          {/* Newsletter Card */}
          <div className="bg-gradient-to-r from-[#003D37] via-[#008A7C] to-[#00BCAA] rounded-3xl p-12 flex justify-between items-center">
            {/* Left side - Content */}
            <div className="flex-1">
              <h2 className="text-5xl text-white font-conthrax mb-4">
                Cybersec news
              </h2>
              <p className="text-white/80 text-lg font-montserrat mb-8">
                Discover the latest in the CyberSecurity industry
              </p>

              {/* Email signup form */}
              <div className="flex items-center gap-4 max-w-[500px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/60 font-montserrat focus:outline-none focus:ring-2 focus:ring-[#3EDDCA]"
                />
                <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-8 py-4 font-montserrat whitespace-nowrap">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="flex-1 flex justify-end">
              <div className="w-[400px] h-[200px] bg-[#00539B] rounded-2xl">
                {/* Placeholder for isometric illustration */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
