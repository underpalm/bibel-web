import React, { useState } from "react";
import { X } from "lucide-react";
import roseLogo from "../../bilder/logo_black_web.png";

const legalContent = {
  privacy: {
    de: {
      title: "Datenschutzerklärung",
      intro:
        "Diese Datenschutzerklärung informiert Sie darüber, wie wir im Rahmen dieser Website (rose-bible.com) mit personenbezogenen Daten umgehen.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          body: "Gracia Lukelo\nGerresheimer Straße 182\n40233 Düsseldorf\nDeutschland\n\nE-Mail: lukeloresearch@gmail.com\n\nVerantwortlich im Sinne der DSGVO (Art. 4 Nr. 7 DSGVO) für die Datenverarbeitung auf dieser Website.",
        },
        {
          heading: "2. Allgemeines zur Datenverarbeitung",
          body: "Diese Website ist eine Projekt- und Vorschauseite für Rose, eine sich aktuell in Entwicklung befindliche App. Es werden derzeit keine Kontakt- oder Anmeldeformulare auf dieser Seite angeboten. Es findet keine Registrierung, kein Login und keine Newsletter-Anmeldung auf dieser Website statt.",
        },
        {
          heading: "3. Hosting",
          body: "Diese Website wird über Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel automatisch technische Zugriffsdaten (Server-Logfiles), die Ihr Browser übermittelt, u. a. IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version, Betriebssystem sowie die aufgerufene Seite.\n\nDiese Daten werden verarbeitet, um die Website technisch bereitzustellen, die Systemsicherheit zu gewährleisten und Fehler zu analysieren (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse an einem sicheren und funktionsfähigen Betrieb der Website). Da Vercel Inc. mit Sitz in den USA ein Drittland im Sinne der DSGVO ist, kann es zu einer Datenübermittlung in die USA kommen. Vercel hat sich zu den Standardvertragsklauseln (SCC) der EU-Kommission verpflichtet, um ein angemessenes Datenschutzniveau sicherzustellen.",
        },
        {
          heading: "4. Cookies",
          body: "Diese Website verwendet aktuell keine Cookies und keine vergleichbaren Speichertechnologien. Es werden auch keine Analyse-Tools (z. B. Google Analytics) und keine Marketing- oder Tracking-Pixel eingesetzt. Sollte sich dies ändern, aktualisieren wir diese Datenschutzerklärung entsprechend und holen, soweit erforderlich, vorab Ihre Einwilligung ein.",
        },
        {
          heading: "5. Externe Links",
          body: "Diese Website kann Verlinkungen zu App-Stores (Apple App Store, Google Play Store) enthalten. Beim Anklicken verlassen Sie unsere Website; für die Datenverarbeitung auf diesen externen Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.",
        },
        {
          heading: "6. Ihre Rechte",
          body: "Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) bezüglich Ihrer personenbezogenen Daten. Wenden Sie sich hierzu an die oben genannte E-Mail-Adresse. Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu, z. B. der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.",
        },
        {
          heading: "7. Änderungen dieser Datenschutzerklärung",
          body: "Da sich Rose aktuell im Aufbau befindet, kann sich der Funktionsumfang dieser Website und damit diese Datenschutzerklärung ändern. Es gilt jeweils die aktuelle, auf dieser Seite veröffentlichte Fassung.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      intro:
        "This privacy policy explains how we handle personal data in connection with this website (rose-bible.com).",
      sections: [
        {
          heading: "1. Controller",
          body: "Gracia Lukelo\nGerresheimer Straße 182\n40233 Düsseldorf\nGermany\n\nEmail: lukeloresearch@gmail.com\n\nController within the meaning of the GDPR (Art. 4 No. 7 GDPR) for data processing on this website.",
        },
        {
          heading: "2. General",
          body: "This website is a project and preview page for Rose, an app currently in development. No contact or sign-up forms are currently offered on this site. There is no registration, login, or newsletter sign-up on this website.",
        },
        {
          heading: "3. Hosting",
          body: "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When you visit the site, Vercel automatically processes technical access data (server log files) transmitted by your browser, including IP address, date and time of the request, browser type and version, operating system, and the page requested.\n\nThis data is processed to technically deliver the website, ensure system security, and analyze errors (Art. 6(1)(f) GDPR — legitimate interest in secure, functional website operation). As Vercel Inc. is based in the USA (a third country under the GDPR), your data may be transferred to the USA. Vercel has committed to the EU Commission's Standard Contractual Clauses (SCCs) to ensure an adequate level of data protection.",
        },
        {
          heading: "4. Cookies",
          body: "This website currently does not use cookies or comparable storage technologies. No analytics tools (e.g. Google Analytics) or marketing/tracking pixels are used either. Should this change, we will update this privacy policy accordingly and, where required, obtain your consent in advance.",
        },
        {
          heading: "5. External Links",
          body: "This website may contain links to app stores (Apple App Store, Google Play Store). Clicking these links takes you away from our website; the respective operators of those external sites are solely responsible for data processing there.",
        },
        {
          heading: "6. Your Rights",
          body: "Under the GDPR, you have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and objection (Art. 21) regarding your personal data. Please contact us at the email address above. You also have the right to lodge a complaint with a data protection supervisory authority, e.g. the data protection authority of North Rhine-Westphalia, Germany.",
        },
        {
          heading: "7. Changes to this Privacy Policy",
          body: "As Rose is currently being built, this website's features — and therefore this privacy policy — may change. The version published on this page at any given time applies.",
        },
      ],
    },
  },
  impressum: {
    de: {
      title: "Impressum",
      intro: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
      sections: [
        {
          heading: "Anbieter",
          body: "Gracia Lukelo\nGerresheimer Straße 182\n40233 Düsseldorf\nDeutschland",
        },
        {
          heading: "Kontakt",
          body: "E-Mail: lukeloresearch@gmail.com",
        },
        {
          heading: "Hinweis zum Unternehmensstatus",
          body: "Diese Website dient der Vorstellung von Rose, einem in Entwicklung befindlichen Projekt. Es handelt sich aktuell noch nicht um ein im Handelsregister eingetragenes Unternehmen oder ein kommerzielles Angebot; die Gewerbeanmeldung befindet sich in Vorbereitung. Verantwortlich als Diensteanbieterin ist derzeit die oben genannte Privatperson.",
        },
        {
          heading: "Haftungsausschluss",
          body: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.\n\nDie Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        },
      ],
    },
    en: {
      title: "Legal Notice",
      intro: "Information pursuant to Sec. 5 German Digital Services Act (DDG).",
      sections: [
        {
          heading: "Provider",
          body: "Gracia Lukelo\nGerresheimer Straße 182\n40233 Düsseldorf\nGermany",
        },
        {
          heading: "Contact",
          body: "Email: lukeloresearch@gmail.com",
        },
        {
          heading: "Note on Business Status",
          body: "This website presents Rose, a project currently in development. It is not yet operated as a company entered in the commercial register, nor as a commercial offering; business registration is in preparation. The private individual named above is currently responsible as the service provider.",
        },
        {
          heading: "Disclaimer",
          body: "Despite careful review, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.\n\nThe European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. We are not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration board.",
        },
      ],
    },
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
  { name: "Instagram", href: "https://www.instagram.com/rose___bible/" },
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
