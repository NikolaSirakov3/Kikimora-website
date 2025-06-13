import { Button } from "@/components/ui/button";
import { FloatingStatsImage } from "@/components/ui/FloatingStatsImage";

interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  const stats = [
    {
      text: "Reduce security incidents by up to",
      value: "35%",
      valueColor: "green" as const,
      position: {
        top: "-30px",
        left: "60%",
      },
    },
    {
      text: "Cut operational costs by up to",
      value: "70%",
      valueColor: "red" as const,
      position: {
        top: "65%",
        left: "-10px",
        translate: "-50%",
      },
    },
    {
      text: "Complete compliance tasks",
      value: "40% quicker",
      valueColor: "green" as const,
      position: {
        bottom: "-40px",
        left: "50%",
        translate: "-50%",
      },
    },
    {
      text: "Reduction of 'Critical' Vulnerabilities",
      value: "99%",
      valueColor: "red" as const,
      position: {
        top: "46.67%",
        right: "-120px",
        translate: "-50%",
      },
    },
  ];

  return (
    <div className="pt-20 w-[99.1vw] flex items-center justify-center min-h-[600px] px-8 md:px-16 lg:px-24 bg-gray-50">
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
        <FloatingStatsImage
          imageSrc="/menu3.jfif"
          imageAlt="Kikimora Security"
          stats={stats}
        />
      </div>
    </div>
  );
}
