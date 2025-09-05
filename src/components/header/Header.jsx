import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  const isPink =
    pathname === "/" || pathname === "/users" || pathname === "/products";
  return (
    <header
      className={`${
        isPink ? "bg-green-900 text-white" : ""
      } flex h-20 w-full items-center gap-4 `}
    >
      <div
        className={`${
          isPink ? "bg-green-900" : ""
        } flex h-20 w-full items-center gap-4 container justify-between `}
      >
        <div className="">
          <b className="mr-[500px]">Header</b>
        </div>
        <NavLink
          className={({ isActive }) =>
            `uppercase ${isActive ? "text-green-500 underline" : ""}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase ${isActive ? "text-green-500 underline" : ""}`
          }
          to={"/users"}
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase ${isActive ? "text-green-500 underline" : ""}`
          }
          to={"/products"}
        >
          Products
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `uppercase ${isActive ? "text-green-500 underline" : ""}`
          }
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
