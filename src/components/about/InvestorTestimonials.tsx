import React from "react";

const testimonials = [
  {
    quote:
      "We believe in the growth potential of the company, as well as the vision of the team and its ability to realize it",
    author: "Kamen Benkovski",
    company: "Vitosha",
    logo: "/images/vitosha-logo.png",
  },
  {
    quote:
      "We continue to support Kikimora.io because it provides high added value and solves a fundamental problem for businesses - analyzing cybersecurity and vulnerabilities quickly and efficiently without unnecessary cost",
    author: "Viktor Manev",
    company: "Impetus",
    logo: "/images/impetus-logo.png",
  },
];

export function InvestorTestimonials() {
  return (
    <div className="bg-[#001E38] w-full py-20">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-white font-conthrax text-5xl mb-4">
              What our investors say
            </h2>
            <p className="text-white/60 font-montserrat text-lg">
              Read why they trust and support us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#003A6E] to-[#002A4E] rounded-3xl p-8 flex flex-col"
              >
                {/* Quote */}
                <div className="flex-1">
                  <p className="text-white font-montserrat text-lg leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-montserrat">
                      {testimonial.author}
                    </p>
                  </div>
                  {/* Logo Placeholder */}
                  <div className="w-32 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white/60 font-montserrat text-sm">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
