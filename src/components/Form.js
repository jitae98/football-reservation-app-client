import React, { useState } from "react";
import {
  validateRequired,
  validateEmail,
  validatePassword,
} from "./Validations.js";

const Form = ({
  title,
  children,
  buttonText,
  spanText,
  linkText,
  linkHref,
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
    // Validation logic
    if (values.name !== undefined && !validateRequired(values.name)) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", values);
      //   try {
      //     const response = await fetch('https://example.com/api/submit', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(values),
      //     });
      //     const result = await response.json();
      //     console.log('Form submitted successfully:', result);
      //   } catch (error) {
      //     console.error('Form submission error:', error);
      //   }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {typeof children === "function"
        ? children({
            values,
            errors,
            handleChange,
          })
        : children}
      {spanText && <span>{spanText}</span>}
      {linkText && linkHref && <a href={linkHref}>{linkText}</a>}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
