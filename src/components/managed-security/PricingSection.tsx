export function PricingSection() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      <h2 className="text-[32px] font-bold text-[#001324] text-center mb-4 mt-20">
        Flexible Security Plans
      </h2>
      <p className="text-center text-[#4A5567] max-w-3xl mb-4 px-4">
        Kikimora Managed Security offers flexible packages of security,
        compliance and governance tools depending on the size, assets, and
        current needs of your organization.
      </p>
      <p className="text-center text-[#31c9b7] mb-12">
        Benefit from enterprise-level protection at a fraction of the cost of
        maintaining an in-house cybersecurity team.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch max-w-7xl px-4">
        {/* Cyber Essentials */}
        <div className="bg-white rounded-lg border border-gray-200 flex flex-col w-full lg:w-1/3 p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#001324] mb-2">
              Cyber Essentials
            </h3>
            <p className="text-sm text-[#4A5567] mb-4">
              Essential security foundation for growing businesses
            </p>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-3xl font-bold text-[#31c9b7]">2,000</span>
              <span className="text-lg ml-1 text-[#31c9b7]">EUR/MONTH</span>
            </div>
          </div>
          <ul className="space-y-3 flex-grow">
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 3 days per year Discovery</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>50 IP Addresses monitoring</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>1 Application assessment</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>10 Domains coverage</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Annual asset inventory</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 3 days vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Agent-based vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>System hardening (50 IP addresses)</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 50 employees security training</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Firewall rule reviews</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>API documentation analysis</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Dark net monitoring</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Penetration testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>SAST/DAST testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Phishing campaigns</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Secure code training</span>
            </li>
          </ul>
          <button
            className="mt-6 w-full bg-[#001324] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0a2440] transition-colors"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
          >
            Get Started
          </button>
        </div>

        {/* Cyber Advanced */}
        <div className="bg-white rounded-lg border-2 border-[#31c9b7] flex flex-col w-full lg:w-[35%] p-8 -mt-4 -mb-6 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#31c9b7] text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#001324] mb-2">
              Cyber Advanced
            </h3>
            <p className="text-sm text-[#4A5567] mb-4">
              Comprehensive security for established organizations
            </p>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-3xl font-bold text-[#31c9b7]">5,000</span>
              <span className="text-lg ml-1 text-[#31c9b7]">EUR/MONTH</span>
            </div>
          </div>
          <ul className="space-y-3 flex-grow">
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 5 days per year Discovery</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>150 IP Addresses monitoring</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>1 Application assessment</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>10 Domains coverage</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Semi-annual asset inventory</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 5 days vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Agent-based vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>System hardening (150 IP addresses)</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Firewall rule reviews</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Annual penetration testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 150 employees security training</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>API documentation analysis</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Dark net monitoring</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>WiFi penetration testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>SAST/DAST testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-red-500">✗</span>
              <span>Secure code training</span>
            </li>
          </ul>
          <button
            className="mt-6 w-full bg-[#31c9b7] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
          >
            Get Started
          </button>
        </div>

        {/* Cyber Elite */}
        <div className="bg-white rounded-lg border border-gray-200 flex flex-col w-full lg:w-1/3 p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#001324] mb-2">
              Cyber Elite
            </h3>
            <p className="text-sm text-[#4A5567] mb-4">
              Enterprise-grade security with full coverage
            </p>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-3xl font-bold text-[#31c9b7]">10,000</span>
              <span className="text-lg ml-1 text-[#31c9b7]">EUR/MONTH</span>
            </div>
          </div>
          <ul className="space-y-3 flex-grow">
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 10 days per year Discovery</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>400 IP Addresses monitoring</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>1 Application assessment</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>80 Domains coverage</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Quarterly asset inventory</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 10 days vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Agent-based vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>System hardening (400 IP addresses)</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Firewall rule reviews</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>API documentation analysis</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Dark net monitoring</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Full penetration testing suite</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>WiFi penetration testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>SAST/DAST testing</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 400 employees security training</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Up to 20 employees secure code training</span>
            </li>
          </ul>
          <button
            className="mt-6 w-full bg-[#001324] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0a2440] transition-colors"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
