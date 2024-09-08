// this page will render at login, it is public
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ loginX }) {
  const navigate = useNavigate();
  function loginPage() {
    loginX();
    navigate("dashboard");
  }
  return (
    <div>
      Auth Page
      <button onClick={loginPage}>Login</button>
    </div>
  );
}
