// import React from 'react';
import project1 from "../../../assets/img/projectimg/Screenshot (100).png";
import project2 from "../../../assets/img/projectimg/Screenshot (98).png";
import project3 from "../../../assets/img/projectimg/Screenshot (99).png";

const Project = () => {
  return (
    <div className="mt-10">
      <h1 className=" pb-5  text-center font-bold text-pink-700 text-5xl">
        {" "}
        About Me{" "}
      </h1>
      <div className="border w-64 mx-auto  "></div>
      <div className=" mt-10 grid gap-5 grid-cols-1 lg:grid-cols-3">
        <div></div>
        <div className=" rounded-lg p-3 border-4">
          <a href="https://bunty-tech.web.app/">
            <img className="w-96" src={project1} alt="" />
          </a>
        </div>
        <div></div>
        <div className=" rounded-lg p-3 border-4">
          <a href="https://luxury-hotel-3b2ef.web.app/">
            <img className="w-96" src={project2} alt="" />
          </a>
        </div>
        <div></div>
        <div className=" rounded-lg p-3 border-4">
          <a href="https://phone-hub-bd.web.app/">
            <img className="w-96" src={project3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
