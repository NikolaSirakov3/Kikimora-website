import React, { useState } from "react";
import colorAndBlack from "../../assets/colorAndBlack.png";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

// Define TabType as a union of valid keys
type TabType = "SMART_RISK_SCORE" | "ATTACK_SURFACE" | "ENDPOINT_SECURITY";

// Define the structure of a single message
type Message = {
  animation?: boolean; // Optional property
  message: string;       // Required property
};

// Define the structure of a conversation
type Conversation = {
  title: string;
  messages: Message[];
};

// Define the CONVERSATIONS object with proper typing
const CONVERSATIONS: Record<TabType, Conversation> = {
  SMART_RISK_SCORE: {
    title: "What are the benefits of contextualized risk scores?",
    messages: [
      {
        animation: false,
        message:
          "Focus remediation on the most relevant and impactful risks.",
      },
      {
        message:
          "Reduce noise by filtering out non-critical vulnerabilities.",
      },
      {
        message:
          "	Adapt to evolving threats and organizational changes.",
      },
    ],
  },
  ATTACK_SURFACE: {
    title: "Understanding your attack surface will help you:",
    messages: [
      {
        animation: false,
        message:
          "Eliminate blind spots and unknown exposures.",
      },
      {
        message:
          "Minimize exploitable entry points for attackers.",
      },
      {
        message:
          "Maintain continuous visibility and rapid response capability.",
      },
    ],
  },
  ENDPOINT_SECURITY: {
    title: "Deploying endpoint security is essential to:",
    messages: [
      {
        animation: false,
        message: "Ensure ongoing regulatory compliance and audit readiness.",
      },
      {
        message:
          "Detect and remediate risks at the device level.",
      },
      {
        message:
          "Simplify reporting and support incident investigations.",
      },
    ],
  },
};

// Define the ChatMessageProps type
type ChatMessageProps = {
  animation?: boolean;
  message: string;
  delay?: number;
  name?: string;
};

function ChatMessage({
  animation,
  message,
  delay = 0,
  name,
}: ChatMessageProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const spring = useSpring({
    from: {
      opacity: 0,
      transform: animation ? "translateX(-100%)" : "translateX(-100%)",
    },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView
        ? "translateX(0%)"
        : animation
        ? "translateX(-100%)"
        : "translateX(-100%)",
    },
    delay: delay,
    config: { ...config.gentle },
    reset: true,
  });

  return (
    <animated.div
      ref={ref}
      style={spring}
      className="w-full max-w-[500px] mb-4"
    >
      <div
        className={`rounded-lg p-4 ${animation ? "bg-[#2A2A2A]" : "bg-[#1E1E1E]"}`}
      >
        {animation && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-xs">
              ⚠
            </div>
            <span className="text-white font-medium">
              {name || "Probe Red-Teamer"}
            </span>
          </div>
        )}
        <p className="text-[#A0A0A0] text-sm">{message}</p>
      </div>
    </animated.div>
  );
}

function WarningMessage({ type }: { type: TabType }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 2000,
    config: { duration: 500 },
    reset: true,
  });

  const messages: Record<TabType, string> = {
    SMART_RISK_SCORE: "From 2000 to 20 vulnerabilities",
    ATTACK_SURFACE: "Exploitable Entry Points Detected",
    ENDPOINT_SECURITY: "Endpoints Vulnerable",
  };

  return (
    <animated.div
      ref={ref}
      style={spring}
      className="w-full max-w-[500px] mt-4"
    >
      <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <span className="text-red-500">⚠</span>
          <span className="text-red-500 font-mono uppercase tracking-wider">
            {messages[type]}
          </span>
        </div>
      </div>
    </animated.div>
  );
}

export function AnimatedIntro() {
  const [activeTab, setActiveTab] = useState<TabType>("SMART_RISK_SCORE");
  const [key, setKey] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const chatbotSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0%)" : "translateY(-100%)",
    },
    config: { ...config.gentle },
    reset: true,
  });

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setKey((prev) => prev + 1);
  };

  const currentConversation = CONVERSATIONS[activeTab];

  return (
    <div className="h-[600px] w-full z-20 flex items-center">
      <div className="relative max-w-[500px] mx-auto" style={{ marginTop: "50px", zIndex: 50 }}>
        {/* Logo Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <img
        src={colorAndBlack}
        alt="Company Logo"
        className="h-[50px]" // Adjusted height to a reasonable size for a logo
          />
        </div>
        <div className="relative bg-black px-4 pt-12 pb-4 rounded-lg mb-3">
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => handleTabChange("SMART_RISK_SCORE")}
              className={
                activeTab === "SMART_RISK_SCORE"
                  ? "bg-[#1E1E1E] text-white px-4 py-2 rounded-md"
                  : "bg-transparent text-white px-4 py-2"
              }
            >
              SMART RISK SCORE
            </button>
            <button
              onClick={() => handleTabChange("ATTACK_SURFACE")}
              className={
                activeTab === "ATTACK_SURFACE"
                  ? "bg-[#1E1E1E] text-white px-4 py-2 rounded-md"
                  : "bg-transparent text-white px-4 py-2"
              }
            >
              ATTACK SURFACE
            </button>
            <button
              onClick={() => handleTabChange("ENDPOINT_SECURITY")}
              className={
                activeTab === "ENDPOINT_SECURITY"
                  ? "bg-[#1E1E1E] text-white px-4 py-2 rounded-md"
                  : "bg-transparent text-white px-4 py-2"
              }
            >
              ENDPOINT SECURITY
            </button>
          </div>
        </div>

        <div key={key} className="space-y-2">
          <animated.div
            ref={ref}
            style={chatbotSpring}
            className="bg-white rounded-lg px-4 py-2.5 flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2">
              <span className="text-black">💬</span>
              <span className="text-black font-medium">
                {currentConversation.title}
              </span>
            </div>
          </animated.div>

          {currentConversation.messages.map((msg: Message, index: number) => (
            <ChatMessage
              key={`${key}-${index}`}
              animation={msg.animation}
              message={msg.message}
              delay={500 * (index + 1)}
            />
          ))}
          <WarningMessage type={activeTab} />
        </div>
      </div>
    </div>
  );
}