import React, { useEffect, useState } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";
const Herosection = () => {
  const [view, setView] = useState(false)
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo>
        <div className="header  flex flex-col pb-10 md:pb-3 gap-y-8 md:flex-row md:px-[20px]  sm:px-[90px] w-full">
          <div className="relative  md:hidden  flex items-center w-[101px] lg:w-[83px] lg:h-[83px] h-[101px] overflow-hidden  justify-center bg-pro-parent"  data-aos="zoom-in-down">
            <div className="w-full h-full rounded-full   absolute bg-pro ">
            </div>
            <div className="lg:h-[80px] lg:w-[80px] h-[100px] w-[100px] overflow-hidden relative rounded-full relative z-10">
              <img src="/images/adnan4.jpg" alt="" className="w-full hover:scale-110 duration-700" />
            </div>

          </div>
          <div className="flex lg:flex-1  flex-col sm:flex-row gap-y-8 lg:w-full  items-center md:w-[70%]  w-full justify-between "  data-aos="zoom-in">
            <div className="flex  gap-x-10 items-center justify-between">
              <div className="relative  md:w-[81px] md:h-[81px] md:block hidden  flex items-center  justify-center">
                <div className="   rounded-full  w-full h-full  absolute bg-pro ">
                </div>
                <div className="md:h-[80px] md:w-[80px] h-[100px] w-[100px] overflow-hidden relative rounded-full relative z-10">
                  <img src="/images/adnan4.jpg" alt="" className="w-full hover:scale-110 duration-700" />
                </div>

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
                    " a React-Native developer",
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
          <div className="items-center flex relative  flex-col justify-between sm:flex-row gap-y-5  md:justify-between  z-10 flex  gap-x-10  w-full lg:flex-1 md:w-[30%]"  data-aos="zoom-in-up">
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
                <a href="https://www.linkedin.com/in/adnan-rafiq-b18a61220/" target="_blank" rel="noopener noreferrer">
                  <BiLogoLinkedin className="socialmediaapp" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/adanan.khan.545?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <BiLogoFacebook className="socialmediaapp" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/adnanrafiq309?igsh=MXNkcGQzMzV2emdqeA==" target="_blank" rel="noopener noreferrer">
                  <BiLogoInstagram className="socialmediaapp" />
                </a>
              </div>
              <div>
                <a href="https://www.tiktok.com/@adnan_rafiq1?_t=8kwsgjViUL9&_r=1" target="_blank" rel="noopener noreferrer">
                  <BiLogoTiktok className="socialmediaapp" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </ShootingStarsAndStarsBackgroundDemo>
    </>
  );
};

export default Herosection;
