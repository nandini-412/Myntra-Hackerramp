import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css'

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-expand-lg py-3 navbar-dark navcolor">
      <Link to="/" className="navbar-brand ml-5">
        <h3 id="brandColor">Myntra: Hackerramp</h3>
      </Link>
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" id="navlink">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/posts" className="nav-link" id="navlink">
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
