export default function Reservation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">
          Book a Table
        </h2>
        <p className="text-gray-600 mb-12">
          Reserve your spot and enjoy a delightful dining experience with us.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="time"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Special Request"
            className="border border-gray-300 rounded-lg p-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg md:col-span-2"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
}
