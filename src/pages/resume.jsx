import React from "react";
import Navbar from "../components/navbar";

const Resume = () => {
  return (
    <div>
      <Navbar>
        <section className="resume-container">
          <div className="education">
            <h2>Education</h2>
            <div className="education-item">
              <p>2016 - 2018</p>
              <h3>Matriculation</h3>
              <p>
                I have done Matriculation with good marks and lots of knowledge.
              </p>
            </div>
            <div className="education-item">
              <p>2018 - 2020</p>
              <h3>Intermediate</h3>
              <p>
                I have done Intermediate with good marks and lots of knowledge.
              </p>
            </div>
            <div className="education-item">
              <p>2020 - Currently</p>
              <h3>Undergraduate</h3>
              <p>I am Undergraduate in Artificial Intelligence.</p>
            </div>
            <div className="education-item">
              <p>2019</p>
              <h3>Web Development</h3>
              <p>
                I learned Web Development with YouTube. I did not go to any
                institute to learn web development because YouTube is the most
                popular social platform to learn new things...
              </p>
            </div>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
              <div className="skill-item">Html</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">Bootstrap</div>
              <div className="skill-item">Material UI</div>
              <div className="skill-item with-range" data-range="50%">
                Ant-design
              </div>
              <div className="skill-item">Vuetify</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React.js</div>
              <div className="skill-item">Vue.js</div>
              <div className="skill-item with-range" data-range="50%">
                Python
              </div>
            </div>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <div className="experience-item">
              <p>
                I am doing a job since Nov, 2020 in KCompute. I have good
                experience in React.js. I have done work on multiple projects in
                React.js. I get daily tasks and I do them on time. I am able to
                handle multiple tasks on a daily basis. I use a creative
                approach to problem solve. I am always energetic and eager to
                learn new skills. I have experience working as part of a team
                and individually.
              </p>
            </div>
            <div className="experience-item">
              <p>
                I have done work on a few freelance projects with my friend. We
                designed these projects on Vue.js with Vuetify theme. This was a
                good experience to learn Vue and design web applications.
              </p>
            </div>
          </div>
        </section>
      </Navbar>
    </div>
  );
};

export default Resume;
