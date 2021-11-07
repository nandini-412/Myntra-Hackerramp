import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-3" id="dashboard">Dashboard Home</h1>
          <Link to="/" id="index">Index</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
