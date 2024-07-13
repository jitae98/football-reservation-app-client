import React from "react";
import SocialIcons from "./SocialIcons.js";
import Form from "./Form.js";

const FormContainer = ({ formType, handleLoginSuccess }) => {
  return (
    <div className={`form-container ${formType}`}>
      <Form
        title={formType === "sign-up" ? "Create Account" : "Sign In"}
        buttonText={formType === "sign-up" ? "Sign Up" : "Sign In"}
        spanText={
          formType === "sign-up" ? "or use your email for registration" : ""
        }
        linkText={formType === "sign-in" ? "Forget Your Password?" : ""}
        linkHref={formType === "sign-in" ? "#" : ""}
        handleLoginSuccess={handleLoginSuccess}
      >
        {({ values, errors, handleChange }) => (
          <>
            <SocialIcons />
            {formType === "sign-up" && (
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
            )}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email || ""}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            {formType === "sign-in" && <a href="#">Forget Your Password?</a>}
          </>
        )}
      </Form>
    </div>
  );
};

export default FormContainer;
