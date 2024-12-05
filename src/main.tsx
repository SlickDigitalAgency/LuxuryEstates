import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FloatingNavbar } from "./components/ui/floating-navbar";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FloatingNavbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
