import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Mobile menu portal component - renders directly to document body
  const MobileMenuPortal = () => {
    if (!isMenuOpen) return null;

    return ReactDOM.createPortal(
      <div className={`mobile-menu-overlay ${isMenuOpen ? "menu-active" : ""}`}>
        {/* Exit button inside the menu */}
        <button
          className="close-menu-btn"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mobile-menu-container">
          <NavLink
            to="/about"
            className="mobile-menu-link"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="mobile-menu-link"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="mobile-menu-link"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>,
      document.body,
    );
  };

  return (
    <>
      <header className="header headerSmall">
        <div className="flex items-center justify-between w-full">
          <NavLink
            to="/"
            className="w-content rounded-full bg-gradient-to-r from-purple1 to-purple3 items-center justify-center flex font-bold shadow-md hover:scale-[1.2] transition duration-500"
          >
            <p className="py-3 px-6 text-white">HOME</p>
          </NavLink>

          {/* Hamburger menu button (mobile only) */}
          <button
            className="md:hidden text-white p-2 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex text-lg gap-7 font-medium">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition duration-500 hover:scale-[1.2] py-2 px-4 rounded-4xl border-purple1 border ${
                  isActive
                    ? "text-purple3 border-white"
                    : location.pathname === "/"
                      ? "text-white"
                      : "text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition duration-500 hover:scale-[1.2] py-2 px-4 rounded-4xl border-purple1 border ${
                  isActive
                    ? "text-purple3 border-white"
                    : location.pathname === "/"
                      ? "text-white"
                      : "text-white"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition duration-500 hover:scale-[1.2] py-2 px-4 rounded-4xl border-purple1 border ${
                  isActive
                    ? "text-purple3 border-white"
                    : location.pathname === "/"
                      ? "text-white"
                      : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Render mobile menu with portal */}
      <MobileMenuPortal />
    </>
  );
};

export default Navbar;
