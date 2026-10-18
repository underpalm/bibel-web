import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | duplicate | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setStatus("loading");

    const { error } = await supabase
      .from("newsletter_signups")
      .insert({ email: normalizedEmail });

    if (!error) {
      setStatus("success");
    } else if (error.code === "23505") {
      setStatus("duplicate");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="bg-parchment py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-gray-900 leading-tight">
          Stay in the loop
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-gray-600">
          Sign up for our newsletter to be the first to know when we launch.
        </p>

        {status === "success" ? (
          <p className="mt-10 inline-block rounded-full border border-rose/30 bg-rose-tint px-6 py-4 text-sm font-medium text-gray-900">
            Thank you! We&apos;ll let you know as soon as Rose launches.
          </p>
        ) : status === "duplicate" ? (
          <p className="mt-10 inline-block rounded-full border border-rose/30 bg-rose-tint px-6 py-4 text-sm font-medium text-gray-900">
            You&apos;re already on the list — we&apos;ll be in touch soon!
          </p>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="mt-10 mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                disabled={status === "loading"}
                className="min-h-14 w-full flex-1 appearance-none rounded-full border border-gray-200 bg-card px-6 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#722F37] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#5C252C] hover:shadow-lg hover:shadow-[#722F37]/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none"
              >
                {status === "loading" ? "Signing up…" : "Sign up"}
              </button>
            </form>
            <p className="mt-3 mx-auto max-w-xl text-xs leading-5 text-gray-600">
              By signing up, you agree to receive Rose &amp; Bible news and launch updates by email.
              You can withdraw your consent at any time by emailing luca.eppel@rose-bible.com.{" "}
              <a href="/datenschutz?lang=en" className="underline underline-offset-4">Privacy policy</a>
            </p>
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
