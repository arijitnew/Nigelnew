import React from "react";

// IMPORT IMAGES
import first from "../assets/First.png";
import second from "../assets/Second.png";
import third from "../assets/Third.png";

const cards = [
  {
    title: "NP Digital",
    description:
      "Our agency for large, enterprise companies looking for next-level digital support.",
    image: first,
  },
  {
    title: "Ubersuggest / ATP",
    description:
      "Our proprietary technology that helps drive innovation and efficiencies for our team.",
    image: second,
  },
  {
    title: "NeilPatel.com",
    description:
      "Our thought-leadership platform delivers training, best practices, and content in 5 different languages.",
    image: third,
  },
];

export default function ProductCards() {
  return (
    <section className="w-full bg-[#f3f3f3] py-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white px-12 py-10 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="h-32 object-contain"
              />
            </div>

            <h3 className="text-2xl font-extrabold text-[#26282c] mb-4">
              {card.title}
            </h3>

            <p className="text-sm text-[#26282c]/90 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


