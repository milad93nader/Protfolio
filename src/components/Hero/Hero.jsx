import React from "react";
import myImg from "../../assets/imgs/PersonalImage.jpg";
import squares from "../../assets/imgs/squares.svg";
import gradiant from "../../assets/imgs/BlurGradient.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <img src={gradiant} alt="gradient" />
      <div className="container">
        <div className="hero">
          <div className="content">
            <h1>
              <span>HEY! </span>
              I am Milad , Frontend Developer
            </h1>
            <p>
              Hi there! I'm Frontend Developer specializing in crafting seamless
              user experiences and dynamic interfaces using modern web tools
            </p>
            <a
              href="pdfs/Milad Nader English.pdf"
              download="MiladNader.pdf"
            >
              Download Cv
            </a>
          </div>
          <div>
            <img src={myImg} alt="personal image"  />
            <img src={squares} alt="squares" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
