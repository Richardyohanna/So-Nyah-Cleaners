import logo from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
import CustomButton from "../component/ui/custom-button"

const Header = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Service",
      path: "/service",
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
    <header className="absolute z-99 w-full flex items-center justify-between bg-white h-[66px] px-9 border-b border-[var(--border)]">
      <div>
        <img
          src={logo}
          alt="So-Nyah Cleaners Logo"
          className="w-[139px] h-auto"
        />
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 border-b-3 transition-all duration-300 ${
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

      <div>
          <CustomButton text="Book Now" />
      </div>
    </header>
  );
};

export default Header;