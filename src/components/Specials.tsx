import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Specials() {
  const specials = [
    {
      name: "Paneer Butter Masala",
      img: "/img/paneer-butter-masala.jpg",
      desc: "Rich & creamy curry made with fresh paneer.",
      price: "₹220",
    },
    {
      name: "Biryani",
      img: "/img/biryani.jpg",
      desc: "Aromatic rice cooked with spices & herbs.",
      price: "₹200",
    },
    {
      name: "Gulab Jamun",
      img: "/img/gulab jamun.JPG",
      desc: "Melt-in-mouth sweet dumplings in sugar syrup.",
      price: "₹80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-12">
          Our Specials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specials.map((dish, index) => (
            <Card
              key={index}
              className="shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={dish.img}
                alt={dish.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-xl">{dish.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{dish.desc}</p>
                <p className="text-red-600 font-bold">{dish.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
