import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="pt-20 w-[99.1vw] flex items-center justify-center min-h-[600px] px-8 md:px-16 lg:px-24 bg-gray-100">
      <div className="w-[1200px] flex justify-between items-center">
        <div className="flex flex-col gap-6 max-w-[600px]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-600 text-lg">{description}</p>
          <p className="text-gray-600 text-lg mt-4">
            All your security needs in a single package!
          </p>
          <div>
            <Button
              variant="default"
              className="bg-[#4169E1] hover:bg-[#3154b3] text-white px-8 py-6 text-lg rounded-full"
            >
              Download Brochure
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative w-[550px]">
          {/* Floating Info Boxes */}
          <div className="absolute top-[-30px] left-60 z-10 bg-yellow-100 border border-yellow-100 rounded-lg shadow-lg px-4 py-2 text-gray-900 text-base font-semibold max-w-[220px]">
            Reduce security incidents by up to{" "}
            <span className="text-green-600 font-bold">35%</span>
          </div>
          <div className="absolute top-3/4 left-[-60px] -translate-y-1/2 z-10 bg-yellow-100 border border-yellow-100 rounded-lg shadow-lg px-4 py-2 text-gray-900 text-base font-semibold max-w-[180px]">
            Cut operational costs by up to{" "}
            <span className="text-red-600 font-bold">70%</span>
          </div>
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-10 bg-yellow-100 border border-yellow-100 rounded-lg shadow-lg px-4 py-2 text-gray-900 text-base font-semibold max-w-[220px]">
            Complete compliance tasks{" "}
            <span className="text-green-600 font-bold">40% quicker</span>
          </div>
          <div className="absolute top-2/3 right-[-120px] -translate-y-1/2 z-10 bg-yellow-100 border border-yellow-100 rounded-lg shadow-lg px-4 py-2 text-gray-900 text-base font-semibold max-w-[220px]">
            <span className="text-red-600 font-bold">99%</span> Reduction of
            'Critical' Vulnerabilities
          </div>
          {/* Main Image */}
          <img
            src="/menu3.jfif"
            alt="Kikimora Security"
            className="w-[550px] h-auto object-contain z-0"
          />
        </div>
      </div>
    </div>
  );
}
