import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface AnnouncementBarProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

export function AnnouncementBar({ onVisibilityChange }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controlVisibility = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        const newVisibility = currentScrollY === 0;
        setIsVisible(newVisibility);
        onVisibilityChange(newVisibility);
      }
    };

    window.addEventListener("scroll", controlVisibility);
    return () => {
      window.removeEventListener("scroll", controlVisibility);
    };
  }, [onVisibilityChange]);

  return (
    <div
      data-announcement
      className={`w-full bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white fixed top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <Link
          to="/trykikimora"
          className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="text-sm font-medium">
            Start with Kikimora community today
          </span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
