import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-14 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">🍴 Annapurna</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Experience authentic flavors crafted with passion, tradition, and love.  
              Where every dish tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-red-400 transition">Home</Link></li>
              <li><Link href="/menu" className="hover:text-red-400 transition">Menu</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-500 inline-block pb-1">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-red-400" /> 123 Food Street, New Delhi
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-400" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-400" /> info@annapurna.com
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-500 inline-block pb-1">
              Follow Us
            </h3>
            <div className="flex space-x-5">
              <Link href="#" className="hover:text-red-400 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Annapurna Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
