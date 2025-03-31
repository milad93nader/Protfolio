import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProtfolioLinks from "./../ProtfolioLinks/ProtfolioLinks";
import { Link } from "react-router-dom";
import ProtfolioBtn from "../ProtfolioBtn/ProtfolioBtn";
import "./Navbar.css";

const Navbar = () => {
  const { Sidebar_Showen, setSidebar_Showen } = useContext(Context);

  return (
    <nav>
      <Link to={"/"}>Milad Haisam Nader</Link>
      <ProtfolioLinks />
      <ProtfolioBtn/>
      <button
        aria-label="menu button"
        className="menuBtn"
        onClick={() => setSidebar_Showen(!Sidebar_Showen)}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5001 24.7916L27.7084 24.7916M7.29175 17.4999H27.7084M7.29175 10.2083H27.7084"
            stroke="var(--text-)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
