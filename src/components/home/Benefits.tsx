import React from "react";
import {
  CircleDot,
  ClipboardList,
  Timer,
  AlertTriangle,
  FileCheck,
  Settings,
} from "lucide-react";

export function Benefits() {
  return (
    <div className="bg-[#001E38] py-24">
      <div className="w-full px-[10%] flex flex-col items-center">
        {/* Header */}
        <h2 className="text-5xl text-white font-conthrax text-center mb-6">
          Benefits
        </h2>
        <p className="text-white/80 text-lg font-montserrat text-center max-w-[800px] mb-16">
          Stay on top of your vulnerabilities and easily prioritize and manage
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-[1200px] z-10">
          {/* Enhanced efficiency */}
          <div className="bg-[#002A4E] rounded-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-montserrat mb-4">
                  Enhanced efficiency
                </h3>
                <p className="text-white/80 font-montserrat">
                  Integrate seamlessly with existing IT systems and processes
                  and ensure consistent security policies across the board
                </p>
              </div>
              <CircleDot className="text-[#3EDDCA] w-10 h-10 flex-shrink-0" />
            </div>
          </div>

          {/* Higher productivity */}
          <div className="bg-[#002A4E] rounded-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-montserrat mb-4">
                  Higher productivity
                </h3>
                <p className="text-white/80 font-montserrat">
                  Simplified incorporation of security practices into the
                  development and operational workflows, reducing friction and
                  enhancing productivity
                </p>
              </div>
              <ClipboardList className="text-[#3EDDCA] w-10 h-10 flex-shrink-0" />
            </div>
          </div>

          {/* Faster time to remediate */}
          <div className="bg-[#002A4E] rounded-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-montserrat mb-4">
                  Faster time to remediate
                </h3>
                <p className="text-white/80 font-montserrat">
                  Through clear overview and automated prioritization, teams
                  save time and resources while tackling the most critical
                  vulnerabilities
                </p>
              </div>
              <Timer className="text-[#3EDDCA] w-10 h-10 flex-shrink-0" />
            </div>
          </div>

          {/* Informed decision-making */}
          <div className="bg-[#002A4E] rounded-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-montserrat mb-4">
                  Informed decision-making
                </h3>
                <p className="text-white/80 font-montserrat">
                  Leverages AI to automate the analysis of security data,
                  reducing the time and resources required to identify threats
                  and vulnerabilities
                </p>
              </div>
              <AlertTriangle className="text-[#3EDDCA] w-10 h-10 flex-shrink-0" />
            </div>
          </div>

          {/* Advanced compliance speed */}
          <div className="bg-[#002A4E] rounded-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-montserrat mb-4">
                  Advanced compliance speed
                </h3>
                <p className="text-white/80 font-montserrat">
                  Adapts to various regulations and provides actionable insights
                  to stay ahead of compliance deadlines via automated
                  recommendations
                </p>
              </div>
              <FileCheck className="text-[#3EDDCA] w-10 h-10 flex-shrink-0" />
            </div>
          </div>

          {/* Significant expense reduction */}
          <div className="bg-[#002A4E] rounded-lg p-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-montserrat mb-4">
                  Significant expense reduction
                </h3>
                <p className="text-white/80 font-montserrat">
                  Through clear dashboards, faster decision making, automations
                  and increased productivity, cutting costs spend on
                  vulnerability management is a fact
                </p>
              </div>
              <Settings className="text-[#3EDDCA] w-10 h-10 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
