import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Student from "./Student";
import Employee from "./Employee";

export default function Contact() {
  const location = useLocation();
  return (
    <div>
      Contact Page
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}
