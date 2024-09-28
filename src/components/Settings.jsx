import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const Settings = () => {
  const { isDarkMode } = useTheme();

  // State for settings
  const [siteTitle, setSiteTitle] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [customerAccount, setCustomerAccount] = useState(true);
  const [trackingId, setTrackingId] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const handleSaveSettings = (e) => {
    e.preventDefault();
    console.log("Settings saved:", {
      siteTitle,
      siteDescription,
      customerAccount,
      trackingId,
      socialLinks,
    });
    alert("Settings saved successfully!");
  };

  const handleResetSettings = () => {
    setSiteTitle("");
    setSiteDescription("");
    setCustomerAccount(true);
    setTrackingId("");
    setSocialLinks({
      facebook: "",
      twitter: "",
      instagram: "",
    });
    alert("Settings reset to default values!");
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen p-6 overflow-y-auto ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      style={{ maxHeight: "100vh" }}
    >
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${isDarkMode ? "#4b5563" : "#e5e7eb"};
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: ${isDarkMode ? "#6b7280" : "#d1d5db"};
          }
          .button-container {
            position: sticky;
            bottom: 1rem;
            right: 1rem;
            background-color: inherit;
            padding: 1rem;
            z-index: 10;
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>

      <h1 className="text-2xl font-bold mb-4">Adjust Your Settings</h1>
      <p className="mb-6">
        Modify your preferences and settings to optimize your e-commerce
        experience.
      </p>

      <form onSubmit={handleSaveSettings} className="space-y-8">
        {/* General Settings Section */}
        <section
          className={`border p-4 rounded shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border-gray-600`}
        >
          <h2 className="text-xl font-semibold mb-2">General Settings</h2>
          <input
            type="text"
            value={siteTitle}
            onChange={(e) => setSiteTitle(e.target.value)}
            placeholder="Site Title"
            className={`w-full p-2 rounded mb-4 ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-gray-900 border border-gray-300"
            }`}
            required
          />
          <textarea
            value={siteDescription}
            onChange={(e) => setSiteDescription(e.target.value)}
            placeholder="Site Description"
            className={`w-full p-2 rounded mb-4 ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-gray-900 border border-gray-300"
            }`}
            rows="3"
            required
          />
        </section>

        {/* Customer Accounts Section */}
        <section
          className={`border p-4 rounded shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border-gray-600`}
        >
          <h2 className="text-xl font-semibold mb-2">Customer Accounts</h2>
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={customerAccount}
              onChange={() => setCustomerAccount(!customerAccount)}
              className="mr-2"
            />
            Enable Customer Account Creation
          </label>
        </section>

        {/* Analytics and Tracking Section */}
        <section
          className={`border p-4 rounded shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border-gray-600`}
        >
          <h2 className="text-xl font-semibold mb-2">Analytics and Tracking</h2>
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Google Analytics Tracking ID"
            className={`w-full p-2 rounded mb-4 ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-gray-900 border border-gray-300"
            }`}
            required
          />
        </section>

        {/* Social Media Integration Section */}
        <section
          className={`border p-4 rounded shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border-gray-600`}
        >
          <h2 className="text-xl font-semibold mb-2">
            Social Media Integration
          </h2>
          {Object.keys(socialLinks).map((key) => (
            <input
              key={key}
              type="text"
              value={socialLinks[key]}
              onChange={(e) =>
                setSocialLinks({ ...socialLinks, [key]: e.target.value })
              }
              placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} Link`}
              className={`w-full p-2 rounded mb-4 ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            />
          ))}
        </section>
      </form>

      {/* Button Container */}
      <div className="button-container ">
        <button
          type="submit"
          onClick={handleSaveSettings}
          className="bg-blue-500 text-white p-2 mb-6 rounded hover:bg-blue-600 transition duration-200 mr-2"
        >
          Save Settings
        </button>

        <button
          type="button"
          onClick={handleResetSettings}
          className="bg-red-500 text-white p-2 mb-6 rounded hover:bg-red-600 transition duration-200"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default Settings;
