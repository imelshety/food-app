import { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { LuUsers } from 'react-icons/lu';
import { useAuth } from '../../../context/AuthContext';
import userLogo from "/assets/user-logo.png";
import styles from './Navbar.module.css';

const Navbar = () => {
  const { logData, logout } = useAuth(); // Assuming logout function is available
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="search"
            placeholder="Search Here"
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>

        {/* Profile Section */}
        <div className={styles.profileSection}>
         
          <div
            className={styles.profileInfo}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={userLogo} alt="User Avatar" className={styles.avatar} />
            <span className={styles.userName}>{logData?.userName || "User"}</span>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>
                <LuUsers className={styles.icon} />
                <span>Profile</span>
              </div>
              <div className={styles.dropdownItem} onClick={handleLogout}>
                <FiLogOut className={styles.icon} />
                <span>Logout</span>
              </div>
            </div>
          )}
           <FaBell className={styles.notificationIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
