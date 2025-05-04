import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: {
    line1: string;
    line2: string;
  };
  description: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
}: HeroSectionProps) {
  return (
    <div className="pt-20 w-[99.2vw] flex items-center justify-between min-h-[600px] px-8 md:px-16 lg:px-24 bg-[#001324]">
      <div className="mt-20 pl-20 flex flex-col gap-6 max-w-[800px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h1>
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            {subtitle.line1}
          </h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mt-6">
            {subtitle.line2}
          </h2>
        </div>
        <p className="text-gray-300 text-lg max-w-[600px]">{description}</p>
        <div>
          <Button
            variant="default"
            className="bg-[#4169E1] hover:bg-[#3154b3] text-white px-8 py-6 text-lg"
          >
            Download Brochure
          </Button>
        </div>
      </div>
      <div className="hidden md:block mt-20 pr-20">
        <img
          src="/Kikimora.png"
          alt="Kikimora Security"
          className="w-[700px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
