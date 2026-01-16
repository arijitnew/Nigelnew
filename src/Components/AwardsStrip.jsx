import React from "react";

const awards = [
  { title: "AdAge", subtitle: "Best Workplace" },
  { title: "PMW", subtitle: "Agency of the Year" },
  { title: "Google", subtitle: "Premier Search Partner" },
  
  { title: "IncredibleGoa", subtitle: "Agency of the Year" },
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

      
        <h3 className="text-center text-white text-base md:text-lg  tracking-wide mb-10">
        A recognized impact leader <strong>driving innovation in advertising and marketing</strong> across the MENA, APAC, EMEA, & LATAM regions
        </h3>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

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
                rounded-[4px]
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


        <p className="text-center text-white/60 text-sm md:text-base mt-6">
        With 15+ awards and performance recognitions, our work consistently sets benchmarks across industries.

        </p>

      </div>
    </section>
  );
}

