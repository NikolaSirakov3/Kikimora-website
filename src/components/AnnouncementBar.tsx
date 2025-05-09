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
      className={`w-full bg-gray-900 text-white fixed top-0 z-50 transition-transform duration-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <Link
          to="/trykikimora"
          className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group"
        >
          <span className="text-sm font-medium text-[#05c7a3]">
            Start free with Kikimora community today!
          </span>
          <ArrowRight className="w-4 h-4 text-[#05c7a3] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
