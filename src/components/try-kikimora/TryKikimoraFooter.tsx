import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../ui/button";

export default function TryKikimoraFooter() {
  const [state, handleSubmit] = useForm("mblkjgzo"); // Using the same form ID as other demo forms

  return (
    <footer className="w-[99.1vw] bg-[#2B0A3D] py-16 px-4 font-montserrat">
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
        <div className="flex-1 min-w-[200px] flex flex-col items-start ml-60"></div>
        {/* Right: Contact */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start">
          <h3 className="text-white text-xl font-bold mb-4">Contact</h3>

          {/* Demo Request Form */}
          <div className="w-full mb-6">
            <h4 className="text-white text-lg font-semibold mb-3">
              Schedule a Demo
            </h4>
            {state.succeeded ? (
              <div className="text-green-400 text-sm">
                Demo request submitted! We'll contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] transition-colors duration-200 text-sm"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-xs"
                />
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#29ABE2] hover:bg-[#1e9a8a] text-white font-semibold py-2 px-4 rounded text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Submitting..." : "Schedule Demo"}
                </Button>
              </form>
            )}
          </div>

          <ul className="text-white space-y-2 text-base">
            <li>Get Personalized Quote</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
