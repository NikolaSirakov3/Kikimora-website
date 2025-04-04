import React from "react";

export function AboutTeam() {
  return (
    <div className="bg-[#001E38] w-full">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full py-20">
          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="flex flex-col max-w-[90%]">
              <h2 className="text-5xl text-white font-conthrax mb-8">
                About the team
              </h2>
              <p className="text-white/80 font-montserrat text-lg leading-relaxed">
                The journey to creating Kikimora.io started when its founders,
                working in cybersecurity, noticed a common issue among their
                clients: even when vulnerabilities were clearly pointed out,
                many weren't fixed. Curious, the team talked to their clients
                and found out that the main problem wasn't about finding these
                security gaps but rather knowing how to prioritize and deal with
                them without stretching their resources too thin.
              </p>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="w-full">
              <div className="w-full aspect-[16/7] bg-[#00539B] rounded-3xl" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-12 mt-12">
            {/* Left Column - Image Placeholder */}
            <div className="w-full">
              <div className="w-full aspect-[16/7] bg-[#00539B] rounded-3xl" />
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-center max-w-[90%] ml-auto">
              <p className="text-white/80 font-montserrat text-lg leading-relaxed">
                To address this, we developed Kikimora.io, a tool designed to
                simplify security management for companies. It works seamlessly
                with existing project management tools like Jira, provides
                automated scans, and offers expert advice, making it easier for
                companies to integrate cybersecurity into their daily workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
