import React, { useState } from "react";
import FormContainer from "./components/FormContainer.js";
import ToggleContainer from "./components/ToggleContainer.js";
import "./App.css";

const App = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  return (
    <div
      className={`container ${isSignUpActive ? "active" : ""}`}
      id="container"
    >
      <FormContainer formType="sign-up" />
      <FormContainer formType="sign-in" />
      <ToggleContainer
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      />
    </div>
  );
};

export default App;
