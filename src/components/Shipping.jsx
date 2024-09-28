import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const Shipping = () => {
  const { isDarkMode } = useTheme();

  const [shippingMethods, setShippingMethods] = useState([]);
  const [method, setMethod] = useState("");
  const [rate, setRate] = useState("");
  const [zones, setZones] = useState([]);
  const [zone, setZone] = useState("");

  const handleAddMethod = () => {
    if (method && rate) {
      setShippingMethods([...shippingMethods, { method, rate }]);
      setMethod("");
      setRate("");
    }
  };

  const handleAddZone = () => {
    if (zone) {
      setZones([...zones, zone]);
      setZone("");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } p-5`}
    >
      <h1 className="text-xl font-bold mb-4">Shipping Options</h1>
      <p className="mb-5">
        Manage your shipping options and settings. Define shipping methods and
        zones for efficient delivery.
      </p>

      {/* Add Shipping Method Section */}
      <div className="mb-5 border-b pb-4">
        <h2 className="text-lg font-semibold">Add Shipping Method</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Shipping Method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          />
          <input
            type="text"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className={`p-2 border rounded-md w-1/3 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          />
          <button
            onClick={handleAddMethod}
            className={`p-2 rounded-md transition-transform ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105"
                : "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg scale-105"
            }`}
          >
            Add
          </button>
        </div>
        <div className="max-h-40 overflow-y-auto border rounded-md p-2">
          <h3 className="text-md font-semibold">Shipping Methods</h3>
          <ul className="mt-2">
            {shippingMethods.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item.method} - ${item.rate}
              </li>
            ))}
          </ul>
          {shippingMethods.length === 0 && (
            <p className="text-gray-500">No shipping methods added yet.</p>
          )}
        </div>
      </div>

      {/* Add Shipping Zone Section */}
      <div className="mb-5 border-b pb-4">
        <h2 className="text-lg font-semibold">Add Shipping Zone</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Shipping Zone"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          />
          <button
            onClick={handleAddZone}
            className={`p-2 rounded-md transition-transform ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105"
                : "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg scale-105"
            }`}
          >
            Add
          </button>
        </div>
        <div className="max-h-40 overflow-y-auto border rounded-md p-2">
          <h3 className="text-md font-semibold">Shipping Zones</h3>
          <ul className="mt-2">
            {zones.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item}
              </li>
            ))}
          </ul>
          {zones.length === 0 && (
            <p className="text-gray-500">No shipping zones added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
