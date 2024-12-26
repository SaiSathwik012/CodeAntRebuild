import React, { useState } from "react";
import "../assets/Sidebar.css";
import { FiPhone } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";
import { PiHouseLineLight } from "react-icons/pi";
import logo from "../Images/Aw8sxfQFEW5DL4v9ZehNHLBETnE1718975729478_200x200_(1)-transformed.jpeg";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); 
  };

  return (
    <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
        </div>
        <img
          src={logo}
          alt="CodeAnt AI Logo"
          className="sidebar-logo"
        />
        <select className="user-dropdown">
          <option>UtkarshDhairyaPa...</option>
        </select>
      </div>

      <ul className={`sidebar-menu ${isSidebarOpen ? "visible" : ""}`}>
        <li className="menu-item active">
          <span className="menu-icon"><PiHouseLineLight /></span> Repositories
        </li>
        <li className="menu-item">
          <span className="menu-icon">{"</>"}</span> AI Code Review
        </li>
        <li className="menu-item">
          <span className="menu-icon"><CiCloudOn /></span> Cloud Security
        </li>
        <li className="menu-item">
          <span className="menu-icon"><LuBookText /></span> How to Use
        </li>
        <li className="menu-item">
          <span className="menu-icon"><IoSettingsOutline /></span> Settings
        </li>
      </ul>
      <div className="support-section">
        <li className="menu-item">
          <span className="menu-icon"><FiPhone /></span> Support
        </li>
        <li className="menu-item">
          <span className="menu-icon"><IoIosLogOut /></span> Logout
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
