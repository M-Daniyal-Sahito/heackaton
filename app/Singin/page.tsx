"use client"
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const SignIn = () => {
  return (
    <>
    <Navbar/> <br /><br />
    <div className="flex flex-col items-center bg-[#F5F5F5] h-auto">
      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10 w-[380px]">
        <h1 className="text-2xl font-bold mb-4 text-center">SIGN Up</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please sign in to your account to access exclusive features.
        </p>
        {/* Form */}
        <form className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold"
          >
            SIGN IN
          </button>
        </form>
        <p className="text-sm text-center mt-4">
  Don’t have an account?{" "}
  <span
    className="text-blue-500 underline cursor-pointer"
    onClick={() => window.open("/signup", "_blank")} // Next.js route for Sign Up
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

export default SignIn;
