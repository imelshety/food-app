import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import logoImg from "/assets/logo-sidebar.png";
import { AiOutlineHome } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container p-3 ps-sidebar-root ${isOpen ? "open" : "closed"}`}>
      <Sidebar width={isOpen ? "250px" : "80px"}>
        <Menu className="p-4 d-flex justify-content-center align-items-center gap-2">
          <MenuItem component={<Link to="/home" />} onClick={handleToggle} className="d-flex justify-content-start align-items-center mb-5">
            <img
              src={logoImg}
              alt="logo img"
              className={`sidebar-logo ${isOpen ? "full-logo" : "small-logo"}`}
            />
          </MenuItem>
          <MenuItem
            className={`d-flex justify-content-start align-items-center gap-3 ${!isOpen ? "justify-content-around":''}   ${location.pathname === "/home" ? "active-link" : ""}`}
            component={<Link to="/home" />}
          >
            <AiOutlineHome /> {isOpen && "Home"}
          </MenuItem>
          <MenuItem
            className={`d-flex justify-content-start align-items-center gap-3 ${!isOpen ? "justify-content-around":''} ${location.pathname === "/home/users" ? "active-link" : ""}`}
            component={<Link to="users" />}
          >
            <LuUsers /> {isOpen && "Users"}
          </MenuItem>
          <MenuItem
            className={`d-flex justify-content-start align-items-center gap-3 ${!isOpen ? "justify-content-around":''} ${location.pathname === "/home/recipes" ? "active-link" : ""}`}
            component={<Link to="recipes" />}
          >
            <PiSquaresFourLight /> {isOpen && "Recipes"} 
          </MenuItem>
          <MenuItem
            className={`d-flex justify-content-start align-items-center gap-3 ${!isOpen ? "justify-content-around":''} ${location.pathname === "/home/categories" ? "active-link" : ""}`}
            component={<Link to="categories" />}
          >
            <FaCalendarDays /> {isOpen && "Categories"}
          </MenuItem>
          <MenuItem 
           className={`my-5 d-flex justify-content-start align-items-center gap-3 ${!isOpen ? "justify-content-around":''} ${location.pathname === "/" ? "active-link" : ""}`}
          component={<Link to="/signin" />}
          >
          <FiLogOut /> {isOpen && "Logout"}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
