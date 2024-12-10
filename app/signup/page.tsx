"use client"
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const SignUp = () => {
  return (
    <>
    <Navbar/> <br /><br />
    <div className="flex flex-col items-center bg-[#F5F5F5] h-auto">
      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10 w-[380px]">
        <h1 className="text-2xl font-bold mb-4 text-center">SIGN In</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create an account to access exclusive features.
        </p>
        {/* Form */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold"
          >
            SIGN UP
          </button>
        </div>
        <p className="text-sm text-center mt-4">
  If you already have an accout?{" "}
  <span
    className="text-blue-500 underline cursor-pointer"
    onClick={() => window.open("/Singin", "_blank")} // Next.js route for Sign Up
  >
    Sign Up
  </span>
</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
