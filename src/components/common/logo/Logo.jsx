import React from "react";
import "./logo.css";
import logo from "./logo.png";
const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
