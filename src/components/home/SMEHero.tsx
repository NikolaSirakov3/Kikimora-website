import { Button } from "@/components/ui/button";

function SMEHero() {
  return (
    <section className="w-full bg-[#f2f7ff] flex flex-col items-center py-24 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-[#111827] leading-tight">
        Stop Juggling Threats and
        <br />
        Regulations.
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold text-[#31c9b7] mt-2 mb-4">
        Start Growing Your Business.
      </h2>
      <p className="max-w-2xl text-lg text-[#374151] mb-8 font-montserrat">
        Kikimora is the all-in-one cybersecurity and compliance platform built
        for European SMEs. We protect your business so you can build it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          className="bg-[#31c9b7] text-white hover:bg-[#2bb3a3] px-8 py-4 rounded-lg font-montserrat text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
          aria-label="View Features"
        >
          View Features
        </Button>
        <Button
          variant="outline"
          className="bg-white text-[#111827] border border-[#d1d5db] hover:bg-[#f3f4f6] px-8 py-4 rounded-lg font-montserrat text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
          aria-label="Book Demo"
        >
          Book Demo
        </Button>
      </div>
    </section>
  );
}

export { SMEHero };
