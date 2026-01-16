
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import DarkSection from "./Components/DarkSection";
import Hero from "./Components/Hero";
import ClientsAndForm from "./Components/ClientsAndForm";
import AwardsStrip from "./Components/AwardsStrip";
import WeStatements from "./Components/WeStatements";
import TeamSection from "./Components/TeamSection.jsx";
import WireframeSection from "./Components/WireframeSection";
import SolutionsContent from "./Components/SolutionsContent";
import SolutionsCards from "./Components/SolutionsCards";
import CaseStudiesSlider from "./Components/CaseStudiesSlider";
import TestimonialsDark from "./Components/TestimonialsDark";
import ContactSection from "./Components/ContactSection";
import CTASection from "./Components/CTASection";
import Footer from "./Components/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";


function Layout({ children }) {
  return (
    <>
      <Navbar />
     
      <main className="pt-[80px]">
        {children}
      </main>
      <DarkSection>
        <Footer />
      </DarkSection>
    </>
  );
}


function Home() {
  return (
    <>
      <DarkSection>
        <div className="pt-[80px]">
          <Hero />
          <ClientsAndForm />
          <AwardsStrip />
        </div>
      </DarkSection>

      <WeStatements />
      <TeamSection />

      <WireframeSection>
        <SolutionsContent />
        <SolutionsCards />
      </WireframeSection>

      <CaseStudiesSlider />

      <DarkSection>
        <TestimonialsDark />
      </DarkSection>

      <WireframeSection>
        <ContactSection />
      </WireframeSection>

      <CTASection />
    </>
  );
}


export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

<Route
  path="/privacy-policy"
  element={
    <Layout>
      <DarkSection>
        <PrivacyPolicy />
      </DarkSection>
    </Layout>
  }
/>

<Route
  path="/terms-of-use"
  element={
    <Layout>
      <DarkSection>
        <TermsOfUse />
      </DarkSection>
    </Layout>
  }
/>

    </Routes>
  );
}
