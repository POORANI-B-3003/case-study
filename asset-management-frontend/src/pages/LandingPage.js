import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroBanner from "../components/landing/HeroBanner";
import Features from "../components/landing/Features";
import Benefits from "../components/landing/Benefits";
import IoTSection from "../components/landing/IoTSection"; // Add this
import Industries from "../components/landing/Industries";

import EAMSection from "../components/landing/EAMSection";
import Logos from "../components/landing/Logos";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Benefits />
      <Features />
      <IoTSection />
      <EAMSection />
      <Industries />
      <Logos />
<Footer />

    </>
  );
};

export default LandingPage;
