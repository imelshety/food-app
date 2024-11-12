// src/components/Header.js
import headerImg from '/assets/header-img.png';
import styles from './header.module.css';
import { useTitle } from '../../../context/TitleContext';
import { useLocation } from 'react-router-dom';
import headerTwo from '/assets/header2-img.png'

const Header = () => {
  const { title, subtitle } = useTitle();
const location = useLocation();
let currentImage = headerImg
if (location.pathname === '/home/recipes' || location.pathname === '/home/categories' || location.pathname === '/home/users') { currentImage = headerTwo; }
  return (
    <header className={styles.Header}>
      {/* shapes */}
      <div className='d-none d-lg-block'>
        <img src='/assets/shapes/shape1.png' alt='shape' className={styles.shape1} />
        <img src='/assets/shapes/shape1.png' alt='shape' className={styles.shape2} />
        <img src='/assets/shapes/shape1.png' alt='shape' className={styles.shape3} />
        <img src='/assets/shapes/shape3.png' alt='shape' className={styles.shape4} />
        <img src='/assets/shapes/shape4.png' alt='shape' className={styles.shape5} />
        <img src='/assets/shapes/shape2.png' alt='shape' className={styles.shape6} />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-start'>
        <h1 className='fw-bold text-white'>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <img src={currentImage} alt="header image" className={styles.headerLoge} />
    </header>
  );
};

export default Header;
