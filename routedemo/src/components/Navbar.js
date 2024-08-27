import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <p>This Is Navbar Page</p>
      {/* do not use a tag(refreshes page), Link tag will not refresh page*/}
      <Link to="/">Home</Link> |<Link to="/about">About</Link> |
      <Link to="/about/123">About ID</Link> |
      <Link to="/contact" state={{ topic: "ReactJs from Navbar" }}>
        Contact Us
      </Link>
      <Outlet />
    </div>
  );
}
