import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sections from "./pages/Sections";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id/:name" element={<Sections />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
