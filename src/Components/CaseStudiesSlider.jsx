// import React, { useState } from "react";
// import bg from "../assets/wireframe.png";

// const slides = [
//   {
//     title:
//       "Strategic SEO strategy increases organic traffic by +60% month on month for Beroe.",
//     client: "Beroe",
//     description:
//       "We started with a detailed site audit to identify the areas of opportunity. We removed toxic links pointing to the site, created deep content using our “Pillar-Cluster” strategy, which improved the site authority required to win. A massive internal linking exercise increased indexation and ultimately visibility.",
//   },
//   {
//     title:
//       "SEO boosts organic traffic by over +15% in only 7 months for Tata Communications.",
//     client: "Tata Communications",
//     description:
//       "We optimized onsite SEO, fixed technical issues and implemented a strategic backlinking plan to enhance keyword focus. Our approach aligned with their business goals, addressing key challenges while seamlessly improving traffic, search rankings, and conversions.",
//   },
//   {
//     title:
//       "Strategic SEO and content approach earns HealthcareOnTime a 1,584% growth in organic traffic.",
//     client: "HealthcareOnTime",
//     description:
//       "In-depth research helped us understand user intent and analyze content gaps. Our scalable content roadmap enhanced semantic authority through search query chains. We strengthened domain authority with a robust offsite marketing strategy and implemented technical SEO best practices.",
//   },
//   {
//     title:
//       "Holistic SEO approach drives 525% increase in organic clicks year-over-year.",
//     client: "Narayana Health",
//     description:
//       "We identified and removed duplicate content issues while systematically improving Core Web Vitals. We optimized and repurposed existing content, created new content for long-tail queries, and built optimized pillar pages for competitive head terms.",
//   },
// ];

// export default function CaseStudiesSlider() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="relative w-full h-[520px] overflow-hidden">

//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 bg-cover bg-center pointer-events-none"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 flex items-center">
//         <div
//           key={active}
//           className="max-w-[760px] text-left text-white pl-10"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
//             {slides[active].title}
//           </h2>

//           <div className="w-14 h-[3px] bg-[#dde82d] mt-6 mb-4" />

//           <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8">
//             <span className="font-semibold text-[#dde82d]">
//               {slides[active].client}:
//             </span>{" "}
//             {slides[active].description}
//           </p>

//           <button className="bg-[#dde82d] text-black font-semibold px-6 py-3 rounded">
//             Contact us to learn more
//           </button>
//         </div>
//       </div>

//       {/* LEFT ARROW — TOUCHING LEFT EDGE */}
//       <button
//         onClick={() =>
//           setActive((prev) => (prev - 1 + slides.length) % slides.length)
//         }
//         className="
//           absolute
//           left-0
//           top-1/2
//           -translate-y-1/2
//           w-10
//           h-24
//           flex
//           items-center
//           justify-center
//           bg-white/10
//           backdrop-blur
//           text-white
//           text-2xl
//           hover:bg-white/20
//           z-50
//         "
//       >
//         ‹
//       </button>

//       {/* RIGHT ARROW — TOUCHING RIGHT EDGE */}
//       <button
//         onClick={() =>
//           setActive((prev) => (prev + 1) % slides.length)
//         }
//         className="
//           absolute
//           right-0
//           top-1/2
//           -translate-y-1/2
//           w-10
//           h-24
//           flex
//           items-center
//           justify-center
//           bg-white/10
//           backdrop-blur
//           text-white
//           text-2xl
//           hover:bg-white/20
//           z-50
//         "
//       >
//         ›
//       </button>

//       {/* DOTS */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === active ? "bg-[#dde82d]" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   );
// }
import React, { useState } from "react";
import bg from "../assets/Wireframe.png";

const slides = [
  {
    title:
      "Strategic SEO strategy increases organic traffic by +60% month on month for Beroe.",
    client: "Beroe",
    description:
      "We started with a detailed site audit to identify the areas of opportunity. We removed toxic links pointing to the site, created deep content using our “Pillar-Cluster” strategy, which improved the site authority required to win. A massive internal linking exercise increased indexation and ultimately visibility.",
  },
  {
    title:
      "SEO boosts organic traffic by over +15% in only 7 months for Tata Communications.",
    client: "Tata Communications",
    description:
      "We optimized onsite SEO, fixed technical issues and implemented a strategic backlinking plan to enhance keyword focus. Our approach aligned with their business goals, addressing key challenges while seamlessly improving traffic, search rankings, and conversions.",
  },
  {
    title:
      "Strategic SEO and content approach earns HealthcareOnTime a 1,584% growth in organic traffic.",
    client: "HealthcareOnTime",
    description:
      "In-depth research helped us understand user intent and analyze content gaps. Our scalable content roadmap enhanced semantic authority through search query chains. We strengthened domain authority with a robust offsite marketing strategy and implemented technical SEO best practices.",
  },
  {
    title:
      "Holistic SEO approach drives 525% increase in organic clicks year-over-year.",
    client: "Narayana Health",
    description:
      "We identified and removed duplicate content issues while systematically improving Core Web Vitals. We optimized and repurposed existing content, created new content for long-tail queries, and built optimized pillar pages for competitive head terms.",
  },
];

export default function CaseStudiesSlider() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeSlide = (next) => {
    if (next === active) return;

    setVisible(false);

    setTimeout(() => {
      setActive(next);
      setTimeout(() => setVisible(true), 300);
    }, 600);
  };

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex items-center">
        <div className="max-w-[760px] text-left text-white pl-10">

          {/* TITLE */}
          <h2
            className={`
              text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight
              transition-all duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-14"}
            `}
          >
            {slides[active].title}
          </h2>

          {/* DIVIDER */}
          <div
            className={`
              w-14 h-[3px] bg-[#dde82d] mt-6 mb-4
              transition-all duration-[800ms]
              ${visible ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* DESCRIPTION */}
          <p
            className={`
              text-sm md:text-base text-white/90 leading-relaxed mb-8
              transition-all duration-[1200ms] delay-[200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
          >
            <span className="font-semibold text-[#dde82d]">
              {slides[active].client}:
            </span>{" "}
            {slides[active].description}
          </p>

          {/* CTA BUTTON */}
          <div
            className={`
              transition-all duration-[1200ms] delay-[350ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
          >
            <button className="bg-[#dde82d] text-black font-semibold px-6 py-3 rounded">
              Contact us to learn more
            </button>
          </div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() =>
          changeSlide((active - 1 + slides.length) % slides.length)
        }
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-12 h-28
          flex items-center justify-center
          bg-white/10 backdrop-blur
          text-white text-3xl
          hover:bg-white/20
          z-50
        "
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() =>
          changeSlide((active + 1) % slides.length)
        }
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          w-12 h-28
          flex items-center justify-center
          bg-white/10 backdrop-blur
          text-white text-3xl
          hover:bg-white/20
          z-50
        "
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === active ? "bg-[#dde82d]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

