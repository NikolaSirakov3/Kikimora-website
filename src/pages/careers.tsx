import React from "react";
import { BriefcaseBusiness } from "lucide-react";

export function Careers() {
  return (
    <main className="w-[99.1vw] min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-14 flex flex-col items-center my-10">
        <h1 className="text-5xl md:text-6xl font-bold text-black text-center tracking-tight drop-shadow-lg">
          Open Positions
        </h1>
      </header>
      {/* Card Section */}
      <section className="w-[1200px] flex justify-center z-10">
        <div className="w-full max-w-[1200px] rounded-3xl bg-[#00345B] shadow-2xl p-8 flex flex-col border border-white/10">
          <div className="flex flex-col items-start ml-[10px]">
            <div className="flex flex-row items-center gap-4 mb-10">
              <BriefcaseBusiness
                size={48}
                className="text-[#29ABE2]"
                aria-hidden="true"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-0">
                SharePoint & OneDrive Specialist
              </h2>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="bg-[#01486B] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Contract
              </span>
              <span className="bg-[#23406C] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Technical
              </span>
              <span className="bg-[#1A6B6B] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Senior
              </span>
            </div>
            <p className="text-white text-base md:text-lg mb-6">
              We are looking for several profiles for a SharePoint and OneDrive
              migration specialist. The key requested skill is being a real
              expert with SharePoint and OneDrive migration (Migrations done)
              AND Sharegate and Planner with Apps4.Pro Enterprise. Those
              requirements are MANDATORY; otherwise, candidates are rejected.
              The starting date is ASAP. Please send a CV and rate if you have
              suitable specialists.
            </p>
            <button
              className="bg-[#31c9b7] hover:bg-[#3EDDCA] text-white font-semibold px-6 py-3 rounded-full transition-colors text-base w-fit"
              aria-label="Learn more about this position"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* More open position cards will be added here */}
    </main>
  );
}

export default Careers;
