import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../component/ui/custom-button";
import { useNavigate } from "react-router-dom";

const HEADER_HEIGHT = 66;

type SectionLink = {
  label: string;
  hash: string;
};

type NavItem = {
  name: string;
  path: string;
  dropdown?: SectionLink[];
};

const Header = () => {
    const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      name: "Home",
      path: "/",
      dropdown: [
        
        { label: "Services", hash: "#service" },
        { label: "Clients", hash: "#clients" },
        { label: "Reviews", hash: "#reviews" },
        { label: "Blog / Gallery", hash: "#blog" },
      ],
    },
    { name: "Service", path: "/services" },
    { name: "Blog", path: "/blog" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { label: "About Us", hash: "#about-us" },
        { label: "Our Mission", hash: "#our-mission" },
        { label: "Our Vision", hash: "#our-vision" },
        { label: "Our Team", hash: "#our-team" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
  ];

  const toggleMobileDropdown = (name: string) => {
    setMobileOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-[999] w-full bg-white border-b border-[var(--border)]">
        <div
          className="px-4 sm:px-6 lg:px-9 flex items-center justify-between"
          style={{ height: `${HEADER_HEIGHT}px` }}
        >
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="So-Nyah Cleaners Logo"
              className="w-[110px] sm:w-[125px] lg:w-[139px] h-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex flex-row items-center gap-6">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown?.length;

                return (
                  <li
                    key={item.name}
                    className="relative group"
                  >
                    <div className="flex items-center gap-2">
                      <NavLink to={item.path}>
                        {({ isActive }) => (
                          <div className="flex items-center gap-2">
                            <span
                              className={`pb-1 border-b-[3px] transition-all duration-300 ${
                                isActive
                                  ? "border-[var(--primary)] text-[var(--primary)] font-bold"
                                  : "border-transparent text-[var(--text)] font-medium"
                              }`}
                            >
                              {item.name}
                            </span>

                            {hasDropdown && (
                              <span
                                className={`text-xs transition-all duration-300 group-hover:rotate-180 ${
                                  isActive ? "text-[var(--primary)]" : "text-black"
                                }`}
                              >
                                ▼
                              </span>
                            )}
                          </div>
                        )}
                      </NavLink>
                    </div>

                    {hasDropdown && (
                      <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                        <div className="min-w-[220px] rounded-2xl border border-[var(--border)] bg-white shadow-2xl p-3">
                          <NavLink
                            to={item.path}
                            className="block px-4 py-3 rounded-xl font-semibold text-[var(--primary)] hover:bg-[var(--bg-section)] transition-all duration-300"
                          >
                            Go to {item.name}
                          </NavLink>

                          <div className="my-2 h-px bg-[var(--border)]" />

                          <ul className="flex flex-col gap-1">
                            {item.dropdown?.map((section) => (
                              <li key={section.hash}>
                                <a
                                  href={`${item.path}${section.hash}`}
                                  className="block px-4 py-3 rounded-xl text-[var(--text)] hover:bg-[var(--bg-section)] hover:text-[var(--primary)] transition-all duration-300"
                                >
                                  {section.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <CustomButton text="Contact Us" onClickAction={() =>  navigate("/contact")} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 rounded-lg border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-5 bg-[var(--primary)] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-[var(--primary)] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-[var(--primary)] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 sm:px-6 pb-5 pt-2 border-t border-[var(--border)] bg-white">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown?.length;
                const isOpen = mobileOpenDropdown === item.name;

                return (
                  <li key={item.name} className="w-full">
                    <div className="flex items-center justify-between gap-3">
                      <NavLink
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `block w-fit pb-1 border-b-[3px] transition-all duration-300 ${
                            isActive
                              ? "border-[var(--primary)] text-[var(--primary)] font-bold"
                              : "border-transparent text-[var(--text)] font-medium"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>

                      {hasDropdown && (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="text-[var(--primary)] text-sm px-2 py-1"
                        >
                          <span
                            className={`inline-block  transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                      )}
                    </div>

                    {hasDropdown && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-3 border-l-2 border-[var(--border)] pl-4 flex flex-col gap-2">
                          <a
                            href={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[var(--primary)] font-semibold py-1"
                          >
                            Go to {item.name}
                          </a>

                          {item.dropdown?.map((section) => (
                            <a
                              key={section.hash}
                              href={`${item.path}${section.hash}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-[var(--text)] hover:text-[var(--primary)] transition-all duration-300 py-1"
                            >
                              {section.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 w-full sm:w-auto">
              <CustomButton text="Contact Us" onClickAction={() =>  navigate("/contact")} />
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer so content starts below fixed header */}
      <div style={{ height: `${HEADER_HEIGHT}px` }} />
    </>
  );
};

export default Header;