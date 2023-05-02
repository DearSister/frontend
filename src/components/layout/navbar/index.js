import React, { useState } from "react";
import WebLogo from "../../../assests/WebLogo.png";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    src={WebLogo}
                    style={{ width: "30%", height: "auto" }}
                    alt=""
                  ></img>
                  {/* <svg
                    className="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    /> */}
                  {/* </svg> */}
                  {/* <span className="font-bold">Dear Sister</span> */}
                </a>
              </div>

              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/home"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  Home
                </a>
                <a
                  href="/videos"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  Videos
                </a>
                <a
                  href="/about_us"
                  className="py-5 px-3 font-bold hover:text-gray-700"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/login" className="py-5 px-3">
                Login
              </a>
              <a
                href="/signup"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={handleMenuToggle}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
        >
          <a
            href="/home"
            className="block py-2 px-4 font-bold  text-sm hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="/videos"
            className="block py-2 px-4 font-bold  text-sm hover:bg-gray-200"
          >
            Videos
          </a>
          <a
            href="/about_us"
            className="block py-2 px-4 font-bold  text-sm hover:bg-gray-200"
          >
            About Us
          </a>
          {/* <div className="hidden md:flex items-center space-x-1"> */}
          <a href="/login" className="py-5 px-3 ">
            Login
          </a>
          <a
            href="/signup"
            className="py-0 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
          >
            Signup
          </a>
          {/* </div> */}
        </div>
      </nav>

      {/* content goes here */}
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div>
    </>
  );
}

// export default Navbar;
