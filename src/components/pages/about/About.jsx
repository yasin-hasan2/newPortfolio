// import React from 'react';

import Education from "../education/Education";

const About = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className=" pb-5  text-center font-bold text-pink-700 text-5xl">
          {" "}
          About Me{" "}
        </h1>
        <div className="border w-64 mx-auto  "></div>

        <div className=" w-full  lg:w-3/4 mx-auto text-justify lg:text-center my-10">
          <h2 className=" px-5 text-xl font-medium text-[#FFFF]">
            a passionate web developer dedicated to crafting unique and engaging
            online experiences. With a blend of creativity and technical
            expertise, I specialize in designing and building responsive
            websites that not only look great but also function seamlessly
            across various devices. Proficient in a range of programming
            languages and frameworks such as HTML, CSS, JavaScript, and more, I
            thrive on solving complex problems and turning innovative ideas into
            reality. My goal is to create user-friendly interfaces that leave a
            lasting impression and elevate the digital presence of businesses
            and individuals. Whether it's front-end design, back-end
            development, or full-stack solutions, I'm excited to bring my skills
            to the table and help bring your vision to life on the web.
          </h2>
        </div>
      </div>

      <Education></Education>
    </div>
  );
};

export default About;
