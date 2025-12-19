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

import React, { useEffect, useState } from "react";
import placeholderLogo from "../assets/placeholder1.png";

export default function Navbar() {
  const [desktopCountryOpen, setDesktopCountryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 h-[64px]" : "bg-black h-[80px]"
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto h-full px-6">
        <nav className="h-full flex items-center justify-between">

          {/* LOGO + DIGITAL / IN */}
          <div className="flex items-center gap-4 text-white">
            <img
              src={placeholderLogo}
              alt="NP Digital"
              className={`object-contain transition-all ${
                scrolled ? "h-8" : "h-10"
              }`}
            />

            {/* DESKTOP COUNTRY */}
            <div
              className="hidden md:block relative"
              onMouseEnter={() => setDesktopCountryOpen(true)}
              onMouseLeave={() => setDesktopCountryOpen(false)}
            >
              <button className="flex items-center gap-1">
                <span>digital</span>
                <span className="text-[#e10051]"> / IN</span>
                <span className="ml-1 mt-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#e10051]" />
              </button>
            </div>

            {/* MOBILE COUNTRY */}
            <button
              className="md:hidden flex items-center gap-1"
              onClick={() => setMobileCountryOpen(!mobileCountryOpen)}
            >
              <span>digital</span>
              <span className="text-[#e10051]"> / IN</span>
              <span className="ml-1 mt-[2px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#e10051]" />
            </button>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white">
            <a href="#" className="hover:text-[#e10051]">About</a>
            <a href="#" className="hover:text-[#e10051]">Solutions & Work</a>
            <a href="#" className="hover:text-[#e10051]">Careers</a>
            <a href="#" className="hover:text-[#e10051]">Contact</a>

            <button className="px-5 py-2 border border-[#e10051] text-[#e10051]">
              RFP
            </button>

            <button className="px-6 py-2 bg-[#e10051] text-black font-medium">
              Hire us!
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setMobileCountryOpen(false);
            }}
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>
        </nav>

        {/* ================= DESKTOP MEGA MENU ================= */}
        {desktopCountryOpen && (
          <div
            onMouseEnter={() => setDesktopCountryOpen(true)}
            onMouseLeave={() => setDesktopCountryOpen(false)}
            className="hidden md:block absolute left-1/2 top-full -translate-x-1/2 w-full max-w-[1400px] bg-[#121212] border border-white/10 px-12 py-10"
          >
            <div className="grid grid-cols-4 gap-12 text-sm text-white">

              {/* NORTH AMERICA */}
              <div>
                <h4 className="font-semibold uppercase">North America</h4>
                <div className="h-px bg-white/20 my-4" />
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                    United States
                  </li>
                  <li className="ml-6 flex gap-3 text-white/70">
                    <span className="mt-2 w-1.5 h-1.5 bg-white/40" />
                    SMB / Franchise Services
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                    Canada
                  </li>
                </ul>
              </div>

              {/* APAC */}
              <div>
                <h4 className="font-semibold uppercase">APAC</h4>
                <div className="h-px bg-white/20 my-4" />
                <ul className="space-y-3">
                  {["Australia","Hong Kong","India","Japan","Malaysia","Singapore","Taiwan"].map(i => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 ${i==="India"?"bg-[#e10051]":"bg-white/50"}`} />
                      <span className={i==="India"?"text-[#e10051]":""}>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EUROPE */}
              <div>
                <h4 className="font-semibold uppercase">Europe</h4>
                <div className="h-px bg-white/20 my-4" />
                <ul className="space-y-3">
                  {["France","Germany","Italy","Netherlands","Spain","United Kingdom"].map(i => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LATAM */}
              <div>
                <h4 className="font-semibold uppercase">LATAM</h4>
                <div className="h-px bg-white/20 my-4" />
                <ul className="space-y-3">
                  {["Argentina","Brazil","Chile","Colombia","Mexico"].map(i => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10">
            <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">

              {/* MOBILE COUNTRY LIST */}
              {mobileCountryOpen && (
                <div className="bg-[#121212] p-6 space-y-8">

                  {/* NORTH AMERICA */}
                  <div>
                    <h4 className="font-semibold uppercase text-sm">North America</h4>
                    <div className="h-px bg-white/20 my-3" />
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                        United States
                      </li>
                      <li className="ml-6 flex gap-3 text-white/70">
                        <span className="mt-2 w-1.5 h-1.5 bg-white/40" />
                        SMB / Franchise Services
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                        Canada
                      </li>
                    </ul>
                  </div>

                  {/* APAC */}
                  <div>
                    <h4 className="font-semibold uppercase text-sm">APAC</h4>
                    <div className="h-px bg-white/20 my-3" />
                    <ul className="space-y-3">
                      {["Australia","Hong Kong","India","Japan","Malaysia","Singapore","Taiwan"].map(item => (
                        <li key={item} className="flex gap-3">
                          <span className={`mt-2 w-1.5 h-1.5 ${item==="India"?"bg-[#e10051]":"bg-white/50"}`} />
                          <span className={item==="India"?"text-[#e10051]":""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EUROPE */}
                  <div>
                    <h4 className="font-semibold uppercase text-sm">Europe</h4>
                    <div className="h-px bg-white/20 my-3" />
                    <ul className="space-y-3">
                      {["France","Germany","Italy","Netherlands","Spain","United Kingdom"].map(item => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* LATAM */}
                  <div>
                    <h4 className="font-semibold uppercase text-sm">LATAM</h4>
                    <div className="h-px bg-white/20 my-3" />
                    <ul className="space-y-3">
                      {["Argentina","Brazil","Chile","Colombia","Mexico"].map(item => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 w-1.5 h-1.5 bg-white/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}

              {/* MAIN LINKS */}
              <a href="#">About</a>
              <a href="#">Solutions & Work</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>

              <button className="w-full py-2 border border-[#e10051] text-[#e10051]">
                RFP
              </button>

              <button className="w-full py-2 bg-[#e10051] text-black font-medium">
                Hire us!
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
