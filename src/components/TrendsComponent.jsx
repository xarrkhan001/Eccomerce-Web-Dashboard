import React from "react";
import { useTheme } from "./ThemeContext"; // Import the theme context
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const TrendsComponent = () => {
  const { isDarkMode } = useTheme(); // Get the theme context

  // Sample data for the chart
  const data = [
    { name: "Yesterday", growth: 10 },
    { name: "Today", growth: 20 },
  ];

  return (
    <div
      className={`shadow-lg rounded-md p-5 w-1/2 h-[410px] flex flex-col justify-between ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div>
        <h3 className="text-lg font-bold mb-2">Today's Trends</h3>
        <p className="text-sm mb-4">{new Date().toLocaleDateString()}</p>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDarkMode ? "#444" : "#ddd"}
            />
            <XAxis dataKey="name" stroke={isDarkMode ? "#fff" : "#000"} />
            <YAxis stroke={isDarkMode ? "#fff" : "#000"} />
            <Tooltip
              contentStyle={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}
              itemStyle={{ color: isDarkMode ? "#fff" : "#000" }}
            />
            <Line
              type="monotone"
              dataKey="growth"
              stroke="#4bc0c0"
              strokeWidth={2}
              dot={{ stroke: "#4bc0c0", strokeWidth: 2 }}
              activeDot={{ stroke: "#4bc0c0", strokeWidth: 3, r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendsComponent;
