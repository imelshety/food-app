
import { Outlet } from "react-router-dom";
import logoImg from "/assets/auth/logo-auth.png";
import { Container, Image } from "react-bootstrap";
const AuthLayout = () => {
  return (
    <div className="bg-auth">
      <div className="bg-overly d-flex justify-content-center align-items-center">
        <Container className="auth-container bg-white d-flex flex-column align-items-start p-5 rounded shadow">
        <div className="w-100 d-flex justify-content-center align-items-center">
        <Image src={logoImg} alt="logo" className="auth-logo mb-3" />
        </div>
          <Outlet /> {/* Child components will be rendered here */}
        </Container>
      </div>
    </div>
  );
};

export default AuthLayout;
