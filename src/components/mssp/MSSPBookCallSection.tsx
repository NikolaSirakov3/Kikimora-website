import React from "react";

export function MSSPBookCallSection() {
  return (
    <section className="min-h-[40vh] bg-[#0f172a] flex items-center justify-center py-16">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Not sure what is the right solution for you?
            </h2>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-300">
              Book a free consultation with our team!
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 text-lg">
                Book Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
