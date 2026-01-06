// import React, { useEffect, useState } from "react";
// import placeholderLogo from "../assets/placeholder1.png";

// export default function Navbar() {
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
//       <div className="relative max-w-[1400px] mx-auto h-full px-6">
//         <nav className="h-full flex items-center justify-between">

//           {/* LOGO + COUNTRY */}
//           <div className="flex items-center gap-4 text-white shrink-0">
//             <img
//               src={placeholderLogo}
//               alt="NP Digital"
//               className={`object-contain transition-all duration-300 ${
//                 scrolled ? "h-8" : "h-10"
//               }`}
//             />

//             {/* HOVER TRIGGER */}
//             <div
//               onMouseEnter={() => setCountryOpen(true)}
//               onMouseLeave={() => setCountryOpen(false)}
//               className="relative"
//             >
//               <button className="flex items-center gap-1 tracking-wide hover:text-[#e10051] transition">
//                 <span>digital</span>
//                 <span className="text-[#e10051]"> / IN</span>
//                 <span
//                   className="
//                     ml-1 mt-[2px] inline-block w-0 h-0
//                     border-l-[4px] border-l-transparent
//                     border-r-[4px] border-r-transparent
//                     border-t-[6px] border-t-[#e10051]
//                   "
//                 />
//               </button>
//             </div>
//           </div>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8 text-sm text-white">
//             <a href="#" className="hover:text-[#e10051]">About</a>
//             <a href="#" className="hover:text-[#e10051]">Solutions & Work</a>
//             <a href="#" className="hover:text-[#e10051]">Careers</a>
//             <a href="#" className="hover:text-[#e10051]">Contact</a>

//             <button className="px-5 py-2 border border-[#e10051] text-[#e10051] hover:bg-[#e10051] hover:text-black transition">
//               RFP
//             </button>

//             <button className="px-6 py-2 bg-[#e10051] text-black font-medium hover:bg-[#c80045] transition">
//               Hire us!
//             </button>
//           </div>
//         </nav>

//         {/* MEGA DROPDOWN */}
//         {countryOpen && (
//           <div
//             onMouseEnter={() => setCountryOpen(true)}
//             onMouseLeave={() => setCountryOpen(false)}
//             className="
//               absolute
//               left-1/2
//               top-full
//               -translate-x-1/2
//               w-full
//               max-w-[1400px]
//               bg-[#121212]
//               border border-white/10
//               shadow-2xl
//               px-12
//               py-10
//             "
//           >
//             <div className="grid grid-cols-4 gap-12 text-sm text-white">

//               {/* NORTH AMERICA (WITH CHILD) */}
//               <div>
//                 <h4 className="font-semibold uppercase tracking-wide">
//                   North America
//                 </h4>
//                 <div className="h-px bg-white/20 my-4" />

//                 <ul className="space-y-3">

//                   {/* United States */}
//                   <li className="flex items-start gap-3">
//                     <span className="mt-2 w-1.5 h-1.5 bg-white/50"></span>
//                     <div>
//                       <span className="text-white/85">United States</span>

//                       {/* CHILD ITEM */}
//                       <ul className="mt-2 ml-6 space-y-2">
//                         <li className="flex items-start gap-3">
//                           <span className="mt-2 w-1.5 h-1.5 bg-white/40"></span>
//                           <span className="text-white/65">
//                             SMB / Franchise Services
//                           </span>
//                         </li>
//                       </ul>
//                     </div>
//                   </li>

//                   {/* Canada */}
//                   <li className="flex items-start gap-3">
//                     <span className="mt-2 w-1.5 h-1.5 bg-white/50"></span>
//                     <span className="text-white/85">Canada</span>
//                   </li>

//                 </ul>
//               </div>

