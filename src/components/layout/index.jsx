import React from "react";
import Navbar from "../layout/navbar/index";
import Home from "../layout/home/index";
import About from "../layout/about_us/index";
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Home /> */}
    </div>
  );
}
