import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location= useLocation()

  return (
    <nav className="nav">
      <ul className="list">
        
          <Link to={"/"} className={`namelink ${location.pathname=="/"? "border":"bordertrans"}`}>About</Link>
          {/* <Link to={"/"} className={` iconlink ${location.pathname=="/"? "border":"bordertrans"}`}><BsTelephone/> </Link> */}
        
        
          <Link to={"/pages/work"} className={`namelink ${location.pathname=="/pages/work"? "border":"bordertrans"}`}>Work</Link>
          {/* <Link to={"/pages/work"} className={` iconlink ${location.pathname=="/pages/work"? "border":"bordertrans"}`}><BsTelephone/></Link> */}
        
        
          <Link to={"/pages/resume"} className={`namelink ${location.pathname=="/pages/resume"? "border":"bordertrans"}`}>Resume</Link>
          {/* <Link to={"/pages/resume"} className={` iconlink ${location.pathname=="/pages/resume"? "border":"bordertrans"}`}><BsTelephone/></Link> */}
        
        
          <Link to={"/pages/contact"} className={`namelink ${location.pathname=="/pages/contact"? "border":"bordertrans"}`}>Contact</Link>
          {/* <Link to={"/pages/contact"} className={` iconlink ${location.pathname=="/pages/contact"? "border":"bordertrans"}`}><BsTelephone/></Link> */}
        
      </ul>
    </nav>
  );
};

export default Header;
