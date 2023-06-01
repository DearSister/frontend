import React from "react";
import { Link } from "react-scroll";

// <--------------------Importing Components---------------->
import Navbar from "../layout/navbar/index";
import Home from "./home/index";
import About from "../layout/about_us/index";
import Number from "../layout/numbersay/index";
import Course from "../layout/courses/index.js";
import Faqs from "../layout/faqs/index";
import Footer from "../layout/footer/index";
//<--------------------------------------------------------->
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Link to="home" smooth={true} duration={500}>
        <Home />
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <About />
      </Link>
      <Link to="numbers" smooth={true} duration={500}>
        <Number />
      </Link>
      <Link to="course" smooth={true} duration={500}>
        <Course />
      </Link>
      <Link to="faqs" smooth={true} duration={500}>
        <Faqs />
      </Link>

      <Footer />
    </div>
  );
}
