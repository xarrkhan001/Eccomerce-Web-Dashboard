// NewOrders.js
import React from "react";
import { useTheme } from "./ThemeContext"; // Import the context

const NewOrders = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode value

  // Sample data for new orders
  const newOrders = [
    {
      orderId: "3001",
      customerName: "Eve Adams",
      orderDate: "2023-09-25",
      product: "Smartphone",
    },
    {
      orderId: "3002",
      customerName: "Frank Black",
      orderDate: "2023-09-26",
      product: "Laptop",
    },
    {
      orderId: "3003",
      customerName: "Grace Lee",
      orderDate: "2023-09-27",
      product: "Headphones",
    },
    {
      orderId: "3004",
      customerName: "Hannah James",
      orderDate: "2023-09-28",
      product: "Tablet",
    },
    {
      orderId: "3005",
      customerName: "Ivy Wilson",
      orderDate: "2023-09-29",
      product: "Smartwatch",
    },
    {
      orderId: "3006",
      customerName: "Jack White",
      orderDate: "2023-09-30",
      product: "Camera",
    },
    {
      orderId: "3007",
      customerName: "Kevin Brown",
      orderDate: "2023-10-01",
      product: "Printer",
    },
    {
      orderId: "3008",
      customerName: "Liam Smith",
      orderDate: "2023-10-02",
      product: "Monitor",
    },
    {
      orderId: "3009",
      customerName: "Mia Johnson",
      orderDate: "2023-10-03",
      product: "Keyboard",
    },
    {
      orderId: "3010",
      customerName: "Nina Garcia",
      orderDate: "2023-10-04",
      product: "Mouse",
    },
    {
      orderId: "3011",
      customerName: "Owen Martinez",
      orderDate: "2023-10-05",
      product: "Speakers",
    },
    {
      orderId: "3012",
      customerName: "Paul Robinson",
      orderDate: "2023-10-06",
      product: "Webcam",
    },
  ];

  return (
    <div
      className={`p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } h-full`}
    >
      <h1 className="text-2xl font-semibold mb-4">New Orders</h1>
      <table
        className={`min-w-full border border-gray-200 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <thead>
          <tr className={isDarkMode ? "bg-gray-700" : "bg-gray-100"}>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Order Date</th>
            <th className="py-2 px-4 border-b">Product</th>
          </tr>
        </thead>
        <tbody>
          {newOrders.map((order) => (
            <tr
              key={order.orderId}
              className={
                isDarkMode
                  ? "border-b border-gray-600"
                  : "border-b border-gray-200"
              }
            >
              <td className="py-2 px-4">{order.orderId}</td>
              <td className="py-2 px-4">{order.customerName}</td>
              <td className="py-2 px-4">{order.orderDate}</td>
              <td className="py-2 px-4">{order.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewOrders;
