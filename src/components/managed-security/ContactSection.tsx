export function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="w-48 h-0.5 bg-[#001324] mb-8" aria-hidden="true" />
      <h2 className="text-3xl md:text-4xl text-[#001324] text-center mb-8">
        Ready to take your security to the next level?
      </h2>
      <button
        className="bg-[#5B3DF6] text-white font-medium px-8 py-3 rounded-full text-base md:text-lg shadow-md hover:bg-[#4a2fd6] focus:outline-none focus:ring-2 focus:ring-[#5B3DF6] focus:ring-offset-2 transition"
        aria-label="Get in touch"
        type="button"
        onClick={() => window.open("mailto:contact@kikimora.io", "_blank")}
      >
        Get in touch
      </button>
    </section>
  );
}
