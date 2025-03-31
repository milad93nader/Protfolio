import React from "react";
import { Link } from "react-router-dom";
import projectimg1 from "../../assets/imgs/project1.jpg";
import projectimg2 from "../../assets/imgs/project2.png";
import projectimg3 from "../../assets/imgs/project3.png";
import projectimg4 from "../../assets/imgs/project4.png";
import projectimg5 from "../../assets/imgs/project5.png";
import projectimg6 from "../../assets/imgs/project6.png";
import "./Cards.css";

export const projects = [
  {
    id: 1,
    link: "https://github.com/milad93nader/CoffeShop",
    repo: "coffe-shop-teal.vercel.app",
    img: projectimg1,
    title:"CoffeShop Website",
    libraries: [
      "React",
    ],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "Coffe Shop website a great react template to a comapny that buy coffe ",
  },
  {
    id: 2,
    link: "https://github.com/milad93nader/Restaurant-website",
    repo: "https://restaurant-website-green-kappa.vercel.app/",
    img: projectimg2,
    title: "Restaurant Website",
    libraries: [
      "NextJs",
    ],
    languages: ["HTML", "CSS", "TypeScript"],
    description:
      "Restaurant Website Template",
  },
  {
    id: 3,
    link: "https://github.com/milad93nader/Burger-Website",
    repo: "https://burger-website-gamma.vercel.app/",
    img: projectimg3,
    title: "Burger House",
    libraries: ["Nextjs"],
    languages: ["HTML", "CSS", "Typescript"],
    description:
      "Website for a Burger Restaurant",
  },
  {
    id: 4,
    link: "https://github.com/milad93nader/Milad-Nader-Vica-Med-PRO",
    repo:"https://milad-nader-vica-med-pro.vercel.app/",
    img: projectimg4,
    title: "EduPress Website",
    libraries: ["Pure Project"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "Mid level Project in Vica Web solutions compnay this is the project of level one training",
  },
  {
    id: 5,
    link: "https://github.com/milad93nader/Book-Website",
    repo: "https://github.com/milad93nader/Book-Website",
    img: projectimg5,
    title: "Book Website",
    libraries: ["Next js"],
    languages: ["HTML", "CSS", "TypeScript"],
    description:
      "A basic arithmetic calculator application designed to perform simple calculations, including basic arithmetic operations such as addition, subtraction, multiplication, and division. This application allows you to perform calculations with ease and efficiency, and provides a simple and user-friendly interface. It is ideal for everyday use, and is suitable for students, professionals, and anyone who needs to perform quick calculations.",
  },
  {
    id: 6,
    link: "https://github.com/milad93nader/aio-dashboard-main",
    repo: "https://aio-dashboard-main.vercel.app/",
    img: projectimg6,
    title: "Dashboard",
    libraries: ["Nextjs"],
    languages: ["HTML", "CSS", "Javascript"],
    description:
      "A Dashboard From Figma To code its an Amazing Dashboard !!!!",
  },
];

const Cards = ({ style }) => {
  return (
    <div className="cardsContainer">
      {projects.map((project) => (
        <div style={style} className="card" key={project.id}>
          <a target="_blank" href={project.link}>
            <img src={project.img} alt="project img" />
          </a>
          <p>{project.title}</p>
          <div>
            <span>{project.libraries.join("-")}</span>
            <Link
              aria-label="go to my project details"
              to={`/project/${project.id}/${project.title}`}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.59392 24.0317C1.0348 18.1934 2.54537 11.7059 7.12563 7.12563C13.9598 0.291456 25.0402 0.291456 31.8744 7.12563C38.7085 13.9598 38.7085 25.0402 31.8744 31.8744C27.2941 36.4546 20.8066 37.9652 14.9683 36.4061M24.7502 24.7502V14.2502M24.7502 14.2502H14.2502M24.7502 14.2502L7.24991 31.7501"
                  stroke="var(--active-)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
