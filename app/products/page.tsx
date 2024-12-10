"use client";
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Image from "next/image";

export const allProducts = [
  { id: 1, name: "Running Shoes", price: "₹ 2,500", image: "/s1.png", category: "Shoes" },
  { id: 2, name: "Basketball Sneakers", price: "₹ 5,000", image: "/s2.png", category: "Shoes" },
  { id: 3, name: "Casual Sneakers", price: "₹ 3,500", image: "/s3.png", category: "Shoes" },
  { id: 4, name: "Formal Shoes", price: "₹ 6,000", image: "/s4.png", category: "Shoes" },
  { id: 5, name: "Hiking Boots", price: "₹ 4,500", image: "/s5.png", category: "Shoes" },
  { id: 6, name: "High Impact Bra", price: "₹ 1,200", image: "/bra1.png", category: "Sports Bras" },
  { id: 7, name: "Yoga Bra", price: "₹ 1,000", image: "/bra2.png", category: "Sports Bras" },
  { id: 8, name: "Running Bra", price: "₹ 1,400", image: "/bra3.png", category: "Sports Bras" },
  { id: 9, name: "Seamless Bra", price: "₹ 1,100", image: "/bra4.png", category: "Sports Bras" },
  { id: 10, name: "Padded Sports Bra", price: "₹ 1,500", image: "/bra5.png", category: "Sports Bras" },
  { id: 11, name: "Zip Hoodie", price: "₹ 1,800", image: "/hoodie1.png", category: "Hoodies & Sweatshirts" },
  { id: 12, name: "Pullover Hoodie", price: "₹ 1,500", image: "/hoodie2.png", category: "Hoodies & Sweatshirts" },
  { id: 13, name: "Crewneck Sweatshirt", price: "₹ 1,200", image: "/hoodie3.png", category: "Hoodies & Sweatshirts" },
  { id: 16, name: "Men's Joggers", price: "₹ 1,200", image: "/men1.png", category: "Men" },
  { id: 17, name: "Men's Jacket", price: "₹ 2,500", image: "/men2.png", category: "Men" },
  { id: 18, name: "Men's T-Shirt", price: "₹ 700", image: "/men3.png", category: "Men" },
  { id: 19, name: "Men's Shorts", price: "₹ 800", image: "/men4.png", category: "Men" },
  { id: 20, name: "Men's Hoodie", price: "₹ 1,800", image: "/men5.png", category: "Men" },
  { id: 21, name: "Women's Dress", price: "₹ 2,000", image: "/women1.png", category: "Women" },
  { id: 22, name: "Women's Top", price: "₹ 1,000", image: "/women2.png", category: "Women" },
  { id: 23, name: "Women's Jeans", price: "₹ 1,500", image: "/women3.png", category: "Women" },
  { id: 24, name: "Women's Jacket", price: "₹ 2,500", image: "/women4.png", category: "Women" },
  { id: 25, name: "Women's Scarf", price: "₹ 500", image: "/women5.png", category: "Women" },
  { id: 26, name: "Unisex Hoodie", price: "₹ 1,800", image: "/unisex1.png", category: "Unisex" },
  { id: 27, name: "Unisex T-Shirt", price: "₹ 800", image: "/unisex2.png", category: "Unisex" },
  { id: 28, name: "Unisex Cap", price: "₹ 500", image: "/unisex3.png", category: "Unisex" },
  { id: 29, name: "Unisex Jacket", price: "₹ 2,500", image: "/unisex4.png", category: "Unisex" },
  { id: 30, name: "Unisex Backpack", price: "₹ 3,000", image: "/unisex5.png", category: "Unisex" },
  { id: 31, name: "Boy's T-Shirt", price: "₹ 600", image: "/boys1.png", category: "Boys" },
  { id: 32, name: "Boy's Shorts", price: "₹ 800", image: "/boys2.png", category: "Boys" },
  { id: 33, name: "Boy's Sneakers", price: "₹ 1,500", image: "/boys3.png", category: "Boys" },
  { id: 34, name: "Boy's Jacket", price: "₹ 1,200", image: "/boys4.png", category: "Boys" },
  { id: 35, name: "Boy's Hoodie", price: "₹ 1,500", image: "/boys5.png", category: "Boys" },
  { id: 36, name: "Girl's Dress", price: "₹ 1,200", image: "/girls1.png", category: "Girls" },
  { id: 37, name: "Girl's Top", price: "₹ 800", image: "/girls2.png", category: "Girls" },
  { id: 38, name: "Girl's Shoes", price: "₹ 1,500", image: "/girls3.png", category: "Girls" },
  { id: 39, name: "Girl's Jacket", price: "₹ 1,800", image: "/girls4.png", category: "Girls" },
  { id: 40, name: "Girl's Backpack", price: "₹ 1,000", image: "/girls5.png", category: "Girls" },
];

export default function AllProduct() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    "All Products",
    "Shoes",
    "Sports Bras",
    "Hoodies & Sweatshirts",
    "Men",
    "Women",
    "Unisex",
    "Boys",
    "Girls",
  ];

  const filteredProducts = selectedCategory && selectedCategory !== "All Products"
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <>
      <Navbar />
      <div className="w-[1120px] mx-auto p-4 flex">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-20 md:relative md:translate-x-0 md:w-[250px]`}
        >
          <h2 className="font-bold text-lg p-4">Categories</h2>
          <ul className="space-y-2 px-4">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer ${selectedCategory === category ? "font-bold text-blue-500" : ""}`}
                onClick={() => {
                  setSelectedCategory(category === "All Products" ? null : category);
                  setIsSidebarOpen(false); // Close sidebar on selection
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Toggle Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-gray-800 bg-gray-100 rounded-md shadow"
            aria-label="Filter Categories"
          >
            ☰ Filter Categories
          </button>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-25 z-10 md:hidden"
          ></div>
        )}

        {/* Products Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-md p-4 flex flex-col items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="object-contain mb-4"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
