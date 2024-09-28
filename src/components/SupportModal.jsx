import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

const SupportModal = ({ onClose }) => {
  const { isDarkMode } = useTheme();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", message);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "100%" },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        className={`rounded-lg shadow-lg p-6 w-full max-w-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-4">Contact Support</h2>
        <p className="mb-4">Please describe your issue or request:</p>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
                : "border-gray-300 focus:ring-blue-300"
            }`}
            placeholder="Type your message here..."
          ></textarea>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className={`py-2 px-4 rounded-lg mr-2 ${
                isDarkMode
                  ? "bg-gray-600 text-white hover:bg-gray-500"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 ${
                isDarkMode ? "hover:bg-blue-500" : ""
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SupportModal;
