import { Button } from "@/components/ui/button";

function StartupHeroSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/illustrations/background 1.png')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80" />
      <div className="relative mx-auto max-w-7xl px-4 py-32 text-center text-white sm:px-6 sm:py-48 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Move Fast. Don't Break Your Business.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl">
          Kikimora is the all-in-one cybersecurity platform that secures your
          innovation, from your first MVP to full enterprise compliance. Stop
          worrying about threats and focus on growth.
        </p>
        <div className="mx-auto mt-10 flex max-w-sm justify-center gap-4">
          <Button className="bg-[#4A6CFD] px-8 py-3 text-lg font-bold text-white hover:bg-[#4A6CFD]/90">
            Start for Free &rarr;
          </Button>
          <Button
            variant="outline"
            className="border-white px-8 py-3 text-lg font-bold text-blue-500 hover:bg-white hover:text-[#4A6CFD]"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}

export { StartupHeroSection };
