import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

const STORAGE_KEY = "rose:newsletter-subscribed";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) {
        setSubscribed(true);
      }
    } catch {
      // localStorage not available — ignore
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValid) {
      setStatus("error");
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage not available — still show success
    }
    setStatus("success");
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-[#F7F2EA]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="mx-auto max-w-lg text-3xl md:text-4xl font-serif text-gray-900">
          Sign up to stay in the loop with the latest updates from Rose
        </h2>

        {subscribed ? (
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFFDF9] border border-gray-200 px-6 py-4 text-left">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C0705E] text-white">
              <Check size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Du bist angemeldet
              </p>
              <p className="text-sm text-gray-600">
                Danke! Wir melden uns bei Neuigkeiten.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              E-Mail-Adresse
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="deine@email.de"
              className={`flex-1 rounded-full bg-[#FFFDF9] px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 outline-none transition-all border ${
                status === "error"
                  ? "border-[#C0705E] ring-2 ring-[#C0705E]/30"
                  : "border-gray-200 focus:border-[#C0705E] focus:ring-2 focus:ring-[#C0705E]/30"
              }`}
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "newsletter-error" : undefined}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#C0705E] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#b15f4d] hover:shadow-lg hover:shadow-[#C0705E]/40"
            >
              Anmelden
            </button>
          </form>
        )}

        {status === "error" && !subscribed && (
          <p id="newsletter-error" className="mt-3 text-sm text-[#b15f4d]">
            Bitte gib eine gültige E-Mail-Adresse ein.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
