import { useState } from "react";

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
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white p-12 rounded-lg w-full max-w-6xl grid grid-cols-2 gap-12 relative">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 text-2xl text-gray-500 hover:text-gray-700 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        >
          ×
        </button>

        {/* Left Section */}
        <div className="p-6">
          <h2 className="text-[#0B2653] text-2xl font-bold mb-4">
            Start Your Free Trial Today
          </h2>
          <p className="text-[#0B2653] text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-[#0B2653] text-lg mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-[#0B2653] font-semibold">
            No credit card required, full access to all features
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl border">
          <h2 className="text-[#0B2653] text-3xl font-bold mb-6">
            Insert your details below
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="First and last name*"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653] bg-white"
            />

            <input
              type="email"
              name="businessEmail"
              placeholder="Business email*"
              value={formData.businessEmail}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653] bg-white"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number (optional)"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653] bg-white"
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company name*"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0B2653] bg-white"
            />

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
