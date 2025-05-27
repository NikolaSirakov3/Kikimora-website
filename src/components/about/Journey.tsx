import React from "react";

const timelineData = [
  {
    year: "2022",
    title: "Pre-seed Investment",
  },
  {
    year: "2022",
    title: "Kikimora.io MVP release",
  },
  {
    year: "2023",
    title: "Seed investment round",
  },
  {
    year: "2023",
    title: "Qualys integration",
  },
  {
    year: "2025",
    title: "AI Assistant Release",
  },
  {
    year: "2025",
    title: "Integrated Consulting",
  },
];

export function Journey() {
  return (
    <div className="bg-[#001E38] w-full">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full py-20">
          {/* Header */}
          <h2 className="text-5xl text-white font-conthrax text-center mb-20">
            Our journey
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 h-[2px] bg-[#00E5BE]/30 top-[50px]" />

            {/* Timeline points */}
            <div className="relative grid grid-cols-6 gap-4">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index === 0
                      ? "items-start"
                      : index === timelineData.length - 1
                        ? "items-end"
                        : "items-center"
                  }`}
                >
                  {/* Year */}
                  <div className="text-white/60 font-montserrat text-lg mb-4">
                    {item.year}
                  </div>

                  {/* Point */}
                  <div className="w-4 h-4 rounded-full bg-[#00E5BE] mb-4 relative"></div>

                  {/* Title */}
                  <div className="text-white font-montserrat text-sm text-center">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
