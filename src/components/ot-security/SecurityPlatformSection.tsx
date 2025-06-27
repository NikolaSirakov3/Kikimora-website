import React from "react";
import { Button } from "@/components/ui/button";

const CARDS = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
        {/* Monitor SVG */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <rect
            x="6"
            y="8"
            width="20"
            height="14"
            rx="3"
            fill="#DBEAFE"
            stroke="#60A5FA"
            strokeWidth="2"
          />
          <rect x="12" y="24" width="8" height="2" rx="1" fill="#60A5FA" />
        </svg>
      </span>
    ),
    title: "Unified Visibility",
    description:
      "Complete asset discovery and monitoring across IT/OT environments with real-time threat detection.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
        {/* Target/Context SVG */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="#34D399"
            strokeWidth="2"
            fill="#D1FAE5"
          />
          <circle
            cx="16"
            cy="16"
            r="7"
            stroke="#34D399"
            strokeWidth="2"
            fill="#fff"
          />
          <circle cx="16" cy="16" r="2" fill="#34D399" />
        </svg>
      </span>
    ),
    title: "Contextual Intelligence",
    description:
      "OT-aware risk prioritization that understands your operational context and business impact.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
        {/* Expert SVG */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="#A78BFA"
            strokeWidth="2"
            fill="#EDE9FE"
          />
          <path
            d="M16 18c-3 0-6 1.5-6 4.5V25h12v-2.5c0-3-3-4.5-6-4.5Z"
            fill="#A78BFA"
          />
          <circle
            cx="16"
            cy="13"
            r="4"
            fill="#fff"
            stroke="#A78BFA"
            strokeWidth="2"
          />
        </svg>
      </span>
    ),
    title: "Expert Services",
    description:
      "24/7 monitoring, threat hunting, and on-demand consulting from OT security specialists.",
  },
];

function SecurityPlatformSection() {
  return (
    <section
      className="w-[99vw] flex flex-col items-center py-24 px-4 bg-[#f8f9fa]"
      aria-labelledby="platform-heading"
    >
      <h2
        id="platform-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#111827] font-orbitron"
      >
        Introducing the Kikimora Security Platform
      </h2>
      <p className="text-lg text-[#374151] font-montserrat text-center max-w-2xl mb-16">
        The single source of truth that bridges the visibility gap across your
        entire technology landscape. We provide the unified intelligence,
        contextual data, and expert services you need to move from a reactive to
        a resilient security posture.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {CARDS.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-8 flex flex-col items-center shadow-sm h-full border border-[#e5e7eb]"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#111827] font-montserrat text-center">
              {title}
            </h3>
            <p className="text-[#374151] text-base font-montserrat text-center mb-2">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { SecurityPlatformSection };
