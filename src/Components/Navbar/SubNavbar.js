import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./subnav.css"

const SubNavbar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="col-md-12 d-flex align-items-center">
      <p className="font-weight ml-auto mt-3 ad">
        Welcome Admin, <span className="text">{user.displayName}</span>
      </p>
      <Link to="/admin">
      <button type="button" class="fill h-50 ml-2">Admin</button>
      </Link>
    </div>
  );
};

export default SubNavbar;
