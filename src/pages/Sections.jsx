import React, { useEffect } from "react";
import ProtfolioCard from "../components/ProtfolioCard/ProtfolioCard";
import ProtfolioSlider from "../components/protfolioSlider/ProtfolioSlider";

const Sections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProtfolioCard />
      <ProtfolioSlider />
    </>
  );
};

export default Sections;
