import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      This Is Home Page <br />
      <button
        onClick={() => navigate("/contact", { state: { topic: "ReactJs" } })}>
        move to contact page
      </button>
    </div>
  );
}
