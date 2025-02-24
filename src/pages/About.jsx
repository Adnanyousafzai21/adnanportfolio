import React from "react";
import Navbar from "../components/navbar";
import { ThreeDCardDemo } from "../components/ui/ThreeDcardDemo";
import { TypeAnimation } from 'react-type-animation'
import { ShootingStarsAndStarsBackgroundDemo } from "../components/ShootingStarsAndStarsBackgroundDemo";

const About = () => {
  return (
    <Navbar>
      {/* <ShootingStarsAndStarsBackgroundDemo> */}
      <section className=" w-full  flex justify-center h-atuo slide-up-animation items-center lg:h-[450px] xsm:px-10">
        <div className=" w-full flex flex-col lg:flex-row   justify-between items-center gap-10 lg:gap-10 ">
          <div className="md:w-[350px]   sm:w-[450px] w-[100%] relative z-10 ">
            <ThreeDCardDemo />
          </div>

          <div className="md:w-[70%] w-full flex jusitfy-center  h-auto bg-transparent relative z-10">

            <div className="text flex flex-col items-center lg:items-start ">
              <h4>About Me</h4>
              <div></div>
              <h5>
                Mern-Stack developer & <span>Designer</span>
              </h5>
              <div className="min-h-[150px]">
                <TypeAnimation
                  sequence={[
                    `I'm Adnan Rafiq, a highly skilled MERN-stack developer with two years of experience, specializing in front-end development while being proficient in back-end technologies. I also have foundational knowledge of React Native and a strong passion for continuous learning.

                    I have completed a Bachelor's degree in Computer Science and have undergone comprehensive web and app development training at SMIT. Additionally,I actively explore GenAI, AI tools, and DevOps while refining my MERN-stack skills through hands-on projects showcased in my portfolio.`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={100}
                  style={{
                    fontSize: '15px',
                    fontWeight: '100',
                    lineHeight: '22px',
                    letterSpacing: '1px',
                    color: "#e2dddd",
                    backgroundColor: "transparent",
                  }}
                  className="block text-center lg:text-left"
                  repeat={0}
                />

              </div>
              <div className="data relative z-50 ">
                <a
                  href="/images/Men-stack developer cv.pdf"
                  download
                  className="text-white bg-blue-400  px-5 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center"
                >
                  Download Cv
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </ShootingStarsAndStarsBackgroundDemo> */}
    </Navbar>
  );
};

export default About;
