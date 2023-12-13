// import React from 'react';

const Education = () => {
  return (
    <div className="mt-10">
      <h1 className=" pb-5  text-center font-bold text-pink-700 text-5xl">
        {" "}
        Education & skills
      </h1>
      <div className="border w-64 mx-auto  "></div>
      <div className=" text-[#FFFF] mt-10 gap-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="border py-5 px-10 ">
          {" "}
          <h1 className="text-2xl">Educational knowles : </h1>{" "}
          <p className="text-xl">
            {" "}
            Academic :{" "}
            <span className="font-medium text-pink-600 ">
              {" "}
              Completed Higher Secondary{" "}
            </span>{" "}
            <br />
            <h3 className="font-light"> Education background science </h3>
          </p>
        </div>
        <div className="border py-5 px-10 ">
          {" "}
          <h1 className="text-2xl"> Skills : </h1>{" "}
          <p className="text-xl">Web development at JavaScript </p>
          <div>
            <h1> JavaScript library </h1>
            <li> React</li>
            <li> Next.js </li>
          </div>
          <div>
            <h1> Experience at </h1>
            <li>HTML</li>
            <li>CSS</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
