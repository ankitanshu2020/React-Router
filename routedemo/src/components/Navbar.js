import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <p>This Is Navbar Page</p>
      {/* navlink will make it like active */}
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to="/">
        Home
      </NavLink>
      |
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to="/about">
        About
      </NavLink>
      |
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to="/about/123">
        About ID
      </NavLink>
      |
      <Link to="/contact" state={{ topic: "ReactJs from Navbar" }}>
        Contact Us
      </Link>
      <Outlet />
    </div>
  );
}
