"use client";

import Link from "next/link";
import { useState } from "react";
import allProducts, { Product } from "@/app/data/products";
import Image from "next/image";

// Function to group products by category
const groupByCategory = (products: Product[]) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as { [key: string]: Product[] });
};

export default function AllProductsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const productsByCategory = groupByCategory(allProducts);

  // Function to handle the search and filter products
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filtered products based on search query
  const filteredProducts = Object.keys(productsByCategory).reduce(
    (acc, category) => {
      acc[category] = productsByCategory[category].filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
      return acc;
    },
    {} as { [key: string]: Product[] }
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Search bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search products..."
        className="mb-4 p-2 border rounded-md w-full"
      />

      {Object.keys(filteredProducts).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {filteredProducts[category].map((product: Product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="border rounded-md p-4 cursor-pointer hover:shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-fill w-full"
                  />
                  <h3 className="font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
