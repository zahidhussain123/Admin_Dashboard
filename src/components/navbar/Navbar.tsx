import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Zaid_dev</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" />
        <img src="/app.svg" alt="app" />
        <img src="/expand.svg" alt="expend" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <span>Zaid</span>
        </div>
        <img src="/settings.svg" className="icon" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
