import React, { useContext, useState } from "react";
import sun from "../../assets/imgs/Sun.svg";
import moon from "../../assets/imgs/moon.svg";
import { Context } from "../../context/Context";

const ProtfolioBtn = () => {
  const { theme, setTheme } = useContext(Context);
  const [icon, setIcon] = useState(false);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIcon(true);
    setTimeout(() => {
      setIcon(false);
    }, 200);
  };

  return (
    <button
      aria-label="change protfolio theme"
      className="ProtfolioBtn"
      onClick={handleChangeTheme}
    >
      <img
        style={icon ? { transform: "scale(0)" } : { transform: "scale(1)" }}
        width={35}
        src={theme === "dark" ? sun : moon}
        alt="theme icon"
      />
    </button>
  );
};

export default ProtfolioBtn;
