import React from "react";

const jobs = [
  { title: "Manager, SEO", location: "Madrid, Spain" },
  { title: "Vice President, Earned Media", location: "Spain" },
  { title: "SEO Strategist", location: "Madrid, Spain" },
  { title: "Marketing Manager", location: "Brazil" },
];

export default function CurrentOpenRoles() {
  return (
    <section className="w-full bg-white py-16">
      
      {/* PAGE HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#26282c]">
          Current open roles.
        </h2>
        <div className="w-12 h-[3px] bg-[#dde82d] mx-auto mt-4" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-14">
        <div className="bg-[#f3f4f6] px-14 py-12">

          <h3 className="text-center font-semibold text-base mb-6">
            Search Jobs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.3fr_auto] gap-4 mb-10">
            <select className="border border-gray-300 px-4 py-2 bg-white text-sm">
              <option>Select a Category</option>
            </select>

            <select className="border border-gray-300 px-4 py-2 bg-white text-sm">
              <option>Select a Location</option>
            </select>

            <input
              type="text"
              placeholder="Search Jobs"
              className="border border-gray-300 px-4 py-2 bg-white text-sm"
            />

            <button className="bg-[#dde82d] text-black font-semibold px-8 py-2 text-sm">
              SEARCH
            </button>
          </div>

          <h3 className="text-center font-semibold text-base mb-6">
            Featured Jobs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white py-9 px-5 text-center border border-gray-200"
              >
                <h4 className="text-[#dde82d] font-bold text-sm mb-1">
                  {job.title}
                </h4>
                <p className="text-xs text-gray-600">
                  {job.location}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

