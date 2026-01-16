
import React, { useState } from "react";
import WorkWithUsModal from "./WorkWithUsModal";


import denzour from "../assets/Frame 2.svg";
import stanley from "../assets/Frame 3.svg";
import amway from "../assets/Frame 4.svg";
import bioderma from "../assets/Frame 5.svg";
import intuit from "../assets/Frame 6.svg";
import qualys from "../assets/Frame 7.svg";
import indianExpress from "../assets/Frame 8.svg";
import tata from "../assets/Frame 9.svg";
import adani from "../assets/Frame 10.svg";
import muSigma from "../assets/Frame 11.svg";
import emami from "../assets/Frame 12.svg";
import vodien from "../assets/Frame 13.svg";

const logos = [
  denzour,
  stanley,
  amway,
  bioderma,
  intuit,
  qualys,
  indianExpress,
  tata,
  adani,
  muSigma,
  emami,
  vodien,
];

const services = [
  "Analytics",
  "SEO",
  "Paid media",
  "Creative",
  "Social Media",
  "Artifial Intelligence",
  "Content",
  "AI SEO",
  "Something else?",
];

export default function ClientsAndForm() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative max-w-[1400px] mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

  
          <div className="
            order-1 lg:order-2
            bg-[#f1f1f1]
            text-black
            p-10
            shadow-xl
            rounded-md
          ">
            <h3 className="text-xl font-semibold text-center mb-8">
            How can we help as your growth partner?
            </h3>

      
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((item) => (
                <label
                  key={item}
                  className="
                    flex items-center gap-3
                    bg-white px-4 py-3
                    cursor-pointer
                    hover:shadow-sm
                    transition
                    rounded-md
                  "
                >
                  <input
                    type="checkbox"
                    className="accent-[#e10051]"
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>

        
            <button
              onClick={() => setModalOpen(true)}
              className="
                mt-10
                mx-auto
                block
                w-[180px]
                py-4
                bg-[#e10051]
                text-white
                text-sm
                font-semibold
                rounded-md
                hover:bg-[#c00046]
                transition
              "
            >
             Let’s grow!
            </button>
          </div>

<div className="order-2 lg:order-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 mt-6">
  {logos.map((logo, i) => (
    <div
      key={i}
      className="
        flex items-center justify-center
        h-[96px]
        w-full
        overflow-hidden
      "
    >
      <img
        src={logo}
        alt=""
        className="
          h-[56px]
          max-w-[140px]
          object-contain
          block
        "
      />
    </div>
  ))}
</div>


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


