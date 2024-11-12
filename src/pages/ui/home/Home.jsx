// src/pages/ui/Home.js
import{ useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useTitle } from '../../../context/TitleContext';
import styles from "./home.module.css"
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const { logData } = useAuth();
  const { setTitle, setSubtitle } = useTitle();

  useEffect(() => {
    setTitle(`Welcome ${logData.userName} !`);
    setSubtitle('This is a welcoming screen for the entry of the application , you can now see the options');
  }, [setTitle, setSubtitle, logData.userName]);

  return (
    <div className={styles.home}>
      <div className='d-flex flex-column '>
        <h5 className={styles.heading}>Fill the <span className={styles.text}>Recipes !</span></h5>
        <p className={styles.desc}>you can now fill the meals easily using the table and form , click here and sill it with the table !</p>
      </div>
      <Link to={'/home/recipes'} className={styles.btn}>FILL Recipes <FaLongArrowAltRight/></Link>
    </div>
  );
};

export default Home;