//               {/* APAC */}
//               <div>
//                 <h4 className="font-semibold uppercase tracking-wide">
//                   APAC
//                 </h4>
//                 <div className="h-px bg-white/20 my-4" />
//                 <ul className="space-y-3">
//                   {[
//                     "Australia",
//                     "Hong Kong",
//                     "India",
//                     "Japan",
//                     "Malaysia",
//                     "Singapore",
//                     "Taiwan",
//                   ].map((item) => (
//                     <li key={item} className="flex items-start gap-3">
//                       <span
//                         className={`mt-2 w-1.5 h-1.5 ${
//                           item === "India"
//                             ? "bg-[#e10051]"
//                             : "bg-white/50"
//                         }`}
//                       ></span>
//                       <span
//                         className={
//                           item === "India"
//                             ? "text-[#e10051]"
//                             : "text-white/85"
//                         }
//                       >
//                         {item}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* EUROPE */}
//               <div>
//                 <h4 className="font-semibold uppercase tracking-wide">
//                   Europe
//                 </h4>
//                 <div className="h-px bg-white/20 my-4" />
//                 <ul className="space-y-3">
//                   {[
//                     "France",
//                     "Germany",
//                     "Italy",
//                     "Netherlands",
//                     "Spain",
//                     "United Kingdom",
//                   ].map((item) => (
//                     <li key={item} className="flex items-start gap-3">
//                       <span className="mt-2 w-1.5 h-1.5 bg-white/50"></span>
//                       <span className="text-white/85">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* LATAM */}
//               <div>
//                 <h4 className="font-semibold uppercase tracking-wide">
//                   LATAM
//                 </h4>
//                 <div className="h-px bg-white/20 my-4" />
//                 <ul className="space-y-3">
//                   {[
//                     "Argentina",
//                     "Brazil",
//                     "Chile",
//                     "Colombia",
//                     "Mexico",
//                   ].map((item) => (
//                     <li key={item} className="flex items-start gap-3">
//                       <span className="mt-2 w-1.5 h-1.5 bg-white/50"></span>
//                       <span className="text-white/85">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// import React, { useEffect, useState } from "react";
// import placeholderLogo from "../assets/placeholder1.png";

// export default function Navbar() {
//   const [desktopCountryOpen, setDesktopCountryOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileCountryOpen, setMobileCountryOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

//       setScrolled(scrollTop > 20);
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-black/95 h-[64px]" : "bg-black h-[80px]"
//         }`}
//       >
//         <div className="relative max-w-[1400px] mx-auto h-full px-6">
//           <nav className="h-full flex items-center justify-between">

//             {/* LOGO + DIGITAL / IN */}
//             <div className="flex items-center gap-4 text-white">
//               <img
//                 src={placeholderLogo}
//                 alt="NP Digital"
//                 className={`object-contain transition-all duration-300 ${
//                   scrolled ? "h-8" : "h-10"
//                 }`}
//               />

//               {/* DESKTOP COUNTRY */}
//               <div
//                 className="hidden md:block relative"
//                 onMouseEnter={() => setDesktopCountryOpen(true)}
//                 onMouseLeave={() => setDesktopCountryOpen(false)}
//               >
//                 <button className="flex items-center gap-1">
//                   <span>digital</span>
//                   <span className="text-[#dde82d]"> / IN</span>
//                   <span className="ml-1 mt-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#dde82d]" />
//                 </button>
//               </div>

//               {/* MOBILE COUNTRY */}
//               <button
//                 className="md:hidden flex items-center gap-1"
//                 onClick={() => setMobileCountryOpen(!mobileCountryOpen)}
//               >
//                 <span>digital</span>
//                 <span className="text-[#dde82d]"> / IN</span>
//                 <span className="ml-1 mt-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#dde82d]" />
//               </button>
//             </div>

//             {/* DESKTOP NAV */}
//             <div className="hidden md:flex items-center gap-8 text-sm text-white">
//               <a href="#" className="hover:text-[#dde82d]">About</a>
//               <a href="#" className="hover:text-[#dde82d]">Solutions & Work</a>
//               <a href="#" className="hover:text-[#dde82d]">Careers</a>
//               <a href="#" className="hover:text-[#dde82d]">Contact</a>

//               <button className="px-5 py-2 border border-[#dde82d] text-[#dde82d]">
//                 RFP
//               </button>

//               <button className="px-6 py-2 bg-[#dde82d] text-black font-medium">
//                 Hire us!
//               </button>
//             </div>

