import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../component/ui/custom-button";
import { useNavigate } from "react-router-dom";

type SectionLink = {
  label: string;
  hash: string;
};

type NavItem = {
  name: string;
  path: string;
  dropdown?: SectionLink[];
};

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

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
    { name: "Services", path: "/services" },
    { name: "News And Event", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
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
  ];

  const toggleMobileDropdown = (name: string) => {
    setMobileOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header className="w-full bg-white">
        {/* Top row: logo + contact + CTA */}
        <div className="mx-auto flex h-[86px] w-full max-w-[1100px] items-center justify-between px-4 sm:h-[104px] sm:px-6 lg:h-[136px] lg:px-9">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="So-Nyah Cleaners Logo"
              className="h-auto w-[96px] sm:w-[112px] lg:w-[139px]"
            />
          </div>

          {/* Contact info + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:09129485335"
              className="flex items-center gap-3 text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300"
            >
              <span className="text-[var(--primary)]">
                <PhoneIcon />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[13px] tracking-wide text-[var(--text)]/70">
                  Contact Us
                </span>
                <span className="text-[15px] font-semibold text-[var(--text)]">
                  +234 909 478 2495
                </span>
              </span>
            </a>

            <CustomButton text="Contact Us" onClickAction={() => navigate("/contact")} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden flex h-11 w-11 items-center justify-center gap-1 rounded-lg border border-[var(--border)] transition-all duration-300 hover:border-[var(--primary)] sm:h-12 sm:w-12"
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
          <nav className="border-t border-[var(--border)] bg-white px-4 py-3 sm:px-6 sm:py-4">
            {/* Mobile contact info */}
            <a
              href="tel:09129485335"
              className="flex items-center gap-3 mb-4 text-[var(--text)]"
            >
              <span className="text-[var(--primary)]">
                <PhoneIcon />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[12px] tracking-wide text-[var(--text)]/70">
                  Contact Us
                </span>
                <span className="text-[14px] font-semibold text-[var(--text)]">
                  0912 948 5335
                </span>
              </span>
            </a>

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
                          `block w-fit text-[13px] tracking-[0.12em] font-semibold transition-colors duration-300 ${
                            isActive ? "text-[var(--primary)]" : "text-[var(--text)]"
                          }`
                        }
                      >
                        {item.name.toUpperCase()}
                      </NavLink>

                      {hasDropdown && (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="text-[var(--primary)] text-sm px-2 py-1"
                        >
                          <span
                            className={`inline-block transition-transform duration-300 ${
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
              <CustomButton text="Contact Us" onClickAction={() => navigate("/contact")} />
            </div>
          </nav>
        </div>
      </header>

        {/* Nav row: centered, uppercase, letter-spaced */}
        <div className="sticky top-0 z-[1999]  bg-white lg:block">
          <div className="mx-auto flex h-[48px] w-full max-w-[1100px] items-center justify-center border-t-2 border-[var(--border)] px-4 sm:px-6 lg:px-12">

          <nav className="hidden lg:block w-full">
            <ul className="flex flex-row w-full items-center justify-between gap-12">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown?.length;

                return (
                  <li key={item.name} className="relative group">
                    <div className="flex items-center  gap-1.5">
                      <NavLink to={item.path}>
                        {({ isActive }) => (
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[13px] tracking-[0.3em] transition-colors duration-300 ${
                                isActive
                                  ? "bg-[var(--primary)] p-[0.5em] pl-7 pr-7 text-white "
                                  : "text-[var(--text)]"
                              }`}
                            >
                              {item.name.toUpperCase()}
                            </span>

                            {hasDropdown && (
                              <span
                                className={`text-[9px] transition-all duration-300 group-hover:rotate-180 ${
                                  isActive ? "text-[var(--primary)]" : "text-[var(--text)]"
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
                        <div className="min-w-[220px]  border border-[var(--border)] bg-white shadow-2xl p-3">
                          <NavLink
                            to={item.path}
                            className="block px-4 py-3 font-semibold text-[var(--primary)] hover:bg-[var(--bg-section)] transition-all duration-300"
                          >
                            Go to {item.name.toUpperCase()}
                          </NavLink>

                          <div className="my-2 h-px bg-[var(--border)]" />

                          <ul className="flex flex-col gap-1">
                            {item.dropdown?.map((section) => (
                              <li key={section.hash}>
                                <a
                                  href={`${item.path}${section.hash}`}
                                  className="block px-4 py-3 text-[var(--text)] hover:bg-[var(--bg-section)] hover:text-[var(--primary)] transition-all duration-300"
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

          </div>
        </div>

    </>
  );
};

export default Header;