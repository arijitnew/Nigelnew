import React, { useState } from "react";

import logo from "../assets/placeholder1.png";

import google from "../assets/Google.webp";
import meta from "../assets/Meta.webp";
import microsoft from "../assets/Microsoft.webp";
import amazon from "../assets/Amazon.webp";
import nmsdc from "../assets/NMSDC.webp";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";


/* ================= CHILD ACCORDION ================= */
function ChildItem({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex justify-between items-center text-sm text-gray-300"
      >
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <ul className="ml-4 pl-4 border-l border-gray-700 mt-2 space-y-2 text-sm text-gray-400">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* ================= GLOBAL ACCORDION ITEM ================= */
function GlobalItem({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex justify-between items-center text-sm text-white mb-2"
      >
        <span>{title}</span>
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <ul className="ml-3 pl-4 border-l border-gray-700 space-y-3">
          {children}
        </ul>
      )}
    </div>
  );
}

/* ================= FOOTER ================= */
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-black to-[#2a1205] text-gray-300">
      <div className="max-w-[1400px] mx-auto px-6 py-20">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* LOGO + ADDRESS */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-48 md:w-56 mb-8"
            />

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

          {/* ================= GLOBAL ================= */}
          <div>
            <h4 className="text-white font-semibold mb-4">GLOBAL</h4>

            <div className="space-y-6">

              <GlobalItem title="North America">
                <ChildItem
                  title="United States"
                  items={["SMB / Franchise Services"]}
                />
                <li className="text-sm text-gray-400">Canada</li>
              </GlobalItem>

              <GlobalItem title="APAC">
                <li>Australia</li>
                <li>Hong Kong</li>
                <li className="text-white font-medium">India</li>
                <li>Japan</li>
                <li>Malaysia</li>
                <li>Singapore</li>
                <li>Taiwan</li>
              </GlobalItem>

              <GlobalItem title="Europe">
                <li>France</li>
                <li>Germany</li>
                <li>Italy</li>
                <li>Netherlands</li>
                <li>Spain</li>
                <li>United Kingdom</li>
              </GlobalItem>

              <GlobalItem title="LATAM">
                <li>Argentina</li>
                <li>Brazil</li>
                <li className="text-white font-medium">Chile</li>
                <li>Colombia</li>
                <li>Mexico</li>
              </GlobalItem>

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
              <li>Ubersuggest</li>
              <li>Answer The Public</li>
              <li>Marketing School</li>
              <li>Blog</li>
              <li>Webinars</li>
              <li className="flex justify-between">
                Legal <span>+</span>
              </li>
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
  <h4 className="text-white font-semibold mb-4">SOCIAL</h4>

  <div className="flex items-center gap-3">
    <img
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
    />
    <img
      src={linkedin}
      alt="LinkedIn"
      className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
    />
    <img
      src={youtube}
      alt="YouTube"
      className="h-6 w-6 opacity-60 hover:opacity-90 transition cursor-pointer"
    />
  </div>
</div>


        </div>

        {/* ================= PARTNER LOGOS (NO DIVIDER ABOVE) ================= */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-16">
  <img
    src={google}
    alt="Google Partner"
    className="h-20 md:h-24 object-contain"
  />
  <img
    src={meta}
    alt="Meta Partner"
    className="h-20 md:h-24 object-contain"
  />
  <img
    src={microsoft}
    alt="Microsoft Partner"
    className="h-20 md:h-24 object-contain"
  />
  <img
    src={amazon}
    alt="Amazon Partner"
    className="h-20 md:h-24 object-contain"
  />
  <img
    src={nmsdc}
    alt="NMSDC"
    className="h-24 md:h-28 object-contain"
  />
</div>

      </div>
    </footer>
  );
}

