import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import App from "./App";


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  
     <AuthProvider> 
      <App />
    </AuthProvider>
  </BrowserRouter>
);