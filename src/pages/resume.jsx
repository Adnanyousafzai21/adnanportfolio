import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from "aos";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Create a PDF viewer plugin with a default layout
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Navbar>
        {/* <div className="w-full relative z-50 flex flex-col justify-center items-center">
          <div
            className="slide-up-animation lg:w-[80%] sm:w-[90%] w-full pt-5 mb-2 relative z-50 rounded-[10px] overflow-hidden bg-gray-100 p-3 shadow-md"
          > */}
            {/* Use the correct worker version */}
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl="/images/Men-stack developer cv.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          {/* </div>
          <a
            href="/images/Men-stack developer cv.pdf"
            download
            className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center mt-4"
          >
            Download CV
          </a>
        </div>*/}
      </Navbar> 
    </div>
  );
};

export default Resume;
