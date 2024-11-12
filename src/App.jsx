// App.js
import { RouterProvider } from "react-router-dom";
import routers from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { TitleProvider } from "./context/TitleContext";

function App() {
  return (
    <AuthProvider>
      <TitleProvider>
    <ToastContainer/>
   <RouterProvider router={routers} />
   </TitleProvider>
   </AuthProvider>
  )
}

export default App;
