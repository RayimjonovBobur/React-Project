import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <i className="fas fa-user-cog"></i>
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
