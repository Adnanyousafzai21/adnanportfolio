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
      <div className="card-contianer  
      py-2 sm:px-5 px-2 md:px-10">
        {data.map((item) => {
          return (
            // <div className="card" key={item.id}>
            //   <img src={item.imag} alt="Avatar" />
            //   <div className="container">
            //     <h4>{item.proname}</h4>
            //     <p>{item.techname}</p>
            //     <div className="links">
            //       {" "}
            //       <Link to={item.link} className="link">
            //         View Project
            //       </Link>
            //       <Link to={item.link} className="link">
            //         see Detials
            //       </Link>
            //     </div>
            //   </div>
            // </div>




            <div class=" w-full lg:max-w-[30%] md:w-[40%] w-[280px]  card rounded-lg shadow   z-10 bg-[#131a24] ">

              <img class=" w-full rounded-t-lg h-[200px]" src={item.imag} alt="product image" />

              <div class="px-5 py-2 w-full">

                <h5 class="text-xl font-semibold text-center tracking-tight  text-white py-2">{item.proname}</h5>

                <div class="flex items-center mt-2.5 mb-5">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                  <a href="#" class="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center ">Details</a>
                  <a href="#" class="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center ">View</a>
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
