"use client";

export default function ContactPage() {
  return (
    <div className="px-6 md:px-20 py-24 container mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you’re booking a table, placing an order, 
          or have a question, our team is here to help.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-4">
            Visit us at our restaurant or reach out through the details below.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-red-600">📍 Address:</span>{" "}
              123 Spice Street, Lucknow, India
            </li>
            <li>
              <span className="font-semibold text-red-600">📞 Phone:</span>{" "}
              +91 98765 43210
            </li>
            <li>
              <span className="font-semibold text-red-600">✉️ Email:</span>{" "}
              contact@spicevilla.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.934178862284!2d80.94616687456926!3d26.846693976681468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1ab7e6b6ef%3A0xa48e7e30dbf061c2!2sHazratganj%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1692876934567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
