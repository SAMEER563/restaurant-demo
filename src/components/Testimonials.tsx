import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const reviews = [
    {
      name: "Amit Sharma",
      text: "Best Indian food in town! The biryani was just perfect and the ambience felt like home.",
    },
    {
      name: "Priya Patel",
      text: "Absolutely loved the paneer butter masala. Rich flavors and great service!",
    },
    {
      name: "Rahul Verma",
      text: "A must-visit! The thali was wholesome, and the staff was really friendly.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent>
                <p className="text-gray-700 italic mb-4">&quot;{review.text}&quot;</p>
                <p className="font-semibold text-red-600">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
