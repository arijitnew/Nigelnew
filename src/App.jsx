// import React from 'react'
// import Navbar from './Components/Navbar'

// export default function App() {
//   return (
//     <>
//       <Navbar/>
//     </>
//   )
// }

// import React from "react";
// import Navbar from "./Components/Navbar";

// export default function App() {
//   return (
//     <div
//       className="min-h-screen text-white"
//       style={{
//         background:
//           "radial-gradient(circle at 85% 80%, rgba(225, 0, 81, 0.4), transparent 55%), #000000",
//       }}
//     >
//       <Navbar />

  
//     </div>
//   );
// }
import React from "react";
import Navbar from "./Components/Navbar";
import DarkSection from "./Components/DarkSection";
import Hero from "./Components/Hero";
import ClientsAndForm from "./Components/ClientsAndForm";
import AwardsStrip from "./Components/AwardsStrip";

export default function App() {
  return (
    <>
      {/* DARK AREA */}
      <DarkSection>
        <Navbar />

        {/* push below fixed navbar */}
        <div className="pt-[80px]">
          <Hero />
          <ClientsAndForm />
          <AwardsStrip />
        </div>
      </DarkSection>

      {/* WHITE SECTION */}
      <section className="bg-[#f3f3f3] text-black py-32 text-center">
        <h2 className="text-3xl font-bold">We have fun.</h2>
      </section>
    </>
  );
}




