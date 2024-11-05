import { Outlet } from "react-router-dom";
import logoImg from "/assets/auth/logo-auth.png"
const AuthLayout = () => {
  return (
    <div className="bg-auth">
      <div className="bg-overly d-flex justify-content-center align-items-center">
        <div className="bg-white d-flex flex-column justify-content-center align-items-start gap-3 p-5 rounded shadow">
            <img src={logoImg} alt="logo-img" />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
