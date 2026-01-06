// import React from "react";
// import placeholder from "../assets/placeholder1.png";

// const team = [
//   {
//     name: "Rubeena Singh",
//     role: "Managing Director, IN",
//   },
//   {
//     name: "Venkata Gavaskar Dontha",
//     role: "Head – Digital Operations, IN",
//   },
//   {
//     name: "Karen Dmello",
//     role: "Assoc. Director of People, IN",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="w-full bg-[#f3f3f3] py-24 px-6">
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
//         {/* LEFT CONTENT */}
//         <div>
//           {/* TAG */}
//           <p className="text-sm font-bold tracking-widest text-[#dde82d] mb-4">
//             TEAM
//           </p>

//           {/* HEADING */}
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#26282c] leading-tight">
//             Experienced digital <br /> agency veterans.
//           </h2>

//           {/* ORANGE LINE */}
//           <div className="w-16 h-[3px] bg-[#dde82d] my-8" />

//           {/* DESCRIPTION */}
//           <p className="max-w-lg text-base leading-relaxed text-[#26282c]/85">
//             Our team sets us apart as an agency. Beyond their job titles, each
//             individual brings unique perspectives and passions that shape the
//             vision and values of NP Digital India.
//           </p>
//         </div>

//         {/* RIGHT TEAM GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
//           {team.map((member, index) => (
//             <div key={index} className="text-center">
//               {/* IMAGE */}
//               <div className="mb-5">
//                 <img
//                   src={placeholder}
//                   alt={member.name}
//                   className="mx-auto h-48 w-48 object-cover"
//                 />
//               </div>

//               {/* NAME */}
//               <h4 className="text-lg font-extrabold text-[#26282c]">
//                 {member.name}
//               </h4>

//               {/* ROLE */}
//               <p className="mt-1 text-sm font-medium text-[#26282c]/80">
//                 {member.role}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";

import team0 from "../assets/Team.jpeg";
import team1 from "../assets/Team1.jpeg";
import team2 from "../assets/Team2.jpeg";
import team3 from "../assets/Team3.jpeg";
import team4 from "../assets/Team4.jpeg";

// const images = [team0, team1, team2, team3, team4];
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

        {/* LEFT CONTENT */}
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
            Our team sets us apart as an agency. Beyond their job titles, each
            individual brings unique perspectives and passions that shape the
            vision and values of Agency By Nigel Quadros.
          </p>
        </div>

        {/* RIGHT IMAGE ROTATOR */}
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


