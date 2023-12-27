import React, { useState } from "react";
import TextInput from "../../Components/TextInput/TextInput";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { LoginFormPropsType } from "../../Models/Pages/LoginModel";
import "../../Styles/Pages/Login.css";

const LoginForm: React.FC<LoginFormPropsType> = ({ defaultErrors }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    ...defaultErrors,
  });

  const navigate: NavigateFunction = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/welcome");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="login-form-container">
        <div className="login-form-input">
          <TextInput
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            label="Email"
            required
            name="email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="login-form-input">
          <TextInput
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            label="Password"
            required
            name="password"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button
          type="submit"
          className="login-button"
          disabled={!formData.email || !formData.password}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
