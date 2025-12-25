// import React, { useState } from "react";

// /* ================= LOGOS ================= */
// import denzour from "../assets/denzour.webp";
// import stanley from "../assets/stanley.webp";
// import amway from "../assets/amway.webp";
// import bioderma from "../assets/bioderma.webp";
// import intuit from "../assets/intuit.webp";
// import qualys from "../assets/qualys.webp";
// import indianExpress from "../assets/indian-express.webp";
// import tataFiber from "../assets/tata.webp";
// import adani from "../assets/adani.webp";
// import musigma from "../assets/mu.webp";
// import emami from "../assets/emami.webp";
// import vodien from "../assets/vodian.webp";

// /* ================= DATA ================= */
// const testimonials = [
//   {
//     quote:
//       "The Neil Patel team is full of enthusiasm and very receptive to suggestions and inputs and encourages us to contribute to make a useful team outcome.",
//     author: "GWD Kids",
//     rating: 5,
//   },
//   {
//     quote:
//       "Their strategic approach and transparent communication helped us scale faster than expected. A truly reliable partner.",
//     author: "TechNova",
//     rating: 5,
//   },
//   {
//     quote:
//       "From planning to execution, the experience was seamless. The results spoke for themselves.",
//     author: "HealthCorp",
//     rating: 5,
//   },
// ];

// const logos = [
//   denzour,
//   stanley,
//   amway,
//   bioderma,
//   intuit,
//   qualys,
//   indianExpress,
//   tataFiber,
//   adani,
//   musigma,
//   emami,
//   vodien,
// ];

// /* ================= COMPONENT ================= */
// export default function TestimonialsDark() {
//   const [active, setActive] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const changeSlide = (next) => {
//     if (next === active) return;

//     setVisible(false);

//     setTimeout(() => {
//       setActive(next);
//       setTimeout(() => setVisible(true), 200);
//     }, 500);
//   };

//   return (
//     <section className="relative w-full bg-[#0e0e0e] overflow-hidden">
//       <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 text-center text-white">

//         {/* TAG */}
//         <p className="text-sm font-semibold tracking-widest text-orange-500 mb-6">
//           TESTIMONIALS
//         </p>

//         {/* HEADING */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
//           Our clients’ success is our always-on <br className="hidden md:block" />
//           ad.
//         </h2>

//         {/* DIVIDER */}
//         <div className="w-16 h-[3px] bg-orange-500 mx-auto mt-8 mb-10" />

//         {/* ⭐ STARS + ARROWS */}
//         <div className="relative group flex items-center justify-center gap-6 mb-10">

//           {/* LEFT ARROW */}
//           <button
//             onClick={() =>
//               changeSlide(
//                 (active - 1 + testimonials.length) % testimonials.length
//               )
//             }
//             className="
//               absolute left-0
//               opacity-0 group-hover:opacity-100
//               transition-opacity duration-300
//               text-white/60 hover:text-white
//               text-[56px] leading-none
//             "
//           >
//             ‹
//           </button>

//           {/* STARS (ANIMATED) */}
//           <div
//             className={`
//               flex gap-2 px-16
//               transition-all duration-[600ms]
//               ease-[cubic-bezier(0.22,1,0.36,1)]
//               ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
//             `}
//           >
//             {Array.from({ length: testimonials[active].rating }).map((_, i) => (
//               <span
//                 key={i}
//                 className="text-orange-500 text-[32px] leading-none"
//               >
//                 ★
//               </span>
//             ))}
//           </div>

//           {/* RIGHT ARROW */}
//           <button
//             onClick={() =>
//               changeSlide((active + 1) % testimonials.length)
//             }
//             className="
//               absolute right-0
//               opacity-0 group-hover:opacity-100
//               transition-opacity duration-300
//               text-white/60 hover:text-white
//               text-[56px] leading-none
//             "
//           >
//             ›
//           </button>
//         </div>

//         {/* TESTIMONIAL TEXT */}
//         <div
//           className={`
//             max-w-[820px] mx-auto mb-24
//             transition-all duration-[900ms]
//             ease-[cubic-bezier(0.22,1,0.36,1)]
//             ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//           `}
//         >
//           <p className="text-lg md:text-xl text-white/90 leading-relaxed">
//             “{testimonials[active].quote}”
//           </p>

