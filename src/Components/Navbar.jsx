
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import icon from "../assets/TRANSP.png";
import rfpIcon from "../assets/Icon1.png";
import whatsapp from "../assets/Whatsapp.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rfpOpen, setRfpOpen] = useState(false);

  const formRef = useRef(null);

  
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      rfpOpen || mobileMenuOpen ? "hidden" : "auto";
  }, [rfpOpen, mobileMenuOpen]);


  const sendRfp = (e) => {
    e.preventDefault();

    const website = formRef.current.website.value;
    if (website && !website.includes(".com")) {
      alert("Website URL must contain .com");
      return;
    }

    emailjs
      .sendForm(
        "service_atjvzey",
        "template_81av9gu",
        formRef.current,
        "WMJzFhjrKTHwNQMcU"
      )
      .then(() => {
        alert("RFP submitted successfully!");
        setRfpOpen(false);
        e.target.reset();
      })
      .catch(() => alert("Failed to submit RFP"));
  };

  
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.86 19.86 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        19.86 19.86 0 0 1-3.07-8.63
        A2 2 0 0 1 4.11 2h3
        a2 2 0 0 1 2 1.72
        c.12.81.32 1.6.57 2.36
        a2 2 0 0 1-.45 2.11L8.09 9.91
        a16 16 0 0 0 6 6l1.72-1.72
        a2 2 0 0 1 2.11-.45
        c.76.25 1.55.45 2.36.57
        a2 2 0 0 1 1.72 2.11z" />
    </svg>
  );

  const inputClass =
    "bg-gray-50 border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none px-3 py-2 rounded-md text-xs md:text-sm";

  return (
    <>
      
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 h-[72px]" : "bg-black h-[96px]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full px-6">
          <nav className="h-full flex items-center justify-between">
            <img
              src={icon}
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-44 md:h-48" : "h-48 md:h-56"
              }`}
            />

            <div className="flex items-center gap-4">
              
              <div className="hidden md:flex items-center gap-6 text-sm text-white">
              {["About", "Solutions & Work", "Careers", "Contact"].map((item) => (
  <a
    key={item}
    href={
      item === "About"
        ? "#about"
        : item === "Solutions & Work"
        ? "#solutions"
        : item === "Contact"
        ? "#contact"
        : item === "Careers"
        ? "https://www.linkedin.com/company/nigelnquadros/"
        : "#"
    }
    target={item === "Careers" ? "_blank" : undefined}
    rel={item === "Careers" ? "noopener noreferrer" : undefined}
    className="hover:text-[#dde82d]"
  >
    {item}
  </a>
))}




                <button
                  onClick={() => setRfpOpen(true)}
                  className="px-5 py-2 border border-[#dde82d] text-[#dde82d] rounded-md hover:bg-[#dde82d] hover:text-black transition"
                >
                  RFP
                </button>

                <a
                  href="tel:+919665064435"
                  className="w-10 h-10 border border-[#dde82d] rounded-md flex items-center justify-center hover:bg-[#dde82d]"
                >
                  <PhoneIcon />
                </a>

                <a
                  href="https://wa.me/919665064435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#dde82d] rounded-md flex items-center justify-center hover:bg-[#dde82d]"
                >
                  <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                </a>
              </div>

            
              <button
                className="md:hidden relative w-8 h-8 flex items-center justify-center"
                onClick={() => setMobileMenuOpen((p) => !p)}
              >
                <span className={`absolute w-6 h-[2px] bg-white ${mobileMenuOpen ? "rotate-45" : "-translate-y-2"}`} />
                <span className={`absolute w-6 h-[2px] bg-white ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute w-6 h-[2px] bg-white ${mobileMenuOpen ? "-rotate-45" : "translate-y-2"}`} />
              </button>
            </div>
          </nav>
        </div>
      </header>

   
      <div
        className={`fixed left-0 w-full h-[2px] z-40 ${
          scrolled ? "top-[72px]" : "top-[96px]"
        } bg-white/10`}
      >
        <div
          className="h-full bg-[#dde82d]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[96px] left-0 w-full bg-black z-40 border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-6 text-white text-sm">
          {["About", "Solutions & Work", "Careers", "Contact"].map((item) => (
  <a
    key={item}
    href={
      item === "About"
        ? "#about"
        : item === "Solutions & Work"
        ? "#solutions"
        : item === "Contact"
        ? "#contact"
        : item === "Careers"
        ? "https://www.linkedin.com/company/nigelnquadros/"
        : "#"
    }
    target={item === "Careers" ? "_blank" : undefined}
    rel={item === "Careers" ? "noopener noreferrer" : undefined}
    onClick={() => setMobileMenuOpen(false)}
  >
    {item}
  </a>
))}




            <div className="flex gap-3 mt-4 w-full">
              <button
                onClick={() => {
                  setRfpOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-1/2 py-3 border border-[#dde82d] text-[#dde82d] rounded-md font-semibold hover:bg-[#dde82d] hover:text-black"
              >
                RFP
              </button>

              <a
                href="tel:+919665064435"
                className="w-1/4 h-12 border border-[#dde82d] rounded-md flex items-center justify-center hover:bg-[#dde82d]"
              >
                <PhoneIcon />
              </a>

              <a
                href="https://wa.me/919665064435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/4 h-12 border border-[#dde82d] rounded-md flex items-center justify-center hover:bg-[#dde82d]"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

     
      {rfpOpen && (
        <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setRfpOpen(false)} />

          <div className="relative bg-white w-[94%] max-w-[860px] px-6 md:px-16 py-6 md:py-10 mt-4 md:mt-0 rounded-md shadow-2xl z-10">
            <button
              onClick={() => setRfpOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            <div className="flex justify-center mb-2">
              <img src={rfpIcon} alt="RFP" className="h-[70px] md:h-[90px]" />
            </div>

            <h2 className="text-center text-xl md:text-3xl font-extrabold mb-1">
              RFP Form
            </h2>

            <p className="text-center text-xs md:text-sm text-black/60 mb-6">
              Fill out the form below to speak with someone from our team.
            </p>

            <form
              ref={formRef}
              onSubmit={sendRfp}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
            >
              <input className={inputClass} name="email" type="email" required placeholder="Email" />
              <input
                className={inputClass}
                name="phone"
                placeholder="Phone"
                inputMode="numeric"
                pattern="[0-9]{10,15}"
                onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
              />
              <input className={inputClass} name="first_name" required placeholder="First Name" />
              <input className={inputClass} name="last_name" required placeholder="Last Name" />
              <input
  className={inputClass}
  name="website"
  type="text"
  placeholder="Website URL (optional)"
/>

              <input className={inputClass} name="budget" placeholder="Monthly Marketing Budget" />

              <div className="md:col-span-2 text-[10px] text-gray-500 leading-snug mt-2">
                By clicking the button below, you consent for{" "}
                <strong>Agency by Nigel Quadros</strong> and partners to use automated technology, including pre-recorded messages, cell phones and texts, and email to contact you at the number and email address provided. This consent is not required to make a purchase.
                <a
  href="https://agency.nigelquadros.com/privacy-policy"
  target="_blank"
  rel="noopener noreferrer"
  className="underline cursor-pointer"
>
  Privacy Policy
</a>.
.
              </div>

              <div className="md:col-span-2 flex justify-end mt-4">
                <button type="submit" className="bg-[#ff0050] text-white px-8 py-2 rounded-md font-semibold hover:bg-[#e60048]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
