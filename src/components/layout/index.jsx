import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// <--------------------Importing Components---------------->
import Navbar from "../layout/navbar/index";
import Home from "./home/index";
import About from "../layout/about_us/index";
import Number from "../layout/numbersay/index";
import Course from "../layout/courses/index.js";
import Faqs from "../layout/faqs/index";
import Footer from "../layout/footer/index";
import Login from "../pages/login/index";
import SignUp from "../pages/signup/Signup";
import User from "../layout/user/index.js";
//<--------------------------------------------------------->
export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home /> <About />
              <Number />
              <Course />
              <Faqs />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignUp />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <>
              {/* <Navbar /> */}
              {/* <SignUp /> */}
              <User />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
