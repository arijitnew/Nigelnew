import React from "react";

import logo from "../assets/placeholder1.png";

import google from "../assets/Google.webp";
import meta from "../assets/Meta.webp";
import microsoft from "../assets/Microsoft.webp";
import amazon from "../assets/Amazon.webp";
import nmsdc from "../assets/NMSDC.webp";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-black to-[#2a1205] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* LOGO + ADDRESS */}
          <div>
            <img src={logo} alt="Logo" className="w-36 mb-6" />
            <p className="text-sm leading-relaxed text-gray-400">
              Mittal Commercia, Wing B, Ground Floor,<br />
              Hasan Pada Road, Mittal Industrial Estate,<br />
              Marol, Saki Naka,<br />
              Mumbai, Maharashtra 400059
            </p>
            <p className="mt-4 text-sm text-gray-400">
              consulting@neilpatel.com
            </p>
          </div>

          {/* GLOBAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">GLOBAL</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">North America <span>+</span></li>
              <li className="flex justify-between">APAC <span>+</span></li>
              <li className="flex justify-between">Europe <span>+</span></li>
              <li className="flex justify-between">LATAM <span>+</span></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li>About</li>
              <li>Solutions &amp; Work</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li>Ubersuggest</li>
              <li>Answer The Public</li>
              <li>Marketing School</li>
              <li>Blog</li>
              <li>Webinars</li>
              <li className="flex justify-between">Legal <span>+</span></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4">SOCIAL</h4>
            <div className="flex gap-4 text-lg">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-16" />

        {/* PARTNER LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          <img src={google} alt="Google Partner" className="h-10" />
          <img src={meta} alt="Meta Partner" className="h-10" />
          <img src={microsoft} alt="Microsoft Partner" className="h-10" />
          <img src={amazon} alt="Amazon Partner" className="h-10" />
          <img src={nmsdc} alt="NMSDC" className="h-12" />
        </div>

      </div>
    </footer>
  );
}
