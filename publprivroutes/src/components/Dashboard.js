// this page will render at login, it is protected. Needs login to open this page.

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ logoutX }) {
  const navigate = useNavigate();
  function logoutPage() {
    logoutX();
    navigate("auth");
  }
  return (
    <div>
      Dashboard Page
      <button onClick={logoutPage}>Logout</button>
    </div>
  );
}
