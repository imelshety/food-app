// src/pages/ui/Home.js
import{ useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTitle } from '../../context/TitleContext';


const Home = () => {
  const { logData } = useAuth();
  const { setTitle, setSubtitle } = useTitle();

  useEffect(() => {
    setTitle(`Welcome ${logData.userName} !`);
    setSubtitle('This is a welcoming screen for the entry of the application , you can now see the options');
  }, [setTitle, setSubtitle, logData.userName]);

  return (
    <div className="d-flex">
      Home {logData?.userName}
    </div>
  );
};

export default Home;
