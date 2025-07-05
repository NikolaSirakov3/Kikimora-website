import React from "react";

export function AboutHeader() {
  return (
    <header className="w-full bg-gradient-to-b from-[#101C3C] to-[#1B2B5A] py-20 flex flex-col items-center justify-center text-center">
      <h1
        className="text-white font-conthrax text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg mt-20"
        aria-label="About Kikimora"
      >
        About <span className="font-bold">Kikimora</span>
      </h1>
      <p className="text-white/80 font-montserrat text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed">
        We&apos;re dedicated to providing comprehensive managed security
        solutions that protect
        <br className="hidden md:block" />
        your business while you focus on what matters most.
      </p>
    </header>
  );
}
