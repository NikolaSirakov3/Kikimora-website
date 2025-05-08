import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FreeTrialModal } from "./ui/FreeTrialModal";
import {
  FiServer, // For MSSP
  FiCode, // For Developers
  FiZap, // For Try Kikimora
  FiShield, // For Managed Security
  FiInfo, // For About
  FiBookOpen, // For Blog
  FiUsers, // For Careers
  FiFileText, // For Press Kit
  FiGithub, // For Open Source
  FiLink, // For Integrations
  FiLayers, // For Use Cases
  FiBriefcase, // For Industries
} from "react-icons/fi";

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
          label: "Try Kikimora",
          href: "/trykikimora",
          description: "Experience our platform",
          icon: <FiZap className="w-6 h-6" />,
        },
        {
          label: "Managed Security",
          href: "/managed-security",
          description: "Professional security services",
          icon: <FiShield className="w-6 h-6" />,
        },
        {
          label: "MSSP",
          href: "/mssp",
          description: "Managed Security Service Provider",
          icon: <FiServer className="w-6 h-6" />,
        },
        {
          label: "Case Study",
          href: "/case-study",
          description: "Success stories and implementations",
          icon: <FiFileText className="w-6 h-6" />,
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest news and updates",
          icon: <FiBookOpen className="w-6 h-6" />,
        },
        {
          label: "About",
          href: "/about",
          description: "Learn about our mission",
          icon: <FiInfo className="w-6 h-6" />,
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
          icon: <FiLayers className="w-6 h-6" />,
        },
        {
          label: "Industries",
          href: "/solutions/industries",
          description: "Security solutions by industry",
          icon: <FiBriefcase className="w-6 h-6" />,
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
          icon: <FiCode className="w-6 h-6" />,
        },
        {
          label: "Security",
          href: "/resources/security",
          description: "Security best practices",
          icon: <FiShield className="w-6 h-6" />,
        },
        {
          label: "Open Source",
          href: "/resources/open-source",
          description: "Open source security",
          icon: <FiGithub className="w-6 h-6" />,
        },
        {
          label: "Integrations",
          href: "/resources/integrations",
          description: "Connect with your tools",
          icon: <FiLink className="w-6 h-6" />,
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
          icon: <FiInfo className="w-6 h-6" />,
        },
        {
          label: "Developers",
          href: "/developers",
          description: "Resources for developers",
          icon: <FiCode className="w-6 h-6" />,
        },
        {
          label: "Careers",
          href: "/careers",
          description: "Join our team",
          icon: <FiUsers className="w-6 h-6" />,
        },
        {
          label: "Press Kit",
          href: "/press-kit",
          description: "Media resources",
          icon: <FiFileText className="w-6 h-6" />,
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest news and updates",
          icon: <FiBookOpen className="w-6 h-6" />,
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
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay before closing
    setCloseTimeout(timeout);
  };

  return (
    <nav
      className={`bg-[#3a44b7] fixed w-full z-40 transition-all duration-10 ${
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
                <div
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                  className="relative"
                >
                  <button className="text-white hover:text-[#29ABE2] px-3 py-2 text-sm font-medium bg-transparent border-none outline-none focus:outline-none flex items-center justify-between w-full gap-2">
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
                    <div
                      onMouseEnter={() =>
                        item.dropdown && handleMouseEnter(item.label)
                      }
                      onMouseLeave={() => item.dropdown && handleMouseLeave()}
                      className={`absolute left-0 top-full ${
                        item.dropdown.items.length <= 2
                          ? "w-[480px]"
                          : item.dropdown.items.length === 4
                            ? "w-[720px]"
                            : "w-[720px]"
                      } bg-[#003A6E] rounded-lg shadow-lg py-6 px-8 z-50 grid ${
                        item.dropdown.items.length <= 2
                          ? "grid-cols-2"
                          : item.dropdown.items.length === 4
                            ? "grid-cols-2"
                            : "grid-cols-3"
                      } gap-6 border border-white/40 backdrop-blur-sm`}
                      style={{
                        marginTop: "1rem",
                      }}
                    >
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
