import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faBox,
  faShippingFast,
  faCreditCard,
  faCog,
  faHeadset,
  faSun,
  faMoon,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import SupportModal from "./SupportModal";
import { useTheme } from "./ThemeContext";

const Sidebar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [showSupportModal, setShowSupportModal] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/", icon: faTachometerAlt },
    { name: "Orders", path: "/orders", icon: faBox },
    { name: "Products", path: "/products", icon: faBox },
    { name: "Shipping", path: "/shipping", icon: faShippingFast },
    { name: "Payment", path: "/payment", icon: faCreditCard },
    { name: "Settings", path: "/settings", icon: faCog },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`w-64 h-screen p-5 shadow-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
      style={{
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div className="flex items-center justify-between mb-6">
        {location.pathname !== "/" && (
          <button onClick={() => navigate(-1)} className="text-2xl">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        <button onClick={toggleDarkMode} className="text-2xl">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
      <ul className="mt-6">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`mb-2 rounded-lg transition-transform duration-200 flex items-center cursor-pointer ${
              location.pathname === item.path
                ? isDarkMode
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105"
                  : "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg scale-105"
                : isDarkMode
                ? "hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-300 hover:text-white hover:scale-105"
                : "hover:bg-purple-300 hover:shadow-lg hover:scale-105"
            }`}
          >
            <Link
              to={item.path}
              className="flex items-center w-full p-3"
              onClick={() => setShowSupportModal(false)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`mr-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-400"
                }`}
              />
              <span className="ml-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3 className="text-xl font-bold mt-3 px-3">Customer Support</h3>
        <p className="text-gray-600 mt-5 px-3">
          Ask your query, place requests, or report important issues. Our
          support team will contact you 24/7.
        </p>
        <div className="mt-3">
          <button
            onClick={() => setShowSupportModal(true)}
            className="flex items-center text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-200 transition duration-200"
          >
            <FontAwesomeIcon icon={faHeadset} className="mr-2" />
            <span>Connect Now</span>
          </button>
        </div>
      </div>

      {showSupportModal && (
        <SupportModal onClose={() => setShowSupportModal(false)} />
      )}
    </div>
  );
};

export default Sidebar;
