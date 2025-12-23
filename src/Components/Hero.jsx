import React from "react";

export default function Hero() {
  return (
    <section className="pt-40 pb-32 text-center px-4">
      {/* MAIN HEADING */}
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
        We make sure customers find you <br />
        everywhere from{" "}
        <span className="text-[#dde82d]">Google</span> to{" "}
        <span className="text-[#dde82d]">ChatGPT</span>
      </h1>

      {/* SUBTEXT */}
      <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
        We help you show up everywhere customers are searching, swiping,
        scrolling, streaming, and shopping.
      </p>

      {/* CTA */}
      <div className="mt-10">
        <button className="px-8 py-3 bg-[#dde82d] text-black font-medium rounded hover:bg-[#c7d51f] transition">
          Work with us
        </button>
      </div>
    </section>
  );
}

