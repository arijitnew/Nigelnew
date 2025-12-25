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
import WeStatements from "./Components/WeStatements";
import ProductCards from "./Components/ProductCards";
import TeamSection from "./Components/TeamSection.jsx";
import WireframeSection from "./Components/WireframeSection";
import SolutionsContent from "./Components/SolutionsContent";
import SolutionsCards from "./Components/SolutionsCards";
import WorkIntro from "./Components/WorkIntro";
import WorkVideos from "./Components/WorkVideos";
import CaseStudiesSlider from "./Components/CaseStudiesSlider";
import TestimonialsDark from "./Components/TestimonialsDark";
import RecognitionSection from "./Components/RecognitionSection";
import CareersSection from "./Components/CareersSection";

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
      <section className="bg-[#f3f3f3] text-black pt-12 pb-24 text-center">
  <WeStatements />
  <ProductCards/>
  <TeamSection/>
  <WireframeSection>
<SolutionsContent/>
<SolutionsCards/>
</WireframeSection>
<WorkIntro/>
<WorkVideos/>
<CaseStudiesSlider/>
<DarkSection>
  <TestimonialsDark/>
</DarkSection>
<RecognitionSection/>
<CareersSection/>
</section>

    </>
  );
}




