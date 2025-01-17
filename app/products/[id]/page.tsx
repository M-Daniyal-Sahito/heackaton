"use client";

import { notFound, useParams } from "next/navigation";
import allProducts from "@/app/data/products";
import Image from "next/image";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
export default function ProductPage() {
  const params = useParams(); // Use `useParams` to access the route parameters
  const productId = parseInt(params.id as string); // Convert id to a number
  const product = allProducts.find((p) => p.id === productId);

  // Handle case where product does not exist
  if (!product) {
    return notFound();
  }

  
  return (
    <>
    <Navbar />
    <div className="p-4  max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">{product.name}</h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain my-4 mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 m-4 md:mt-0">
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-gray-700 mt-4">Price: {product.price}</p>
          <p className="text-gray-700 mt-4 font-bold"> Category: {product.category}</p>
          <button className="text-white bg-black rounded-xl p-2 m-2">Addto Cart</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
