import OneSkill from "./OneSkill";
import htmlIcn from "../../assets/imgs/html.webp";
import cssIcn from "../../assets/imgs/css.png";
import jsIcn from "../../assets/imgs/javascript.svg";
import figmaIcn from "../../assets/imgs/figma.svg";
import gitIcn from "../../assets/imgs/git.svg";
import reactIcn from "../../assets/imgs/react.svg";
import muiIcn from "../../assets/imgs/materialUi.png";
import tailwindIcn from "../../assets/imgs/tailwindcss.svg";
import routerIcn from "../../assets/imgs/reactRouter.png";
import "./AllSkills.css";

const AllSkills = () => {
  return (
    <div className="skills">
      <OneSkill alt="html" src={htmlIcn} />
      <OneSkill alt="css" src={cssIcn} />
      <OneSkill alt="java script" src={jsIcn} />
      <OneSkill alt="figma" src={figmaIcn} />
      <OneSkill alt="git" src={gitIcn} />
      <OneSkill alt="react" src={reactIcn} />
      <OneSkill alt="mui" src={muiIcn} />
      <OneSkill alt="tailwind css" src={tailwindIcn} />
      <OneSkill alt="reactrouter" src={routerIcn} />
    </div>
  );
};

export default AllSkills;
