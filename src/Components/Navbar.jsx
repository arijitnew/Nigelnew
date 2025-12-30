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
import React, { useEffect, useState } from "react";
import icon from "../assets/TRANSP.png";
import whatsapp from "../assets/Whatsapp.svg";

export default function Navbar() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
        <div className="relative max-w-[1400px] mx-auto h-full px-6">
          <nav className="h-full flex items-center justify-between">

            {/* LOGO + /IN */}
            <div className="flex items-center gap-0 text-white shrink-0">
              <img
                src={icon}
                alt="Icon"
                className={`
                  object-contain transition-all duration-300
                  ${scrolled ? "h-30 md:h-34" : "h-32 md:h-36"}
                `}
              />

              {/* DESKTOP COUNTRY */}
              <div
                className="relative hidden md:block -ml-3"
                onMouseEnter={() => setCountryOpen(true)}
                onMouseLeave={() => setCountryOpen(false)}
              >
                <span className="flex items-center text-[#dde82d] leading-none tracking-wide cursor-pointer">
                  / IN
                  <span
                    className="
                      ml-0.5 mt-[2px] inline-block w-0 h-0
                      border-l-[4px] border-l-transparent
                      border-r-[4px] border-r-transparent
                      border-t-[6px] border-t-[#dde82d]
                    "
                  />
                </span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 text-sm text-white">
              <a href="#" className="hover:text-[#dde82d]">About</a>
              <a href="#" className="hover:text-[#dde82d]">Solutions & Work</a>
              <a href="#" className="hover:text-[#dde82d]">Careers</a>
              <a href="#" className="hover:text-[#dde82d]">Contact</a>

              {/* RFP */}
              <button className="px-5 py-2 border border-[#dde82d] text-[#dde82d] hover:bg-[#dde82d] hover:text-black transition">
                RFP
              </button>

              {/* CALL ICON */}
              <a
                href="tel:+911234567890"
                className="w-10 h-10 bg-[#dde82d] text-black flex items-center justify-center hover:bg-[#c9d63f] transition"
                aria-label="Call"
              >
                📞
              </a>

              {/* WHATSAPP ICON */}
              <a
  href="https://wa.me/911234567890"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-[#dde82d] flex items-center justify-center hover:bg-[#c9d63f] transition"
  aria-label="WhatsApp"
>
  <img
    src={whatsapp}
    alt="WhatsApp"
    className="w-6 h-6"
  />
</a>

            </div>

            {/* HAMBURGER */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMobileMenuOpen(prev => !prev)}
            >
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
            </button>
          </nav>

          {/* ================= MEGA DROPDOWN ================= */}
          {countryOpen && (
            <div
              onMouseEnter={() => setCountryOpen(true)}
              onMouseLeave={() => setCountryOpen(false)}
              className="
                hidden md:block
                absolute left-1/2 top-full -translate-x-1/2
                w-full max-w-[1400px]
                bg-[#121212]
                border border-white/10
                shadow-2xl
                px-12 py-10
                z-50
              "
            >
              <div className="grid grid-cols-4 gap-12 text-sm text-white">
                <div>
                  <h4 className="font-semibold uppercase">North America</h4>
                  <div className="h-px bg-white/20 my-4" />
                  <ul className="space-y-3">
                    <li>United States</li>
                    <li className="ml-4 text-white/60">
                      SMB / Franchise Services
                    </li>
                    <li>Canada</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold uppercase">APAC</h4>
                  <div className="h-px bg-white/20 my-4" />
                  <ul className="space-y-3">
                    {["Australia","Hong Kong","India","Japan","Malaysia","Singapore","Taiwan"].map(item => (
                      <li
                        key={item}
                        className={item === "India" ? "text-[#dde82d]" : ""}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold uppercase">Europe</h4>
                  <div className="h-px bg-white/20 my-4" />
                  <ul className="space-y-3">
                    {["France","Germany","Italy","Netherlands","Spain","United Kingdom"].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold uppercase">LATAM</h4>
                  <div className="h-px bg-white/20 my-4" />
                  <ul className="space-y-3">
                    {["Argentina","Brazil","Chile","Colombia","Mexico"].map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[96px] left-0 w-full bg-black z-40 border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">
            <a href="#">About</a>
            <a href="#">Solutions & Work</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>

            <button className="w-full py-2 border border-[#dde82d] text-[#dde82d]">
              RFP
            </button>

            <div className="flex gap-4">
              <a
                href="tel:+911234567890"
                className="flex-1 py-3 bg-[#dde82d] text-black text-center"
                aria-label="Call"
              >
                📞
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#dde82d] text-black text-center"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCROLL PROGRESS ================= */}
      <div
        className={`
          fixed left-0 w-full h-[2px]
          bg-white/10
          z-30
          pointer-events-none
          transition-all duration-300
          ${scrolled ? "top-[72px]" : "top-[96px]"}
        `}
      >
        <div
          className="h-full bg-[#dde82d]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}

