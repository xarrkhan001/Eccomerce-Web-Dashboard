import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

// Import images
import img1 from "../assets/hanger-2566555.jpg";
import img2 from "../assets/hanger-2566555.jpg";
import img3 from "../assets/hanger-2566555.jpg";
import img4 from "../assets/hanger-2566555.jpg";
import img5 from "../assets/hanger-2566555.jpg";
import img6 from "../assets/hanger-2566555.jpg";
import img7 from "../assets/hanger-2566555.jpg";
import img8 from "../assets/hanger-2566555.jpg";
import img9 from "../assets/hanger-2566555.jpg";
import img10 from "../assets/hanger-2566555.jpg";

const Tooltip = ({ content, visible }) => {
  return (
    <div
      className={`absolute bg-gray-800 text-white text-sm rounded p-2 z-10 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ pointerEvents: "none" }}
    >
      {content}
    </div>
  );
};

const Products = () => {
  const { isDarkMode } = useTheme();
  const [products, setProducts] = useState([
    {
      title: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: "99.99",
      category: "Electronics",
      image: img1,
    },
    {
      title: "Stylish T-Shirt",
      description: "Comfortable cotton t-shirt in various colors.",
      price: "25.00",
      category: "Clothing",
      image: img2,
    },
    {
      title: "Chef's Knife Set",
      description: "Premium knives for all your kitchen needs.",
      price: "45.00",
      category: "Kitchen",
      image: img3,
    },

    {
      title: "Bluetooth Speaker",
      description: "Sleek speaker for immersive sound.",
      price: "30.00",
      category: "Electronics",
      image: img4,
    },
    {
      title: "Bohemian Throw Pillow",
      description: "Chic pillow to enhance your decor.",
      price: "25.00",
      category: "Home Decor",
      image: img5,
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const [editIndex, setEditIndex] = useState(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: { top: 0, left: 0 },
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      image: URL.createObjectURL(formData.image),
    };

    if (editIndex !== null) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? newProduct : product
      );
      setProducts(updatedProducts);
    } else {
      setProducts([...products, newProduct]);
    }

    setFormData({ title: "", description: "", price: "", image: null });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const showTooltip = (event, content) => {
    setTooltip({
      visible: true,
      content,
      position: { top: event.clientY + 10, left: event.clientX + 10 },
    });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50"
      } relative`}
    >
      <h1 className="text-2xl font-bold mb-5">Manage Your Products</h1>

      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(e.target.value.length > 0);
          }}
          className={`p-2 border rounded-md ${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        />
        {showDropdown && (
          <div
            className={`absolute z-10 border border-gray-300 rounded mt-1 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-gray-700 flex items-center rounded"
                onClick={() => {
                  setSearchTerm(product.title);
                  setShowDropdown(false);
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-8 h-8 rounded-md mr-2"
                />
                <div>
                  <div className="font-bold">{product.title}</div>
                  <div className="text-sm text-gray-300">
                    {product.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className={`p-2 border rounded-md ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className={`p-2 border rounded-md ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className={`p-2 border rounded-md ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          />
          <div className="flex flex-col">
            <label
              htmlFor="file-upload"
              className={`flex items-center justify-center h-16 w-52 border rounded-md cursor-pointer transition duration-200 ${
                isDarkMode
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg scale-105"
                  : "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg scale-105"
              }`}
            >
              {formData.image ? formData.image.name : "Choose Image"}
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="hidden"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          {editIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <div
        className="max-h-[400px] overflow-y-auto mb-5 scrollbar"
        style={{ position: "relative" }}
      >
        <table
          className={`min-w-full rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <thead>
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-200 ${
                  !isDarkMode ? "hover:bg-gray-200" : "hover:bg-gray-700"
                }`}
              >
                <td
                  className="py-2 px-4 border-b border-gray-300 table-cell cursor-pointer"
                  onMouseEnter={(e) => showTooltip(e, product.title)}
                  onMouseLeave={hideTooltip}
                >
                  {product.title}
                </td>
                <td
                  className="py-2 px-4 border-b border-gray-300 table-cell cursor-pointer"
                  onMouseEnter={(e) => showTooltip(e, product.description)}
                  onMouseLeave={hideTooltip}
                >
                  {product.description}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {product.price}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 text-red-500 hover:underline"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Tooltip content={tooltip.content} visible={tooltip.visible} />
      </div>

      <style jsx>{`
        /* Custom scrollbar styles */
        .scrollbar {
          scrollbar-width: thin; /* For Firefox */
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent; /* For Firefox */
        }

        .scrollbar::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        .scrollbar::-webkit-scrollbar-track {
          background: transparent; /* Background of the track */
        }

        .scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(
            156,
            163,
            175,
            0.5
          ); /* Color of the scrollbar */
          border-radius: 10px; /* Roundness of the scrollbar */
        }

        .scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.7); /* Color on hover */
        }

        /* Dark mode styles */
        ${isDarkMode
          ? `
          .scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(75, 85, 99, 0.6); /* Adjust for dark mode */
          }
        `
          : ""}
      `}</style>
    </div>
  );
};

export default Products;
