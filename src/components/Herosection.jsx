import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
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
                <BiLogoLinkedin className="socialmediaapp" />
              </div>
              <div>
                <BiLogoFacebook className="socialmediaapp" />
              </div>
              <div>
                <BiLogoInstagram className="socialmediaapp" />
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
