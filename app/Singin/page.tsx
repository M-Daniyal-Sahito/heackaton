"use client";
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const SignIn = () => {
  return (
    <>
      <Navbar /> <br />
      <br />
      <div className="flex flex-col w-[1120px] items-center  h-auto sm:p-auto sm:w-full  sm:mt-4">
        {/* Content Container */}
        <div className="bg-white w-[1120px] shadow-lg rounded-lg p-6 mt-[100px] sm:w-auto m-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">SIGN UP</h1>
          <p className="text-3xl text-gray-600 text-center mb-6">
            Please sign in to your account to access exclusive features.
          </p>
          {/* Form */}
          <form className="space-y-4 h-auto text-3xl ">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 border rounded-lg text-3xl focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border rounded-lg text-3xl focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-bold text-2xl"
            >
              SIGN IN
            </button>
          </form>
          <p className="text-2xl text-center mt-4">
            Don’t have an account?{" "}
            <span
              className="text-blue-500 underline cursor-pointer text-2xl"
              onClick={() => window.open("/signup", "_blank")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
