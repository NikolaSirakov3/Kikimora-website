import { Button } from "@/components/ui/button";
import Player from "lottie-react";
import blueDotAnimation from "@/assets/BlinkingBlueDot.json";
import socialNetworkAnimation from "@/assets/Social Network.json";

function SMEHero() {
  return (
    <section className="w-full bg-[#f2f7ff] flex flex-col items-center py-24 px-4 text-center">
      <div
        className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto relative"
        style={{ minHeight: 320 }}
      >
        {/* Left: Hero Text */}
        <div
          className="flex-1 min-w-0 md:w-2/5 z-10"
          style={{ maxWidth: "40%" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827] font-orbitron leading-tight text-left md:text-left">
            Stop Juggling Threats and
            <br />
            Regulations.
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#31c9b7] mt-2 mb-4 text-left md:text-left">
            Start Growing Your Business.
          </h2>
          <p className="max-w-2xl text-lg text-[#374151] mb-8 font-montserrat text-left md:text-left">
            Kikimora is the all-in-one cybersecurity and compliance platform built
            for European SMEs. We protect your business so you can build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button
              className="bg-[#31c9b7] text-white hover:bg-[#2bb3a3] px-8 py-4 rounded-lg font-montserrat text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
              aria-label="View Features"
            >
              View Features
            </Button>
            <Button
              variant="outline"
              className="bg-white text-[#111827] border border-[#d1d5db] hover:bg-[#f3f4f6] px-8 py-4 rounded-lg font-montserrat text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
              aria-label="Book Demo"
            >
              Book Demo
            </Button>
          </div>
        </div>
        {/* Right: Social Network as background, Blue Dot on top right */}
        <div
          className="flex-1 min-w-0 flex justify-center items-center md:w-2/5 relative"
          style={{ maxWidth: "40%" }}
        >
          {/* Social Network Animation as background */}
          <Player
            animationData={socialNetworkAnimation}
            autoplay
            loop
            style={{
              height: 260,
              width: 260,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          {/* Blue Dot Animation in top right */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
            }}
          >
            <Player
              animationData={blueDotAnimation}
              autoplay
              loop
              style={{ height: 48, width: 48 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { SMEHero };
