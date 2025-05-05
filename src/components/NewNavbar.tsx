import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FreeTrialModal } from "./ui/FreeTrialModal";

interface NewNavbarProps {
  isAnnouncementVisible: boolean;
}

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  soon?: boolean;
}

interface DropdownSection {
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownSection;
}

const navItems: NavItem[] = [
  {
    label: "Product",
    href: "/product",
    dropdown: {
      items: [
        {
          label: "Dependencies",
          href: "/product/dependencies",
          description: "Prevent open-source risks (SCA)",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          label: "IaC",
          href: "/product/iac",
          description: "Scan IaC for misconfigurations",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4L4 8v8l8 4 8-4V8l-8-4z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "API Scanning",
          href: "/product/api-scanning",
          description: "Test your APIs for vulns",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "AI Autofix",
          href: "/product/ai-autofix",
          description: "Save time with Alexa AI",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          label: "Secrets",
          href: "/product/secrets",
          description: "Search for exposed secrets",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 15v3m0 0h3m-3 0H9m3-3V9m0 0h3m-3 0H9"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "License Risk & SBOMs",
          href: "/product/license-risk",
          description: "Avoid risk be compliant",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          label: "Virtual Machines",
          href: "/product/virtual-machines",
          description: "No agents, no overhead",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "CI/CD Security",
          href: "/product/cicd-security",
          description: "Scan before merge and deployment",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      ],
    },
  },
  {
    label: "Use cases",
    href: "/use-cases",
    dropdown: {
      items: [
        {
          label: "Use Cases",
          href: "/solutions/use-cases",
          description: "Explore common security use cases",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "Industries",
          href: "/solutions/industries",
          description: "Security solutions by industry",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: {
      items: [
        {
          label: "Developer",
          href: "/resources/developer",
          description: "Resources for developers",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "Security",
          href: "/resources/security",
          description: "Security best practices",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 15v3m0 0h3m-3 0H9m3-3V9m0 0h3m-3 0H9"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "Open Source",
          href: "/resources/open-source",
          description: "Open source security",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" />
            </svg>
          ),
        },
        {
          label: "Integrations",
          href: "/resources/integrations",
          description: "Connect with your tools",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      ],
    },
  },
  {
    label: "About",
    href: "/about",
    dropdown: {
      items: [
        {
          label: "About",
          href: "/about",
          description: "Learn about our mission",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "Careers",
          href: "/careers",
          description: "Join our team",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "Press Kit",
          href: "/press-kit",
          description: "Media resources",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest news and updates",
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      ],
    },
  },
  { label: "Pricing", href: "/pricing" },
];

const NewNavbar: React.FC<NewNavbarProps> = ({ isAnnouncementVisible }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`bg-black fixed w-full z-40 transition-all duration-10 ${
        isAnnouncementVisible ? "top-[35px]" : "top-0"
      }`}
      style={{ transition: "top 0.3s ease-in-out" }}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/color_and_white.png"
                alt="Kikimora Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onMouseEnter={() =>
                    item.dropdown && handleDropdownToggle(item.label)
                  }
                  onMouseLeave={() =>
                    item.dropdown && handleDropdownToggle(item.label)
                  }
                  className="text-white hover:text-[#29ABE2] px-3 py-2 text-sm font-medium bg-transparent border-none outline-none focus:outline-none flex items-center justify-between w-full gap-2"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 group-hover:text-[#29ABE2] group-hover:rotate-180 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {/* Updated Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-[720px] bg-[#002A4E] rounded-lg shadow-lg py-6 px-8 z-50 grid grid-cols-3 gap-6">
                    {item.dropdown.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="flex flex-col gap-2 p-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-[#29ABE2] mt-1">
                            {subItem.icon}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-medium">
                                {subItem.label}
                              </span>
                              {subItem.soon && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-[#29ABE2]/20 text-[#29ABE2]">
                                  soon
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-400">
                              {subItem.description}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-[#29ABE2] px-3 py-2 text-sm font-medium bg-transparent border-none outline-none focus:outline-none"
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="text-white hover:text-white px-4 py-2 text-sm font-medium bg-[#31c9b7] rounded-full border-none outline-none focus:outline-none hover:bg-[#3EDDCA]/90"
            >
              Start Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-[#29ABE2] focus:outline-none bg-transparent border-none outline-none"
            >
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() =>
                  item.dropdown && handleDropdownToggle(item.label)
                }
                className="w-full text-left text-white hover:text-[#29ABE2] block px-3 py-2 text-base font-medium flex items-center justify-between bg-transparent group border-none outline-none focus:outline-none gap-2"
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 group-hover:text-[#29ABE2] group-hover:rotate-180 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              {item.dropdown && activeDropdown === item.label && (
                <div className="pl-4 space-y-2">
                  {item.dropdown.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="text-[#29ABE2] mt-1">{subItem.icon}</div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">
                            {subItem.label}
                          </span>
                          {subItem.soon && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#29ABE2]/20 text-[#29ABE2]">
                              soon
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-400">
                          {subItem.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-3 border-t border-white/20">
            <Link
              to="/login"
              className="block px-3 py-2 text-base font-medium text-white hover:text-[#29ABE2] bg-transparent border-none outline-none focus:outline-none"
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="w-full text-left px-3 py-2 text-base font-medium text-white hover:text-white bg-[#3EDDCA] rounded-full border-none outline-none focus:outline-none hover:bg-[#3EDDCA]/90"
            >
              Start Free
            </button>
          </div>
        </div>
      </div>

      {/* Free Trial Modal */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </nav>
  );
};

export default NewNavbar;
