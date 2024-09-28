import React, { useState } from "react";
import { useTheme } from "./ThemeContext"; // Import theme context

const Profile = () => {
  const { isDarkMode } = useTheme(); // Get dark mode value

  // Sample profile state
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "+1234567890",
    address: "123 Admin St, Admin City, Admin Country",
    profilePicture: null,
  });

  // Handle profile updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfile({
      ...profile,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to send updated profile data to the server
    alert("Profile updated successfully!");
  };

  return (
    <div
      className={`min-h-screen p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      {/* Profile Information Section */}
      <form
        onSubmit={handleSubmit}
        className={`rounded-lg shadow p-4 mb-5 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-xl font-bold mb-2">Profile Information</h2>

        <div className="mb-4">
          <label className="block mb-1">Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded p-2 w-full"
          />
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="mt-2 w-24 h-24 rounded-full"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className={`border rounded p-2 w-full ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className={`border rounded p-2 w-full ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className={`border rounded p-2 w-full ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className={`border rounded p-2 w-full ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
          />
        </div>

        <button
          type="submit"
          className={`px-4 py-2 rounded ${
            isDarkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
          }`}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
