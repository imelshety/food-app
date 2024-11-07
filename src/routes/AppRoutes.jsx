import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import ErrorPage from "../pages/shared/ErrorPage";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/ui/Home";
import Login from "../pages/auth/login/Login";
import ForgetPassword from './../pages/auth/forgetPassword/ForgetPassword';
import Register from "../pages/auth/register/Register";
import ResetPassword from './../pages/auth/resetPassword/ResetPassword';
import ChangePassword from './../pages/auth/changepassword/ChangePassword';

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