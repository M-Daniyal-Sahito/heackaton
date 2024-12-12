import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <>
      <div className="w-[1120px] m-auto mt-4 px-4 sm:px-6 sm:m-auot lg:px-8">
        {/* Main Image */}
        <div className="relative mb-8">
          <div className="text-center mb-4">
            <h3 className="text-4xl font-bold">HELLO NIKE APP</h3>
            <p className="text-4xl">
              Download the app to access everything Nike.{" "}
              <span className="underline">Get Your Great</span>
            </p>
          </div>
          <Image
            className="w-[1120px] h-[700px] sm:h-[600px] lg:h-[700px] object-cover rounded-xl"
            src="/home.png"
            alt="Nike Air Max"
            width={1920} // Specify width for optimization
            height={700} // Specify height for optimization
          />
        </div>

        {/* Image Text Section */}
        <div className="text-center mb-12 m-auto">
          <p className="text-xl font-semibold">First Look</p>
          <h1 className="font-extrabold text-4xl sm:text-3xl lg:text-4xl mt-4 mb-6">Nike Air Max Pulse</h1>
          <p className="text-3xl sm:text-2xl  leading-relaxed">
            Extreme comfort. Hyper durable. Max Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex flex-wrap  justify-center gap-4 mt-6">
            <button className="bg-black text-2xl text-white px-6 py-2 rounded-full">
              Notify me
            </button>
            <button className="bg-black text-white text-2xl px-6 py-2 rounded-full">
              Shop Air max
            </button>
          </div>
        </div>

        {/* Best of Air Max */}
        <div className="flex flex-wrap justify-between items-center text-4xl sm:text-3xl font-bold py-4">
          <p>Best of Air Max</p>
          <p className="flex items-center gap-3">
            Shop <Image className="w-10 cursor-pointer" src="/arrow.png" alt="arrow" width={50} height={50} />
          </p>
        </div>

        {/* Product Images Section */}
        <div className="w-[1120px] grid sm:grid-cols-2 lg:grid-cols-3  ">
          {["h2.png", "h3.png", "h4.png"].map((img, index) => (
            <div key={index} className="w-[1120px] m-auto sm:w-full">
              <Image className="w-full h-auto rounded-lg" src={`/${img}`} alt="Nike Air Max Pulse" width={370} height={370} />
              <div className="mt-4 text-center text-4xl">
                <p className="font-bold">Nike Air Max Pulse</p>
                <p className="text-gray-700 text-3xl">Men&apos;s Shoes</p>
                <p className="font-bold text-gray-900 text-3xl mt-2">Price: $300</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-white text-black text-4xl font-bold py-4 text-center">
          Featured
        </div>
        <div className="relative mb-12">
          <Image
            src="/h5.jpg"
            alt="Runner"
            className="w-[1120px] h-[500px] sm:h-[400px] sm:w-full object-cover"
            width={1920}
            height={500}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold sm:text-2xl mb-4">STEP INTO WHAT FEELS GOOD</h2>
            <p className="text-3xl font-bold mb-6">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="bg-black text-3xl text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition">
              Find Your Shoe
            </button>
          </div>
        </div>

        {/* Gear Up Section */}
        <div className="my-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Gear Up</h2>
          <div className="w-[1120px] grid sm:grid-cols-2 lg:grid-cols-3 ">
            {["h11.png", "h12.png", "h14.png", "h13.png"].map((img, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <Image
                  src={`/${img}`}
                  alt={`Nike Gear ${index}`}
                  className="w-[1120px] sm:w-full h-auto object-cover rounded-lg"
                  width={250}
                  height={250}
                />
                <h3 className="mt-4 text-3xl font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                <p className="text-gray-600 text-3xl">Men&apos;s Short-Sleeve Running Top</p>
                <p className="mt-2 text-3xl font-bold">₹ 3,895</p>
              </div>
            ))}
          </div>
        </div>

        {/* Don't Miss Section */}
        <div className="bg-white py-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Don&apos;t Miss</h2>
            <Image
              src="/h10.png"
              alt="Full model"
              className="w-[1120px] sm:w-full h-auto object-cover mt-6"
              width={1920}
              height={500}
            />
            <div className="text-center mt-6">
              <h3 className="text-4xl font-bold text-gray-900">Flight Essentials</h3>
              <p className="mt-2 text-gray-600 text-4xl sm:text-2xl">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
              <button className="mt-4 px-6 py-2 bg-black text-white text-3xl rounded-lg">
                Shop
              </button>
            </div>
          </div>
        </div>

        {/* The Essentials Section */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">The Essentials</h2>
            <p className="text-gray-500 text-3xl">Your built-to-last, all-week wears — but with style only Jordan Brand can deliver.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["h9.png", "h8.png", "h7.png"].map((img, index) => (
              <div key={index} className="relative">
                <Image
                  src={`/${img}`}
                  alt="Product"
                  className="w-full h-auto object-cover rounded-lg"
                  width={250}
                  height={250}
                />
                <div className="absolute bottom-3 left-3 bg-white text-black py-1 px-3 text-3xl rounded-full">
                  {index === 0 ? "Men&apos;s" : index === 1 ? "Women&apos;s" : "Kids&apos;"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Icons & Categories */}
        <div className="bg-white py-10">
          <div className="grid grid-cols-3 sm:grid-cols-3  w-[1120px] h-auto text-black">
            <div>
              <h3 className="font-bold text-4xl mb-4">Icons</h3>
              <ul className="text-3xl font-bold">
                <li className="mb-2">Air Force 1</li>
                <li className="mb-2">Huarache</li>
                <li className="mb-2">Air Max 90</li>
                <li className="mb-2">Air Max 95</li>
              </ul>
            </div>

            <div className="text-black ">
              <h3 className="font-bold text-4xl mb-4">Shoes</h3>
              <ul className="text-black text-3xl font-bold">
                <li className="mb-2">All Shoes</li>
                <li className="mb-2">Custom Shoes</li>
                <li className="mb-2">Jordan Shoes</li>
                <li className="mb-2">Running Shoes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-4xl mb-4">Clothing</h3>
              <ul className="text-black text-3xl font-bold">
                <li className="mb-2">All Clothing</li>
                <li className="mb-2">Modest Wear</li>
                <li className="mb-2">Hoodies & Pullovers</li>
                <li className="mb-2">Activewear</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-4xl mb-4">Accessories</h3>
              <ul className="text-black text-3xl font-bold">
                <li className="mb-2">Socks & Tights</li>
                <li className="mb-2">Bags</li>
                <li className="mb-2">Backpacks</li>
                <li className="mb-2">Hats</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Content;
