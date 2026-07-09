import React, { useState } from "react";
import roseLogo from "../../bilder/logo_black_web.png";
import { supabase } from "../lib/supabaseClient";

const ComingSoonPage = () => {
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
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-parchment">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(51, 48, 42, 0.11) 0%, rgba(51, 48, 42, 0) 46%), radial-gradient(circle at 18% 12%, rgba(192, 112, 94, 0.12) 0%, rgba(255, 255, 255, 0) 34%)",
        }}
      />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <img
          src={roseLogo}
          alt="Rose"
          className="h-12 w-12 object-contain"
        />

        <h1 className="mt-14 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
          Opening soon
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
          Sign up for our newsletter to be the first to know when we launch.
        </p>

        {status === "success" ? (
          <p className="mt-10 rounded-full border border-rose/30 bg-rose-tint px-6 py-4 text-sm font-medium text-gray-900">
            Thank you! We&apos;ll let you know as soon as Rose launches.
          </p>
        ) : status === "duplicate" ? (
          <p className="mt-10 rounded-full border border-rose/30 bg-rose-tint px-6 py-4 text-sm font-medium text-gray-900">
            You&apos;re already on the list — we&apos;ll be in touch soon!
          </p>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="coming-soon-email" className="sr-only">
                Email address
              </label>
              <input
                id="coming-soon-email"
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
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#C0705E] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#b15f4d] hover:shadow-lg hover:shadow-[#C0705E]/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none"
              >
                {status === "loading" ? "Signing up…" : "Sign up"}
              </button>
            </form>
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </>
        )}
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-3 px-6 pb-10 text-sm text-gray-500">
        <p>
          This experience is powered by{" "}
          <span className="font-serif font-semibold text-gray-900">Rose</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span
            aria-disabled="true"
            className="cursor-not-allowed select-none text-gray-300 underline underline-offset-4"
          >
            Preview the site
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
