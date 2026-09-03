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
import { StoreModalProvider } from "./components/StoreModal";

function App() {
  return (
    <div className="App">
      <StoreModalProvider>
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
      </StoreModalProvider>
    </div>
  );
}

export default App;
