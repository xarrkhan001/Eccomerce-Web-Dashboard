import React, { useState } from "react";
import { useTheme } from "./ThemeContext"; // Import your theme context
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

const SignUp = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode value
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords must match.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      // Here you can also send data to your backend
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className={`absolute inset-0 bg-black ${
          isDarkMode ? "bg-opacity-75" : "bg-opacity-50"
        } backdrop-blur-lg`}
      ></div>
      <form
        onSubmit={handleSubmit}
        className={`relative rounded-lg shadow-lg p-8 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        } w-full max-w-md transition duration-300 ease-in-out`}
      >
        <button
          type="button"
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-lg transition duration-200 ${
              errors.username ? "border-red-500" : "border-gray-300"
            } ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-500 text-xs">{errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-lg transition duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-lg transition duration-200 ${
              errors.password ? "border-red-500" : "border-gray-300"
            } ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border rounded-lg transition duration-200 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } shadow-lg`}
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
