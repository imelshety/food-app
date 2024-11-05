import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import ChangePassword from "../pages/auth/ChangePassword";
import ErrorPage from "../pages/shared/ErrorPage";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/ui/Home";

    const routers = createBrowserRouter([
        {
          path: '',
          element: <AuthLayout />,
          children: [
            { index: true, element: <Login /> },
            { path: 'signin', element: <Login /> },
            { path: 'signup', element: <Register /> },
            { path: 'forget-password', element: <ForgetPassword /> },
            { path: 'reset-password', element: <ResetPassword /> },
            { path: 'change-password', element: <ChangePassword /> },
    
    
    
          ],
          errorElement: <ErrorPage />
        },
        {
          path: 'home',
          element: <MasterLayout />,
          children: [
            { index: true, element: <Home /> },
          ],
          errorElement: <ErrorPage />
        },
      ]);

export default routers