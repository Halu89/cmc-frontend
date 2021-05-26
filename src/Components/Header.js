import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_small.png";

const Header = ({ openModal }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  const closeMobileMenu = () => setIsActive(false);

  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="Logo" width="250"  />
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
        <li onClick={closeMobileMenu}>
          <a href="#footer-contact" onClick={openModal}>
            Contact
          </a>
        </li>
      </ul>
      <div className="mobile-menu">
        <button onClick={handleClick}>{isActive ? "X" : "Menu"}</button>
      </div>
    </nav>
  );
};

export default Header;
