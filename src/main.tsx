import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import "./index.css";
// or
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
