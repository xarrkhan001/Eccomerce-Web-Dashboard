import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import IMG from "../assets/Myself.jpg";
import CardComponent from "./CardComponent";
import InboxComponent from "./InboxComponent";
import TrendsComponent from "./TrendsComponent";
import RecentActivityComponent from "./RecentActivityComponent";

// Import product images
import img1 from "../assets/hanger-2566555.jpg";
import img2 from "../assets/hanger-2566555.jpg";
import img3 from "../assets/hanger-2566555.jpg";
import img4 from "../assets/hanger-2566555.jpg";
import img5 from "../assets/hanger-2566555.jpg";
import img6 from "../assets/hanger-2566555.jpg";
import img7 from "../assets/hanger-2566555.jpg";
import img8 from "../assets/hanger-2566555.jpg";
import img9 from "../assets/hanger-2566555.jpg";
import img10 from "../assets/hanger-2566555.jpg";

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const products = [
    { title: "Wireless Headphones", category: "Electronics", image: img1 },
    { title: "Stylish T-Shirt", category: "Clothing", image: img2 },
    { title: "Chef's Knife Set", category: "Kitchen", image: img3 },
    { title: "Smartwatch", category: "Electronics", image: img4 },
    { title: "Artistic Wall Clock", category: "Home Decor", image: img5 },
    { title: "Colorful Toy Blocks", category: "Toys", image: img6 },
    { title: "Trendy Jacket", category: "Clothing", image: img7 },
    { title: "Fitness Tracker", category: "Sports", image: img8 },
    { title: "Gaming Laptop", category: "Electronics", image: img9 },
    { title: "Luxury Perfume", category: "Beauty", image: img10 },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Navbar */}
      <div className="flex items-center justify-between p-5">
        {/* Total Revenue Section */}
        <div className="flex flex-col justify-center mb-2">
          <h2 className="text-xl font-bold">Total Revenue</h2>
          <div className="flex items-center">
            <p className="text-3xl font-semibold mr-2">$45,465.00</p>
            <div className="flex space-x-3 text-sm">
              <span className="text-green-500">▲ $1.29</span>
              <span className="text-red-500">▼ $1.29</span>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="relative w-1/3">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search for items ..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(e.target.value.length > 0);
            }}
            className={`pl-10 p-2 border rounded-md w-[380px] ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          />
          {showDropdown && filteredProducts.length > 0 && (
            <div
              className={`absolute z-10 rounded-md mt-1 w-[380px] transition-all duration-200 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-8 h-8 rounded-md mr-2"
                  />
                  <div>
                    <div className="font-bold">{product.title}</div>
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-8">
          {/* Message Icon */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`cursor-pointer text-${
                isDarkMode ? "teal-300" : "blue-600"
              } hover:text-${isDarkMode ? "teal-400" : "blue-700"}`}
              size="lg"
              onClick={() => setShowMessages(!showMessages)}
            />
            {showMessages && (
              <div
                className={`absolute right-0 mt-2 rounded-md w-48 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <p
                  className={`p-2 text-sm ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Message 1
                </p>
                <p
                  className={`p-2 text-sm ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Message 2
                </p>
              </div>
            )}
          </div>
          {/* Notification Icon */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faBell}
              className={`cursor-pointer text-${
                isDarkMode ? "teal-300" : "blue-600"
              } hover:text-${isDarkMode ? "teal-400" : "blue-700"}`}
              size="lg"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {showNotifications && (
              <div
                className={`absolute right-0 mt-2 rounded-md w-48 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <p
                  className={`p-2 text-sm ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Notification 1
                </p>
                <p
                  className={`p-2 text-sm ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Notification 2
                </p>
              </div>
            )}
          </div>
          {/* Profile Icon */}
          <div className="relative">
            <img
              src={IMG}
              alt="Profile"
              className="cursor-pointer rounded-full w-8 h-8 transition-transform transform hover:scale-110"
              onClick={() => setShowProfile(!showProfile)}
            />
            {showProfile && (
              <div
                className={`absolute right-0 mt-2 rounded-md w-48 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <Link
                  to="/profile"
                  className={`flex items-center p-2 hover:bg-gray-300 cursor-pointer ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Profile
                  </span>
                </Link>
                <Link
                  to="/signup"
                  className={`flex items-center p-2 hover:bg-gray-300 cursor-pointer ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Sign Up
                  </span>
                </Link>
                <Link
                  to="/login"
                  className={`flex items-center p-2 hover:bg-gray-300 cursor-pointer ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Login
                  </span>
                </Link>
                <div
                  className={`flex items-center p-2 hover:bg-gray-300 cursor-pointer ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                  onClick={() => navigate("/logout")} // Navigate to Logout
                >
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Logout
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="space-y-4">
        <CardComponent />
        <div className="flex space-x-4 px-5">
          <div className="space-y-4">
            <InboxComponent />
            <RecentActivityComponent />
          </div>
          <TrendsComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
