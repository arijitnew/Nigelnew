import React, { useEffect } from "react";

export default function RfpPopup({ open, onClose }) {
  // Lock background scroll when popup is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4">
      {/* POPUP CARD */}
      <div className="relative w-full max-w-[700px] bg-white p-8 md:p-12 animate-scaleIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl font-bold"
        >
          ✕
        </button>

        {/* TAG */}
        <p className="text-xs font-bold tracking-widest text-[#dde82d] mb-4">
          RFP
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          Submit a Request for Proposal
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-8">
          Tell us about your project and our team will get back to you shortly.
        </p>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-4 py-3 text-sm outline-none"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 px-4 py-3 text-sm outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-3 text-sm outline-none"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 px-4 py-3 text-sm outline-none"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="border border-gray-300 px-4 py-3 text-sm outline-none md:col-span-2"
          />

          <select className="border border-gray-300 px-4 py-3 text-sm outline-none md:col-span-2">
            <option>Project Type</option>
            <option>SEO</option>
            <option>Paid Ads</option>
            <option>Website Development</option>
            <option>Branding</option>
            <option>Other</option>
          </select>

          <select className="border border-gray-300 px-4 py-3 text-sm outline-none md:col-span-2">
            <option>Estimated Budget</option>
            <option>Below $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000 – $25,000</option>
            <option>$25,000+</option>
          </select>

          <textarea
            placeholder="Briefly describe your project..."
            rows="4"
            className="border border-gray-300 px-4 py-3 text-sm outline-none md:col-span-2 resize-none"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="bg-[#dde82d] text-black px-10 py-4 text-sm font-semibold hover:bg-[#cfd92a] transition md:col-span-2 w-fit"
          >
            Submit RFP
          </button>
        </form>
      </div>

      {/* ANIMATION STYLE */}
      <style>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
