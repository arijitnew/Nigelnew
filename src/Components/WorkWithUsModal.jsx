

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/Icon1.png";

export default function WorkWithUsModal({ isOpen, onClose, title }) {
  if (!isOpen) return null;

  const formRef = useRef(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_atjvzey",    
        "template_81av9gu",    
        formRef.current,
        "WMJzFhjrKTHwNQMcU"    
      )
      .then(() => {
        alert("Form submitted successfully!");
        formRef.current.reset();
        onClose();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to submit form");
      });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
    
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

  
      <div
        className="relative bg-white w-[94%] max-w-[860px] rounded-sm shadow-2xl px-16 py-10 z-10"
        onClick={(e) => e.stopPropagation()}
      >
   
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black text-2xl font-light"
        >
          ✕
        </button>

      
        <div className="relative flex justify-center mb-1">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 h-[140px] object-contain -translate-y-8"
          />
        </div>

     
        <h2 className="text-center text-3xl font-extrabold text-black mt-20 mb-2">
          {title || "Work With Us"}
        </h2>

    
        <p className="text-center text-sm text-black/60 mb-8">
          Fill out the form below to speak with someone from our team.
        </p>

      
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />

          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            maxLength={10}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            placeholder="Enter mobile number"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />

          <input
            type="text"
            name="website"
            placeholder="Website URL?"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />

          <input
            type="text"
            name="budget"
            placeholder="Monthly Marketing Budget"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />

         
          <p className="md:col-span-2 text-[11px] text-black/50 leading-relaxed mt-2">
            By clicking the button below, you consent for Agency by Nigel Quadros
            and partners to use automated technology, including pre-recorded
            messages, cell phones and texts, and email to contact you at the
            number and email address provided. This consent is not required to
            make a purchase.<a
  href="https://agency.nigelquadros.com/privacy-policy"
  target="_blank"
  rel="noopener noreferrer"
  className="underline cursor-pointer"
>
  Privacy Policy
</a>.

          </p>

          
          <div className="md:col-span-2 flex justify-start mt-6">
            <button
              type="submit"
              className="bg-[#e10051] text-white px-10 py-3 text-sm font-semibold rounded hover:bg-[#c90046] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

