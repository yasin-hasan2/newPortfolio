// import React from 'react';

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Project from "../pages/project/Project";
import Banner from "../shared/banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
