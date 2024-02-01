import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProviders>
  </React.StrictMode>
);
