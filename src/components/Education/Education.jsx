import React, { useContext } from "react";
import { Context } from "./../../context/Context";
import squares from "../../assets/imgs/educationSquares.svg";
import border1 from "../../assets/imgs/borderImg1.png";
import border from "../../assets/imgs/borderImg.png";
import "./Education.css";

const Education = () => {
  const { theme, activeSection } = useContext(Context);

  const experience = [
    {
      title: "Frontend Developer Trainer Level 1",
      company: "Vica Web Soluions: ",
      desc: `I built websites using HTML, CSS, and JavaScript. I create a Figma websites in pure method in a high quality`,
    },
    {
      title: "Frontend Developer Tranier Level 2",
      company: "Projects SY: ",
      desc: `During the training, I learned React, React Router, and Material-UI.
            I built interactive web applications as well as websites by using
             various libraries and APIs to create responsive projects.`,
    },
  ];

  return (
    <section id="education" className="mt">
      <img src={squares} alt="squares" />
      <img src={squares} alt="squares" />

      <div className="container">
        <div className="education">
          <p>Education and Experience</p>
          <h1>Education & Experience</h1>
          <div>
            {experience.map((work, idx) => (
              <div key={idx} className="experience">
                <img src={theme === "dark" ? border1 : border} alt="border" />
                <div>
                  <h2>{work.title}</h2>
                  <p>
                    <span>{work.company}</span>
                    {work.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div>
              <h3>Try me in  your company</h3>
              <p>
                If you’re not agree with the work after the first show, I’ll
                fix every thing as you want ,
                <span> dont worry ! hurry up , lets start</span>
              </p>
            </div>
            <a color="white" className="primaryBtn" href="#contact">
              Contact
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9624 6.19869L8.10654 1.34278L9.23753 0.211792L16.0243 6.99854L15.4588 7.56403L9.23753 13.7853L8.10654 12.6543L12.9624 7.79839H0.0272331V6.19869H12.9624Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <button
        aria-label="go to top"
        style={{
          transform:
            activeSection > "aboutMe" && activeSection !== "home"
              ? "scale(1)"
              : "scale(0)",
        }}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 19L9 1.5M9 1.5L1.5 9M9 1.5L16.5 9"
            stroke="var(--bg-color-)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default Education;
