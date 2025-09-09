"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    { img: "/img/s1.jpg", text: "Experience Authentic Indian Flavors" },
    { img: "/img/s2.jpg", text: "Freshly Cooked, Just for You" },
    { img: "/img/s3.jpg", text: "Delicious Meals, Great Ambience" },
  ];

  return (
    <div className="w-full">
      {/* Image Slider */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[50vh] md:h-[70vh]">
                <Image
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="custom-prev hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 text-red-600 text-4xl font-bold cursor-pointer z-10">
            ‹
          </div>
          <div className="custom-next hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 text-red-600 text-4xl font-bold cursor-pointer z-10">
            ›
          </div>
        </Swiper>
      </div>

      {/* Text + Buttons BELOW Slider */}
      <div className="text-center mt-8 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Experience Authentic Indian Flavors
        </h1>
        <div className="flex flex-wrap gap-4 justify-center pb-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold shadow-lg text-base sm:text-lg">
            Order Now
          </button>
          <button className="bg-gray-100 text-red-600 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-lg text-base sm:text-lg">
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
}
