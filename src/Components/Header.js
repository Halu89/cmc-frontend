import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div id="logo">Centre Musical Collois</div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/lecons" activeClassName="selected">
            Leçons
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
