import React, { useState } from "react";
import {
  validateRequired,
  validateEmail,
  validatePassword,
} from "./Validations";
import SocialIcons from "./SocialIcons";

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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", values);
      handleLoginSuccess();
      try {
        const response = await fetch("https://localhost:3000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const result = await response.json();
        console.log("Form submitted successfully:", result);
      } catch (error) {
        console.error("Form submission error:", error);
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
      {spanText && <span>{spanText}</span>}
      {linkText && linkHref && <a href={linkHref}>{linkText}</a>}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
