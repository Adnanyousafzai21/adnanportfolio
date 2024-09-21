import React, { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { IoLocationOutline } from "react-icons/io5";
import { RiWhatsappLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { ShootingStarsAndStarsBackgroundDemo } from "./ShootingStarsAndStarsBackgroundDemonave";

const Herosection = () => {
  const [view, setView] = useState(false)
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo>
        <div className="header flex flex-col gap-y-5 md:flex-row md:px-[20px] sm:px-[90px] w-full">
          <div className=" md:hidden h-[80px] w-[80px] overflow-hidden rounded-full relative z-10">
            <img src="/images/adnan4.jpg" alt="" className="w-full hover:scale-110 duration-700" />
          </div>
          <div className="flex lg:flex-1  flex-col sm:flex-row gap-y-5 lg:w-full  items-center md:w-[70%]  w-full justify-between ">
            <div className="flex  gap-x-10 items-center justify-between">
              <div className=" hidden md:block h-[80px] w-[80px] overflow-hidden rounded-full relative z-10">
                <img src="/images/adnan4.jpg" alt="" className="w-full hover:scale-110 duration-700" />
              </div>
              <div className=" headtext text-[22px] m-0 p-0 relative z-10 " style={{ color: 'var(--heading)' }}>
                <h1 className="text-[26px] text-center  sm:text-left capitalize">adnan rafiq</h1>
                <div className="flex item-center gap-4 justify-center text-[12px]">
                  {/* <HiOutlineMail  className="text-[20px]"/> : */}
                  www.adnanrafiq@gamil.com
                </div>
              </div>
            </div>
            <div className=" p-0 m-0 w-[240px] flex flex-col sm:justify-start sm:items-start items-center ">
              <div className=" relative flex  itemx-center justify-center w-[180px]">
                <span className="sticky-header__available-circle text-[12px]"></span>
                Available for work
              </div>
              <div className="flex items-center gap-3 text-[16px] min-w-[230px] sm:w-[300px]">
                I am
                <TypeAnimation
                  sequence={[
                    " a Software Engineer",
                    1000,
                    " a MERN stack developer",
                    1000,
                    " a BSCS Graduate",
                    1000,
                    "1.5 year of Experienced",
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  style={{
                    fontWeight: '100',
                    lineHeight: '22px',
                    letterSpacing: '1px',
                    color: "#87ceeb",
                    backgroundColor: "transparent"
                  }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
          <div className="items-center flex relative flex-col justify-between sm:flex-row gap-y-5  md:justify-between  z-10 flex  gap-x-10  w-full lg:flex-1 md:w-[30%]">
            <div className="lg:ml-20 hidden sm:block md:hidden lg:block">
              <div className=" relative mb-1 flex  itemx-center justify-start gap-3 text-[14px]">
                <IoLocationOutline className="text-[18px]" />  Karachi, Pakistan
              </div>
              <div className=" relative flex  itemx-center justify-start gap-3  text-[14px] " >
                <a href="https://wa.me/923077522229>" target="_blank">  <RiWhatsappLine className="text-[18px]" /></a> <div>{view ? "+923077522229" : "* * * * * * * * * *"}</div> <div onClick={() => setView(!view)}><span className="cursor-pointer">{view ? <FaRegEyeSlash /> : <FaRegEye />}</span> </div>
              </div>
            </div>
            <div className="flex gap-5 sm:w-[235px] lg:w-auto">
              <div>
                <Link to="https://www.linkedin.com/in/adnan-rafiq-b18a61220/"> <BiLogoLinkedin className="socialmediaapp" /> </Link>
              </div>
              <div>
                <Link to="https://www.facebook.com/adanan.khan.545?mibextid=ZbWKwL"> <BiLogoFacebook className="socialmediaapp" /></Link>
              </div>
              <div>
                <Link to="https://www.instagram.com/adnanrafiq309?igsh=MXNkcGQzMzV2emdqeA=="> <BiLogoInstagram className="socialmediaapp" /> </Link>
              </div>
              <div>
                <Link to="https://www.tiktok.com/@adnan_rafiq1?_t=8kwsgjViUL9&_r=1">  <BiLogoTiktok className="socialmediaapp" /> </Link>
              </div>
            </div>
          </div>
        </div>
      </ShootingStarsAndStarsBackgroundDemo>
    </>
  );
};

export default Herosection;
