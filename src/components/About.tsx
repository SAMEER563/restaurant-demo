import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img/restaurant.jpg"
            alt="Restaurant Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 mb-6">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold">Spice Delight</span>, where tradition meets taste! 
            Our chefs bring you authentic Indian flavors with a modern touch, 
            crafted using fresh ingredients and aromatic spices.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether you’re craving a wholesome thali, spicy street food, 
            or indulgent desserts, we serve happiness on every plate. 
            Come, savor the experience!
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
