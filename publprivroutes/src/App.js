import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [userT, setUserT] = useState(false);

  useEffect(() => {
    const userType1 = localStorage.getItem("loginPage");
    userType1 ? setUserT(false) : setUserT(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("loginPage", userT);
  }, [userT]);

  return (
    <div className="App">
      App Component
      <Routes>
        {/* case of not log in */}
        {!userT && (
          <Route
            path="/auth"
            element={<Auth loginX={() => setUserT(true)} />}
          />
        )}
        {/* when user is log in */}
        {userT && (
          <Route
            path="/dashboard"
            element={<Dashboard logoutX={() => setUserT(false)} />}
          />
        )}
        <Route
          path="*"
          element={<Navigate to={userT ? "dashboard" : "auth"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
