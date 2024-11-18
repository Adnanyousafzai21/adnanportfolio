import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import MyModal from "../components/modal";
import NotificationModal from "../components/notificationModal";
import { MyContext } from "../components/Context";


const Work = () => {
  const [activeItem, setActiveItem] = useState(null)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const { isModalOpen, setIsModalOpen } = useContext(MyContext);

  let [isOpen, setIsOpen] = useState(false)
  function openModal(item) {
    setIsOpen(true)
    setActiveItem(item)
  }

  const data = [
    {
      id: 1,

      // imag: "/images/e-comrace.PNG",
      // imag: "/images/e-comerce.PNG",
      imag: "/images/e-comerce-1.PNG",
      link: "https://hakthonpro.vercel.app/",
      proname: "E-comerce Website",
      techname: "Nextjs Redux",
      discription:
        "E-commerce website allows users to browse products, view detailed descriptions, and easily add items to their cart for a seamless shopping experience. created.",
    },
    {
      id: 2,

      imag: "/images/social media.jpg",
      link: "https://socailmediaapp.vercel.app/",
      proname: "social media app",
      techname: "React, node, mongodb",
      discription:
        "Social media app allows users to post, delete, update, comment, like, and share text, videos, and photos. It includes authentication and authorization features for secure user interactions.",

    },

    {
      id: 3,
      imag: "/images/gallery-photo.PNG",
      link: "https://photogalleryui.vercel.app/",
      proname: "Photo Gallery",
      techname: "Mern-Stack",
      discription:
        `Authentication: Only registered users can upload/manage images; public users can view public images on the Newsfeed.

Uploads: Users can create folders and upload images.
Privacy:
Control image visibility (public/private).
Private folders hide all images inside.
Deleting a folder or image removes them across the app.`

    },
    {
      id: 4,
      imag: "/images/fullCrud-3.PNG",
      link: "https://fullauthrized-crud.vercel.app//",
      proname: "FullAuthorizedCrud",
      techname: "Nextjs Express MongoDB",
      discription:
        "This is a secure CRUD app with authentication and password recovery. If registered with a valid email, you'll receive a 6-digit code to reset your password. You can create, view, edit, and delete activities with subjects, descriptions, and file attachments, while managing your own data in a dark/light theme."
    },
    {
      id: 5,
      imag: "/images/addcontact.PNG",
      link: "https://contact-list-bice-zeta.vercel.app/",
      proname: "Contact list",
      techname: "Nextjs Redux Express",
      discription:
        "During my early learning, I built a React web app for managing contacts, enabling users to save, edit, and delete contact information.",
    },

    {
      id: 6,
      imag: "/images/joobseeker.PNG",
      link: "https://jobseekerfrontend.vercel.app",
      proname: "Job Seeker",
      techname: "MERN stack",
      discription:
        "I developed a web application for job seekers where employers can share job postings, and job seekers can search for opportunities. Authenticated users have the ability to both post and search for jobs.",
    },

    {
      id: 7,
      imag: "/images/todo.PNG",
      link: "https://adnanyousafzai21.github.io/Todo_List/",

      proname: "ToDo list",
      techname: "React, Express",
      discription:
        "In my initial days of learning, I created a to-do app that allows users to add, edit, and delete items, providing a simple way to manage tasks.",
    },

  ];
  return (
    <Navbar>
      <div className="card-contianer  
      py-2 sm:px-5 px-8 md:px-10 overflow-hidden z-20 relative ">

        {data.map((item) => {
          return (
            <>
              <div className=" hidden lg:block w-full lg:max-w-[30%] md:w-[40%] slide-up-animation xsm:w-[280px]  card rounded-lg shadow   z-20 bg-[#000000] sm:bg-[#101a24]" key={item.id} >
                <img className=" w-full rounded-t-lg h-[200px]" src={item.imag} alt="product image" />

                <div className="px-5 py-2 w-full">

                  <h5 className="text-xl font-semibold text-center tracking-tight  text-white py-2">{item.proname}</h5>

                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center "
                      onClick={() => { setIsOpen(true), setActiveItem(item) }}> Details </a>
                    <a href="#" className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center ">View</a>
                  </div>
                </div>
              </div>
              <div className="lg:hidden w-full lg:max-w-[30%] md:w-[40%] xsm:w-[280px]  card rounded-lg shadow   z-20 bg-[#000000] sm:bg-[#101a24]" key={item.id} data-aos={`${item.id % 2 == 0 ? "fade-right" : "fade-left"}`}>
                <img className=" w-full rounded-t-lg h-[200px]" src={item.imag} alt="product image" />

                <div className="px-5 py-2 w-full">

                  <h5 className="text-xl font-semibold text-center tracking-tight  text-white py-2">{item.proname}</h5>

                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-[#43ff64d9]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center "
                      onClick={() => { setIsOpen(true), setActiveItem(item) }}>  Details </a>
                    <a href={item?.link} className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center ">View</a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} activeItem={activeItem} />

      <NotificationModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}  />
    </Navbar>
  );
};

export default Work;