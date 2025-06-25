const FIT_OPTIONS = [
  {
    title: "For the Tech-Savvy Team",
    description:
      '"I have a technical team in-house, and we need better tools to manage security and compliance efficiently."',
    href: "#tech-savvy",
  },
  {
    title: "For the Resource-Strapped Business",
    description:
      '"I don\'t have a dedicated security expert on staff, and I need help meeting client and regulatory compliance demands."',
    href: "#resource-strapped",
  },
  {
    title: "For Those Just Starting Out",
    description:
      '"I\'m just beginning my security journey and need to understand my risks on a limited budget."',
    href: "#just-starting",
  },
];

function FitForBusinessSection() {
  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-[#fafbfc]">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-10 font-orbitron text-[#111827]">
        What&apos;s the Right Fit for Your Business?
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {FIT_OPTIONS.map(({ title, description}) => (
          <div
            key={title}
            className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col shadow-sm h-full min-h-[140px] justify-between transition-shadow hover:shadow-md"
            role="region"
            aria-label={title}
          >
            <div>
              <h3 className="text-base font-semibold mb-1 text-[#111827] font-montserrat">
                {title}
              </h3>
              <p className="text-[#374151] text-sm font-montserrat mb-4">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { FitForBusinessSection };
