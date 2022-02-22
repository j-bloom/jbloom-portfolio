import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
        <li className="nav__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/AboutMe">About Me</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/Technologies">Technologies</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/MyWork">My Work</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
