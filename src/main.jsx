import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./components/ThemeContext"; // Import ThemeProvider
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {" "}
        {/* Wrap App in ThemeProvider */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
