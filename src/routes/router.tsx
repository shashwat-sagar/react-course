import { createBrowserRouter, Outlet } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, Registration } from "../pages";
import StudentLogin from "../pages/StudentLogin";
import FacultyLogin from "../pages/FacultyLogin";
import ContactPage from "../pages/ContactPage";
import NonAuthLayout from "../layout/NonAuthLayout";
import AuthLayout from "../layout/AuthLayout";
import Dashboard from "../pages/auth/Dashboard";
import UserProfile from "../pages/auth/UserProfile";

export function MyRouter() {
  const routes = [

    // public routes
    {
      path: "/",
      element: <NonAuthLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "registration",
          element: <Registration />,
        },
        {
          path: "login",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "student",
              element: <StudentLogin />,
            },
            {
              path: "faculty",
              element: <FacultyLogin />,
            },
          ],
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },

    // authenticated (protected) routes
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />
        },
        {
          path: "profile",
          element: <UserProfile />
        }
      ]
    }
  ];

  return createBrowserRouter(routes);
}

// "/login/student"
