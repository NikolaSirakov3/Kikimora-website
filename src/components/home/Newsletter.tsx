import React from "react";

export function Newsletter() {
  return (
    <div className="bg-[#001E38] border-t border-white/10">
      <div className="w-full px-[5%] py-6">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between">
          {/* Left side navigation */}
          <div className="flex items-center gap-12">
            <a href="/" className="text-white font-conthrax text-lg">
              Kikimora
            </a>
            <div className="flex gap-12">
              {/* First column */}
              <nav className="flex flex-col gap-3">
                <a
                  href="/"
                  className="text-white/60 hover:text-white font-montserrat text-sm"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white/60 hover:text-white font-montserrat text-sm"
                >
                  About us
                </a>
                <a
                  href="/developers"
                  className="text-white/60 hover:text-white font-montserrat text-sm"
                >
                  Developers
                </a>
              </nav>
              {/* Second column */}
              <nav className="flex flex-col gap-3">
                <a
                  href="/blog"
                  className="text-white/60 hover:text-white font-montserrat text-sm"
                >
                  Blog
                </a>
                <a
                  href="/documentation"
                  className="text-white/60 hover:text-white font-montserrat text-sm"
                >
                  Documentation
                </a>
              </nav>
            </div>
          </div>

          {/* Center section */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/60 font-montserrat text-sm text-center max-w-[180px] whitespace-pre-line">
              {"Request a demo to see\nthe full power of Kikimora"}
            </span>
            <button className="bg-[#00E5BE] text-[#001E38] font-montserrat text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#00E5BE]/90">
              Request Demo
            </button>
          </div>

          {/* Right side newsletter */}
          <div className="flex flex-col gap-3">
            <span className="text-white/60 font-montserrat text-sm max-w-[270px] whitespace-pre-line">
              {
                "Subscribe for our newsletter to\nbe always updated for the latest news"
              }
            </span>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-montserrat text-sm placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
              />
              <button className="bg-[#00E5BE] text-[#001E38] font-montserrat text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#00E5BE]/90">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
