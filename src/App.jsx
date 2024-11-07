// App.js
import { RouterProvider } from "react-router-dom";
import routers from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
    <ToastContainer/>
   <RouterProvider router={routers} />
    
    </>
  )
}

export default App;