//             {/* HAMBURGER */}
//             <button
//               className="md:hidden flex flex-col gap-1"
//               onClick={() => {
//                 setMobileMenuOpen(!mobileMenuOpen);
//                 setMobileCountryOpen(false);
//               }}
//             >
//               <span className="w-6 h-[2px] bg-white" />
//               <span className="w-6 h-[2px] bg-white" />
//               <span className="w-6 h-[2px] bg-white" />
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* ================= SCROLL LINE ================= */}
//       <div
//         className={`fixed left-0 z-40 transition-all duration-300 ${
//           scrolled ? "top-[64px]" : "top-[80px]"
//         } w-full h-[2px] bg-white/10`}
//       >
//         <div
//           className="h-full bg-[#dde82d] transition-all duration-200"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>
//     </>
//   );
// }
// import React, { useEffect, useState } from "react";
// import icon from "../assets/Icon.png";

// export default function Navbar() {
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       setScrolled(scrollTop > 20);
//       setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header
//         className={`
//           fixed top-0 left-0 w-full z-50
//           transition-all duration-300
//           ${scrolled ? "bg-black/95 h-[72px]" : "bg-black h-[96px]"}
//         `}
//       >
//         <div className="relative max-w-[1400px] mx-auto h-full px-6">
//           <nav className="h-full flex items-center justify-between">

//             {/* LOGO + COUNTRY */}
//             <div className="flex items-center gap-0 text-white shrink-0">
//               <img
//                 src={icon}
//                 alt="Icon"
//                 className={`
//                   object-contain transition-all duration-300
//                   ${scrolled 
//                     ? "h-10 md:h-12" 
//                     : "h-14 md:h-16"}
//                 `}
//               />

//               {/* DESKTOP COUNTRY */}
//               <div
//                 className="relative hidden md:block"
//                 onMouseEnter={() => setCountryOpen(true)}
//                 onMouseLeave={() => setCountryOpen(false)}
//               >
//                 <button className="flex items-center gap-1 tracking-wide hover:text-[#dde82d] transition">
//                   <span>Agency</span>
//                   <span className="text-[#dde82d]"> / IN</span>
//                   <span
//                     className="
//                       ml-1 mt-[2px] inline-block w-0 h-0
//                       border-l-[4px] border-l-transparent
//                       border-r-[4px] border-r-transparent
//                       border-t-[6px] border-t-[#dde82d]
//                     "
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* DESKTOP MENU */}
//             <div className="hidden md:flex items-center gap-8 text-sm text-white">
//               <a href="#" className="hover:text-[#dde82d]">About</a>
//               <a href="#" className="hover:text-[#dde82d]">Solutions & Work</a>
//               <a href="#" className="hover:text-[#dde82d]">Careers</a>
//               <a href="#" className="hover:text-[#dde82d]">Contact</a>

//               <button className="px-5 py-2 border border-[#dde82d] text-[#dde82d] hover:bg-[#dde82d] hover:text-black transition">
//                 RFP
//               </button>

//               <button className="px-6 py-2 bg-[#dde82d] text-black font-medium hover:bg-[#c9d63f] transition">
//                 Hire us!
//               </button>
//             </div>

//             {/* HAMBURGER (MOBILE) */}
//             <button
//               className="md:hidden flex flex-col gap-1"
//               onClick={() => setMobileMenuOpen(prev => !prev)}
//             >
//               <span className="w-6 h-[2px] bg-white" />
//               <span className="w-6 h-[2px] bg-white" />
//               <span className="w-6 h-[2px] bg-white" />
//             </button>
//           </nav>

