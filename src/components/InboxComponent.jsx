import React from "react";
import { useTheme } from "./ThemeContext"; // Import the theme context

const InboxComponent = () => {
  const { isDarkMode } = useTheme(); // Get the theme context
  const messages = [
    { id: 1, text: "Wait for Order #12345", type: "order" },
    { id: 2, text: "Customer Support ID #122344", type: "support" },
  ];

  return (
    <div
      className={`shadow-lg rounded-lg p-2 w-[480px] h-[150px] ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-lg font-bold mb-1">Inbox</h3>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="py-0.5">
            <span
              className={`font-semibold ${
                message.type === "order" ? "text-blue-600" : "text-green-600"
              }`}
            >
              {message.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxComponent;
