import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from "aos";
const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div  >
      <Navbar>
        <div className="w-full relative z-50 flex flex-col justify-center items-center">
          <div
            className="slide-up-animation lg:w-[80%] sm:w-[90%]  px-2 sm:px-auto w-full  pt-5 mb-2 relative z-50 rounded-[10px] overflow-hidden"
          >
            <img
              src="/images/Men-stack developer cv.jpg"
              className="w-full rounded"
            >
            </img>
          </div>
          <a
            href="/images/Men-stack developer cv.pdf"
            download
            className="text-white bg-blue-400 px-5 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center"
          >
            Download Cv
          </a>

        </div>
      </Navbar>

    </div>
  );
};

export default Resume;
