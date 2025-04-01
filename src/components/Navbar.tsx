import React from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#00539B] flex items-center justify-between">
      {/* Left side - Logo */}
      <div className="flex items-center gap-2 ml-48">
        <Shield className="h-6 w-6 text-white" />
        <span className="text-white text-xl font-conthrax">Kikimora</span>
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className={`text-sm transition-colors font-montserrat ${
            location.pathname === "/"
              ? "text-[#29ABE2] underline decoration-[#29ABE2] decoration-2 underline-offset-4"
              : "text-white hover:text-[#29ABE2] hover:underline hover:decoration-[#29ABE2] hover:decoration-2 hover:underline-offset-4"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-sm transition-colors font-montserrat ${
            location.pathname === "/about"
              ? "text-[#29ABE2] underline decoration-[#29ABE2] decoration-2 underline-offset-4"
              : "text-white hover:text-[#29ABE2] hover:underline hover:decoration-[#29ABE2] hover:decoration-2 hover:underline-offset-4"
          }`}
        >
          About us
        </Link>
        <Link
          to="/developers"
          className={`text-sm transition-colors font-montserrat ${
            location.pathname === "/developers"
              ? "text-[#29ABE2] underline decoration-[#29ABE2] decoration-2 underline-offset-4"
              : "text-white hover:text-[#29ABE2] hover:underline hover:decoration-[#29ABE2] hover:decoration-2 hover:underline-offset-4"
          }`}
        >
          Developers
        </Link>
        <Link
          to="/blog"
          className={`text-sm transition-colors font-montserrat ${
            location.pathname === "/blog"
              ? "text-[#29ABE2] underline decoration-[#29ABE2] decoration-2 underline-offset-4"
              : "text-white hover:text-[#29ABE2] hover:underline hover:decoration-[#29ABE2] hover:decoration-2 hover:underline-offset-4"
          }`}
        >
          Blog
        </Link>
        <Link
          to="/docs"
          className={`text-sm transition-colors font-montserrat ${
            location.pathname === "/docs"
              ? "text-[#29ABE2] underline decoration-[#29ABE2] decoration-2 underline-offset-4"
              : "text-white hover:text-[#29ABE2] hover:underline hover:decoration-[#29ABE2] hover:decoration-2 hover:underline-offset-4"
          }`}
        >
          Documentation
        </Link>
      </div>

      {/* Right side - Button */}
      <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full mr-48 font-montserrat text-sm">
        Request Demo
      </Button>
    </nav>
  );
}
