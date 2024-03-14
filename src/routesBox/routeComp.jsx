import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./../Pages/Home/Home";
import Experience from "./../Pages/Experirnce/Experience"; 
import About from "./../Pages/About/About";
import Resume from "./../Pages/Resume/Resume";
import Contact from "./../Pages/Contact/Contact";
import Blog from "./../Pages/Blogs/Blogs";
import Project from "./../Pages/Projects/Project";
import Skills from "./../Pages/Skills/Skills";
import Navbar from "./../Component/Header/Header";
import FrontEnd from './../Pages/Resume/FrontEnd/Frontend';
import BackEnd from './../Pages/Resume/Backend/Backend';

const RouteComp = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />}/>
        <Route path="frontend" element={<FrontEnd />} />
          <Route path="backend" element={<BackEnd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default RouteComp;
