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
            <div className="absolute left-0 right-0 h-[2px] bg-[#00E5BE]/30 top-[22px]" />

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
                  <div className="w-4 h-4 rounded-full bg-[#00E5BE] mb-4 relative">
                    {/* Navigation arrows */}
                    {index === 0 && (
                      <div className="absolute -left-8 top-0 text-[#00E5BE]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    {index === timelineData.length - 1 && (
                      <div className="absolute -right-8 top-0 text-[#00E5BE]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

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
