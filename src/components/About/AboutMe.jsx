import React, { useContext } from "react";
import { Context } from "../../context/Context";
import smallcircle from "../../assets/imgs/dot.svg";
import bigcircle from "../../assets/imgs/Ellipse.svg";
import Skills from "../Skills/AllSkills";
import "./AboutMe.css";

const AboutMe = () => {
  const { theme } = useContext(Context);
  return (
    <section id="aboutMe" className="mt">
      <img src={theme === "light" ? smallcircle : bigcircle} alt="ellipse" />
      <div className="container">
        <div className="aboutMe mt">
          <Skills />
          <div className="content">
            <div>
              <h1>About Me</h1>
              <p>
                Hello! I am Milad Haisam Nader, coming from Homs city, Syria.
                My journey as a frontend developer began in 2024, with my first
                experience in programming at the Vica Web Solutions Company as a FrontEnd Enginner. Since
                then, I have been passionate about developing user interfaces and
                enhancing user experiences by designing and building interactive
                and attractive web applications and a lot of websites .....Lets start!!!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
