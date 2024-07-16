import React, { useState } from "react";
import {
  validateRequired,
  validateEmail,
  validatePassword,
} from "./Validations.js";
import SocialIcons from "./SocialIcons.js";

const Form = ({
  title,
  buttonText,
  spanText,
  linkText,
  linkHref,
  handleLoginSuccess,
  formType,
}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (formType === "sign-up" && !validateRequired(values.name)) {
      newErrors.name = "Name is required";
    }
    if (!validateEmail(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!validatePassword(values.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include a number and a special character";
    }
    if (formType === "sign-up" && values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const endpoint =
          formType === "sign-up"
            ? "http://localhost:3000/api/users/register"
            : "http://localhost:3000/api/users/login";
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          const result = await response.json();
          console.log("Form submitted successfully:", result);
          if (formType === "sign-in") {
            localStorage.setItem("token", result.token);
            handleLoginSuccess();
            // Redirect to Main Page
            window.location.href = "/main";
          } else {
            handleLoginSuccess();
          }
        } else {
          console.error("Form submission error:", response.statusText);
          if (formType === "sign-up") {
            window.location.reload();
          }
        }
      } catch (error) {
        console.error("Form submission error:", error);
        if (formType === "sign-up") {
          window.location.reload();
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
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
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      {formType === "sign-up" && (
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword || ""}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
      )}
      {spanText && <span>{spanText}</span>}
      {linkText && linkHref && <a href={linkHref}>{linkText}</a>}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
