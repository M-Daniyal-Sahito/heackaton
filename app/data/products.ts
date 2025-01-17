export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string; // Corrected spelling
};
const allProducts = [
  { id: 1, name: "Running Shoes", price: "$ 2,500", image: "/s1.png", category: "Shoes", description: "🏃‍♂️ Elevate your runs with these lightweight, durable running shoes. Perfect for speed and comfort on every stride! 🌟" },
  { id: 2, name: "Basketball Sneakers", price: "$ 5,000", image: "/s2.png", category: "Shoes", description: "🏀 Take your game to the next level with these premium basketball sneakers. Slam dunk in style and performance! 💥" },
  { id: 3, name: "Casual Sneakers", price: "$ 3,500", image: "/s3.png", category: "Shoes", description: "👟 Casual and cool, these sneakers are your go-to for everyday adventures. Walk in style! 😎" },
  { id: 4, name: "Formal Shoes", price: "$ 6,000", image: "/s4.png", category: "Shoes", description: "👞 Add a touch of class with these sleek formal shoes. Perfect for meetings, events, and making an impression! 💼" },
  { id: 5, name: "Hiking Boots", price: "$ 4,500", image: "/s5.png", category: "Shoes", description: "🥾 Gear up for adventure with rugged hiking boots. Explore the great outdoors with confidence! 🏔️" },
  { id: 6, name: "High Impact Bra", price: "$ 1,200", image: "/bra1.png", category: "Sports Bras", description: "💪 Stay supported during your toughest workouts with this high-impact sports bra. Comfort meets style! ✨" },
  { id: 7, name: "Yoga Bra", price: "$ 1,000", image: "/bra2.png", category: "Sports Bras", description: "🧘‍♀️ Feel the flow with this soft and breathable yoga bra. Perfect for stretching and inner peace! 🌸" },
  { id: 8, name: "Running Bra", price: "$ 1,400", image: "/bra3.png", category: "Sports Bras", description: "🏃‍♀️ Run with confidence in this supportive and stylish running bra. Keep moving, keep shining! 🌟" },
  { id: 9, name: "Seamless Bra", price: "$ 1,100", image: "/bra4.png", category: "Sports Bras", description: "✨ Experience ultimate comfort with this seamless bra. Perfect for all-day wear and effortless style! 💖" },
  { id: 10, name: "Padded Sports Bra", price: "$ 1,500", image: "/bra5.png", category: "Sports Bras", description: "🎽 Enjoy maximum support with this padded sports bra. Stay confident, stay active! 💯" },
  { id: 11, name: "Zip Hoodie", price: "$ 1,800", image: "/hoodie1.png", category: "Hoodies & Sweatshirts", description: "🔥 Stay cozy and stylish with this zip hoodie. A perfect blend of comfort and fashion! 🌟" },
  { id: 12, name: "Pullover Hoodie", price: "$ 1,500", image: "/hoodie2.png", category: "Hoodies & Sweatshirts", description: "🧥 Embrace the chill with this pullover hoodie. Your winter essential for style and warmth! ❄️" },
  { id: 13, name: "Crewneck Sweatshirt", price: "$ 1,200", image: "/hoodie3.png", category: "Hoodies & Sweatshirts", description: "🌈 Keep it casual with this classic crewneck sweatshirt. A wardrobe must-have! 🕶️" },
  { id: 16, name: "Men's Joggers", price: "$ 1,200", image: "/men1.png", category: "Men", description: "👖 Upgrade your athleisure with these comfortable and stylish men's joggers. Perfect for workouts or lounging! 🏋️‍♂️" },
  { id: 17, name: "Men's Jacket", price: "$ 2,500", image: "/men2.png", category: "Men", description: "🧥 Stay sharp and warm with this sleek men's jacket. Perfect for chilly days and casual outings! ❄️" },
  { id: 18, name: "Men's T-Shirt", price: "$ 700", image: "/men3.png", category: "Men", description: "👕 Elevate your casual look with this versatile men's t-shirt. A timeless wardrobe essential! ✨" },
  { id: 19, name: "Men's Shorts", price: "$ 800", image: "/men4.png", category: "Men", description: "🩳 Keep it cool and comfortable with these lightweight men's shorts. Great for workouts and summers! ☀️" },
  { id: 20, name: "Men's Hoodie", price: "$ 1,800", image: "/men5.png", category: "Men", description: "🔥 Stay warm and stylish with this cozy men's hoodie. Perfect for everyday wear! 🌟" },
  { id: 21, name: "Women's Dress", price: "$ 2,000", image: "/women1.png", category: "Women", description: "👗 Step out in style with this chic women's dress. Perfect for parties and special occasions! 💃" },
  { id: 22, name: "Women's Top", price: "$ 1,000", image: "/women2.png", category: "Women", description: "🌸 Add charm to your wardrobe with this trendy women's top. Perfect for casual outings! 😍" },
  { id: 23, name: "Women's Jeans", price: "$ 1,500", image: "/women3.png", category: "Women", description: "👖 Stay comfy and stylish with these women's jeans. Perfect for all-day wear! 🕶️" },
  { id: 24, name: "Women's Jacket", price: "$ 2,500", image: "/women4.png", category: "Women", description: "🧥 Beat the chill with this elegant women's jacket. Stay warm and fashionable! ❄️" },
  { id: 25, name: "Women's Scarf", price: "$ 500", image: "/women5.png", category: "Women", description: "🧣 Add a touch of elegance with this stylish women's scarf. Perfect for any outfit! 🌟" },
  { id: 26, name: "Unisex Hoodie", price: "$ 1,800", image: "/unisex1.png", category: "Unisex", description: "🔥 Cozy and versatile, this unisex hoodie is perfect for everyone. A must-have for cooler days! 🌟" },
  { id: 27, name: "Unisex T-Shirt", price: "$ 800", image: "/unisex2.png", category: "Unisex", description: "👕 Simple and stylish, this unisex t-shirt fits every wardrobe. Comfort guaranteed! ✨" },
  { id: 28, name: "Unisex Cap", price: "$ 500", image: "/unisex3.png", category: "Unisex", description: "🧢 Top off your look with this trendy unisex cap. Perfect for sunny days and casual vibes! ☀️" },
  { id: 29, name: "Unisex Jacket", price: "$ 2,500", image: "/unisex4.png", category: "Unisex", description: "🧥 Stay warm in style with this unisex jacket. A perfect blend of fashion and function! ❄️" },
  { id: 30, name: "Unisex Backpack", price: "$ 3,000", image: "/unisex5.png", category: "Unisex", description: "🎒 Travel in style with this durable unisex backpack. Perfect for work, school, or adventures! 🌟" },
  { id: 31, name: "Boy's T-Shirt", price: "$ 600", image: "/boys1.png", category: "Boys", description: "👕 Cool and comfy, this boy's t-shirt is perfect for everyday fun! 😄" },
  { id: 32, name: "Boy's Shorts", price: "$ 800", image: "/boys2.png", category: "Boys", description: "🩳 Lightweight and stylish, these boy's shorts are great for playtime and summer days! ☀️" },
  { id: 33, name: "Boy's Sneakers", price: "$ 1,500", image: "/boys3.png", category: "Boys", description: "👟 Keep him active with these sporty boy's sneakers. Designed for comfort and durability! 🌟" },
  { id: 34, name: "Boy's Jacket", price: "$ 1,200", image: "/boys4.png", category: "Boys", description: "🧥 Stylish and warm, this boy's jacket is perfect for cooler days and adventures! ❄️" },
  { id: 35, name: "Boy's Hoodie", price: "$ 1,500", image: "/boys5.png", category: "Boys", description: "🔥 Keep him cozy with this trendy boy's hoodie. Perfect for school or casual outings! 🌟" },
  { id: 36, name: "Girl's Dress", price: "$ 1,200", image: "/girls1.png", category: "Girls", description: "👗 Adorable and chic, this girl's dress is perfect for parties and fun occasions! 💃" },
  { id: 37, name: "Girl's Top", price: "$ 800", image: "/girls2.png", category: "Girls", description: "🌸 Add charm to her wardrobe with this trendy girl's top. Perfect for playdates and outings! 😍" },
  { id: 38, name: "Girl's Shoes", price: "$ 1,500", image: "/girls3.png", category: "Girls", description: "👟 Stylish and comfy, these girl's shoes are perfect for every adventure. Let her shine! ✨" },
  { id: 39, name: "Girl's Jacket", price: "$ 1,800", image: "/girls4.png", category: "Girls", description: "🧥 Keep her warm and trendy with this chic girl's jacket. Perfect for cooler days! ❄️" },
  { id: 40, name: "Girl's Backpack", price: "$ 1,000", image: "/girls5.png", category: "Girls", description: "🎒 Cute and functional, this girl's backpack is perfect for school and outings! 🌟" },
];


export default allProducts