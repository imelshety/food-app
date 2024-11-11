import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SideBar from "../pages/shared/SideBar";
import Navbar from "../pages/shared/Navbar";
import Header from "../pages/shared/Header/Header";

const MasterLayout = () => {
  const {logData} = useAuth();
  console.log(logData);
  
  return (
   <>
   <div className="container-fluid w-100 d-flex">
   <div>
   <SideBar/>
   </div>
    <div className="w-100 py-4 ms-2">
      <Navbar/>
      <Header/>
      <Outlet/>
    </div>
   </div>
   </>
  )
}

export default MasterLayout