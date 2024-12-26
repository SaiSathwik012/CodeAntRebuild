import React from "react";
import "../assets/Header.css";
import { LuRefreshCw } from "react-icons/lu";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1 className="header-title">Repositories</h1>
        <p className="header-subtitle">33 total repositories</p>
          <input
            type="text"
            className="search-input"
            placeholder="Search Repositories"
          />
      </div>
      <div className="header-right">
        <button className="refresh-button">
          <span><LuRefreshCw /></span> Refresh All
        </button>
        <button className="add-repo-button">+ Add Repository</button>
      </div>
    </div>
  );
};

export default Header;
