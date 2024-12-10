"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* All navbar bg */}
      <div className="h-[96px] w-[1125px] bg-white mt-[10px] m-auto">
        {/* Top Navbar */}
        <div className="h-[36px] w-[1120px] bg-[#F5F5F5] flex justify-between items-center">
          {/* Logo on Left */}
          <Image className="h-[30px] ml-[10px]" src="/image1.png" alt="logo" width={80} height={30} />

          {/* Right side Text Links */}
          <div className="flex gap-[25px] mr-[10px] text-black items-center font-bold">
            <li
              className="list-none cursor-pointer font-arial text-[11px]"
              onClick={() =>
                window.open("https://www.nike.com/retail", "_blank")
              }
            >
              Find Store
            </li>
            <li
              className="list-none cursor-pointer font-arial text-[11px]"
              onClick={() => window.open("https://www.nike.com/help", "_blank")}
            >
              Help
            </li>
            <li
              className="list-none cursor-pointer font-arial text-[11px]"
              onClick={() => window.open("/joinus", "_blank")} // Custom route for Next.js
            >
              Join Us
            </li>
            <li
              className="list-none cursor-pointer font-arial text-[11px]"
              onClick={() => window.open("/Singin", "_blank")}
            >
              Sign Up
            </li>
          </div>
        </div>

        {/* Bottom Navbar */}
        <div className="h-[60px] w-[1120px] flex items-center">
          {/* Bottom Logo */}
          <Image
            onClick={() => window.open("/")}
            className="h-[40px] ml-[10px] cursor-pointer"
            src="/image2.png"
            alt="logo"
            width={80}
            height={40}
          />

          {/* Text Links */}
          <div className="flex list-none gap-[20px] ml-[20px] cursor-pointer font-arial font-bold text-[15px] h-full w-[740px] text-black items-center justify-around">
            <li
              onClick={() => window.open("/", "_blank")}
              className="cursor-pointer"
            >
              New & Feature
            </li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sales</li>
          </div>
          <input
            className="h-[40px] w-[180px] bg-[#F5F5F5] rounded-full text-black text-center"
            type="text"
            placeholder="Search"
          />
          <Image
            className="h-[40px] w-[40px]"
            src="/image3.png"
            alt="search icon"
            width={40}
            height={40}
          />
          <Image
            className="h-[35px] w-[35px]"
            src="/image4.png"
            alt="heart icon"
            width={35}
            height={35}
          />
          <Image
            className="h-[40px] w-[40px]"
            src="/image5.png"
            alt="shopping bag icon"
            width={40}
            height={40}
          />
        </div>

        {/* Footer Section */}
      </div>
    </>
  );
};

export default Navbar;
