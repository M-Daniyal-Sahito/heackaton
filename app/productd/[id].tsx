// "use client";

// import { useCart } from "../context/CartContext";
// import { useRouter } from "next/router";
// import  {allProducts} from "@/app/products/page"
// export default function ProductDetail({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const product = allProducts.find((item: { id: number; }) => item.id === parseInt(id));
//   const { addToCart } = useCart();
//   const router = useRouter();

//   if (!product) return <p>Product not found!</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="h-64 object-contain" />
//       <p className="text-gray-700">{product.price}</p>
//       <button
//         onClick={() => {
//           addToCart(product);
//           alert(`${product.name} added to cart!`);
//           router.push("/cart");
//         }}
//         className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }
