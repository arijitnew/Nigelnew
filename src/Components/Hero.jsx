
import React, { useState } from "react";
import WorkWithUsModal from "./WorkWithUsModal"; 

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      
      <section className="pt-40 pb-32 text-center px-4">
        
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
          We make sure customers find you <br />
          everywhere that matters-from{" "}
          <span className="text-[#dde82d]">Google</span> to{" "}
          <span className="text-[#dde82d]">AI-powered search</span>
        </h1>

      
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
        We help brands show up where decisions are made:
 across search engines, social feeds, AI platforms, marketplaces, streaming platforms, and beyond.

        </p>
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
        If your customers are searching, scrolling, swiping, streaming, or shopping —
 we make sure your brand is already there.

        </p>

        <div className="mt-10">
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3 bg-[#dde82d] text-black font-medium rounded hover:bg-[#c7d51f] transition"
          >
            Work with us
          </button>
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


