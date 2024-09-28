// PendingOrders.js
import React from "react";
import { useTheme } from "./ThemeContext"; // Import the context

const PendingOrders = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode value

  // Sample data for pending orders
  const pendingOrders = [
    {
      orderId: "2001",
      customerName: "Alice Brown",
      orderDate: "2023-09-22",
      reason: "Payment Pending",
    },
    {
      orderId: "2002",
      customerName: "Charlie White",
      orderDate: "2023-09-23",
      reason: "Stock Not Available",
    },
    {
      orderId: "2003",
      customerName: "Diana Green",
      orderDate: "2023-09-24",
      reason: "Awaiting Confirmation",
    },
    {
      orderId: "2004",
      customerName: "Eve Adams",
      orderDate: "2023-09-25",
      reason: "Payment Pending",
    },
    {
      orderId: "2005",
      customerName: "Frank Black",
      orderDate: "2023-09-26",
      reason: "Stock Not Available",
    },
    {
      orderId: "2006",
      customerName: "Grace Lee",
      orderDate: "2023-09-27",
      reason: "Awaiting Confirmation",
    },
    {
      orderId: "2007",
      customerName: "Hannah James",
      orderDate: "2023-09-28",
      reason: "Payment Pending",
    },
    {
      orderId: "2008",
      customerName: "Ivy Wilson",
      orderDate: "2023-09-29",
      reason: "Stock Not Available",
    },
    {
      orderId: "2009",
      customerName: "Jack White",
      orderDate: "2023-09-30",
      reason: "Awaiting Confirmation",
    },
    {
      orderId: "2010",
      customerName: "Kevin Brown",
      orderDate: "2023-10-01",
      reason: "Payment Pending",
    },
    {
      orderId: "2011",
      customerName: "Liam Smith",
      orderDate: "2023-10-02",
      reason: "Stock Not Available",
    },
    {
      orderId: "2012",
      customerName: "Mia Johnson",
      orderDate: "2023-10-03",
      reason: "Awaiting Confirmation",
    },
  ];

  return (
    <div
      className={`p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } h-full`}
    >
      <h1 className="text-2xl font-semibold mb-4">Pending Orders</h1>
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
            <th className="py-2 px-4 border-b">Reason</th>
          </tr>
        </thead>
        <tbody>
          {pendingOrders.map((order) => (
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
              <td className="py-2 px-4">{order.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
