import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="Logo" width="150px" height="100%"/>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Présentation
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/lecons" activeClassName="selected">
            Leçons
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/actus" activeClassName="selected">
            Actus
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
