import { useState } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";

export function BookDemoForm() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ready to see Kikimora in action?
          </h3>
          <p className="text-gray-600">
            Get a personalized demo of our security platform tailored to your
            needs.
          </p>
        </div>

        <button
          type="button"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          onClick={() => setIsScheduleDemoModalOpen(true)}
        >
          Book Demo
        </button>
      </div>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
