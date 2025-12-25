// import React from "react";
// import placeholder from "../assets/placeholder1.png";

// export default function CareersSection() {
//   return (
//     <section className="w-full bg-[#dde82d] py-24 px-6 overflow-hidden">
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div className="text-left max-w-[620px] lg:pl-20">

//           {/* TAG — BLACK */}
//           <p className="text-sm font-semibold tracking-widest text-black mb-6">
//             CAREERS
//           </p>

//           {/* HEADING — WHITE */}
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
//             Join NP Digital India
//           </h2>

//           {/* DIVIDER — BLACK */}
//           <div className="w-16 h-[3px] bg-black mt-6 mb-8" />

//           {/* DESCRIPTION — WHITE */}
//           <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
//             At NP Digital India, we are expanding at the speed of time.
//           </p>

//           <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10">
//             If you have a knack for converting the problem statements into
//             innovative solutions, a never ending appetite to learn something
//             new everyday and if you truly, madly, deeply love what digital has
//             to offer to this world, then get in touch as you might be our next
//             NP Digital India Knight.
//           </p>

//           {/* CTA — WHITE */}
//           <button className="border-2 border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-[#dde82d] transition">
//             Search and apply
//           </button>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="w-full">

//           {/* MOBILE / TABLET — STACKED */}
//           <div className="flex flex-col gap-6 lg:hidden">
//             <div className="bg-white p-4 shadow-xl">
//               <img
//                 src={placeholder}
//                 alt="Team event"
//                 className="w-full object-cover"
//               />
//             </div>

//             <div className="bg-white p-4 shadow-xl">
//               <img
//                 src={placeholder}
//                 alt="Office culture"
//                 className="w-full object-cover"
//               />
//             </div>
//           </div>

//           {/* DESKTOP — COLLAGE */}
//           <div className="relative h-[460px] hidden lg:block">

//             {/* BIG IMAGE */}
//             <div
//               className="
//                 absolute
//                 left-8
//                 top-1/2
//                 -translate-y-1/2
//                 w-[520px]
//                 bg-white
//                 p-4
//                 shadow-2xl
//                 z-10
//               "
//             >
//               <img
//                 src={placeholder}
//                 alt="Team event"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* SMALL IMAGE */}
//             <div
//               className="
//                 absolute
//                 -left-6
//                 top-1/2
//                 -translate-y-1/2
//                 w-[230px]
//                 aspect-[3/4]
//                 bg-white
//                 p-4
//                 shadow-xl
//                 z-20
//               "
//             >
//               <img
//                 src={placeholder}
//                 alt="Office culture"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import placeholder from "../assets/placeholder1.png";

export default function CareersSection() {
  const lastScrollY = useRef(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        // scrolling down → move right (slow)
        setOffsetX(8);
      } else {
        // scrolling up → move left (slow)
        setOffsetX(-8);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#dde82d] py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left max-w-[620px] lg:pl-20">

          {/* TAG — BLACK */}
          <p className="text-sm font-semibold tracking-widest text-black mb-6">
            CAREERS
          </p>

          {/* HEADING — WHITE */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Join NP Digital India
          </h2>

          {/* DIVIDER — BLACK */}
          <div className="w-16 h-[3px] bg-black mt-6 mb-8" />

          {/* TEXT — WHITE */}
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
            At NP Digital India, we are expanding at the speed of time.
          </p>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10">
            If you have a knack for converting the problem statements into
            innovative solutions, a never ending appetite to learn something
            new everyday and if you truly, madly, deeply love what digital has
            to offer to this world, then get in touch as you might be our next
            NP Digital India Knight.
          </p>

          {/* CTA */}
          <button className="border-2 border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-[#dde82d] transition">
            Search and apply
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full">

          {/* MOBILE / TABLET — STACKED */}
          <div className="flex flex-col gap-6 lg:hidden">
            <div className="bg-white p-4 shadow-xl">
              <img
                src={placeholder}
                alt="Team event"
                className="w-full object-cover"
              />
            </div>

            <div className="bg-white p-4 shadow-xl">
              <img
                src={placeholder}
                alt="Office culture"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* DESKTOP — COLLAGE */}
          <div className="relative h-[460px] hidden lg:block">

            {/* BIG IMAGE */}
            <div
              className="
                absolute
                left-8
                top-1/2
                -translate-y-1/2
                w-[520px]
                bg-white
                p-4
                shadow-2xl
                z-10
              "
            >
              <img
                src={placeholder}
                alt="Team event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* SMALL IMAGE — SLOW SCROLL ANIMATION */}
            <div
              style={{
                transform: `translateX(${offsetX}px) translateY(-50%)`,
                transition: "transform 1.4s cubic-bezier(0.16,1,0.3,1)",
              }}
              className="
                absolute
                -left-6
                top-1/2
                w-[230px]
                aspect-[3/4]
                bg-white
                p-4
                shadow-xl
                z-20
              "
            >
              <img
                src={placeholder}
                alt="Office culture"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

