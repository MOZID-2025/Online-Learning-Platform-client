import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Courses from "../Pages/Courses";
import Dashboard from "../Pages/Dashboard";
import CourseDetails from "../Pages/CourseDetails";
import UpdateCourse from "../Pages/UpdateCourse";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRoute from "../assets/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import AddNewCourse from "../Pages/AddNewCourse";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("http://localhost:3000/features-course"),
        hydrateFallbackElement: <p>Loading</p>,
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
    path: "/course-details/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
    hydrateFallbackElement: <p>Loading</p>,
    element: (
      <PrivateRoute>
        <CourseDetails />,
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />,
      </PrivateRoute>
    ),
  },
  {
    path: "/update-course/:id",
    element: <UpdateCourse />,
    loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
    hydrateFallbackElement: <p>Loading</p>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/addNewCourse",
    element: <AddNewCourse />,
  },
]);
