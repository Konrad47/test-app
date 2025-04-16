import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { likes } from "./functions/likes";

const HomeView = (): React.JSX.Element => {
  const examples = [
    [],
    ["Peter"],
    ["Jacob", "Alex"],
    ["Max", "John", "Mark"],
    ["Alex", "Jacob", "Mark", "Max"],
  ];

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="links-container">
        <Link to="/login">Login</Link>
      </div>
      <div className="likes-examples">
        {examples.map((names, index) => (
          <p key={index}>{likes(names)}</p>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
