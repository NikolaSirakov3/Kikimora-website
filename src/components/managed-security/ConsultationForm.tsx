export function ConsultationForm() {
  return (
    <section className="relative py-6 px-4 md:px-8 lg:px-16 bg-[#164f55]">
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white my-12">
          Not sure which bundle fits your needs? Schedule a free consultation
          today!
        </h2>

        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 px-6 py-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-6 py-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40"
          />
          <button className="px-8 py-4 bg-[#4169E1] text-white font-medium rounded-md hover:bg-[#3154b3] transition-colors">
            Book
          </button>
        </div>
      </div>
    </section>
  );
}
