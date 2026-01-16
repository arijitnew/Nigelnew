
import React, { useEffect, useState } from "react";

import team0 from "../assets/Team.jpeg";
import team1 from "../assets/Team1.jpeg";
import team2 from "../assets/Team2.jpeg";
import team3 from "../assets/Team3.jpeg";
import team4 from "../assets/Team4.jpeg";


const images = [team0, team1, team2, team4];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f3f3f3] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 items-center">

  
        <div className="text-left">
          <p className="text-xs font-bold tracking-widest text-[#e10051] mb-6">
            TEAM
          </p>

          <h2 className="text-[44px] md:text-[56px] font-extrabold text-[#111111] leading-[1.05] mb-8">
            Experienced digital <br />
            agency veterans.
          </h2>

          <div className="w-14 h-[3px] bg-[#e10051] mb-8" />
  
          <p className="max-w-[520px] text-base md:text-lg leading-relaxed text-[#333333]">
  
          Beyond titles and roles, every member of Agency by Nigel Quadros brings deep expertise, fresh perspectives, and an obsession with performance</p>
          <br/>
          <p className="max-w-[520px] text-base md:text-lg leading-relaxed text-[#333333]"> Together as growth partners, we shape the vision, culture, and standards that define how we work and why clients stay with us.
          </p>
        </div>

       
        <div className="relative w-full max-w-[520px] h-[360px] md:h-[420px] justify-self-end overflow-hidden shadow-lg rounded-md">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Team ${index}`}
              className={`
                absolute inset-0
                w-full h-full
                object-cover object-center
                transition-all duration-1000 ease-in-out
                rounded-md
                ${
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


