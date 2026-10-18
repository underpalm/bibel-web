import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import HowGalenHelpsSection from "./components/HowGalenHelpsSection";
import PrivacySection from "./components/PrivacySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import LegalPage from "./components/LegalPage";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  if (["/impressum", "/imprint", "/imprint.html"].includes(path)) {
    return <LegalPage document="impressum" />;
  }
  if (["/datenschutz", "/privacy", "/policy.html"].includes(path)) {
    return <LegalPage document="privacy" />;
  }
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
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
