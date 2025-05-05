import React from "react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="bg-[#001E38] relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3EDDCA",
            },
            shape: {
              type: "star",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: false,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#3EDDCA",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
                mode: "grab",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="max-w-[1500px] mx-auto">
        {/* First Section */}
        <section className="h-screen relative z-10">
          <div className="h-3/4 flex items-center">
            {/* Left side - Content */}
            <div className="flex flex-col gap-6 w-1/2 pl-[10%] mt-10">
              <h1 className="text-5xl text-white font-conthrax leading-tight">
                Elevating your security posture
              </h1>
              <p className="text-white/80 text-lg font-montserrat">
                Integrate, prioritize, and build efficient vulnerability
                management teams with AI-powered insights and user-friendly
                control
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
            <div className="w-1/2 flex justify-center mt-10">
              <div className="w-[500px] h-[500px] bg-[#8C50C8] rounded-lg">
                {/* Placeholder for the shield image */}
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="h-screen -mt-[480px]">
          <div className="h-full flex items-center">
            {/* Left side - Dashboard Image */}
            <div className="w-1/2 flex justify-center">
              <div className="w-[600px] h-[400px] bg-[#8C50C8] rounded-lg z-10">
                {/* Placeholder for the dashboard image */}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col gap-6 w-1/2 pr-[10%]">
              <h2 className="text-5xl text-white font-conthrax leading-tight">
                The platform for efficient teams.
              </h2>
              <p className="text-white/80 text-lg font-montserrat">
                Seamless integration in your workflow: Effortless data input,
                customized dashboards, and AI-assisted security insights at your
                fingertips.
              </p>
              <div className="flex gap-4 mt-4">
                <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-8 py-6 font-montserrat">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
