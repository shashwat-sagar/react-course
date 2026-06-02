import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, Registration } from "../pages";
import ContactPage from "../pages/ContactPage";
import NonAuthLayout from "../layout/NonAuthLayout";
import AuthLayout from "../layout/AuthLayout";
import Dashboard from "../pages/auth/Dashboard";
import UserProfile from "../pages/auth/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import StudentRegistration from "../pages/auth/StudentRegistration";
import StudentRegistrationNew from "../pages/auth/StudentRegistrationNew";

export function MyRouter() {
  // const data = {
  //   data: {
  //     table: [
  //       {
  //         user: {
  //           name: "Naman",
  //         },
  //       },
  //     ],
  //   },
  // };

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
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    // authenticated (protected) routes
    {
      path: "/auth",
      element: (
        <ProtectedRoute>
          <AuthLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "student-registration",
          element: <StudentRegistrationNew />,
        },
       
      ],
    },
  ];

  return createBrowserRouter(routes);
}

// "/login/student"
