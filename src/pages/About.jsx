import React from "react";
import Navbar from "../components/navbar";
import { ThreeDCardDemo } from "../components/ui/ThreeDcardDemo";
import { TypeAnimation } from 'react-type-animation'
import { ShootingStarsAndStarsBackgroundDemo } from "../components/ShootingStarsAndStarsBackgroundDemo";

const About = () => {
  return (
    <Navbar>
      {/* <ShootingStarsAndStarsBackgroundDemo> */}
      <section className=" w-full  flex justify-center h-atuo  items-center lg:h-[450px] xsm:px-10">
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
                    " MY self Adnan Rafiq Mern-stack developer with a strong appetite for learning and growth. 👨‍💼  With almost a year of professional experience, including successful internships, 🛠️my expertise lies in TypeScript, JavaScript, React.js, and Next.js on the front-end. On the back-end, I excel in Node.js, Express.js, and MongoDB. 🎓 Currently, I'm in my final year of pursuing a bachelor's degree in Computer Science, along with having completed comprehensive web and app development training at SMIT, and exploring cutting-edge technologies like blockchain, web3, and the metaverse through PIAIC.",
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
