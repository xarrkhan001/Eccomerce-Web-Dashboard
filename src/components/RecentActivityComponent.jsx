import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeContext"; // Import your ThemeContext

const RecentActivityComponent = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <div
      className={`shadow-lg rounded-md p-5 w-full h-[244px] ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Recent Activity</h3>
        <a
          href="#"
          className={`text-${
            isDarkMode ? "teal-300" : "blue-600"
          } hover:underline`}
        >
          View All
        </a>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faCircle} className="text-blue-600 mr-2" />
        <span>Confirm Order Update</span>
        <span className="ml-auto bg-yellow-100 text-yellow-600 rounded-full px-2 text-xs">
          Urgent
        </span>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faCircle} className="text-red-600 mr-2" />
        <span>Finish Order Update</span>
        <span className="ml-auto bg-yellow-100 text-yellow-600 rounded-full px-2 text-xs">
          Urgent
        </span>
      </div>

      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faCircle} className="text-gray-400 mr-2" />
        <span>Create New Order</span>
        <button className="ml-auto bg-green-500 text-white rounded-full px-3 py-1 text-xs">
          New
        </button>
      </div>

      {/* New Section for Update Payment Report */}
      <div className="flex items-center mt-4">
        <FontAwesomeIcon icon={faCircle} className="text-blue-600 mr-2" />
        <span>Update Payment Report</span>
        <button className="ml-auto bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-xs">
          Default
        </button>
      </div>
    </div>
  );
};

export default RecentActivityComponent;
