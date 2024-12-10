import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-4">
        {/* Main Image */}
        <div className="relative mb-8">
          <div className="text-center mb-4">
            <h3 className="text-sm font-bold">HELLO NIKE APP</h3>
            <p className="text-sm">
              Download the app to access everything Nike.{" "}
              <span className="underline">Get Your Great</span>
            </p>
          </div>
          <Image
            className="w-full h-[700px] object-cover rounded-xl"
            src="/home.png"
            alt="Nike Air Max"
            width={1920} // Specify width for optimization
            height={700} // Specify height for optimization
          />
        </div>

        {/* Image Text Section */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold">First Look</p>
          <h1 className="font-extrabold text-4xl mt-4 mb-6">Nike Air Max Pulse</h1>
          <p className="text-base leading-relaxed">
            Extreme comfort. Hyper durable. Max Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Notify me
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Shop Air max
            </button>
          </div>
        </div>

        {/* Best of Air Max */}
        <div className="flex justify-between items-center text-lg font-bold py-4">
          <p>Best of Air Max</p>
          <p className="flex items-center gap-3">
            Shop <Image className="w-5 cursor-pointer" src="/arrow.png" alt="arrow" width={20} height={20} />
          </p>
        </div>

        {/* Product Images Section */}
        <div className="flex justify-between gap-4 mb-12">
          {["h2.png", "h3.png", "h4.png"].map((img, index) => (
            <div key={index} className="w-full max-w-[370px]">
              <Image className="w-full h-auto rounded-lg" src={`/${img}`} alt="Nike Air Max Pulse" width={370} height={370} />
              <div className="mt-4 text-center">
                <p className="font-bold">Nike Air Max Pulse</p>
                <p className="text-gray-700 text-sm">Men's Shoes</p>
                <p className="font-bold text-gray-900 text-lg mt-2">Price: $300</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-white text-black text-2xl font-bold py-4 text-center">
          Featured
        </div>
        <div className="relative mb-12">
          <Image
            src="/h5.jpg"
            alt="Runner"
            className="w-full h-[500px] object-cover"
            width={1920}
            height={500}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">STEP INTO WHAT FEELS GOOD</h2>
            <p className="text-lg mb-6">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition">
              Find Your Shoe
            </button>
          </div>
        </div>

        {/* Gear Up Section */}
        <div className="my-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Gear Up</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["h11.png", "h12.png", "h14.png", "h13.png"].map((img, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <Image
                  src={`/${img}`}
                  alt={`Nike Gear ${index}`}
                  className="w-full h-[250px] object-cover rounded-lg"
                  width={250}
                  height={250}
                />
                <h3 className="mt-4 text-lg font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-gray-600 text-sm">Men's Short-Sleeve Running Top</p>
                <p className="mt-2 text-xl font-bold">₹ 3,895</p>
              </div>
            ))}
          </div>
        </div>

        {/* Don't Miss Section */}
        <div className="bg-white py-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Don't Miss</h2>
            <Image
              src="/h10.png"
              alt="Full model"
              className="w-full h-[500px] object-cover mt-6"
              width={1920}
              height={500}
            />
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold text-gray-900">Flight Essentials</h3>
              <p className="mt-2 text-gray-600">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
              <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
                Shop
              </button>
            </div>
          </div>
        </div>

        {/* The Essentials Section */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">The Essentials</h2>
            <p className="text-gray-500">Your built-to-last, all-week wears — but with style only Jordan Brand can deliver.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["h9.png", "h8.png", "h7.png"].map((img, index) => (
              <div key={index} className="relative">
                <Image
                  src={`/${img}`}
                  alt="Product"
                  className="w-full h-[250px] object-cover rounded-lg"
                  width={250}
                  height={250}
                />
                <div className="absolute bottom-3 left-3 bg-white text-black py-1 px-3 text-sm rounded-full">
                  {index === 0 ? "Men's" : index === 1 ? "Women's" : "Kids'"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Icons & Categories */}
        <div className="bg-white py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-700">
            <div>
              <h3 className="font-bold text-lg mb-4">Icons</h3>
              <ul>
                <li className="mb-2">Air Force 1</li>
                <li className="mb-2">Huarache</li>
                <li className="mb-2">Air Max 90</li>
                <li className="mb-2">Air Max 95</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Shoes</h3>
              <ul>
                <li className="mb-2">All Shoes</li>
                <li className="mb-2">Custom Shoes</li>
                <li className="mb-2">Jordan Shoes</li>
                <li className="mb-2">Running Shoes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Clothing</h3>
              <ul>
                <li className="mb-2">All Clothing</li>
                <li className="mb-2">Modest Wear</li>
                <li className="mb-2">Hoodies & Pullovers</li>
                <li className="mb-2">Shirts & Tops</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kids'</h3>
              <ul>
                <li className="mb-2">Infant & Toddler Shoes</li>
                <li className="mb-2">Kids' Shoes</li>
                <li className="mb-2">Kids' Jordan Shoes</li>
                <li className="mb-2">Kids' Basketball Shoes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
