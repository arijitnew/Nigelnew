import React from "react";
const BrandLink = () => (
    <a
      href="https://agency.nigelquadros.com/"
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-gray-300 transition"
    >
      Agency by Nigel Quadros
    </a>
  );
export default function PrivacyPolicy() {
  return (
    <section className="w-full text-white">
      <div className="max-w-5xl mx-auto px-6 py-20 text-left">
        <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>

        <p className="mb-6 leading-7">
          At <strong><BrandLink/></strong>, accessible from{" "}
          <a
            href="https://agency.nigelquadros.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://agency.nigelquadros.com
          </a>
          , one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that are
          collected and recorded by <BrandLink/> and how we use it.
        </p>

        <p className="mb-10 leading-7">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Log Files</h2>
        <p className="mb-10 leading-7">
        <BrandLink/> follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this a part of hosting services’ analytics. The information collected by log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        <br/>
        <br/>
        These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.

        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Cookies and Web Beacons
        </h2>
        <p className="mb-10 leading-7">
        Like any other website, <BrandLink/> uses ‘cookies’. These cookies are used to store information, including visitors’ preferences, and the pages on the website that the visitor accessed or visited.
        <br/>
        <br/>
        The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Google DoubleClick DART Cookie
        </h2>
        <p className="mb-6 leading-7">
        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL-
          <br />
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://policies.google.com/technologies/ads
          </a>
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Our Advertising Partners
        </h2>
        <p className="mb-6 leading-7">
        Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <p className="mb-10 leading-7">
          Google-
          <br />
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://policies.google.com/technologies/ads
          </a>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
           Privacy Policies
        </h2>
        <p className="mb-10 leading-7">
        You may consult this list to find the Privacy Policy for each of the advertising partners of <BrandLink/>.
        <br/>
Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on <BrandLink/>, which are sent directly to users’ browsers.
<br/>
<br/>
They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
<br/>
<br/>
Note that <BrandLink/> has no access to or control over these cookies that are used by third-party advertisers.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Third Party Privacy Policies
        </h2>
        <p className="mb-10 leading-7">
        <BrandLink/>’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of certain options.
        <br/>
        <br/>
        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found on the browsers’ respective websites. What Are Cookies?

        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Children’s Information
        </h2>
        <p className="mb-10 leading-7">
        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        <br/>
        <br/>
        <BrandLink/> does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.

        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Online Privacy Policy Only
        </h2>
        <p className="mb-10 leading-7">
        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in <BrandLink/>. This policy is not applicable to any information collected offline or via channels other than this website.

        </p>

        <h2 className="text-2xl font-semibold mb-4">Consent</h2>
        <p className="mb-16 leading-7">
        By using our website, you hereby consent to this Privacy Policy and agree to the Terms of Use.

        </p>

       
      </div>
    </section>
  );
}
