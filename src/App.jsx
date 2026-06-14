import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import HowGalenHelpsSection from "./components/HowGalenHelpsSection";
import PrivacySection from "./components/PrivacySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <HowGalenHelpsSection />
        <PrivacySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
