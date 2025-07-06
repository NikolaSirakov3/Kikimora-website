

export default function TryKikimoraFooter() {
  return (
    <footer className="w-[99.2vw] bg-[#2B0A3D] py-16 px-4 font-montserrat">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* Left: Logo and Description */}
        <div className="flex-1 min-w-[150px] flex flex-col items-start">
          <div className="flex items-center mb-6">
            <img
              src="/logos/color_and_black.svg"
              alt="Kikimora Logo"
              className="h-8 mr-3"
            />
            <span className="text-white text-lg font-semibold">Kikimora</span>
          </div>
          <p className="text-white text-base leading-relaxed">
            The essential toolset to meet your security and compliance
            objectives. Let us handle the security complexities while you focus
            on your business objectives.
          </p>
        </div>
        {/* Middle: Services */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start ml-60">
          <h3 className="text-white text-xl font-bold mb-4">Services</h3>
          <ul className="text-white space-y-2 text-base">
            <li>Discovery & Assessment</li>
            <li>Attack Surface Management</li>
            <li>Penetration Testing</li>
            <li>Security Training</li>
            <li>24/7 Monitoring</li>
          </ul>
        </div>
        {/* Right: Contact */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start">
          <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
          <ul className="text-white space-y-2 text-base">
            <li>Schedule a Demo</li>
            <li>Get Personalized Quote</li>
            <li>24/7 Support Available</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
