// ShippedOrders.js
import React from "react";
import { useTheme } from "./ThemeContext"; // Import the context

const ShippedOrders = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode value

  // Sample data for shipped orders
  const shippedOrders = [
    {
      orderId: "1001",
      customerName: "John Doe",
      shippingDate: "2023-09-20",
      status: "Delivered",
    },
    {
      orderId: "1002",
      customerName: "Jane Smith",
      shippingDate: "2023-09-21",
      status: "In Transit",
    },
    {
      orderId: "1003",
      customerName: "Alice Johnson",
      shippingDate: "2023-09-22",
      status: "Delivered",
    },
    {
      orderId: "1004",
      customerName: "Bob Brown",
      shippingDate: "2023-09-23",
      status: "Pending",
    },
    {
      orderId: "1005",
      customerName: "Charlie Davis",
      shippingDate: "2023-09-24",
      status: "Delivered",
    },
    {
      orderId: "1006",
      customerName: "Diana Prince",
      shippingDate: "2023-09-25",
      status: "In Transit",
    },
    {
      orderId: "1007",
      customerName: "Eve Adams",
      shippingDate: "2023-09-26",
      status: "Delivered",
    },
    {
      orderId: "1008",
      customerName: "Frank Black",
      shippingDate: "2023-09-27",
      status: "Pending",
    },
    {
      orderId: "1009",
      customerName: "Grace Lee",
      shippingDate: "2023-09-28",
      status: "Delivered",
    },
    {
      orderId: "1010",
      customerName: "Henry Ford",
      shippingDate: "2023-09-29",
      status: "In Transit",
    },
    {
      orderId: "1011",
      customerName: "Ivy Wilson",
      shippingDate: "2023-09-30",
      status: "Delivered",
    },
    {
      orderId: "1012",
      customerName: "Jack White",
      shippingDate: "2023-10-01",
      status: "Pending",
    },
  ];

  return (
    <div
      className={`p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } h-full`}
    >
      <h1 className="text-2xl font-semibold mb-4">Shipped Orders</h1>
      <table
        className={`min-w-full border border-gray-200 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <thead>
          <tr className={isDarkMode ? "bg-gray-700" : "bg-gray-100"}>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Shipping Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {shippedOrders.map((order) => (
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
              <td className="py-2 px-4">{order.shippingDate}</td>
              <td className="py-2 px-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShippedOrders;
