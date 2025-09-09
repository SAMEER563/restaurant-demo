"use client";
import About from "@/components/About";
import FeaturedMenu from "@/components/FeaturedMenu";
import Hero from "@/components/Hero";
import Reservation from "@/components/Reservation";
import Specials from "@/components/Specials";
import Testimonials from "@/components/Testimonials";


export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <Specials />
      <Testimonials />
      <FeaturedMenu />
      <Reservation />
      <main className="p-8 text-center"></main>
    </div>
  );
}
