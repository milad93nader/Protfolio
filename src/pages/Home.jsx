import React from "react";
import Hero from "./../components/Hero/Hero";
import Aboutme from "./../components/About/Aboutme";
import Myeducation from "./../components/Education/Education";
import Myprojects from "./../components/ProtfolioProjects/ProtfolioProjects";
import Contactme from "./../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MY Portfolio</title>
      </Helmet>
      <Hero />
      <Aboutme />
      <Myeducation />
      <Myprojects />
      <Contactme />
    </>
  );
};

export default Home;
