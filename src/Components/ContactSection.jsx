// import React from "react";

// export default function ContactSection() {
//   return (
//     <section className="w-full py-24 px-6 text-white">
//       <div className="max-w-[1200px] mx-auto">

//         {/* TAG */}
//         <p className="text-center text-xs font-bold tracking-widest text-[#dde82d] mb-4">
//           CONTACT
//         </p>

//         {/* HEADING */}
//         <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
//           You made it.
//         </h2>

//         {/* UNDERLINE */}
//         <div className="w-14 h-[3px] bg-[#dde82d] mx-auto mb-8" />

//         {/* DESCRIPTION */}
//         <p className="max-w-[900px] mx-auto text-center text-base md:text-lg text-gray-200 mb-14 leading-relaxed">
//          <p>If you’ve been searching for a digital marketing agency that actually understands performance, strategy, and execution — your search ends here.</p>
//          <p>Tell us what you’re building.</p>
//          <p>We’ll show you how to scale it.</p>
//          <p>Fill out the form below and a member of our team will get in touch shortly.
// </p>
//         </p>

//         {/* FORM */}
//         <form className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
//           />

//           {/* Phone */}
//           <div className="flex items-center bg-[#f5f5f5] px-4 rounded-md">
//             {/* <span className="mr-3 flex items-center gap-2 text-sm text-black whitespace-nowrap">
//               <span>🇮🇳</span>
//               <span>+91</span>
//             </span> */}
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full py-4 text-sm text-black bg-transparent outline-none"
//             />
//           </div>

//           {/* First Name */}
//           <input
//             type="text"
//             placeholder="First Name"
//             className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
//           />

//           {/* Last Name */}
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
//           />

//           {/* Interest */}
//           <input
//             type="text"
//             placeholder="I'm interested in..."
//             className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
//           />
//         </form>

//         {/* DISCLAIMER */}
//         <div className="max-w-[1000px] mx-auto mt-8">
//           <p className="text-xs text-gray-400 leading-relaxed text-left">
//             By clicking the button below, you consent for Agency by Nigel Quadros and partners to
//             use automated technology, including pre-recorded messages, cell phones
//             and texts, and email to contact you at the number and email address
//             provided. This includes if the number is currently on any Do Not Call
//             Lists. This consent is not required to make a purchase. Privacy Policy.
//           </p>
//         </div>

//         {/* SUBMIT */}
//         <div className="max-w-[1000px] mx-auto mt-10 text-left">
//           <button className="bg-[#dde82d] text-black px-10 py-4 text-sm font-semibold rounded-md hover:bg-[#cfd92a] transition">
//             Submit
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_atjvzey", // replace this only
        "template_pthlpnl",
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        "WMJzFhjrKTHwNQMcU"
      )
      .then(() => {
        alert("Thanks! We’ll get in touch shortly.");
        setFormData({
          email: "",
          phone: "",
          first_name: "",
          last_name: "",
          interest: "",
        });
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section
  id="contact"
  className="scroll-mt-[120px] w-full py-24 px-6 text-white"
>

      <div className="max-w-[1200px] mx-auto">

        <p className="text-center text-xs font-bold tracking-widest text-[#dde82d] mb-4">
          CONTACT
        </p>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
          You made it.
        </h2>

        <div className="w-14 h-[3px] bg-[#dde82d] mx-auto mb-8" />

        <p className="max-w-[900px] mx-auto text-center text-base md:text-lg text-gray-200 mb-14 leading-relaxed">
          If you’ve been searching for a digital marketing agency that actually understands performance, strategy, and execution — your search ends here.
          <br />
          Tell us what you’re building.
        
          We’ll show you how to scale it.
          <br />
          Fill out the form below, and an expert from our team will get in touch shortly.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* Phone */}
          <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: numericValue });
  }}
  inputMode="numeric"
  pattern="[0-9]*"
  required
  className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
/>

          {/* First Name */}
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* Last Name */}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* Interest – now 50% width */}
          <input
            type="text"
            name="interest"
            placeholder="I'm interested in..."
            value={formData.interest}
            onChange={handleChange}
            required
            className="bg-[#f5f5f5] text-black px-5 py-4 text-sm outline-none rounded-md"
          />

          {/* empty column to keep grid alignment */}
          <div className="hidden md:block" />

          {/* DISCLAIMER — MOVED ABOVE SUBMIT */}
          <div className="md:col-span-2 mt-2">
            <p className="text-xs text-gray-400 leading-relaxed text-left">
              By clicking the button below, you consent for Agency by Nigel Quadros and partners to
              use automated technology, including pre-recorded messages, cell phones
              and texts, and email to contact you at the number and email address
              provided. This includes if the number is currently on any Do Not Call
              Lists. This consent is not required to make a purchase. Privacy Policy.
            </p>
          </div>

          {/* SUBMIT */}
          <div className="md:col-span-2 mt-6 text-left">
            <button
              type="submit"
              className="bg-[#dde82d] text-black px-10 py-4 text-sm font-semibold rounded-md hover:bg-[#cfd92a] transition"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
