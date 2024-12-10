"use client"
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const JoinUs = () => {
  return (
    <>
<Navbar/> <br /><br />
    <div className="flex flex-col items-center bg-[#F5F5F5] min-h-auto">
      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10 w-[380px]">
        <h1 className="text-2xl font-bold mb-4 text-center">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>
        {/* Form */}
        <form className="space-y-4 text-black">
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
          <input
            type="date"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>India</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          {/* Gender */}
          <div className="flex justify-between">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Female" className="mr-2" />
              Female
            </label>
          </div>
          {/* Checkbox */}
          <label className="flex items-start text-sm text-gray-600">
            <input type="checkbox" className="mr-2 mt-1" />
            Sign up for emails to get updates from Nike on products, offers, and
            your Member benefits.
          </label>
          <p className="text-xs text-gray-500">
            By creating an account, you agree to Nike’s{" "}
            <span className="underline">Privacy Policy</span> and{" "}
            <span className="underline">Terms of Use</span>.
          </p>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold"
          >
            JOIN US
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already a Member?{" "}
          <span className="text-blue-500 underline cursor-pointer"
          onClick={() => window.open("/signup", "_blank")}>Sign In</span>
        </p>
      </div>
    </div> 
    <Footer/>
    </>
  );
};

export default JoinUs;
