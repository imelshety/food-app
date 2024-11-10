// App.js
import { RouterProvider } from "react-router-dom";
import routers from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";

function App() {
  
  return (
    <AuthProvider>
    <ToastContainer/>
   <RouterProvider router={routers} />
    
   </AuthProvider>
  )
}

export default App;
