import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const Payment = () => {
  const { isDarkMode } = useTheme();

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [methodName, setMethodName] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [refundID, setRefundID] = useState("");

  const handleAddMethod = () => {
    if (methodName) {
      setPaymentMethods([...paymentMethods, methodName]);
      setMethodName("");
    }
  };

  const handleProcessRefund = () => {
    if (refundID) {
      alert(`Processing refund for Transaction ID: ${refundID}`);
      setRefundID("");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      } p-5 overflow-y-auto`}
    >
      <h1 className="text-2xl font-bold mb-4">Payment Settings</h1>
      <p className="mb-5">
        Manage your payment methods and view your transaction history. Ensure
        that your payment options are configured for seamless transactions.
      </p>

      {/* Add Payment Method Section */}
      <div className="mb-5 border-b pb-4">
        <h2 className="text-lg font-semibold">Add Payment Method</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Payment Method Name"
            value={methodName}
            onChange={(e) => setMethodName(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          />
          <button
            onClick={handleAddMethod}
            className={`p-2 ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105"
                : "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg scale-105"
            } rounded-md transition-transform`}
          >
            Add
          </button>
        </div>
        <div className="max-h-40 overflow-y-auto border rounded-md p-2">
          <h3 className="text-md font-semibold">Payment Methods</h3>
          <ul className="mt-2">
            {paymentMethods.length > 0 ? (
              paymentMethods.map((method, index) => (
                <li key={index} className="border-b py-2">
                  {method}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No payment methods added yet.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="mb-5 border-b pb-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <div className="max-h-40 overflow-y-auto border rounded-md p-2">
          <h3 className="text-md font-semibold">Transactions</h3>
          <ul className="mt-2">
            {transactionHistory.length > 0 ? (
              transactionHistory.map((transaction, index) => (
                <li key={index} className="border-b py-2">
                  Transaction ID: {transaction.id}, Amount: $
                  {transaction.amount}, Status: {transaction.status}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No transactions found.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Refund Section */}
      <div className="mb-5 border-b pb-4">
        <h2 className="text-lg font-semibold">Process Refund</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Transaction ID"
            value={refundID}
            onChange={(e) => setRefundID(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          />
          <button
            onClick={handleProcessRefund}
            className={`p-2 ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105"
                : "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg scale-105"
            } rounded-md transition-transform`}
          >
            Refund
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
