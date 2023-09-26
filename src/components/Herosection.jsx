import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
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
              <p>Mern Stack developer</p> 
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
              <span>Email : </span>
              <br />
              www.adnanrafiq@gamil.com
            </p>
            <p>
              <span>Phone : </span>
              <br /> 03077522229
            </p>
          </div>
          <div className="location"> 
          <p>
             
              <span>Phone : </span>
              <br /> karachi, pakistan
            </p>
            <p>
             
              <span>Email : </span>
              <br /> www.adnanrafiq@gamil.com
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
