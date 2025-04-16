import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HomeView = (): React.JSX.Element => {
  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <div className="links-container">
          <Link to="/example">Example</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default HomeView;
