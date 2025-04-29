import React, { useState } from "react";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  agreeToTerms: boolean;
}

export function FreeTrialModal({ isOpen, onClose }: FreeTrialModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    companyName: "",
    agreeToTerms: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white p-8 rounded-lg w-full max-w-4xl grid grid-cols-2 gap-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 bg-transparent border-none cursor-pointer"
        >
          ×
        </button>

        {/* Left Section */}
        <div>
          <img
            src="/path-to-your-dashboard-image.png"
            alt="Dashboard preview"
            className="w-full h-auto"
          />
          <p className="text-[#0B2653] mt-4">
            No credit card required, full access to all features
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#0B2653] text-3xl font-bold mb-6">
            Start your 14-day trial
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="First and last name*"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653]"
            />

            <input
              type="email"
              name="businessEmail"
              placeholder="Business email*"
              value={formData.businessEmail}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653]"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number*"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653]"
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company name*"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653]"
            />

            <div className="flex gap-2 items-start mt-4">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
              <label className="text-sm text-gray-700">
                By submitting this form, I agree to be contacted by email or
                phone to receive information about NinjaOne's product, offers,
                and events. I understand my personal data will be processed
                according to NinjaOne's{" "}
                <a
                  href="/privacy-notice"
                  className="text-[#0B2653] hover:underline"
                >
                  privacy notice
                </a>{" "}
                and that I can unsubscribe at any time.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#00FF9D] text-[#0B2653] font-bold rounded-md hover:bg-[#00E68C] transition-colors mt-4"
            >
              Start my free trial now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
