import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = ({ logoutUser }) => {
  const { isLoggedIn, user } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isLoggedIn,
      user: state.auth.user,
    }),
    shallowEqual
  );

  return (
    <nav className="navbar navbar-expand-lg py-3 shadow navbarcss">
      <Link to="/admin/dashboard/" className="navbar-brand ml-5" id="brandcolor">
        Admin Dashboard
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/admin/dashboard" className="nav-link" id="brandcr">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/admin/dashboard/addPost" className="nav-link" id="brandcr">
            Add Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/admin/dashboard/posts" className="nav-link" id="brandcr">
            All Posts
          </NavLink>
        </li>
      </ul>

      {isLoggedIn && (
        <div className="profile font-weight ml-auto mr-5">
          Welcome Admin,{" "}
          <span className="text">{user.displayName}</span>
          <button className="btn ml-3" id="logoutbutton" onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
