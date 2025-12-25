import React from "react";
import placeholder from "../assets/placeholder1.png";

const awards = [
  {
    year: "2025",
    text: "Ad Age names NP Digital a Best Places to Work.",
  },
  {
    year: "2024",
    text: "NP Digital awarded for boosting Footfall.",
  },
  {
    year: "2024",
    text: "NP Digital takes home top honors in the Media Unification category.",
  },
  {
    year: "2024",
    text: "NP Digital takes home award for Best PPC Campaign.",
  },
];

export default function RecognitionSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-24 px-6">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* TAG */}
        <p className="text-sm font-semibold tracking-widest text-[#dde82d] mb-6">
          RECOGNITION
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#26282c] leading-tight max-w-[900px] mx-auto">
          We’re a recognized leader and driver of innovation in performance marketing.
        </h2>

        {/* DIVIDER */}
        <div className="w-16 h-[3px] bg-[#dde82d] mx-auto mt-8 mb-16" />

        {/* AWARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* IMAGE */}
              <img
                src={placeholder}
                alt="Award placeholder"
                className="h-[120px] object-contain mb-6"
              />

              {/* TEXT */}
              <p className="text-sm md:text-base text-[#26282c] leading-relaxed">
                <span className="font-semibold">{award.year}:</span>{" "}
                {award.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
