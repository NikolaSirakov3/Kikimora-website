import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FreeTrialModal } from "./ui/FreeTrialModal";
import { ArrowSquareRight } from "@phosphor-icons/react";

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
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Managed Security",
          href: "/managed-security",
          description: "Professional security services",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "MSSP",
          href: "/mssp",
          description: "Managed Security Service Provider",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest news and updates",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "About",
          href: "/about",
          description: "Learn about our mission",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
      ],
    },
  },
  {
    label: "Use Cases",
    href: "/usecases",
    dropdown: {
      items: [
        {
          label: "Startup",
          href: "/startup",
          description: "Success stories and implementations",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Healthcare",
          href: "/healthcare",
          description: "Healthcare security solutions",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Fintech",
          href: "/fintech",
          description: "Financial technology security",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "SME",
          href: "/sme",
          description: "Small and medium enterprise solutions",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
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
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Security",
          href: "/resources/security",
          description: "Security best practices",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Open Source",
          href: "/resources/open-source",
          description: "Open source security",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Integrations",
          href: "/resources/integrations",
          description: "Connect with your tools",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
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
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Developers",
          href: "/developers",
          description: "Resources for developers",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Careers",
          href: "/careers",
          description: "Join our team",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Press Kit",
          href: "/press-kit",
          description: "Media resources",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest news and updates",
          icon: (
            <ArrowSquareRight className="w-9 h-9 text-white" weight="regular" />
          ),
        },
      ],
    },
  },
  { label: "Pricing", href: "/pricing-info" },
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
      className={`bg-[#030104] fixed w-full z-40 transition-all duration-10 ${
        isAnnouncementVisible ? "top-[35px]" : "top-0"
      }`}
      style={{ transition: "top 0.3s ease-in-out" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
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
                {item.dropdown ? (
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
                    {/* Dropdown content */}
                    {item.dropdown && activeDropdown === item.label && (
                      <div
                        onMouseEnter={() => handleMouseEnter(activeDropdown)}
                        onMouseLeave={handleMouseLeave}
                        className={`absolute top-full w-[620px] bg-[#040b11] rounded-lg shadow-lg py-6 px-8 z-50 grid grid-cols-2 gap-6 border border-white/40 backdrop-blur-sm items-center justify-center`}
                        style={{
                          marginTop: "1.5rem",
                          left: 0,
                        }}
                      >
                        {item.dropdown.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex flex-row items-center gap-5 p-4 rounded-xl hover:bg-white/10 transition-colors duration-200 min-w-[160px] max-w-[290px]"
                          >
                            <div className="flex items-center justify-center w-10.5 h-10.5">
                              <div className="w-9 h-9 [&>svg]:stroke-[1.5]">
                                {subItem.icon}
                              </div>
                            </div>
                            <div className="flex flex-col justify-center min-w-0 w-full">
                              <span className="text-white font-semibold text-base mb-1 block truncate">
                                {subItem.label}
                                {subItem.soon && (
                                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#29ABE2]/20 text-[#29ABE2] align-middle">
                                    soon
                                  </span>
                                )}
                              </span>
                              <span className="text-sm text-gray-400 leading-tight block truncate">
                                {subItem.description}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-[#29ABE2] px-3 py-2 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
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
                      className="flex flex-row items-center text-left gap-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white/10 shadow-[0_0_15px_rgba(41,171,226,0.3)]">
                        <div className="w-9 h-9 [&>svg]:stroke-[1.5]">
                          {subItem.icon}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center text-left">
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
