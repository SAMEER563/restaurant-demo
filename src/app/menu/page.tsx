"use client";
import { useState } from "react";
import Image from "next/image";

// Define type for menu structure
type MenuCategory = {
  name: string;
  price: string;
  img: string;
  desc: string;
};

const menu: Record<string, MenuCategory[]> = {
  Starters: [
    { name: "Paneer Tikka", price: "₹150", img: "/img/paneer-tikka.jpg", desc: "Grilled paneer marinated with Indian spices." },
    { name: "Veg Manchurian", price: "₹130", img: "/img/manchurian.jpg", desc: "Crispy veg balls in tangy sauce." },
    { name: "Spring Rolls", price: "₹120", img: "/img/spring-roll.jpg", desc: "Golden fried rolls stuffed with veggies." },
  ],
  "Main Course": [
    { name: "Paneer Butter Masala", price: "₹180", img: "/img/paneer-butter-masala.jpg", desc: "Creamy tomato curry with soft paneer cubes." },
    { name: "Dal Makhani", price: "₹160", img: "/img/dal.jpg", desc: "Slow cooked black lentils with butter & cream." },
    { name: "Chicken Biryani", price: "₹220", img: "/img/biryani.jpg", desc: "Aromatic rice with spices and tender chicken." },
  ],
  Breads: [
    { name: "Butter Naan", price: "₹40", img: "/img/butter.jpg", desc: "Soft & fluffy naan with butter topping." },
    { name: "Tandoori Roti", price: "₹25", img: "/img/roti.jpg", desc: "Crispy roti baked in clay oven." },
    { name: "Garlic Naan", price: "₹50", img: "/img/garlic-naan.jpg", desc: "Naan infused with garlic & butter." },
  ],
  Desserts: [
    { name: "Gulab Jamun", price: "₹80", img: "/img/gulab jamun.JPG", desc: "Soft milk dumplings soaked in sugar syrup." },
    { name: "Rasmalai", price: "₹100", img: "/img/rasmalai.jpg", desc: "Cottage cheese patties in saffron milk." },
    { name: "Kesar Kulfi", price: "₹90", img: "/img/kulfi.jpg", desc: "Traditional frozen dessert with saffron flavor." },
  ],
  Beverages: [
    { name: "Masala Chai", price: "₹40", img: "/img/chai.jpg", desc: "Spiced Indian tea with milk." },
    { name: "Lassi", price: "₹60", img: "/img/lassi.jpg", desc: "Refreshing yogurt-based drink." },
    { name: "Cold Coffee", price: "₹80", img: "/img/coffee.jpg", desc: "Chilled creamy coffee delight." },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [search, setSearch] = useState("");

  const filteredItems = menu[activeCategory].filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-red-600 mb-12">
        MENU
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
          <div className="flex md:flex-col gap-3 flex-wrap">
            {Object.keys(menu).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-colors w-full ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow"
                    : "bg-gray-100 hover:bg-red-100 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* Menu Items */}
        <main className="flex-1">
          {/* Search Bar */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{activeCategory}</h2>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    <p className="text-red-600 font-bold mt-3">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-10">No items found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
