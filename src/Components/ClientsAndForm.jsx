// import React, { useEffect, useState } from "react";
// import placeholderLogo from "../assets/placeholder1.png";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50
//         transition-all duration-300
//         ${scrolled ? "bg-black/95 h-[64px]" : "bg-black h-[80px]"}
//       `}
//     >
//       <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">

//         {/* LOGO + COUNTRY */}
//         <div className="flex items-center gap-4 text-white shrink-0">

//           {/* IMAGE LOGO */}
//           <img
//             src={placeholderLogo}
//             alt="NP Digital"
//             className={`
//               transition-all duration-300 object-contain
//               ${scrolled ? "h-8" : "h-10"}
//             `}
//           />

//           {/* BRAND + CARET */}
//           <div className="relative">
//             <button
//               onClick={() => setCountryOpen(!countryOpen)}
//               className="flex items-center gap-1 tracking-wide hover:text-[#e10051] transition"
//             >
//               <span>digital</span>
//               <span className="text-[#e10051]"> / IN</span>

//               {/* CARET */}
//               <span
//                 className="
//                   ml-1 mt-[2px] inline-block w-0 h-0
//                   border-l-[4px] border-l-transparent
//                   border-r-[4px] border-r-transparent
//                   border-t-[6px] border-t-[#e10051]
//                 "
//               />
//             </button>

//             {/* DROPDOWN */}
//             {countryOpen && (
//               <div className="absolute left-0 mt-3 w-40 bg-black border border-white/10 shadow-lg">
//                 {["IN", "US", "UK", "AU"].map((c) => (
//                   <button
//                     key={c}
//                     className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#e10051] hover:text-black transition"
//                     onClick={() => setCountryOpen(false)}
//                   >
//                     {c}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-8 text-sm text-white">
//           <a href="#" className="hover:text-[#e10051]">About</a>
//           <a href="#" className="hover:text-[#e10051]">Solutions & Work</a>
//           <a href="#" className="hover:text-[#e10051]">Careers</a>
//           <a href="#" className="hover:text-[#e10051]">Contact</a>

//           <button className="px-5 py-2 border border-[#e10051] text-[#e10051] hover:bg-[#e10051] hover:text-black transition">
//             RFP
//           </button>

//           <button className="px-6 py-2 bg-[#e10051] text-black font-medium hover:bg-[#c80045] transition">
//             Hire us!
//           </button>
//         </div>

//         {/* HAMBURGER */}
//         <button
//           className="md:hidden flex flex-col gap-1"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="w-6 h-[2px] bg-white"></span>
//           <span className="w-6 h-[2px] bg-white"></span>
//           <span className="w-6 h-[2px] bg-white"></span>
//         </button>
//       </nav>
//     </header>
//   );
// }
// import React from "react";

// // LOGOS
// import denzour from "../assets/denzour.webp";
// import stanley from "../assets/stanley.webp";
// import amway from "../assets/amway.webp";
// import bioderma from "../assets/bioderma.webp";
// import intuit from "../assets/intuit.webp";
// import qualys from "../assets/qualys.webp";
// import indianExpress from "../assets/indian-express.webp";
// import tata from "../assets/tata.webp";
// import adani from "../assets/adani.webp";
// import muSigma from "../assets/mu.webp";
// import emami from "../assets/emami.webp";
// import vodien from "../assets/vodian.webp";

// const logos = [
//   denzour,
//   stanley,
//   amway,
//   bioderma,
//   intuit,
//   qualys,
//   indianExpress,
//   tata,
//   adani,
//   muSigma,
//   emami,
//   vodien,
// ];

// const services = [
//   "AI SEO",
//   "SEO",
//   "Paid media",
//   "Creative",
//   "Content",
//   "Social Media",
//   "App Store",
//   "Analytics",
//   "Other",
// ];

// export default function ClientsAndForm() {
//   return (
//     <section className="relative z-10 max-w-[1400px] mx-auto px-6 pb-32">
//       <div className="grid lg:grid-cols-2 gap-6 items-center">

//         {/* LOGOS */}
//         <div
//           className="
//             grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
//             gap-x-6 gap-y-2
//             auto-rows-[96px] md:auto-rows-[120px]
//           "
//         >
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center"
//             >
//               <img
//                 src={logo}
//                 alt=""
//                 className="max-h-full max-w-full object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* FORM */}
//         <div className="bg-[#f1f1f1] text-black p-10 shadow-xl">
//           <h3 className="text-xl font-semibold text-center mb-8">
//             How can we help you get found?
//           </h3>

//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.map((item) => (
//               <label
//                 key={item}
//                 className="flex items-center gap-3 bg-white px-4 py-3 border cursor-pointer hover:border-[#e10051]"
//               >
//                 <input
//                   type="checkbox"
//                   className="accent-[#e10051]"
//                 />
//                 <span className="text-sm">{item}</span>
//               </label>
//             ))}
//           </div>

//           <button className="mt-8 w-full py-3 bg-[#e10051] text-black font-medium hover:bg-[#c80045] transition">
//             Get started
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import WorkWithUsModal from "./WorkWithUsModal";

// LOGOS
import denzour from "../assets/Frame 2.svg";
import stanley from "../assets/Frame 3.svg";
import amway from "../assets/Frame 4.svg";
import bioderma from "../assets/Frame 5.svg";
import intuit from "../assets/Frame 6.svg";
import qualys from "../assets/Frame 7.svg";
import indianExpress from "../assets/Frame 8.svg";
import tata from "../assets/Frame 9.svg";
import adani from "../assets/Frame 10.svg";
import muSigma from "../assets/Frame 11.svg";
import emami from "../assets/Frame 12.svg";
import vodien from "../assets/Frame 13.svg";

const logos = [
  denzour,
  stanley,
  amway,
  bioderma,
  intuit,
  qualys,
  indianExpress,
  tata,
  adani,
  muSigma,
  emami,
  vodien,
];

const services = [
  "Analytics",
  "SEO",
  "Paid media",
  "Creative",
  "Social Media",
  "Artifial Intelligence",
  "Content",
  "AI SEO",
  "Other",
];

export default function ClientsAndForm() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative max-w-[1400px] mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* FORM CONTAINER */}
          <div className="
            order-1 lg:order-2
            bg-[#f1f1f1]
            text-black
            p-10
            shadow-xl
            rounded-md
          ">
            <h3 className="text-xl font-semibold text-center mb-8">
              How can we help you get found?
            </h3>

            {/* SERVICES */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item) => (
                <label
                  key={item}
                  className="
                    flex items-center gap-3
                    bg-white px-4 py-3
                    cursor-pointer
                    hover:shadow-sm
                    transition
                    rounded-md
                  "
                >
                  <input
                    type="checkbox"
                    className="accent-[#e10051]"
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setModalOpen(true)}
              className="
                mt-10
                mx-auto
                block
                w-[180px]
                py-4
                bg-[#e10051]
                text-white
                text-sm
                font-semibold
                rounded-md
                hover:bg-[#c00046]
                transition
              "
            >
              Get started
            </button>
          </div>

          {/* LOGOS */}
          <div className="order-2 lg:order-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 mt-6">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center py-1"
              >
                <img
                  src={logo}
                  alt=""
                  className="h-16 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WORK WITH US MODAL */}
      <WorkWithUsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Work With Us"
      />
    </>
  );
}


