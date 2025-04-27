import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  {
    label: "Product",
    href: "/product",
    dropdown: [
      { label: "Code", href: "/product/code" },
      { label: "Cloud", href: "/product/cloud" },
      { label: "Defend", href: "/product/defend" },
      { label: "Features", href: "/product/features" },
    ],
  },
  {
    label: "Use cases",
    href: "/use-cases",
    dropdown: [
      { label: "Use Cases", href: "/solutions/use-cases" },
      { label: "Industries", href: "/solutions/industries" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Developer", href: "/resources/developer" },
      { label: "Security", href: "/resources/security" },
      { label: "Open Source", href: "/resources/open-source" },
      { label: "Integrations", href: "/resources/integrations" },
    ],
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press-kit" },
      { label: "Calendar", href: "/calendar" },
      { label: "Open Source", href: "/open-source" },
      { label: "Blog", href: "/blog" },
      { label: "Customer Stories", href: "/customer-stories" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

const NewNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
          // at the top of the page
          setIsVisible(true);
        } else {
          // anywhere else on the page
          setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`bg-transparent fixed w-full top-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 backdrop-blur-sm sticky top-0">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Kikimora
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

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#002A4E] rounded-md shadow-lg py-1 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-white/20"
                      >
                        {subItem.label}
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
            <Link
              to="/start-free"
              className="text-white hover:text-white px-4 py-2 text-sm font-medium bg-[#31c9b7] rounded-full border-none outline-none focus:outline-none hover:bg-[#3EDDCA]/90"
            >
              Start Free
            </Link>
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
                onMouseEnter={() =>
                  item.dropdown && handleDropdownToggle(item.label)
                }
                onMouseLeave={() =>
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
                <div className="pl-4 bg-[#002A4E] rounded-md shadow-lg">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                    >
                      {subItem.label}
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
              Login
            </Link>
            <Link
              to="/start-free"
              className="block px-3 py-2 text-base font-medium text-white hover:text-white bg-[#3EDDCA] rounded-full border-none outline-none focus:outline-none hover:bg-[#3EDDCA]/90"
            >
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
