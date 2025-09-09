import Image from "next/image";
import Link from "next/link";

const dishes = [
  {
    name: "Masala Dosa",
    img: "/img/Masala-Dosa.jpg",
    price: "₹120",
  },
  {
    name: "Paneer Butter Masala",
    img: "/img/paneer-butter-masala.jpg",
    price: "₹180",
  },
  {
    name: "Dal Makhani",
    img: "/img/dal.jpg",
    price: "₹160",
  },
  {
    name: "Biryani",
    img: "/img/biryani.jpg",
    price: "₹200",
  },
  {
    name: "Butter Naan",
    img: "/img/butter.jpg",
    price: "₹40",
  },
  {
    name: "Gulab Jamun",
    img: "/img/gulab jamun.JPG",
    price: "₹80",
  },
];

export default function FeaturedMenu() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          🍴 Our Special Dishes
        </h2>

        {/* Grid of dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={dish.img}
                alt={dish.name}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {dish.name}
                </h3>
                <p className="text-red-600 font-bold mt-2">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/menu"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
