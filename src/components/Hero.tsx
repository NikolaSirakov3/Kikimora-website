import React from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-screen bg-[#001E38] flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-between w-full px-48 max-w-[2000px]">
        {/* Left side - Content */}
        <div className="flex flex-col gap-6 max-w-[600px]">
          <h1 className="text-5xl text-white font-conthrax leading-tight">
            Elevating your security posture
          </h1>
          <p className="text-white/80 text-lg font-montserrat">
            Integrate, prioritize, and build efficient vulnerability management
            teams with AI-powered insights and user-friendly control
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-8 py-6 font-montserrat">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-6 border border-[#3EDDCA] rounded-full py-2 px-4 w-fit">
            <span className="text-[#3EDDCA]">⚡</span>
            <span className="text-white/60 text-sm font-montserrat">
              Discover Kikimora.io for software developers
            </span>
            <span className="text-[#3EDDCA] ml-2 cursor-pointer hover:underline font-montserrat">
              Explore →
            </span>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <div className="w-[500px] h-[500px] bg-[#8C50C8] rounded-lg">
            {/* Placeholder for the shield image */}
          </div>
        </div>
      </div>
    </section>
  );
}
