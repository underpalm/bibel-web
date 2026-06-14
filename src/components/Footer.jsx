import React, { useState } from "react";
import { X } from "lucide-react";
import roseLogo from "../../bilder/logo_black_web.png";

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This placeholder privacy policy explains how Rose may handle account information, waitlist submissions, device data, and communication preferences.",
    sections: [
      {
        heading: "Information We Collect",
        body: "We may collect your email address, basic account details, device information, and any information you choose to submit through forms on this website.",
      },
      {
        heading: "How We Use Information",
        body: "Information is used to provide access, send product updates, improve the experience, protect the service, and respond to support requests.",
      },
      {
        heading: "Cookies",
        body: "We use necessary cookies to operate this website. Optional cookies may be used only after you accept them and can be changed through the cookie settings link in the footer.",
      },
      {
        heading: "Your Choices",
        body: "You may request access, correction, or deletion of your information. You can also unsubscribe from non-essential emails at any time.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "These placeholder terms outline the basic rules for using Rose, joining the waitlist, and accessing early product features.",
    sections: [
      {
        heading: "Use of the Service",
        body: "You agree to use Rose lawfully, respectfully, and only for personal purposes unless a separate agreement allows otherwise.",
      },
      {
        heading: "Early Access",
        body: "Early access features may change, pause, or be removed while the product is being developed and improved.",
      },
      {
        heading: "No Professional Advice",
        body: "Content in Rose is provided for general informational and devotional support and should not replace professional, pastoral, legal, medical, or financial advice.",
      },
    ],
  },
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "TikTok", href: "https://www.tiktok.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
];

const LegalModal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/50 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2
          id="legal-modal-title"
          className="pr-10 text-3xl md:text-4xl font-serif text-gray-900"
        >
          {content.title}
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{content.intro}</p>

        <div className="mt-8 space-y-6">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {section.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [activeLegal, setActiveLegal] = useState(null);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const modalContent = activeLegal ? legalContent[activeLegal] : null;
  const currentYear = new Date().getFullYear();
  const openCookieSettings = () => {
    window.dispatchEvent(new Event("rose:open-cookie-settings"));
  };

  return (
    <>
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#" className="flex items-center" aria-label="Rose home">
              <img
                src={roseLogo}
                alt="Rose"
                className="h-6 w-6 object-contain"
              />
            </a>

            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <button
                type="button"
                onClick={() => setActiveLegal("privacy")}
                className="uppercase tracking-wide hover:text-gray-900 transition-colors"
              >
                PRIVACY POLICY
              </button>
              <button
                type="button"
                onClick={() => setActiveLegal("terms")}
                className="uppercase tracking-wide hover:text-gray-900 transition-colors"
              >
                TERMS OF SERVICE
              </button>
              <button
                type="button"
                onClick={openCookieSettings}
                className="uppercase tracking-wide hover:text-gray-900 transition-colors"
              >
                COOKIE SETTINGS
              </button>
              <div className="flex basis-full flex-col items-center gap-3 md:basis-auto">
                <button
                  type="button"
                  onClick={() => setIsSocialOpen((isOpen) => !isOpen)}
                  className="uppercase tracking-wide hover:text-gray-900 transition-colors"
                  aria-expanded={isSocialOpen}
                  aria-controls="footer-social-links"
                >
                  SOCIAL MEDIA
                </button>

                {isSocialOpen && (
                  <div
                    id="footer-social-links"
                    className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-sm"
                  >
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <p className="text-sm text-gray-400">
              © {currentYear} Rose. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <LegalModal content={modalContent} onClose={() => setActiveLegal(null)} />
    </>
  );
};

export default Footer;
