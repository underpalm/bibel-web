import React, { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const CONSENT_COOKIE = "rose_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

const getCookie = (name) => {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : null;
};

const setConsentCookie = (value) => {
  const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    value,
  )}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secureFlag}`;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(CONSENT_COOKIE)) {
      setIsVisible(true);
    }

    const openSettings = () => setIsVisible(true);
    window.addEventListener("rose:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("rose:open-cookie-settings", openSettings);
    };
  }, []);

  const saveConsent = (value) => {
    setConsentCookie(value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-lg border border-gray-200 bg-white p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700">
            <Cookie size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Cookie preferences
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
              Rose uses necessary cookies to keep the site working and may use
              optional cookies to improve the experience. You can accept all
              cookies or keep only the necessary ones.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => saveConsent("necessary")}
            className="rounded-full bg-[#33302A] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A443B]"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => saveConsent("all")}
            className="rounded-full bg-[#C0705E] px-4 py-2 text-sm font-medium text-white hover:bg-[#b15f4d]"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => saveConsent("necessary")}
            className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 sm:static"
            aria-label="Close cookie banner and keep necessary cookies"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
