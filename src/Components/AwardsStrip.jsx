import React from "react";

const awards = [
  { title: "AdAge", subtitle: "Best Workplace" },
  { title: "PMW", subtitle: "Agency of the Year" },
  { title: "Google", subtitle: "Premier Partner" },
  { title: "campaign", subtitle: "Global Agency of the Year" },
  { title: "Inc.", subtitle: "Best Place to Work" },
];

export default function AwardsStrip() {
  return (
    <section
      className="
        relative
        w-full
        pt-24
        pb-10
        bg-[#1c1c1c]/60
        backdrop-blur-sm
      "
    >
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADING */}
        <h3 className="text-center text-white text-base md:text-lg font-semibold tracking-wide mb-10">
          We’re A Recognized Leader And Driver Of Innovation In Performance Marketing
        </h3>

        {/* AWARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="
                bg-white/10
                border border-white/15
                py-10
                flex flex-col
                items-center
                justify-center
                text-center
              "
            >
              <div className="text-white text-2xl font-bold mb-2">
                {award.title}
              </div>
              <div className="text-white/70 text-xs">
                {award.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <p className="text-center text-white/60 text-sm md:text-base mt-6">
          We have more than 50+ award and performance honored mentions.
        </p>

      </div>
    </section>
  );
}


