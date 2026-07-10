import React from "react";
import ReactDOM from "react-dom/client";
import BusinessCard from "./components/BusinessCard";
import "./business-card.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BusinessCard />
  </React.StrictMode>,
);
