// import React from "react";

// export default function Hero() {
//   return (
//     <section className="pt-40 pb-32 text-center px-4">
//       {/* MAIN HEADING */}
//       <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
//         We make sure customers find you <br />
//         everywhere from{" "}
//         <span className="text-[#dde82d]">Google</span> to{" "}
//         <span className="text-[#dde82d]">ChatGPT</span>
//       </h1>

//       {/* SUBTEXT */}
//       <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
//         We help you show up everywhere customers are searching, swiping,
//         scrolling, streaming, and shopping.
//       </p>

//       {/* CTA */}
//       <div className="mt-10">
//         <button className="px-8 py-3 bg-[#dde82d] text-black font-medium rounded hover:bg-[#c7d51f] transition">
//           Work with us
//         </button>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import WorkWithUsModal from "./WorkWithUsModal"; // adjust path if needed

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pt-40 pb-32 text-center px-4">
        {/* MAIN HEADING */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
          We make sure customers find you <br />
          everywhere that matters-from{" "}
          <span className="text-[#dde82d]">Google</span> to{" "}
          <span className="text-[#dde82d]">AI-powered search</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
        We help brands show up where decisions are made:
 across search engines, social feeds, AI platforms, marketplaces, streaming platforms, and beyond.

        </p>
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
        If your customers are searching, scrolling, swiping, streaming, or shopping —
 we make sure your brand is already there.

        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3 bg-[#dde82d] text-black font-medium rounded hover:bg-[#c7d51f] transition"
          >
            Work with us
          </button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <WorkWithUsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Work With Us"
      />
    </>
  );
}


