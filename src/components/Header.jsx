import React, { useEffect, useState } from "react";
import { ExternalLink, Menu, Smartphone, X } from "lucide-react";
import roseLogo from "../../bilder/logo_black_web.png";
import { navLinks } from "../data/mockData";

const storeOptions = [
  {
    id: "ios",
    label: "iOS",
    description: "App Store",
    href: "https://apps.apple.com/",
  },
  {
    id: "android",
    label: "Android",
    description: "Google Play",
    href: "https://play.google.com/store/apps",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isStoreModalOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsStoreModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isStoreModalOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openStoreModal = () => {
    setIsMenuOpen(false);
    setIsStoreModalOpen(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center" aria-label="Rose home">
              <img
                src={roseLogo}
                alt="Rose"
                className="h-7 w-7 object-contain"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-sm uppercase tracking-wide text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={openStoreModal}
                className="inline-flex items-center justify-center rounded-full bg-[#C0705E] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#b15f4d] hover:shadow-lg hover:shadow-[#C0705E]/40"
              >
                Try Now (Beta)
              </button>

              <button
                type="button"
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col gap-4 py-4 border-t border-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="uppercase tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {isStoreModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/50 px-4 py-8 backdrop-blur-sm"
          onClick={() => setIsStoreModalOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-modal-title"
          >
            <button
              type="button"
              onClick={() => setIsStoreModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2
              id="store-modal-title"
              className="pr-10 text-2xl font-serif text-gray-900"
            >
              Try Rose Beta
            </h2>

            <div className="mt-6 grid gap-3">
              {storeOptions.map((option) => (
                <a
                  key={option.id}
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-16 items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-left transition-colors hover:border-gray-900 hover:bg-gray-50"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                      <Smartphone size={20} />
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-gray-900">
                        {option.label}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {option.description}
                      </span>
                    </span>
                  </span>
                  <ExternalLink size={18} className="shrink-0 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