//           <p className="mt-8 text-orange-500 font-semibold tracking-wide">
//             {testimonials[active].author}
//           </p>
//         </div>

//         {/* CLIENT LOGOS GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-14 gap-y-16 items-center opacity-80">
//           {logos.map((logo, index) => (
//             <div key={index} className="flex justify-center items-center">
//               <img
//                 src={logo}
//                 alt="Client logo"
//                 className="
//                   max-h-10 md:max-h-12
//                   object-contain
//                   grayscale
//                   hover:grayscale-0
//                   transition
//                 "
//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

/* ================= LOGOS ================= */
import denzour from "../assets/denzour.webp";
import stanley from "../assets/stanley.webp";
import amway from "../assets/amway.webp";
import bioderma from "../assets/bioderma.webp";
import intuit from "../assets/intuit.webp";
import qualys from "../assets/qualys.webp";
import indianExpress from "../assets/indian-express.webp";
import tataFiber from "../assets/tata.webp";
import adani from "../assets/adani.webp";
import musigma from "../assets/mu.webp";
import emami from "../assets/emami.webp";
import vodien from "../assets/vodian.webp";

/* ================= DATA ================= */
const testimonials = [
  {
    quote:
      "The Neil Patel team is full of enthusiasm and very receptive to suggestions and inputs and encourages us to contribute to make a useful team outcome.",
    author: "GWD Kids",
    rating: 5,
  },
  {
    quote:
      "Their strategic approach and transparent communication helped us scale faster than expected. A truly reliable partner.",
    author: "TechNova",
    rating: 5,
  },
  {
    quote:
      "From planning to execution, the experience was seamless. The results spoke for themselves.",
    author: "HealthCorp",
    rating: 5,
  },
];

const logos = [
  denzour,
  stanley,
  amway,
  bioderma,
  intuit,
  qualys,
  indianExpress,
  tataFiber,
  adani,
  musigma,
  emami,
  vodien,
];

/* ================= COMPONENT ================= */
export default function TestimonialsDark() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeSlide = (next) => {
    if (next === active) return;

    setVisible(false);
    setTimeout(() => {
      setActive(next);
      setTimeout(() => setVisible(true), 200);
    }, 500);
  };

  return (
    <section className="relative w-full bg-[#0e0e0e] overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 text-center text-white">

        {/* TAG */}
        <p className="text-sm font-semibold tracking-widest text-[#dde82d] mb-6">
          TESTIMONIALS
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Our clients’ success is our always-on <br className="hidden md:block" />
          ad.
        </h2>

        {/* DIVIDER */}
        <div className="w-16 h-[3px] bg-[#dde82d] mx-auto mt-8 mb-10" />

        {/* ⭐ STARS + ARROWS */}
        <div className="relative group flex items-center justify-center gap-6 mb-10">
          <button
            onClick={() =>
              changeSlide(
                (active - 1 + testimonials.length) % testimonials.length
              )
            }
            className="
              absolute left-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              text-white/60 hover:text-white
              text-[56px] leading-none
            "
          >
            ‹
          </button>

          {/* STARS */}
          <div
            className={`
              flex gap-2 px-16
              transition-all duration-[600ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            `}
          >
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <span
                key={i}
                className="text-[#dde82d] text-[32px] leading-none"
              >
                ★
              </span>
            ))}
          </div>

          <button
            onClick={() =>
              changeSlide((active + 1) % testimonials.length)
            }
            className="
              absolute right-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              text-white/60 hover:text-white
              text-[56px] leading-none
            "
          >
            ›
          </button>
        </div>

        {/* TESTIMONIAL TEXT */}
        <div
          className={`
            max-w-[820px] mx-auto mb-20
            transition-all duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            “{testimonials[active].quote}”
          </p>

          <p className="mt-8 text-[#dde82d] font-semibold tracking-wide">
            {testimonials[active].author}
          </p>
        </div>

        {/* 🔥 CLIENT LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-5 items-center opacity-95">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center py-1"
            >
              <img
                src={logo}
                alt="Client logo"
                className="
                  max-h-24 md:max-h-28 lg:max-h-32
                  object-contain
                  grayscale
                  hover:grayscale-0
                  transition
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
