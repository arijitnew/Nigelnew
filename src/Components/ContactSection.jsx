import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full py-24 px-6 text-white">
      <div className="max-w-[1200px] mx-auto">

        {/* TAG */}
        <p className="text-center text-xs font-bold tracking-widest text-[#dde82d] mb-4">
          CONTACT
        </p>

        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
          You made it.
        </h2>

        {/* UNDERLINE */}
        <div className="w-14 h-[3px] bg-[#dde82d] mx-auto mb-8" />

        {/* DESCRIPTION */}
        <p className="max-w-[900px] mx-auto text-center text-base md:text-lg text-gray-200 mb-14 leading-relaxed">
         <p>If you’ve been searching for a digital marketing agency that actually understands performance, strategy, and execution — your search ends here.</p>
         <p>Tell us what you’re building.</p>
         <p>We’ll show you how to scale it.</p>
         <p>Fill out the form below and a member of our team will get in touch shortly.
</p>
        </p>

        {/* FORM */}
        <form className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* Phone */}
          <div className="flex items-center bg-[#f5f5f5] px-4 rounded-md">
            {/* <span className="mr-3 flex items-center gap-2 text-sm text-black whitespace-nowrap">
              <span>🇮🇳</span>
              <span>+91</span>
            </span> */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full py-4 text-sm text-black bg-transparent outline-none"
            />
          </div>

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* Interest */}
          <input
            type="text"
            placeholder="I'm interested in..."
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />
        </form>

        {/* DISCLAIMER */}
        <div className="max-w-[1000px] mx-auto mt-8">
          <p className="text-xs text-gray-400 leading-relaxed text-left">
            By clicking the button below, you consent for Agency by Nigel Quadros and partners to
            use automated technology, including pre-recorded messages, cell phones
            and texts, and email to contact you at the number and email address
            provided. This includes if the number is currently on any Do Not Call
            Lists. This consent is not required to make a purchase. Privacy Policy.
          </p>
        </div>

        {/* SUBMIT */}
        <div className="max-w-[1000px] mx-auto mt-10 text-left">
          <button className="bg-[#dde82d] text-black px-10 py-4 text-sm font-semibold rounded-md hover:bg-[#cfd92a] transition">
            Submit
          </button>
        </div>

      </div>
    </section>
  );
}
