import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
import CustomButton from "../component/ui/custom-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Service",
      path: "/services",
    },
    {
      name: "Journal",
      path: "/journal",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-[999] w-full bg-white border-b border-[var(--border)]">
      <div className="h-[66px] px-4 sm:px-6 lg:px-9 flex items-center justify-between">
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
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `pb-1 border-b-[3px] transition-all duration-300 ${
                      isActive
                        ? "border-[var(--primary)] text-[var(--primary)] font-bold"
                        : "border-transparent text-[var(--text)] font-medium"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <CustomButton text="Book Now" />
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
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 sm:px-6 pb-5 pt-2 border-t border-[var(--border)] bg-white">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
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
              </li>
            ))}
          </ul>

          <div className="mt-5 w-full sm:w-auto">
            <CustomButton text="Book Now" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;