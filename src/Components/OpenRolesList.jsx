import React from "react";

const rolesData = [
  {
    category: "Accounting & Finance",
    roles: [
      { title: "Finance Executive", location: "Philippines" },
      { title: "Legal Associate", location: "India" },
    ],
  },
  {
    category: "App Store Optimization",
    roles: [
      { title: "Specialist, ASO", location: "Philippines" },
    ],
  },
  {
    category: "Client Services",
    roles: [
      { title: "Account Manager", location: "United States" },
      { title: "Associate Account Manager", location: "United States" },
      { title: "Sr. Account Manager", location: "Canada" },
    ],
  },
  {
    category: "Content",
    roles: [
      { title: "Lead / Specialist, Copy", location: "India" },
    ],
  },
  {
    category: "Conversion Rate Optimization",
    roles: [
      { title: "CRO Strategist", location: "United States" },
    ],
  },
  {
    category: "Data & Analytics",
    roles: [
      { title: "Associate Director, Advanced Analytics", location: "United States" },
      { title: "Associate Director, Advanced Analytics", location: "Canada" },
      { title: "Data, Analytics & Insights Specialist", location: "Argentina" },
      { title: "Sr. Manager, Data, Analytics & Insights", location: "United States" },
    ],
  },
  {
    category: "Digital PR",
    roles: [
      { title: "Manager, PR & Communications", location: "India" },
      { title: "Senior Strategist, Digital PR", location: "United Kingdom" },
    ],
  },
  {
    category: "Earned Media",
    roles: [
      { title: "Specialist, SEO", location: "Malaysia" },
      { title: "Vice President, Earned Media", location: "Spain" },
    ],
  },
  {
    category: "Marketing & Comms",
    roles: [
      { title: "Marketing Manager", location: "United Kingdom" },
      { title: "Marketing Manager", location: "United States" },
      { title: "Marketing Manager", location: "Brazil" },
    ],
  },
  {
    category: "Paid Media",
    roles: [
      { title: "Campaign Manager, Programmatic", location: "Philippines" },
      { title: "Director, Paid Media", location: "United States" },
      { title: "Head, Performance Marketing", location: "Malaysia" },
      { title: "Manager, Paid Media", location: "Melbourne, Australia" },
      { title: "Paid Media Specialist", location: "United States" },
      { title: "Senior Manager, Paid Search", location: "Philippines" },
      { title: "Senior Specialist, Performance Marketing", location: "Malaysia" },
      { title: "Senior Specialist, Performance Marketing (Thai Speaker)", location: "Malaysia" },
      { title: "Specialist, Paid Media Strategy, LevelUp", location: "United States" },
      { title: "Specialist, Paid Social", location: "Philippines" },
    ],
  },
  {
    category: "Sales",
    roles: [
      { title: "Business Development Representative", location: "United States" },
      { title: "Business Development Representative", location: "Argentina" },
      { title: "Director, Business Development", location: "Argentina" },
      { title: "Manager, Business Development / Sales", location: "India" },
      { title: "Sales Intern", location: "India" },
      { title: "VP, Business Development", location: "Spain" },
    ],
  },
  {
    category: "Sales – SMB",
    roles: [
      { title: "Manager, Business Development / Sales (SMB)", location: "India" },
    ],
  },
  {
    category: "Search Engine Optimization",
    roles: [
      { title: "Manager, SEO", location: "Madrid, Spain" },
      { title: "Manager, SEO", location: "Germany" },
      { title: "Senior Manager, SEO", location: "Canada" },
      { title: "SEO Apprentice", location: "France" },
      { title: "SEO Executive", location: "India" },
      { title: "SEO Specialist", location: "Spain" },
      { title: "SEO Strategist", location: "Madrid, Spain" },
      { title: "SEO Strategist", location: "United States" },
      { title: "SEO Strategist", location: "Canada" },
      { title: "SEO Strategist", location: "United States" },
    ],
  },
];

export default function OpenRolesList() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {rolesData.map((section, index) => (
          <div key={index} className="mb-20">

            {/* CATEGORY HEADER */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#26282c] mb-6 text-left">
              {section.category}
            </h2>

            {/* ROLES */}
            <div className="space-y-4">
              {section.roles.map((role, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[#dde82d] font-medium text-sm md:text-base">
                    {role.title}
                  </span>
                  <span className="text-sm text-gray-600">
                    {role.location}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* JOB SEEKER TOOLS */}
      {/* JOB SEEKER TOOLS */}
<div className="mt-24 text-center">
  <h3 className="font-semibold text-lg mb-6">
    Job Seeker Tools
  </h3>

  <div className="flex flex-wrap justify-center gap-10 text-sm text-[#dde82d]">

    {/* Submit Application */}
    <div className="flex items-center gap-2 cursor-pointer">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 16v-8m0 0l-3 3m3-3l3 3" />
        <path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
      </svg>
      <span>Submit a General Application</span>
    </div>

    {/* Check Application */}
    <div className="flex items-center gap-2 cursor-pointer">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      <span>Check Your Application</span>
    </div>

    {/* Job Alerts */}
    <div className="flex items-center gap-2 cursor-pointer">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
        <path d="M9 17a3 3 0 006 0" />
      </svg>
      <span>Sign-up for Job Alerts</span>
    </div>

  </div>

  <div className="mt-16 text-center">
  <span className="text-[11px] text-gray-400">
    powered by{" "}
    <span className="text-[18px] font-semibold tracking-wide text-gray-700">
      JOBVITE
    </span>
  </span>
</div>

</div>


      </div>
    </section>
  );
}
