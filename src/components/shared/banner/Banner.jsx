// import React from 'react';
import portfolio from "../../../assets/img/Picsart_23-12-09_16-37-35-358.jpg";
import { FaDownload } from "react-icons/fa";
import resume from "https://docs.google.com/document/d/1G4GGKaQSErGuvz_Ebg1PYFgS4KPIMbGdIMoPVo_dKvE/edit?usp=drive_link";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <img
            src={portfolio}
            className=" w-40 lg:w-80 lg:rounded-lg rounded-full shadow-2xl"
          />
          <div className="text-[#FFFFFF]">
            <h1 className="text-5xl font-bold">
              {" "}
              Hi, I'm{" "}
              <span className="text-pink-700">
                {" "}
                <br />
                YASIN HASAN{" "}
              </span>{" "}
              ,{" "}
            </h1>
            <p className="py-6 text-xl ">
              " A web developer passionate about creating immersive online
              experiences."
            </p>
            <a href={resume}>
              <button className="btn btn-outline border-pink-700 hover:btn-secondary text-xl text-[#FFFFFF] ">
                Download CV <FaDownload className="text-pink-700"></FaDownload>{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
