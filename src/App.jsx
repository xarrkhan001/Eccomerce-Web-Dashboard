import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./components/ThemeContext"; // Import the context
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import Settings from "./components/Settings";
import ShippedOrders from "./components/ShippedOrders"; // Import the ShippedOrders component
import PendingOrders from "./components/PendingOrders"; // Import PendingOrders component
import NewOrders from "./components/NewOrders"; // Import NewOrders component
import Profile from "./components/Profile"; // Import the Profile component
import SignUp from "./components/SignUp"; // Import the SignUp component
import Login from "./components/Login"; // Import the Login component

function App() {
  const { isDarkMode } = useTheme(); // Get the dark mode value

  return (
    <div
      className={`flex justify-center items-center min-h-screen p-5 ${
        isDarkMode ? "bg-gray-700" : "bg-slate-200"
      }`}
    >
      <div
        className={`flex rounded-2xl overflow-hidden shadow-2xl ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } h-[700px] w-[1200px] max-w-7xl`}
      >
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shipped-orders" element={<ShippedOrders />} />
            <Route path="/pending-orders" element={<PendingOrders />} />
            <Route path="/new-orders" element={<NewOrders />} />
            <Route path="/profile" element={<Profile />} />{" "}
            {/* Profile Route */}
            <Route path="/signup" element={<SignUp />} /> {/* Sign Up Route */}
            <Route path="/login" element={<Login />} /> {/* Login Route */}
            <Route path="/logout" element={<Login />} /> {/* Logout Route */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
