
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function DevelopersHero() {
  return (
    <section className="relative bg-[#001E38]">
      <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        {/* New badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-[#00E5BE]/10 px-3 py-1 rounded-full">
            <span className="text-[#00E5BE] text-sm font-montserrat">New!</span>
            <span className="text-white/60 text-sm font-montserrat">
              Advanced security integration
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl text-white font-conthrax text-center max-w-5xl mx-auto leading-tight mb-6">
          Empower your application with advanced security
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg font-montserrat text-center max-w-3xl mx-auto mb-10">
          Where cutting-edge vulnerability scanning meets seamless development
          integration. Secure your software development from start to finish,
          effortlessly.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <Button
            className="bg-[#00E5BE] text-[#001E38] hover:bg-[#00E5BE]/90 rounded-lg px-6 py-3 font-montserrat font-semibold flex items-center gap-2"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
          >
            Book Demo
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-[#00E5BE] text-[#00E5BE] hover:bg-[#00E5BE]/10 rounded-full px-6 py-3 font-montserrat font-semibold"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
          >
            Book a Consultation
          </Button>
        </div>

        {/* Video/Dashboard Preview */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#001E38] border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>

          {/* Dashboard preview placeholder */}
          <div className="w-full aspect-[16/9] bg-[#002A4E] rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#002A4E] to-[#001E38] flex items-center justify-center">
              <span className="text-white/20 font-montserrat">
                Dashboard Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
