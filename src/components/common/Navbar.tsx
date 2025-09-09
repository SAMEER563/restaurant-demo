"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            🍴 Annapurna
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Menu", "About", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-gray-800 hover:text-red-600 transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Reserve Button */}
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full shadow-lg">
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-3 p-4">
            {["Home", "Menu", "About", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-red-600 transition"
              >
                {item}
              </Link>
            ))}
            <Button className="bg-red-600 hover:bg-red-700 mt-3 w-full rounded-full">
              Reserve Table
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
