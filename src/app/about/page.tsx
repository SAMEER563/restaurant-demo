"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="px-6 md:px-20 py-24 container mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Spice Villa</span>, where
          authentic Indian flavors meet modern dining. Our passion is serving
          delicious, freshly prepared meals that bring people together.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Spice Villa was born from a dream to bring the
            taste of traditional Indian cuisine with a modern twist. Every dish
            we serve is crafted with love, care, and the freshest ingredients.
          </p>
          <p className="text-gray-600">
            From our signature curries to freshly baked breads, we strive to
            give you an unforgettable dining experience that feels like home.
          </p>
        </div>
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/img/restaurant.jpg"
            alt="Our Restaurant"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              Authentic Recipes
            </h3>
            <p className="text-gray-600">
              Our chefs bring traditional flavors straight from India to your
              plate.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600">
              We source only the freshest ingredients to ensure every dish is
              perfect.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              Cozy Ambience
            </h3>
            <p className="text-gray-600">
              A perfect place for family dinners, dates, or casual hangouts.
            </p>
          </div>
        </div>
      </section>

   
    </div>
  );
}
