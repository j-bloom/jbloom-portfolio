import React from "react";
import "../css/header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      {/* <div className="logo">
        <img src={Logo} alt="" />
      </div> */}
      <Navigation />
    </header>
  );
}

export default Header;
