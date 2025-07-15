import { Button } from "@/components/ui/button";
import {
  GlobeAltIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function ManagedSecuritySection() {
  return (
    <section className="w-full flex flex-col items-center py-20 px-2 bg-white">
      <h2 className="text-4xl md:text-5xl   text-center mb-2 text-gray-900">
        Kikimora Managed Security
      </h2>
      <p className="text-sm md:text-base text-center text-gray-700 mb-2 font-montserrat">
        Your On-Demand Cybersecurity Team
      </p>
      <p className="text-xs md:text-sm text-center text-gray-600 mb-12 max-w-2xl font-montserrat">
        Focus on your product and your customers. We'll handle the security
        complexities.
      </p>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#31c9b7]/20 mb-4">
            <GlobeAltIcon
              className="w-10 h-10 text-[#31c9b7]"
              aria-hidden="true"
            />
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            24/7 Monitoring
          </h3>
          <p className="text-xs text-gray-600 max-w-s">
            Constant vigilance over your entire digital environment, detecting
            threats in real-time.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <TagIcon className="w-10 h-10 text-red-400" aria-hidden="true" />
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Expert-Led Penetration Testing
          </h3>
          <p className="text-xs text-gray-600 max-w-s">
            Annual web, API, and network penetration tests conducted by our
            elite team to find weaknesses before attackers do.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <UserGroupIcon
              className="w-10 h-10 text-green-400"
              aria-hidden="true"
            />
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Team-Wide Security Training
          </h3>
          <p className="text-xs text-gray-600 max-w-s">
            Transform your employees into your strongest line of defense with
            realistic phishing simulations and secure coding practices training.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button className="bg-green-600 text-white px-6 py-3 font-montserrat rounded-lg hover:bg-green-700">
          Schedule a Consultation
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 font-montserrat rounded-lg border border-green-600 text-green-600 hover:bg-green-50"
        >
          View Managed Security Plans
        </Button>
      </div>
    </section>
  );
}

export { ManagedSecuritySection };
