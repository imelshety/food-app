import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const {logData} = useAuth();
  console.log(logData);
  
  return (
    <div>Home</div>
  )
}

export default Home