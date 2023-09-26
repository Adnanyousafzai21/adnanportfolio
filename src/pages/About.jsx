import React from "react";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <Navbar>
      <section className="about-us">
        <div className="about">
          <img src={"/images/adnan5.jpeg"} className="pic" />
          <div className="text">
            <h4>About Me</h4>
            <div></div>
            <h5>
             Mern-Stack developer & <span>Designer</span>
            </h5>
            <p>
              MY self Adnan Rafiq Mern-stack developer with a strong appetite for learning and growth. 
             👨‍💼  With
              almost a year of professional experience, including successful
              internships, 🛠️my expertise lies in TypeScript,
              JavaScript, React.js, and Next.js on the front-end. On the
              back-end, I excel in  Node.js, Express.js and
              MongoDB,
             🎓 Currently, I'm in my final year of pursuing a
              bachelor's degree in Computer Science, along with that have also completed
              comprehensive web and app development training at SMIT and am
              exploring cutting-edge technologies like blockchain, web3, and the
              metaverse through PIAIC."
            </p>
            <div className="data">
              <a href="#" className="hire">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </Navbar>
  );
};

export default About;
