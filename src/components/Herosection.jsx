import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <>
      <div className="header">
        <div className="hero-left">
          <div className="image">
            <img src="/images/adnan4.jpg" alt="" />
          </div>
          <div className="headtext">
            <h1>adnan rafiq</h1>
            <div className="animation">
              <p>A software Engineer</p>
            </div>

            <div className="socialmidia">
              <div>
              <Link to="https://www.linkedin.com/in/adnan-rafiq-b18a61220/">  <BiLogoLinkedin className="socialmediaapp"/> </Link>
              </div>
              <div>
                <BiLogoFacebook className="socialmediaapp" /> <Link to="https://www.facebook.com/adanan.khan.545?mibextid=ZbWKwL"></Link>
              </div>
              <div>
                <BiLogoInstagram className="socialmediaapp" /> <Link to=""></Link>
              </div>
              <div>
                <BiLogoTiktok className="socialmediaapp" /> <Link to="https://www.tiktok.com/@adnan_rafiq1?_t=8kwsgjViUL9&_r=1"></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="midle"></div>
        <div className="right">
          <div className="phoneandemail">
            <p>
              <HiOutlineMail /> <span> Email : </span>
              <br />
              www.adnanrafiq@gamil.com
            </p>
            <p>
              <BsTelephone /> <span>Phone : </span>
              <br /> 03077522229
            </p>
          </div>
          <div className="location">
            <p>
              <CiLocationOn /> <span>Location : </span>
              <br /> karachi, pakistan
            </p>
            <p>
              <HiOutlineMail /> <span>Email : </span>
              <br /> www.adnanrafiq@gamil.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
