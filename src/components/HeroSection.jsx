import React from "react";
import { Mic } from "lucide-react";
import heroVideoImage from "../../bilder/rose-hero-video-placeholder.png";

const HeroSection = () => {
  const voiceBars = [28, 44, 34, 58, 76, 42, 30, 54, 36, 24, 46, 32];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-16 md:pt-20 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(15, 23, 42, 0.11) 0%, rgba(15, 23, 42, 0) 46%), radial-gradient(circle at 18% 12%, rgba(143, 16, 16, 0.12) 0%, rgba(255, 255, 255, 0) 34%)",
        }}
      />

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(https://cdn.prod.website-files.com/6920f51d0fb9a70fdc4c2fa3/69236a8d17b125834ba82f9f_59e0fb52b5f713645ba8d89c0f2b4728_bg-lp.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12 md:mt-16">
        <p className="text-sm md:text-base font-medium text-[#8F1010] tracking-wide mb-4">
          MEET ROSE.
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-5">
          The Bible you can talk to.
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
          Rose is the first AI agent that helps you understand the Bible through
          conversation, whether you are blind, cannot read, or simply have
          little time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://app.galenai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[190px] items-center justify-center px-8 py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0F172A]/25"
          >
            Download for iOS
          </a>
          <a
            href="https://app.galenai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[190px] items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            Download for Android
          </a>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-sm text-gray-400">
            Start talking to Rose for free on iPhone, or Android
          </p>
        </div>
      </div>

      <div className="relative z-10 mb-36 mt-10 aspect-video w-[calc(100vw-32px)] max-w-[1400px] md:mt-12 md:w-[calc(100vw-80px)] sm:mb-0">
        <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/80 bg-[#F5F9FB] shadow-2xl shadow-[#0F172A]/10 md:rounded-[36px]">
          <img
            src={heroVideoImage}
            alt="Family walking through a mountain meadow"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/35 via-[#0F172A]/5 to-[#8F1010]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-transparent" />
        </div>

        <div className="absolute left-0 top-[calc(100%+12px)] w-[calc(100%-24px)] max-w-[300px] rounded-2xl border border-white/25 bg-[#0F172A]/80 p-3 text-white shadow-2xl backdrop-blur-md sm:left-8 sm:top-8 sm:w-[360px] sm:max-w-[360px] sm:bg-[#0F172A]/50 sm:p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0F172A]">
              <Mic size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                Voice question
              </p>
              <p className="mt-1 text-sm font-medium leading-tight">
                Rose, what does grace mean?
              </p>
            </div>
          </div>

          <div className="mt-4 flex min-h-14 items-center gap-1.5 sm:mt-5 sm:min-h-20 sm:gap-2">
            {voiceBars.map((height, index) => (
              <i
                key={`${height}-${index}`}
                className="rose-voice-wave-bar w-1.5 rounded-full bg-white"
                style={{
                  height,
                  animationDelay: `${index * 75}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
