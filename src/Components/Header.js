import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  const closeMobileMenu = () => setIsActive(false);

  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={isActive ? "active" : ""}>
        <li onClick={closeMobileMenu}>
          <NavLink exact to="/" activeClassName="selected">
            Présentation
          </NavLink>
        </li>
        <li onClick={closeMobileMenu}>
          <NavLink exact to="/lecons" activeClassName="selected">
            Leçons
          </NavLink>
        </li>
        <li onClick={closeMobileMenu}>
          <NavLink exact to="/actus" activeClassName="selected">
            Actus
          </NavLink>
        </li>
        <li className="navbar-contact-link">
          <a href="#footer-contact">Contact</a>
        </li>
      </ul>
      <div className="mobile-menu">
        <button onClick={handleClick}>{isActive ? "X" : "Menu"}</button>
      </div>
    </nav>
  );
};

export default Header;