//           {/* ================= MEGA DROPDOWN (DESKTOP) ================= */}
//           {countryOpen && (
//             <div
//               onMouseEnter={() => setCountryOpen(true)}
//               onMouseLeave={() => setCountryOpen(false)}
//               className="
//                 hidden md:block
//                 absolute left-1/2 top-full -translate-x-1/2
//                 w-full max-w-[1400px]
//                 bg-[#121212]
//                 border border-white/10
//                 shadow-2xl
//                 px-12 py-10
//                 z-50
//               "
//             >
//               <div className="grid grid-cols-4 gap-12 text-sm text-white">
//                 <div>
//                   <h4 className="font-semibold uppercase">North America</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     <li>United States</li>
//                     <li className="ml-4 text-white/60">
//                       SMB / Franchise Services
//                     </li>
//                     <li>Canada</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold uppercase">APAC</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     {["Australia","Hong Kong","India","Japan","Malaysia","Singapore","Taiwan"].map(item => (
//                       <li
//                         key={item}
//                         className={item === "India" ? "text-[#dde82d]" : ""}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold uppercase">Europe</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     {["France","Germany","Italy","Netherlands","Spain","United Kingdom"].map(item => (
//                       <li key={item}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold uppercase">LATAM</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     {["Argentina","Brazil","Chile","Colombia","Mexico"].map(item => (
//                       <li key={item}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-[96px] left-0 w-full bg-black z-40 border-t border-white/10">
//           <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">
//             <a href="#">About</a>
//             <a href="#">Solutions & Work</a>
//             <a href="#">Careers</a>
//             <a href="#">Contact</a>

//             <button className="w-full py-2 border border-[#dde82d] text-[#dde82d]">
//               RFP
//             </button>

//             <button className="w-full py-2 bg-[#dde82d] text-black font-medium">
//               Hire us!
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ================= SCROLL PROGRESS LINE ================= */}
//       <div
//         className={`
//           fixed left-0 w-full h-[2px]
//           bg-white/10
//           z-30
//           pointer-events-none
//           transition-all duration-300
//           ${scrolled ? "top-[72px]" : "top-[96px]"}
//         `}
//       >
//         <div
//           className="h-full bg-[#dde82d]"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>
//     </>
//   );
// }
// import React, { useEffect, useState } from "react";
// import icon from "../assets/TRANSP.png";
// import whatsapp from "../assets/Whatsapp.svg";

