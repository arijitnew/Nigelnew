import React from "react";

import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";
import seventh from "../assets/seventh.png";

const cards = [
  {
    title: "Creative",
    icon: seventh,
    items: [
      "Performance Creative",
      "Branding",
      "Content Production",
      "Website Design",
      "Graphic & Motion Design",
      "Audio Production",
    ],
  },  {
    title: "Paid Media",
    icon: sixth,
    items: [
      "Media Strategy & Planning",
      "Paid Search",
      "Paid Social",
      "Programmatic & Display",
      "Marketplaces",
      "Streaming",
    ],
  },
  {
    title: "Data & Analytics",
    icon: fourth,
    items: [
      "Data Analytics & Insights",
      "Dashboard Development",
      "Conversion Rate Optimization",
      "User Experience",
      "Front End Development",
      "Ad Operations",
    ],
  },
  {
    title: "Earned Media",
    icon: fifth,
    items: [
      "AI Search Optimization",
      "Search Engine Optimization",
      "App Store Optimization",
      "Content Marketing",
      "Digital PR",
      "Influencer Marketing",
      "Organic Social Media",
      "Email Marketing",
    ],
  },


];

export default function SolutionsCards() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] p-8 flex flex-col items-center text-center"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-16 h-16 mb-6"
            />

            <h3 className="text-xl font-extrabold text-[#26282c] mb-6">
              {card.title}
            </h3>

            <ul className="space-y-3 text-sm text-[#333] text-left w-full">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#dde82d] mt-[2px]">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}
