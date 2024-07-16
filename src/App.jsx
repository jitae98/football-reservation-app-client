import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FormContainer from "./components/FormContainer.js";
import ToggleContainer from "./components/ToggleContainer.js";
import BookingPage from "./screens/BookingPage.jsx";
import MainPage from "./screens/MainPage.jsx";
import Login from "./screens/Login.jsx";
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
        <Route path="/" element={<Navigate to="/login" />} />
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
          path="/MainPage"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />}
        />

        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
