import React from "react";
import myImage from "../Group 9.svg";
import "../stylesheets/ResponsiveAppBar.css";

const ResponsiveAppBar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar-image">
          <img src={myImage} alt="Shreyas Acharya" />
        </div>

        <div className="Navbar-btns">
          <a href="#">About</a>
          <button>contact</button>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveAppBar;
