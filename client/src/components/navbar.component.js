import React from "react";
import "../styles/navbar.css";
import logo from "../media/logo.png";

const Navbar = () => {
  return (
    <nav className="topbar">
      <img className="logo" src={logo} alt="Logo" />
      <span className="app__name">TaskTracker</span>
      <div className="btns">
        {/* <button>Login</button>
        <button>Sign Up</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
