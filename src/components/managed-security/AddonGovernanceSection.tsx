import { useState } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";

export function AddonGovernanceSection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#001324] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Governance Card + Schedule Demo */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] min-h-[320px] text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#001324] mb-2 font-montserrat uppercase tracking-wide">
                  Add-on: Governance
                </h2>
                <div className="text-[#31c9b7] font-bold mb-2">
                  TAILORED PRICING
                </div>
                <p className="text-[#374151] text-base font-montserrat mb-4">
                  Delegate the core components of managing your IT
                  infrastructure to a dedicated expert, allowing leadership to
                  focus on core operations rather than cybersecurity complexity.
                </p>
              </div>
              <div className="bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] flex flex-col items-center justify-center min-h-[180px] text-center">
                <h3 className="text-xl font-bold text-[#001324] mb-2 font-montserrat">
                  Schedule a Demo
                </h3>
                <p className="text-[#374151] text-base font-montserrat mb-4">
                  See how our Governance add-on can transform your security
                  operations.
                </p>
                <button
                  className="mt-2 bg-[#31c9b7] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#2bb3a3] transition-colors"
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                >
                  Book a Demo
                </button>
              </div>
            </div>
            {/* Right Column: Governance Features */}
            <div className="bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] min-h-[320px] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#001324] mb-4 font-montserrat">
                Governance Features:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-[#374151] text-base font-montserrat">
                <li>Gap analysis and risk management</li>
                <li>Security procedures and policy maintenance</li>
                <li>Security strategy development</li>
                <li>Business continuity/disaster recovery training</li>
                <li>Operational-level involvement (approvals, audits)</li>
                <li>Advisory on emerging technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
