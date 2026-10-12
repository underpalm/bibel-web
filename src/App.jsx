import React from "react";
import "./App.css";
import ComingSoonPage from "./components/ComingSoonPage";
import LegalPage from "./components/LegalPage";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  if (["/impressum", "/imprint", "/imprint.html"].includes(path)) {
    return <LegalPage document="impressum" />;
  }
  if (["/datenschutz", "/privacy", "/policy.html"].includes(path)) {
    return <LegalPage document="privacy" />;
  }
  return <ComingSoonPage />;
}

export default App;
