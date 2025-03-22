import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className=" header">
      <NavLink
        to="/"
        className=" w-content rounded-full bg-gradient-to-r from-purple1 to-purple3 items-center justify-center flex font-bold showdow-md hover:scale-[1.2] transitions duration-500"
      >
        <p className="py-3 px-6 text-white">HOME</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ">
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
    </header>
  );
};

export default Navbar;
