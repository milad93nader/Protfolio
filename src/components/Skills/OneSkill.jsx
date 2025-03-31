import React from "react";
import "./AllSkills.css";
const OneSkill = ({ src, alt }) => {
  return (
    <div className="skill">
      <img className="Skill-img"
        src={src}
        alt={alt}
        style={{
          objectFit: "contain",
          width: "80px",
          height: "80px",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default OneSkill;
