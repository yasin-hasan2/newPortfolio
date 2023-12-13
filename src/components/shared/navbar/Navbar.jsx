// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
  const navBar = (
    <>
      <li className="text-xl">
        <Link to="/"> Home </Link>
      </li>
      <li className="text-xl">
        <a> About </a>
      </li>
      <li className="text-xl">
        <a> Contact </a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-10 py-5">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <a className=" font-bold  text-3xl text-pink-700 "> Yasin Hasan </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navBar}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
