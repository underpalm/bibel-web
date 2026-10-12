import React, { useState } from "react";
import { X } from "lucide-react";
import roseLogo from "../../bilder/logo_black_web.png";

import { legalContent } from "../data/legalContent";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/roseandbible/" },
  { name: "X", href: "https://x.com/rose___bible" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/rosebible/",
  },
  { name: "TikTok", href: "https://www.tiktok.com/@rose___bible" },
  { name: "YouTube", href: "https://www.youtube.com/@rose___bible" },
];

const LegalModal = ({ content, onClose }) => {
  const [language, setLanguage] = useState("de");

  if (!content) return null;

  const isBilingual = Boolean(content.de && content.en);
  const activeContent = isBilingual ? content[language] : content;

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

        {isBilingual && (
          <div className="mb-4 inline-flex rounded-full border border-gray-200 p-1 text-sm">
            <button
              type="button"
              onClick={() => setLanguage("de")}
              className={`rounded-full px-3 py-1 transition-colors ${
                language === "de"
                  ? "bg-[#33302A] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 transition-colors ${
                language === "en"
                  ? "bg-[#33302A] text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              EN
            </button>
          </div>
        )}

        <h2
          id="legal-modal-title"
          className="pr-10 text-3xl md:text-4xl font-display text-gray-900"
        >
          {activeContent.title}
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {activeContent.intro}
        </p>

        <div className="mt-8 space-y-6">
          {activeContent.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {section.heading}
              </h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-600">
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
                onClick={() => setActiveLegal("impressum")}
                className="uppercase tracking-wide hover:text-gray-900 transition-colors"
              >
                IMPRESSUM
              </button>
              <button
                type="button"
                onClick={() => setActiveLegal("terms")}
                className="uppercase tracking-wide hover:text-gray-900 transition-colors"
              >
                TERMS OF SERVICE
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
