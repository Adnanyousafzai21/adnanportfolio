// import React, { Children } from "react";
import Header from "./Header";
import About from "../pages/About";
import Herosection from "./Herosection";

const Navbar = ({ children }) => {
  return (
    <div className="portfolio">
      <div className="heading">
        <Herosection />
      </div>

      <div className="navmain">
        <div className="navleft">
          <Header />
        </div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
