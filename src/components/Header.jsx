import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";

import { LuPhone } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

const Header = () => {
  const location = useLocation()

  return (
    <nav className="nav md:py-10 py-2 px-3  md:h-[86vh] h-[70px] overflow-x-auto md:overflow-x-hidden md:my-0 my-1">

      <ul className="list flex flex-row md:flex-col justify-start gap-5   min-w-[400px] md:min-w-[90%]">

        <Link to={"/"} className={` ${location.pathname == "/" ? "active" : ""} flex items-center justify-between   py-[5px] px-[10px]  text-[1px]`}> <span><AiOutlineHome className="text-white" /></span> About</Link>


        <Link to={"/pages/work"} className={`namelink ${location.pathname == "/pages/work" ? "active" : ""} flex items-center justify-between   py-[5px] px-[10px]  text-[1px]`}> <span><GoProjectRoadmap className="text-white" /></span> Work</Link>


        <Link to={"/pages/resume"} className={`namelink ${location.pathname == "/pages/resume" ? "active" : ""}  flex items-center justify-between   py-[5px] px-[10px]  text-[1px]`}><span> <TbFileCv className="text-white" /></span> Resume</Link>


        <Link to={"/pages/contact"} className={`namelink ${location.pathname == "/pages/contact" ? "active" : ""} flex items-center justify-between   py-[5px] px-[10px]  text-[1px]`}><span><LuPhone className="text-white" /></span> Contact</Link>

      </ul>
    </nav>
  );
};

export default Header;
