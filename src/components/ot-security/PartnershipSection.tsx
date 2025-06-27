import React from "react";
import { Button } from "@/components/ui/button";

function PartnershipSection() {
  return (
    <section
      className="w-full flex flex-col items-center py-16 px-4 bg-gray-50"
      aria-labelledby="partnership-heading"
    >
      <h2
        id="partnership-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-2 font-montserrat"
      >
        More Than a Platform.{" "}
        <span className="text-[#2563eb]">A Partnership.</span>
      </h2>
      <p className="text-lg md:text-xl text-center text-[#374151] mb-12 max-w-2xl">
        Bridge the OT security skills gap with our expert team.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mb-10">
        {/* Card 1 */}
        <div
          className="flex-1 bg-white rounded-2xl shadow-md border border-[#e5e7eb] p-8 flex flex-col items-start"
          role="region"
          aria-label="Managed Security Services"
        >
          <div className="bg-[#e8f0fe] rounded-full p-4 mb-4">
            {/* Monitor Icon */}
            <svg
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <rect width="48" height="48" rx="24" fill="#E8F0FE" />
              <rect
                x="14"
                y="18"
                width="20"
                height="12"
                rx="2"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              <rect x="22" y="32" width="4" height="2" rx="1" fill="#2563eb" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-montserrat">
            Managed Security Services
          </h3>
          <p className="text-[#374151] text-base mb-2">
            Focus on your business, we'll handle the security. Our tiered
            managed services provide 24/7 monitoring, threat hunting, and full
            program management, giving you enterprise-grade protection at a
            fraction of the cost of building an in-house OT SOC.
          </p>
        </div>
        {/* Card 2 */}
        <div
          className="flex-1 bg-white rounded-2xl shadow-md border border-[#e5e7eb] p-8 flex flex-col items-start"
          role="region"
          aria-label="Expert Consulting"
        >
          <div className="bg-[#e7f9ef] rounded-full p-4 mb-4">
            {/* User Group Icon */}
            <svg
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <rect width="48" height="48" rx="24" fill="#E7F9EF" />
              <circle
                cx="24"
                cy="22"
                r="5"
                stroke="#22c55e"
                strokeWidth="2.5"
              />
              <path
                d="M16 32c0-3.314 3.582-6 8-6s8 2.686 8 6"
                stroke="#22c55e"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-montserrat">
            Expert Consulting
          </h3>
          <p className="text-[#374151] text-base mb-2">
            Need to conduct a penetration test, model a new threat, or train
            your team? Our world-class cybersecurity experts are available
            on-demand through the platform to help you solve your most complex
            security challenges.
          </p>
        </div>
      </div>
      <Button
        className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-base font-semibold px-8 py-3 rounded-lg shadow"
        asChild
      >
        <a href="#services" aria-label="Explore Our Services">
          Explore Our Services
        </a>
      </Button>
    </section>
  );
}

export { PartnershipSection };
