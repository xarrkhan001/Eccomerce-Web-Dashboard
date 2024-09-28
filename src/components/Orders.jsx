import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import OrderDetails from "./OrderDetails"; // Import the OrderDetails component

const Orders = () => {
  const { isDarkMode } = useTheme();
  const [selectedOrder, setSelectedOrder] = useState(null); // State to hold the selected order

  // Sample order data with 12 customers
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      date: "2024-09-01",
      total: "$150.00",
      status: "Shipped",
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2024-09-05",
      total: "$200.00",
      status: "Processing",
    },
    {
      id: 3,
      customer: "Alice Johnson",
      date: "2024-09-10",
      total: "$300.00",
      status: "Delivered",
    },
    {
      id: 4,
      customer: "Bob Brown",
      date: "2024-09-12",
      total: "$250.00",
      status: "Cancelled",
    },
    {
      id: 5,
      customer: "Charlie Davis",
      date: "2024-09-15",
      total: "$350.00",
      status: "Shipped",
    },
    {
      id: 6,
      customer: "Daisy Evans",
      date: "2024-09-17",
      total: "$180.00",
      status: "Processing",
    },
    {
      id: 7,
      customer: "Ethan Foster",
      date: "2024-09-20",
      total: "$400.00",
      status: "Delivered",
    },
    {
      id: 8,
      customer: "Fiona Green",
      date: "2024-09-22",
      total: "$220.00",
      status: "Shipped",
    },
    {
      id: 9,
      customer: "George Hill",
      date: "2024-09-25",
      total: "$160.00",
      status: "Processing",
    },
    {
      id: 10,
      customer: "Hannah Ives",
      date: "2024-09-28",
      total: "$280.00",
      status: "Delivered",
    },
  ]);

  const handleViewOrder = (order) => {
    setSelectedOrder(order); // Set the selected order to display
  };

  const handleClose = () => {
    setSelectedOrder(null); // Close the order details
  };

  const handleCancelOrder = (orderId) => {
    // Remove the order with the given ID
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  return (
    <div
      className={`min-h-screen p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-bold mb-5">Your Orders</h1>
      <p className="mb-5">
        Here you can view and manage all your orders. Track their status and
        details below.
      </p>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table
          className={`min-w-full rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <thead>
            <tr
              className={`border-b-2 ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <th className="py-3 px-5">Order ID</th>
              <th className="py-3 px-5">Customer</th>
              <th className="py-3 px-5">Date</th>
              <th className="py-3 px-5">Total</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className={`hover:bg-gray-200 ${
                  isDarkMode ? "hover:bg-gray-700" : ""
                }`}
              >
                <td className="py-3 px-5 border-b border-gray-300">
                  {order.id}
                </td>
                <td className="py-3 px-5 border-b border-gray-300">
                  {order.customer}
                </td>
                <td className="py-3 px-5 border-b border-gray-300">
                  {order.date}
                </td>
                <td className="py-3 px-5 border-b border-gray-300">
                  {order.total}
                </td>
                <td className="py-3 px-5 border-b border-gray-300">
                  {order.status}
                </td>
                <td className="py-3 px-5 border-b border-gray-300">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleViewOrder(order)} // Open order details
                  >
                    View
                  </button>
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleCancelOrder(order.id)} // Cancel the order
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      <OrderDetails order={selectedOrder} onClose={handleClose} />
    </div>
  );
};

export default Orders;
