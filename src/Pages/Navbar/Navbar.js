import React, { useState } from "react";
import Resume from "../../assets/Razibul_Islam.pdf";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossedSabres } from "react-icons/gi";
import "../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItem = (
    <>
      <li className="font-semibold relative cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
        <span className="bdani">About</span>
      </li>
      <li className="font-semibold relative cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
        <span className="bdani">Project</span>
      </li>
      <li className="font-semibold relative cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
        <span className="bdani">Service</span>
      </li>
      <li className="font-semibold relative cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
        <span className="bdani">Blog</span>
      </li>
      <li className="font-semibold relative cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
        <span className="bdani">Contact</span>
      </li>
      <li className="font-semibold cursor-pointer hover:text-white text-lg tracking-wide text-gray-900 lg:text-[#8892B0]">
        <button className="outline-1 outline rounded-sm px-3 py-2 hover:bg-gray-700 ease-in duration-300">
          <a href={Resume} download={true}>
            Resume
          </a>
        </button>
      </li>
    </>
  );
  return (
    <div className="bg-gray-900 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between z-50">
          <Link
            href="/"
            aria-label="Razibul"
            title="Razibul"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-['Gumela'] font-bold tracking-wide text-gray-100 uppercase">
              Razibul
            </span>
          </Link>
          <ul className="hidden space-x-6 lg:flex items-center">{menuItem}</ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5  shadow-smh-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100 border border-gray-100">
                  <div className="flex items-center justify-end mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <GiCrossedSabres />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-3 text-center">{menuItem}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
