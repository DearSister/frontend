import React, { useState } from "react";
import { Typography, makeStyles, AppBar } from "@material-ui/core";

import WebLogo from "../../../assests/Navbar/WebLogo1.png";

const UseStyles = makeStyles({
  underline: {
    postion: "fixed",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.3rem",
    position: "relative",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  mobunderline: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.8rem",
    position: "relative",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default function Navbar() {
  const classes = UseStyles();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="fixed">
      <>
        <nav
          className="bg-gray-100 sticky-nav"
          style={{ backgroundColor: "#04042C", width: "100%" }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-6">
                {/* logo */}
                <div>
                  <a href="/" className="flex items-center   text-gray-700 ">
                    <img
                      src={WebLogo}
                      style={{
                        width: "100%",
                      }}
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/#home"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>Home</Typography>
                </a>
                <a
                  href="/videos"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>Videos</Typography>
                </a>
                <a
                  href="/about_us"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  <Typography className={classes.underline}>
                    About Us
                  </Typography>
                </a>
              </div>

              {/* secondary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="/login" className="py-5 px-3">
                  <Typography className={classes.underline}>Login</Typography>
                </a>
                <a
                  href="/signup"
                  className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >
                  Signup
                </a>
              </div>

              {/* mobile button goes here */}
              <div style={{}} className="md:hidden flex items-center">
                <button
                  className="mobile-menu-button"
                  onClick={handleMenuToggle}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div
            className={`mobile-menu text-center bg-gray-300 ${
              isMenuOpen ? "" : "hidden"
            } md:hidden`}
            style={{ backgroundColor: "#04042C" }}
          >
            <a href="/#home" className="block py-2 px-4 font-bold  text-sm ">
              <Typography className={classes.mobunderline}>Home</Typography>
            </a>
            <a href="/videos" className="block py-2 px-4 font-bold  text-sm ">
              <Typography className={classes.mobunderline}>Videos</Typography>
            </a>
            <a href="/about_us" className="block py-2 px-4 font-bold  text-sm ">
              <Typography className={classes.mobunderline}>About Us</Typography>
            </a>
            {/* <div className="hidden md:flex items-center space-x-1"> */}
            <a
              href="/login"
              className="py-0 px-3 m-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 "
            >
              Login
            </a>
            <a
              href="/signup"
              className="py-0 px-3 m-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a>
          </div>
        </nav>
      </>
    </AppBar>
  );
}
