interface SecurityFeature {
  text: string;
}

const securityFeatures: SecurityFeature[] = [
  { text: "Ensure Compliance With NIS2, ISO27k1, GDPR" },
  { text: "Reduce Response Time By Up To 70%" },
  { text: "Strengthening Security Posture And Reducing Risk" },
  { text: "Benefit From The Latest Tools And Techniques" },
  { text: "Protect Your Team From Social Engineering Attacks" },
  { text: "Validate The Security Of Your Code" },
];

export function SecureOrganization() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Organization
          </h2>

          <div className="space-y-4 text-gray-300">
            <p>
              Cybersecurity isn't just for large corporations anymore. Small and
              medium-sized enterprises (SMEs) are prime targets for
              cybercriminals due to weaker security defenses.
            </p>
            <p>Secure your business and stay ahead of cyber threats.</p>
          </div>

          <ul className="space-y-4 mt-8">
            {securityFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-[#31c9b7] -mt-1">■</span>
                <span className="text-gray-300">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square">
            <img
              src="/Kikimora.png"
              alt="Kikimora Security Shield"
              className="w-full h-full object-contain relative z-10"
            />
            {/* Add overlay elements for the shield effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#31c9b7]/20 to-purple-500/20 rounded-lg" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <div className="w-16 h-32 bg-[#31c9b7]/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
