import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProtfolioLinks from "../ProtfolioLinks/ProtfolioLinks";
import ProtfolioBtn from "../ProtfolioBtn/ProtfolioBtn";
import "./Sidebar.css";

const Sidebar = () => {
  const { Sidebar_Showen, setSidebar_Showen } = useContext(Context);

  window.onresize = () => {
    if (window.innerWidth > 1023) {
      setSidebar_Showen(false);
    }
  };
  return (
    <>
      <div
        style={{
          transform: Sidebar_Showen ? "translateX(0)" : "translateX(-100%)",
        }}
        className="overlay"
        onClick={() => setSidebar_Showen(false)}
      ></div>
      <div
        style={{
          transform: Sidebar_Showen ? "translateX(0)" : "translateX(-100%)",
        }}
        className="sidebar"
      >
        <ProtfolioLinks />
        <ProtfolioBtn />
      </div>
    </>
  );
};

export default Sidebar;
