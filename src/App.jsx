import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FormContainer from "./components/FormContainer.js";
import ToggleContainer from "./components/ToggleContainer.js";
import Main from "./components/Main.js";
import "./App.css";

const App = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <div
              className={`container ${isSignUpActive ? "active" : ""}`}
              id="container"
            >
              <FormContainer
                formType="sign-in"
                handleLoginSuccess={handleLoginSuccess}
              />
              <ToggleContainer
                onSignInClick={handleSignInClick}
                onSignUpClick={handleSignUpClick}
              />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div
              className={`container ${isSignUpActive ? "active" : ""}`}
              id="container"
            >
              <FormContainer
                formType="sign-up"
                handleLoginSuccess={handleLoginSuccess}
              />
              <ToggleContainer
                onSignInClick={handleSignInClick}
                onSignUpClick={handleSignUpClick}
              />
            </div>
          }
        />
        <Route
          path="/main"
          element={isAuthenticated ? <Main /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
