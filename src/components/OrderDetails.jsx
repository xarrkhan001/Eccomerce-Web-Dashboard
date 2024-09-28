// OrderDetails.js
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useTheme } from "./ThemeContext"; // Import the theme context

const OrderDetails = ({ order, onClose }) => {
  const { isDarkMode } = useTheme(); // Access the dark mode state

  if (!order) return null; // Don't render if no order is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className={`p-5 rounded-lg shadow-lg w-96 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
        initial={{ opacity: 0, y: -50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        exit={{ opacity: 0, y: -50 }} // Exit state
        transition={{ duration: 0.3 }} // Animation duration
      >
        <h2 className="text-lg font-bold mb-4">Order Details</h2>
        <div className="space-y-2">
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Customer:</strong> {order.customer}
          </p>
          <p>
            <strong>Date:</strong> {order.date}
          </p>
          <p>
            <strong>Total:</strong> {order.total}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
        </div>

        {/* Additional Order Details */}
        <div className="mt-4">
          <h3 className="font-semibold">Items:</h3>
          <ul className="list-disc ml-5">
            <li>Item 1 - $50.00</li>
            <li>Item 2 - $100.00</li>
            <li>Item 3 - $30.00</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Shipping Address:</h3>
          <p>1234 Street Name, City, Country, 56789</p>
        </div>

        <button className="mt-4 text-red-500 hover:underline" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default OrderDetails;
