import React from "react";

import Logo from "../images/devjaron.PNG";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
