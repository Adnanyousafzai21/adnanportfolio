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

            <div className="text flex flex-col items-center lg:items-start">
              <h4>About Me</h4>
              <div></div>
              <h5>
                Mern-Stack developer & <span>Designer</span>
              </h5>
              <div className="min-h-[150px]">
                <TypeAnimation
                  sequence={[
                    `I'm Adnan Rafiq, a MERN-stack developer with a strong passion for learning and growth. With more than a year of experience, I specialize in front-end development using TypeScript, JavaScript, React.js, and Next.js, while on the back-end, I excel in Node.js, Express.js, and MongoDB.

I'm currently in my last semester of a bachelor's degree in Computer Science and have completed comprehensive web and app development training at SMIT. I'm also exploring the latest technologies like blockchain, web3, and the metaverse through PIAIC.

Before gaining professional experience, I built several projects to sharpen my skills in mern-stack included in work section of the portfolio.`,
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
              <div className="data ">
                <a href="#" className="hire">
                  Download CV
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
