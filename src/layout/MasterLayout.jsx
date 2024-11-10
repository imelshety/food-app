import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MasterLayout = () => {
  const {logData} = useAuth();
  console.log(logData);
  
  return (
   <>
   <Outlet/>
   </>
  )
}

export default MasterLayout