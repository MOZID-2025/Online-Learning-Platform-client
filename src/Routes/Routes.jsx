import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Courses from "../Pages/Courses";
import Dashboard from "../Pages/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/courses",
    element: <Courses />,
    loader: () => fetch("http://localhost:3000/courses"),
    hydrateFallbackElement: <p>Loading</p>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
