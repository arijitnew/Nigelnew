
import React, { useState, useEffect } from "react";
import bg from "../assets/Wireframe.png";
import WorkWithUsModal from "./WorkWithUsModal";

const slides = [
  {
    title:
      "Strategic SEO delivers +67% month-on-month organic growth for Starbucks",
    client: "Starbucks",
    description: (
      <>
        <span>
          We began with a comprehensive site audit to uncover key growth
          opportunities. From eliminating toxic backlinks to executing a robust{" "}
          <strong>pillar-cluster content strategy</strong>, every step was
          designed to strengthen authority and relevance.
        </span>
        <br />
        <span>
          A large-scale internal linking initiative significantly improved
          indexation, visibility, and organic performance — driving consistent,
          compounding growth.
        </span>
      </>
    ),
  },
  {
    title:
      "SEO boosts organic traffic by over +21% in only 6 months for AirProducts Qudra",
    client: "AirProducts Qudra",
    description: (
      <>
        <span>
          We optimized onsite SEO, fixed technical issues, and implemented a
          strategic backlinking plan to enhance keyword focus.
        </span>
        <br />
        <span>
          Our approach aligned with their business goals, addressing key
          challenges while seamlessly improving traffic, search rankings, and
          conversions.
        </span>
      </>
    ),
  },
  {
    title:
      "Strategic SEO and content approach earns GoaTimeline a 68.32% growth in organic traffic.",
    client: "GoaTimeline",
    description: (
      <>
        <span>
          In-depth research helped us understand user intent and analyze content
          gaps. Our scalable content roadmap enhanced semantic authority through
          search query chains.
        </span>
        <br />
        <span>
          We strengthened domain authority with a robust offsite marketing
          strategy and implemented technical SEO best practices.
        </span>
      </>
    ),
  },
  {
    title:
      "Holistic programmatic approach drives 143% increase in organic clicks year-over-year.",
    client: "Peridot Ascendancy",
    description: (
      <>
        <span>
          We identified and removed duplicate content issues while systematically
          improving Core Web Vitals.
        </span>
        <br />
        <span>
          We optimized and repurposed existing content, created new content for
          long-tail queries, and built optimized pillar pages for competitive
          head terms.
        </span>
      </>
    ),
  },
];

export default function CaseStudiesSlider() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const changeSlide = (next) => {
    if (next === active) return;

    setVisible(false);
    setTimeout(() => {
      setActive(next);
      setTimeout(() => setVisible(true), 300);
    }, 600);
  };


  useEffect(() => {
    if (modalOpen) return;

    const interval = setInterval(() => {
      changeSlide((active + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [active, modalOpen]);

  return (
    <>
      <section className="relative w-full bg-black py-20 overflow-hidden">
     
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>


        <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex items-center">
          <div className="max-w-[760px] text-left text-white pl-10">
          
            <h2
              className={`
                text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight
                transition-all duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-14"
                }
              `}
            >
              {slides[active].title}
            </h2>

       
            <div
              className={`
                w-14 h-[3px] bg-[#dde82d] mt-6 mb-4
                transition-all duration-[800ms]
                ${visible ? "opacity-100" : "opacity-0"}
              `}
            />

            
            <p
              className={`
                text-sm md:text-base text-white/90 leading-relaxed mb-8
                transition-all duration-[1200ms] delay-[200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-14"
                }
              `}
            >
              <span className="font-semibold text-[#dde82d]">
                {slides[active].client}:
              </span>{" "}
              {slides[active].description}
            </p>

           
            <div
              className={`
                transition-all duration-[1200ms] delay-[350ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-14"
                }
              `}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#dde82d] text-black font-semibold px-6 py-3 rounded"
              >
                Contact us to learn more
              </button>
            </div>
          </div>
        </div>

       
        <button
          onClick={() =>
            changeSlide((active - 1 + slides.length) % slides.length)
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-28 flex items-center justify-center bg-white/10 backdrop-blur text-white text-3xl hover:bg-white/20 z-50"
        >
          ‹
        </button>

      
        <button
          onClick={() => changeSlide((active + 1) % slides.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-28 flex items-center justify-center bg-white/10 backdrop-blur text-white text-3xl hover:bg-white/20 z-50"
        >
          ›
        </button>


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


      <WorkWithUsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Work With Us"
      />
    </>
  );
}

