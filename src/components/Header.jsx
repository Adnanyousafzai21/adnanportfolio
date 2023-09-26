import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const location= useLocation()

  return (
    <nav className="nav">
      <ul className="list">
        
          <Link to={"/"} className={`${location.pathname=="/"? "border":"bordertrans"}`}>About</Link>
        
        
          <Link to={"/pages/work"} className={`${location.pathname=="/pages/work"? "border":"bordertrans"}`}>Work</Link>
        
        
          <Link to={"/pages/resume"} className={`${location.pathname=="/pages/resume"? "border":"bordertrans"}`}>Resume</Link>
        
        
          <Link to={"/pages/contact"} className={`${location.pathname=="/pages/contact"? "border":"bordertrans"}`}>Contact</Link>
        
      </ul>
    </nav>
  );
};

export default Header;
