import React from "react";
import logo from "../assets/Icon1.png";

export default function WorkWithUsModal({ isOpen, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="relative bg-white w-[94%] max-w-[860px] rounded-sm shadow-2xl px-16 py-10 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black text-2xl font-light"
        >
          ✕
        </button>

        {/* LOGO */}
        <div className="relative flex justify-center mb-1">
          <img
            src={logo}
            alt="Logo"
            className="
              absolute
              top-0
              h-[140px]
              object-contain
              -translate-y-8
            "
          />
        </div>

        {/* TITLE */}
        <h2 className="text-center text-3xl font-extrabold text-black mt-20 mb-2">
          {title || "Work With Us"}
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-sm text-black/60 mb-8">
          Fill out the form below to speak with someone from our team.
        </p>

        {/* FORM */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
          />

          {/* PHONE */}
          <div className="flex border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 px-4 text-sm border-r border-gray-200">
              🇮🇳 <span className="text-black/70">+91</span>
            </div>

            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
              placeholder="Enter mobile number"
            />
          </div>

          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
          />

          <input
            type="url"
            placeholder="Website URL?"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
          />

          <input
            type="text"
            placeholder="Monthly Marketing Budget"
            className="border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </form>

        {/* DISCLAIMER */}
        <p className="text-[11px] text-black/50 leading-relaxed mt-6">
          By clicking the button below, you consent for Agency by Nigel Quadros and
          partners to use automated technology, including pre-recorded messages,
          cell phones and texts, and email to contact you at the number and email
          address provided. This consent is not required to make a purchase.
          Privacy Policy.
        </p>

        {/* SUBMIT */}
        <div className="flex justify-start mt-8">
          <button
            type="submit"
            className="bg-[#dde82d] text-black px-10 py-3 text-sm font-semibold hover:bg-[#c7d51f] transition"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}


