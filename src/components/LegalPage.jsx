import React, { useEffect, useState } from "react";
import { legalContent } from "../data/legalContent";

export default function LegalPage({ document: documentType }) {
  const [language, setLanguage] = useState(
    new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "de",
  );
  const content = legalContent[documentType][language];

  useEffect(() => {
    document.title = `${content.title} | Rose & Bible`;
    document.documentElement.lang = language;
  }, [content.title, language]);

  return (
    <main className="min-h-screen bg-parchment px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <a href="/" className="font-serif text-2xl">Rose &amp; Bible</a>
          <nav aria-label="Language" className="flex gap-4">
            {['de', 'en'].map((value) => (
              <button key={value} type="button" lang={value}
                aria-pressed={language === value}
                className="underline underline-offset-4"
                onClick={() => setLanguage(value)}>
                {value === 'de' ? 'Deutsch' : 'English'}
              </button>
            ))}
          </nav>
        </header>
        <h1 className="font-display text-3xl sm:text-4xl">{content.title}</h1>
        <p className="mt-6 leading-7 text-gray-600">{content.intro}</p>
        <div className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <p className="mt-3 whitespace-pre-line break-words leading-7 text-gray-600">{section.body}</p>
            </section>
          ))}
        </div>
        <nav aria-label="Legal" className="mt-12 flex flex-wrap gap-6 border-t pt-6 text-sm">
          <a href="/">{language === 'de' ? 'Startseite' : 'Home'}</a>
          <a href={`/impressum?lang=${language}`}>Impressum / Legal notice</a>
          <a href={`/datenschutz?lang=${language}`}>Datenschutz / Privacy</a>
        </nav>
      </div>
    </main>
  );
}
