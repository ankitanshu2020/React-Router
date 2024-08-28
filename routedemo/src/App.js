import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact/*" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Navbar />}>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/about" element={<About />} />
        </Route>

        {/* error page will show page not found, if user is going to undefined page like "/sdfsafs" */}
        <Route path="*" element={<Error />} />

        {/* Navigate is for unexpected token in url, it will navigate page Home page */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}
