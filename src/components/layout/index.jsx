import React from "react";
import Navbar from "../layout/navbar/index";
import Home from "../layout/home/index";
import About from "../layout/about_us/index";
import Number from "../layout/numbersay/index";
import Course from "../layout/courses/index.js";
import Faqs from "../layout/faqs/index";
import Footer from "../layout/footer/index";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Number />
      <Course />
      <Faqs />
      <Footer />
    </div>
  );
}
