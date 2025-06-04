import { EUFunding } from "@/components/shared/EUFunding";

export function MSSP() {
  return (
    <div className="w-[99.1vw] min-h-screen bg-[#001324]">
      {/* Header Image Placeholder */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <div className="w-[80vw] absolute left-1/2 -translate-x-1/2 inset-y-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border-2 m-10 mt-20" />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>

      {/* Main Content Section */}
      <div className="p-8 bg-[#001324]/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">
                Your go-to solution for managed security services!
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                <span className="text-teal-500">Kikimora</span> is designed to
                manage vulnerabilities, weaknesses, and security
                misconfigurations in a single unified interface. The Kikimora
                dashboard provides a consolidated overview of security testing
                tools and manual activities involved in the cybersecurity
                lifecycle.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Kikimora is a versatile platform that helps you manage and run
                security services efficiently!
              </p>
              <ul className="text-gray-300 text-lg space-y-3 list-disc pl-6">
                <li>Consolidated vulnerability data across multiple clients</li>
                <li>Enhanced reporting and compliance capabilities</li>
                <li>Gain access to numerous scanning and intel providers</li>
                <li>Flexible pricing bundles for optimized budgeting</li>
              </ul>
              <p className="text-gray-300 text-lg mt-6">
                Starting with Kikimora is easy and convenient!
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
