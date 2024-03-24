import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
// import {ecomrce} from "../components/images/e-comrace.PNG"

const Work = () => {

  const data = [
    {
      id: 1,

      imag: "/images/e-comrace.PNG",
      link: "https://hakthonpro.vercel.app/",
      proname: "E-comerce Website",
      techname: "Nextjs Redux",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 7,

      imag: "/images/social media.PNG",
      link: "https://socailmediaapp.vercel.app/",
      proname: "social media app",
      techname: "React, node, mongodb",
      discription:
        "this is under development is has still have some functionalty missing comming verry soon",
    
    },
    {
      id: 2,
      imag: "/images/addcontact.PNG",
      link: "https://contact-list-bice-zeta.vercel.app/",
      proname: "Contact list",
      techname: "Nextjs Redux Express",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 8,
      imag: "/images/joobseeker.PNG",
      link: "https://jobseekerfrontend.vercel.app",
      proname: "Job Seeker",
      techname: "MERN stack",
      discription:
        "Included each and every functionallity ,like post edit delete job and application include role for both employee and jobseeker and many more",
    },
    // {
    //   id: 3,
    //   imag: "/images/firstpotfolio.PNG",
    //   link: "https://adnanyousafzai21.github.io/adnan-app/",
    //   proname: "Frist portpolio",
    //   techname: "Nextjs Redux",
    //   discription:
    //     "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    // },
    {
      id: 4,
      imag: "/images/todo.PNG",
      link: "https://adnanyousafzai21.github.io/Todo_List/",

      proname: "ToDo list",
      techname: "React, Express",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
    {
      id: 5,
      imag: "/images/texttot.PNG",
      link: "https://textandcolorproperties.netlify.app/",
      proname: "Text editor",
      techname: "Reactjs",
      discription:
        "I made this website with tailwind css Nextjs , redux I also created the same project with react redux and tailwind css but not published yet",
    },
 
  ];

  return (
    <Navbar>
      <div className="card-contianer">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.imag} alt="Avatar" />
              <div className="container">
                <h4>{item.proname}</h4>
                <p>{item.techname}</p>
                <div className="links">
                  {" "}
                  <Link to={item.link} className="link">
                    View Project
                  </Link>
                  <Link to={item.link} className="link">
                   see Detials
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Navbar>
  );
};

export default Work;
