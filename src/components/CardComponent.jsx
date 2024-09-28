// CardComponent.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faClock, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const CardComponent = () => {
  const navigate = useNavigate(); // Initialize navigate

  const cards = [
    {
      title: "Shipped Orders",
      count: 150,
      icon: faTruck,
      gradient: "bg-gradient-to-r from-green-400 to-green-500",
      onClick: () => navigate("/shipped-orders"), // Navigate to shipped orders page
    },
    {
      title: "Pending Orders",
      count: 30,
      icon: faClock,
      gradient: "bg-gradient-to-r from-red-400 to-red-500",
      onClick: () => navigate("/pending-orders"), // Navigate to pending orders page
    },
    {
      title: "New Orders",
      count: 20,
      icon: faPlus,
      gradient: "bg-gradient-to-r from-blue-400 to-blue-500",
      onClick: () => navigate("/new-orders"), // Navigate to new orders page
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-6 rounded-lg shadow-lg text-white ${card.gradient} cursor-pointer`}
          onClick={card.onClick}
        >
          <div>
            <FontAwesomeIcon icon={card.icon} className="text-3xl" />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-2xl font-bold">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