// export default function Navbar() {
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [rfpOpen, setRfpOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       setScrolled(scrollTop > 20);
//       setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // lock scroll when modal open
//   useEffect(() => {
//     document.body.style.overflow = rfpOpen ? "hidden" : "auto";
//   }, [rfpOpen]);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header
//         className={`
//           fixed top-0 left-0 w-full z-50
//           transition-all duration-300
//           ${scrolled ? "bg-black/95 h-[72px]" : "bg-black h-[96px]"}
//         `}
//       >
//         <div className="relative max-w-[1400px] mx-auto h-full px-6">
//           <nav className="h-full flex items-center justify-between">

//             {/* LOGO + /IN */}
//             <div className="flex items-center gap-0 text-white shrink-0">
//               <img
//                 src={icon}
//                 alt="Icon"
//                 className={`
//                   object-contain transition-all duration-300
//                   ${scrolled ? "h-30 md:h-34" : "h-32 md:h-36"}
//                 `}
//               />

//               {/* DESKTOP COUNTRY */}
//               <div
//                 className="relative hidden md:block -ml-3"
//                 onMouseEnter={() => setCountryOpen(true)}
//                 onMouseLeave={() => setCountryOpen(false)}
//               >
//                 <span className="flex items-center text-[#dde82d] leading-none tracking-wide cursor-pointer">
//                   / IN
//                   {/* <span
//                     className="
//                       ml-0.5 mt-[2px] inline-block w-0 h-0
//                       border-l-[4px] border-l-transparent
//                       border-r-[4px] border-r-transparent
//                       border-t-[6px] border-t-[#dde82d]
//                     "
//                   /> */}
//                 </span>
//               </div>
//             </div>

//             {/* DESKTOP MENU */}
//             <div className="hidden md:flex items-center gap-6 text-sm text-white">
//               <a href="#" className="hover:text-[#dde82d]">About</a>
//               <a href="#" className="hover:text-[#dde82d]">Solutions & Work</a>
//               <a href="#" className="hover:text-[#dde82d]">Careers</a>
//               <a href="#" className="hover:text-[#dde82d]">Contact</a>

//               {/* RFP */}
//               <button
//                 onClick={() => setRfpOpen(true)}
//                 className="px-5 py-2 border border-[#dde82d] text-[#dde82d] hover:bg-[#dde82d] hover:text-black transition"
//               >
//                 RFP
//               </button>

//               {/* CALL */}
//               <a
//                 href="tel:+919665064435"
//                 className="w-10 h-10 bg-[#dde82d] text-black flex items-center justify-center hover:bg-[#c9d63f]"
//               >
//                 📞
//               </a>

//               {/* WHATSAPP */}
//               <a
//                 href="https://wa.me/919665064435"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-[#dde82d] flex items-center justify-center hover:bg-[#c9d63f]"
//               >
//                 <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
//               </a>
//             </div>

//             {/* HAMBURGER */}
//             <button
//               className="md:hidden flex flex-col gap-1"
//               onClick={() => setMobileMenuOpen(prev => !prev)}
//             >
//               <span className="w-6 h-[2px] bg-white" />
//               <span className="w-6 h-[2px] bg-white" />
//               <span className="w-6 h-[2px] bg-white" />
//             </button>
//           </nav>

//           {/* ================= COUNTRY DROPDOWN ================= */}
//           {/* {countryOpen && (
//             <div
//               onMouseEnter={() => setCountryOpen(true)}
//               onMouseLeave={() => setCountryOpen(false)}
//               className="
//                 hidden md:block
//                 absolute left-1/2 top-full -translate-x-1/2
//                 w-full max-w-[1400px]
//                 bg-[#121212]
//                 border border-white/10
//                 shadow-2xl
//                 px-12 py-10
//                 z-50
//               "
//             >
//               <div className="grid grid-cols-4 gap-12 text-sm text-white">
//                 <div>
//                   <h4 className="font-semibold uppercase">North America</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     <li>United States</li>
//                     <li className="ml-4 text-white/60">SMB / Franchise Services</li>
//                     <li>Canada</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold uppercase">APAC</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     {["Australia","Hong Kong","India","Japan","Malaysia","Singapore","Taiwan"].map(item => (
//                       <li key={item} className={item === "India" ? "text-[#dde82d]" : ""}>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold uppercase">Europe</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     {["France","Germany","Italy","Netherlands","Spain","United Kingdom"].map(item => (
//                       <li key={item}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold uppercase">LATAM</h4>
//                   <div className="h-px bg-white/20 my-4" />
//                   <ul className="space-y-3">
//                     {["Argentina","Brazil","Chile","Colombia","Mexico"].map(item => (
//                       <li key={item}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )} */}
//         </div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//    {/* ================= MOBILE MENU ================= */}
// {mobileMenuOpen && (
//   <div className="md:hidden fixed top-[96px] left-0 w-full bg-black z-40 border-t border-white/10">
//     <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">

//       <a href="#">About</a>
//       <a href="#">Solutions & Work</a>
//       <a href="#">Careers</a>
//       <a href="#">Contact</a>

//       {/* ACTION ROW */}
//       <div className="flex w-full gap-2 mt-2">

//         {/* RFP – 50% */}
//         <button
//           onClick={() => {
//             setRfpOpen(true);
//             setMobileMenuOpen(false);
//           }}
//           className="
//             w-1/2
//             py-3
//             border border-[#dde82d]
//             text-[#dde82d]
//             font-semibold
//             text-center
//           "
//         >
//           RFP
//         </button>

//         {/* PHONE – 25% */}
//         <a
//           href="tel:+919665064435"
//           className="
//             w-1/4
//             py-3
//             bg-[#dde82d]
//             text-black
//             flex items-center justify-center
//           "
//         >
//           📞
//         </a>

//         {/* WHATSAPP – 25% */}
//         <a
//           href="https://wa.me/919665064435"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             w-1/4
//             py-3
//             bg-[#dde82d]
//             flex items-center justify-center
//           "
//         >
//           <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
//         </a>

//       </div>
//     </div>
//   </div>
// )}


//       {/* ================= SCROLL PROGRESS ================= */}
//       <div
//         className={`
//           fixed left-0 w-full h-[2px]
//           bg-white/10 z-30 pointer-events-none
//           ${scrolled ? "top-[72px]" : "top-[96px]"}
//         `}
//       >
//         <div
//           className="h-full bg-[#dde82d]"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* ================= RFP MODAL ================= */}
// {/* ================= RFP MODAL ================= */}
// {rfpOpen && (
//   <div className="fixed inset-0 z-[100] flex items-center justify-center">

//     {/* OVERLAY */}
//     <div
//       className="absolute inset-0 bg-black/70"
//       onClick={() => setRfpOpen(false)}
//     />

//     {/* MODAL */}
//     <div className="relative bg-white w-[94%] max-w-[860px] rounded-sm shadow-2xl px-16 py-10 z-10">

//       {/* CLOSE */}
//       <button
//         onClick={() => setRfpOpen(false)}
//         className="absolute top-6 right-6 text-black text-2xl font-light"
//       >
//         ✕
//       </button>

//       {/* LOGO */}
//     {/* LOGO (force positioned) */}
// <div className="relative flex justify-center mb-1">
//   <img
//     src={icon}
//     alt="Logo"
//     className="
//       absolute
//       top-0
//       h-[140px]
//       object-contain
//       -translate-y-4
//     "
//   />
// </div>


//       {/* TITLE */}
//       <h2 className="text-center text-3xl font-extrabold text-black mt-20 mb-2">
//   RFP Form
// </h2>


//       {/* SUBTITLE */}
//       <p className="text-center text-sm text-black/60 mb-8">
//         Fill out the form below to speak with someone from our team.
//       </p>

//       {/* FORM */}
//       <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//         <input
//           type="email"
//           placeholder="Email"
//           className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
//         />

// <div className="flex border border-gray-200 bg-gray-50">
//   <div className="flex items-center gap-2 px-4 text-sm border-r border-gray-200">
//     🇮🇳 <span className="text-black/70">+91</span>
//   </div>

//   <input
//     type="tel"
//     inputMode="numeric"
//     pattern="[0-9]*"
//     maxLength={10}
//     onInput={(e) => {
//       e.target.value = e.target.value.replace(/[^0-9]/g, "");
//     }}
//     className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
//     placeholder="Enter mobile number"
//   />
// </div>


//         <input
//           type="text"
//           placeholder="First Name"
//           className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
//         />

//         <input
//           type="text"
//           placeholder="Last Name"
//           className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
//         />

//         <input
//           type="url"
//           placeholder="Website URL?"
//           className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
//         />

//         <input
//           type="text"
//           placeholder="Monthly Marketing Budget"
//           className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
//         />
//       </form>

//       {/* DISCLAIMER */}
//       <p className="text-[11px] text-black/50 leading-relaxed mt-6">
//       By clicking the button below, you consent for Agency by Nigel Quadros and partners to use automated technology, including pre-recorded messages, cell phones and texts, and email to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase. Privacy Policy.
//       </p>

//       {/* SUBMIT */}
//       <div className="flex justify-end mt-8">
//         <button
//           type="submit"
//           className="bg-[#dde82d] text-white px-10 py-3 text-sm font-semibold hover:bg-[#dde82d] transition"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   </div>
// )}


//     </>
//   );
// }


// import React, { useEffect, useState } from "react";
// import icon from "../assets/TRANSP.png";
// import whatsapp from "../assets/Whatsapp.svg";

// export default function Navbar() {
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [rfpOpen, setRfpOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       setScrolled(scrollTop > 20);
//       setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = rfpOpen ? "hidden" : "auto";
//   }, [rfpOpen]);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header
//         className={`
//           fixed top-0 left-0 w-full z-50
//           transition-all duration-300
//           ${scrolled ? "bg-black/95 h-[72px]" : "bg-black h-[96px]"}
//         `}
//       >
//         <div className="relative max-w-[1400px] mx-auto h-full px-6">
//           <nav className="h-full flex items-center justify-between">

//             {/* LOGO */}
//             <div className="flex items-center gap-0 text-white shrink-0">
//               <img
//                 src={icon}
//                 alt="Icon"
//                 className={`
//                   object-contain transition-all duration-300
//                   ${scrolled ? "h-30 md:h-34" : "h-32 md:h-36"}
//                 `}
//               />
//             </div>

//             {/* DESKTOP MENU */}
//             <div className="hidden md:flex items-center gap-6 text-sm text-white">
//               <a href="#" className="hover:text-[#dde82d]">About</a>
//               <a href="#" className="hover:text-[#dde82d]">Solutions & Work</a>
//               <a href="#" className="hover:text-[#dde82d]">Careers</a>
//               <a href="#" className="hover:text-[#dde82d]">Contact</a>

//               <button
//                 onClick={() => setRfpOpen(true)}
//                 className="px-5 py-2 border border-[#dde82d] text-[#dde82d] rounded-md hover:bg-[#dde82d] hover:text-black transition"
//               >
//                 RFP
//               </button>

//               <a
//                 href="tel:+919665064435"
//                 className="w-10 h-10 bg-[#dde82d] rounded-md text-black flex items-center justify-center hover:bg-[#c9d63f]"
//               >
//                 📞
//               </a>

//               <a
//                 href="https://wa.me/919665064435"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-[#dde82d] rounded-md flex items-center justify-center hover:bg-[#c9d63f]"
//               >
//                 <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
//               </a>
//             </div>

//             {/* HAMBURGER */}
//             <button
//               className="md:hidden flex flex-col gap-1"
//               onClick={() => setMobileMenuOpen(prev => !prev)}
//             >
//               <span className="w-6 h-[2px] bg-white rounded-md" />
//               <span className="w-6 h-[2px] bg-white rounded-md" />
//               <span className="w-6 h-[2px] bg-white rounded-md" />
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-[96px] left-0 w-full bg-black z-40 border-t border-white/10">
//           <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">

//             <a href="#">About</a>
//             <a href="#">Solutions & Work</a>
//             <a href="#">Careers</a>
//             <a href="#">Contact</a>

//             <div className="flex w-full gap-2 mt-2">
//               <button
//                 onClick={() => {
//                   setRfpOpen(true);
//                   setMobileMenuOpen(false);
//                 }}
//                 className="w-1/2 py-3 border border-[#dde82d] text-[#dde82d] rounded-md font-semibold"
//               >
//                 RFP
//               </button>

//               <a
//                 href="tel:+919665064435"
//                 className="w-1/4 py-3 bg-[#dde82d] rounded-md text-black flex items-center justify-center"
//               >
//                 📞
//               </a>

//               <a
//                 href="https://wa.me/919665064435"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-1/4 py-3 bg-[#dde82d] rounded-md flex items-center justify-center"
//               >
//                 <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= SCROLL PROGRESS ================= */}
//       <div
//         className={`
//           fixed left-0 w-full h-[2px]
//           bg-white/10 z-30 pointer-events-none
//           ${scrolled ? "top-[72px]" : "top-[96px]"}
//         `}
//       >
//         <div
//           className="h-full bg-[#dde82d] rounded-md"
//           style={{ width: `${scrollProgress}%` }}
//         />
//       </div>

//       {/* ================= RFP MODAL ================= */}
//       {rfpOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center">
//           <div
//             className="absolute inset-0 bg-black/70"
//             onClick={() => setRfpOpen(false)}
//           />

//           <div className="relative bg-white w-[94%] max-w-[860px] rounded-md shadow-2xl px-16 py-10 z-10">

//             <button
//               onClick={() => setRfpOpen(false)}
//               className="absolute top-6 right-6 text-black text-2xl font-light"
//             >
//               ✕
//             </button>

//             <div className="relative flex justify-center mb-1">
//               <img
//                 src={icon}
//                 alt="Logo"
//                 className="absolute top-0 h-[140px] object-contain -translate-y-4"
//               />
//             </div>

//             <h2 className="text-center text-3xl font-extrabold text-black mt-20 mb-2">
//               RFP Form
//             </h2>

//             <p className="text-center text-sm text-black/60 mb-8">
//               Fill out the form below to speak with someone from our team.
//             </p>

//             <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//               {[
//                 "Email",
//                 "First Name",
//                 "Last Name",
//                 "Website URL?",
//                 "Monthly Marketing Budget",
//               ].map((placeholder, i) => (
//                 <input
//                   key={i}
//                   type="text"
//                   placeholder={placeholder}
//                   className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm rounded-md outline-none focus:border-black"
//                 />
//               ))}
//             </form>

//             <div className="flex justify-end mt-8">
//               <button className="bg-[#dde82d] rounded-md text-white px-10 py-3 text-sm font-semibold">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import icon from "../assets/TRANSP.png";      // Navbar logo
import rfpIcon from "../assets/Icon1.png";    // RFP modal logo
import whatsapp from "../assets/Whatsapp.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rfpOpen, setRfpOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      rfpOpen || mobileMenuOpen ? "hidden" : "auto";
  }, [rfpOpen, mobileMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${scrolled ? "bg-black/95 h-[72px]" : "bg-black h-[96px]"}
        `}
      >
        <div className="max-w-[1400px] mx-auto h-full px-6">
          <nav className="h-full flex items-center justify-between">

            {/* LOGO */}
            <img
  src={icon}
  alt="Logo"
  className={`object-contain transition-all duration-300
    ${scrolled ? "h-36 md:h-40" : "h-40 md:h-44"}
  `}
/>


            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 text-sm text-white">
              <a href="#" className="hover:text-[#dde82d]">About</a>
              <a href="#" className="hover:text-[#dde82d]">Solutions & Work</a>
              <a href="#" className="hover:text-[#dde82d]">Careers</a>
              <a href="#" className="hover:text-[#dde82d]">Contact</a>

              <button
                onClick={() => setRfpOpen(true)}
                className="px-5 py-2 border border-[#dde82d] text-[#dde82d] rounded-md hover:bg-[#dde82d] hover:text-black transition"
              >
                RFP
              </button>

              <a
                href="tel:+919665064435"
                className="w-10 h-10 bg-[#dde82d] rounded-md flex items-center justify-center text-black"
              >
                📞
              </a>

              <a
                href="https://wa.me/919665064435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#dde82d] rounded-md flex items-center justify-center"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
              </a>
            </div>

            {/* HAMBURGER */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMobileMenuOpen(prev => !prev)}
            >
              <span className="w-6 h-[2px] bg-white rounded-md" />
              <span className="w-6 h-[2px] bg-white rounded-md" />
              <span className="w-6 h-[2px] bg-white rounded-md" />
            </button>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[96px] left-0 w-full bg-black z-40 border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">
            {["About", "Solutions & Work", "Careers", "Contact"].map(item => (
              <a
                key={item}
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  setRfpOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-1/2 py-3 border border-[#dde82d] text-[#dde82d] rounded-md font-semibold"
              >
                RFP
              </button>

              <a
                href="tel:+919665064435"
                className="w-1/4 py-3 bg-[#dde82d] rounded-md flex items-center justify-center text-black"
              >
                📞
              </a>

              <a
                href="https://wa.me/919665064435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/4 py-3 bg-[#dde82d] rounded-md flex items-center justify-center"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCROLL PROGRESS ================= */}
      <div
        className={`fixed left-0 w-full h-[2px] bg-white/10 z-30 ${
          scrolled ? "top-[72px]" : "top-[96px]"
        }`}
      >
        <div
          className="h-full bg-[#dde82d]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ================= RFP MODAL ================= */}
      {rfpOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setRfpOpen(false)}
          />

          <div className="relative bg-white w-[94%] max-w-[860px] rounded-md shadow-2xl px-16 py-10 z-10">

            <button
              onClick={() => setRfpOpen(false)}
              className="absolute top-6 right-6 text-2xl"
            >
              ✕
            </button>

            {/* RFP LOGO */}
            <div className="flex justify-center mb-1">
              <img
                src={rfpIcon}
                alt="RFP Logo"
                className="h-[100px] object-contain"
              />
            </div>

            <h2 className="text-center text-3xl font-extrabold mb-1">
              RFP Form
            </h2>

            <p className="text-center text-sm text-black/60 mb-8">
              Fill out the form below to speak with someone from our team.
            </p>

            {/* FORM (LIGHT BORDERS) */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Email",
                "First Name",
                "Last Name",
                "Website URL?",
                "Monthly Marketing Budget",
              ].map((p, i) => (
                <input
                  key={i}
                  placeholder={p}
                  className="
                    bg-gray-50
                    border border-gray-200
                    px-4 py-3
                    rounded-md
                    text-sm
                    outline-none
                    focus:border-gray-300
                    focus:ring-0
                  "
                />
              ))}
            </form>

            <div className="flex justify-end mt-8">
              <button className="bg-[#dde82d] px-10 py-3 rounded-md font-semibold">
                Submit
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

