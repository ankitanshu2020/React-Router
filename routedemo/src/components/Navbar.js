import React from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <p>This Is Navbar Page</p>
      <a href="/">Home</a> |<a href="/about">About</a> |
      <a href="/about/123">About ID</a> |
      <a href="/contact">Contact Us</a>
      <Outlet />
    </div>
  );
}
