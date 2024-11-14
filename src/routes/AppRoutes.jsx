import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import ErrorPage from "../pages/shared/ErrorPage";
import MasterLayout from "../layout/MasterLayout";
import Login from "../pages/auth/login/Login";
import ForgetPassword from "./../pages/auth/forgetPassword/ForgetPassword";
import Register from "../pages/auth/register/Register";
import ResetPassword from "./../pages/auth/resetPassword/ResetPassword";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Resipes from "../pages/ui/Resipes";
import Users from "../pages/ui/Users";
import Home from "../pages/ui/home/Home";
import Categories from "../pages/ui/categories/Categories";

const routers = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "signin", element: <Login /> },
      { path: "signup", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: (
      <ProtectedRoute>
        <MasterLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> }, 
      { path : 'recipes', element : <Resipes/> },
      { path : 'categories', element : <Categories/> },
      { path : 'users', element : <Users/> },



    ],
    errorElement: <ErrorPage />,
  },
]);


export default routers;
