import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SideBar from "../components/shared/sidebar/SideBar";
import Navbar from "../components/shared/navbar/Navbar";
import Header from "../components/shared/Header/Header";

const MasterLayout = () => {
  const {logData} = useAuth();
  console.log(logData);
  
  return (
   <>
   <div className=" w-100 d-flex">
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