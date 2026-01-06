import React, { useState } from "react";

import logo from "../assets/TRANSP.png";

import google from "../assets/Google.webp";
import meta from "../assets/Meta.webp";
import microsoft from "../assets/Microsoft.webp";
import amazon from "../assets/Amazon.webp";
import nmsdc from "../assets/NMSDC.webp";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/Linkedin1.png";
import youtube from "../assets/youtube.svg";

/* ================= FOOTER ================= */
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-black to-[#2a1205] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 py-20">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO + ADDRESS */}
        {/* LOGO + ADDRESS */}
{/* LOGO + ADDRESS */}
{/* LOGO + ADDRESS */}
<div className="flex flex-col items-start md:-mt-24">

  {/* LOGO */}
  <img
    src={logo}
    alt="Logo"
    className="w-40 md:w-56 mb-6"
  />

  {/* ADDRESS */}
  <div className="md:translate-x-10 md:-translate-y-8">
    <p className="text-sm leading-relaxed text-gray-400">
      119, North Goa, Maharashtra,<br />
      India 403403<br />
      +91 96650 64435
    </p>

    <p className="mt-2 text-sm text-gray-400">
      agency@nigelquadros.com
    </p>
  </div>
</div>




          {/* ================= COMPANY ================= */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li>About</li>
              <li>Solutions & Work</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* ================= RESOURCES ================= */}
          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              {/* <li>Ubersuggest</li>
              <li>Answer The Public</li>
              <li>Marketing School</li>
              <li>Blog</li>
              <li>Webinars</li> */}
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              {/* <li className="flex justify-between">
                {/* Legal <span>+</span>
              </li> */} 
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h4 className="text-white font-semibold mb-4">SOCIAL</h4>

            <div className="flex items-center gap-3">
              {/* <img
                src={facebook}
                alt="Facebook"
                className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
              /> */}
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
              />
              {/* <img
                src={youtube}
                alt="YouTube"
                className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
              /> */}
            </div>
          </div>

        </div>

        {/* ================= PARTNER LOGOS ================= */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-16">
     
        <img
            src={amazon}
            alt="Amazon Partner"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src={meta}
            alt="Meta Partner"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src={microsoft}
            alt="Microsoft Partner"
            className="h-12 md:h-16 object-contain"
          />
               <img
            src={google}
            alt="Google Partner"
            className="h-12 md:h-16 object-contain"
          />
        
          <img
            src={nmsdc}
            alt="NMSDC"
            className="h-16 md:h-20 object-contain"
          />
        </div>

      </div>
    </footer>
  );
}


