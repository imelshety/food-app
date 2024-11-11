import { useAuth } from "../../context/AuthContext";
const Home = () => {
  const { logData } = useAuth(); // Get user data from AuthContext
  console.log(logData);
  return (
   
    <div className="d-flex">
    home {logData.userName}
   
   </div>
  )
}

export default Home