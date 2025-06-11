export function AdvantagesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center py-16 bg-white dark:bg-[#0a1626]">
      {/* Row 1 */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center mb-16 gap-8 md:gap-0">
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/illustrations/3.png"
            alt="Security illustration"
            className="w-full max-w-md h-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#0a1626] dark:text-white mb-4 text-left">
            Secure Your Organization!
          </h3>
          <p className="text-lg text-[#0a1626] dark:text-white/80 mb-6 text-left">
            Cybersecurity isn't just for large corporations anymore! Small and
            medium-sized enterprises (SMEs) are prime targets for cybercriminals
            due to weaker security defenses.
            <br />
            <br />
            Enlist the help of a seasoned cybersecurity team for a fraction of
            the cost. Secure your business and stay ahead of cyber threats using
            the latest tools and best practices.
          </p>
          <button
            className="mt-2 px-8 py-3 bg-[#4b3ff4] text-white rounded-full font-medium shadow hover:bg-[#372bb0] focus:outline-none focus:ring-2 focus:ring-[#4b3ff4] focus:ring-offset-2"
            aria-label="Learn more about securing your organization"
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Row 2 */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-12 order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#0a1626] dark:text-white mb-4 text-left">
            Get all the advantages of in-house security team!
          </h3>
          <ul className="list-disc pl-6 text-lg text-[#0a1626] dark:text-white/80 mb-6">
            <li>Ensure compliance with NIS2, ISO27k1, GDPR</li>
            <li>Reduce incident response time by up to 70%</li>
            <li>Strengthen Security Posture and Reducing Risk</li>
            <li>Benefit from the latest tools and techniques</li>
            <li>Protect your team from social Engineering attacks</li>
            <li>Validate the security of your Code</li>
          </ul>
          <button
            className="mt-2 px-8 py-3 bg-[#4b3ff4] text-white rounded-full font-medium shadow hover:bg-[#372bb0] focus:outline-none focus:ring-2 focus:ring-[#4b3ff4] focus:ring-offset-2"
            aria-label="Learn more about in-house security advantages"
          >
            Learn More
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <img
            src="/illustrations/Example_in_use_2.png"
            alt="In-house security team illustration"
            className="w-full max-w-md h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
