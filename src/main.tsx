import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
