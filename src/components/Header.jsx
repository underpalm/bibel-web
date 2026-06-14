import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import roseLogo from "../../bilder/logo_black_web.png";
import { navLinks } from "../data/mockData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
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
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#1E293B] hover:shadow-lg hover:shadow-[#0F172A]/25"
            >
              Try Now – Free
            </a>

            <button
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
  );
};

export default Header;
