export function AdvantagesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center py-16 bg-white dark:bg-[#0a1626]">
      <div className="w-full max-w-7xl bg-gray-50 dark:bg-[#1a2736] rounded-2xl px-6 py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-24 h-24 mb-6">
            <img
              src="/logos/colorAndBlack.png"
              alt="Kikimora Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-4xl font-semibold text-[#0a1626] dark:text-white mb-4">
            Not just a tool in your arsenal!
          </h2>
          <p className="text-lg text-[#0a1626] dark:text-white/80 max-w-4xl">
            The Kikimora team will act as a trusted advisor, foster a culture of
            security awareness within your organization and integrate security
            seamlessly into your business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {/* In-House Expertise */}
          <div className="bg-white dark:bg-[#0a1626] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-[#4b3ff4] mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#0a1626] dark:text-white">
                In-House Expertise
              </h3>
            </div>
            <p className="text-[#0a1626] dark:text-white/80">
              Access to a team of cybersecurity specialists with extensive
              knowledge and experience in threat detection, vulnerability
              management, and incident response.
            </p>
          </div>

          {/* 24/7 Monitoring */}
          <div className="bg-white dark:bg-[#0a1626] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-[#4b3ff4] mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#0a1626] dark:text-white">
                24/7 Monitoring
              </h3>
            </div>
            <p className="text-[#0a1626] dark:text-white/80">
              Gain access to real-time data and monitoring capabilities for your
              whole organization. Detect and address vulnerabilities and
              misconfiguration proactively and effectively.
            </p>
          </div>

          {/* Flexibility */}
          <div className="bg-white dark:bg-[#0a1626] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-[#4b3ff4] mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#0a1626] dark:text-white">
                Flexibility
              </h3>
            </div>
            <p className="text-[#0a1626] dark:text-white/80">
              Kikimora Managed Security evolves with the needs of your business,
              scaling seamlessly as your organization grows and your security
              and compliance requirements change.
            </p>
          </div>

          {/* Compliance-ready */}
          <div className="bg-white dark:bg-[#0a1626] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-[#4b3ff4] mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#0a1626] dark:text-white">
                Compliance-ready
              </h3>
            </div>
            <p className="text-[#0a1626] dark:text-white/80">
              Get the right tools to meeting industry-specific regulations and
              standards, such as HIPAA or PCI DSS, ensuring compliance.
            </p>
          </div>

          {/* Cost-Effectiveness */}
          <div className="bg-white dark:bg-[#0a1626] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-[#4b3ff4] mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[#0a1626] dark:text-white">
                Cost-Effectiveness
              </h3>
            </div>
            <p className="text-[#0a1626] dark:text-white/80">
              Access to the best latest cybersecurity solutions and tools
              without the overhead and training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
