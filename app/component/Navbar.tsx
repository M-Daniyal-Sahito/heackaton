"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (url: string | URL | undefined) => {
    setIsMenuOpen(false); // Close menu on link click
    window.open(url, "_blank"); // Open the link
  };

  return (
    <>
      {/* All Navbar */}
      <div className="w-[1120px] m-auto bg-white mt-2 shadow-md">
        {/* Top Navbar */}
        <div className="h-12 bg-gray-100 flex justify-between items-center px-4 sm:px-8 lg:max-w-[1120px] lg:m-auto">
          {/* Logo on Left */}
          <Image
            className="h-8"
            src="/image1.png"
            alt="logo"
            width={80}
            height={30}
          />

          {/* Right side Text Links */}
          <div className="hidden sm:flex gap-6 text-black items-center font-bold">
            <li
              className="list-none cursor-pointer font-arial text-xl"
              onClick={() => handleLinkClick("https://www.nike.com/retail")}
            >
              Find Store
            </li>
            <li
              className="list-none cursor-pointer font-arial text-xl"
              onClick={() => handleLinkClick("https://www.nike.com/help")}
            >
              Help
            </li>
            <li
              className="list-none cursor-pointer font-arial text-xl"
              onClick={() => handleLinkClick("/joinus")}
            >
              Join Us
            </li>
            <li
              className="list-none cursor-pointer font-arial text-xl"
              onClick={() => handleLinkClick("/Singin")}
            >
              Sign In
            </li>
          </div>

          {/* Hamburger Menu */}
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/burger-bar.png"
              alt="Menu"
              width={30}
              height={30}
              className="h-8 w-8"
            />
          </div>
        </div>

        {/* Bottom Navbar */}
        <div className="h-14 flex items-center px-4 sm:px-8 lg:max-w-[1120px] lg:m-auto">
          {/* Bottom Logo */}
          <Image
            onClick={() => handleLinkClick("/")}
            className="h-10 w-20 cursor-pointer"
            src="/image2.png"
            alt="logo"
            width={80}
            height={40}
          />

          {/* Text Links */}
          <div className="hidden sm:flex list-none gap-6 ml-5 font-arial font-bold text-xl text-black items-center">
            <li onClick={() => handleLinkClick("/")}>New & Feature</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sales</li>
          </div>

          {/* Search Input */}
          <div className="hidden sm:flex items-center gap-2 ml-auto">
            <input
              className="h-10 w-40 bg-gray-100 rounded-full text-black text-center"
              type="text"
              placeholder="Search"
            />
            <Image
              className="h-10 w-10"
              src="/image3.png"
              alt="search icon"
              width={40}
              height={40}
            />
            <Image
              className="h-9 w-9"
              src="/image4.png"
              alt="heart icon"
              width={35}
              height={35}
            />
            <Image
              className="h-10 w-10"
              src="/image5.png"
              alt="shopping bag icon"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="sm:hidden w-full bg-gray-200 p-4 space-y-4">
            {/* Top Navbar Links */}
            <li
              className="list-none cursor-pointer font-arial text-3xl"
              onClick={() => handleLinkClick("https://www.nike.com/retail")}
            >
              Find Store
            </li>
            <li
              className="list-none cursor-pointer font-arial text-3xl"
              onClick={() => handleLinkClick("https://www.nike.com/help")}
            >
              Help
            </li>
            <li
              className="list-none cursor-pointer font-arial text-3xl"
              onClick={() => handleLinkClick("/joinus")}
            >
              Join Us
            </li>
            <li
              className="list-none cursor-pointer font-arial text-3xl"
              onClick={() => handleLinkClick("/Singin")}
            >
              Sign In
            </li>

            {/* Bottom Navbar Links */}
            <li
              className="list-none cursor-pointer font-arial text-3xl"
              onClick={() => handleLinkClick("/")}
            >
              New & Feature
            </li>
            <li className="list-none cursor-pointer font-arial text-3xl">
              Men
            </li>
            <li className="list-none cursor-pointer font-arial text-3xl">
              Women
            </li>
            <li className="list-none cursor-pointer font-arial text-3xl">
              Kids
            </li>
            <li className="list-none cursor-pointer font-arial text-3xl">
              Sales
            </li>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
