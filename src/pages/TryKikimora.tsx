import { EUFunding } from "@/components/shared/EUFunding";

export function TryKikimora() {
  return (
    <div className="w-[99.1vw] min-h-screen bg-[#001324]">
      {/* Header Image Placeholder */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <div className="w-[65vw] absolute left-1/2 -translate-x-1/2 inset-y-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border-2 ml-2 mt-20" />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>

      {/* Main Content Section */}
      <div className="p-8 bg-[#001324]/50">
        <div className="w-[65vw] mx-auto pl-6">
          <div className="flex flex-col lg:flex-row gap-12 ">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">
                Cybersecurity management hub for SMEs!
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Kikimora is designed to manage{" "}
                <span className="underline">vulnerabilities</span>,{" "}
                <span className="underline">weaknesses</span>, and{" "}
                <span className="underline">security misconfigurations</span> in
                a single unified interface. The Kikimora dashboard provides a
                consolidated overview of security testing tools and manual
                activities involved in the cybersecurity lifecycle.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Kikimora is a versatile platform that helps with:
              </p>
              <ul className="text-gray-300 text-lg space-y-3 list-disc pl-6 mb-6">
                <li>Compliance and Regulatory Adherence</li>
                <li>Enhancing Cybersecurity Posture</li>
                <li>Ensuring a comprehensive view of assets</li>
                <li>Resource Optimization</li>
              </ul>
              <p className="text-gray-300 text-lg font-semibold mb-2">
                Starting with Kikimora is easy and convenient!
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Fill in the form to get started, and our team will contact you
                within 48 hours!
              </p>
              <p className="text-gray-300 text-lg">
                Find the full features list in the{" "}
                <span className="text-teal-500 hover:underline cursor-pointer">
                  Features
                </span>{" "}
                section!
              </p>
            </div>

            {/* Right Content - Form */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-teal-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-teal-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-teal-500"
                    placeholder="Company"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company Size
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-teal-500">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Number of Assets
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-teal-500">
                    <option>1-30 Assets</option>
                    <option>31-100 Assets</option>
                    <option>101-500 Assets</option>
                    <option>500+ Assets</option>
                  </select>
                </div>
                <button
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg"
                  onClick={() =>
                    window.open("https://calendly.com/o-antonov", "_blank")
                  }
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Divider */}
      <div className="w-full border-t border-white/30" />

      {/* Features Section */}
      <div className="p-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ml-10 mt-10">
            {/* Left: Header and Paragraph */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                FORTIFY YOUR CYBERSECURITY: START WITH A FREE TRIAL TODAY!
              </h3>
              <p className="text-gray-600 text-lg">
                Experience the full power of Kikimora with a one-month free
                trial! No credit card required!
              </p>
            </div>
            {/* Right: List Header and List */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Free Trial Includes:
              </h4>
              <ul className="text-gray-600 text-lg space-y-2 list-disc pl-6">
                <li>Onboarding Guide</li>
                <li>Access to scanners and tools</li>
                <li>Expert support</li>
                <li>No fees or cancelation requirements</li>
              </ul>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ml-10">
            {/* Left: Header and Paragraph */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                EXPLORE KIKIMORA COMMUNITY!
              </h3>
              <p className="text-gray-600 text-lg">
                Kikimora Community is a lightweight client allowing you to
                improve your security posture at no starting cost.
              </p>
            </div>
            {/* Right: List Header and List */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Kikimora Community includes all the essentials:
              </h4>
              <ul className="text-gray-600 text-lg space-y-2 list-disc pl-6">
                <li>ISO27001, NIST templates</li>
                <li>1 Custom Compliance Agent</li>
                <li>1 monthly Network Scan</li>
                <li>1 monthly Web Application Scan</li>
                <li>Up to 30 assets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* White Divider */}
      <div className="w-full border-t border-white/20" />

      {/* Bottom CTA Section */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure what is the right solution for you?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free consultation with our team!
          </p>
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold py-4 px-8 rounded-lg"
            onClick={() =>
              window.open("https://calendly.com/o-antonov", "_blank")
            }
          >
            Book Call
          </button>
        </div>
      </div>

      <EUFunding />
    </div>
  );
}
