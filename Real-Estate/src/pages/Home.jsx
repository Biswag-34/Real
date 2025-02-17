import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PropertyCarousel from "../components/PropertyCarousel";
import StatsSection from "../components/StatsSection";
import BestDeals from "../components/BestDeals";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";

function Home() {
  return (
    <div>
      <LeadForm />
      <Navbar />
      <Hero />
      <PropertyCarousel />
      <StatsSection />
      <BestDeals />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;
