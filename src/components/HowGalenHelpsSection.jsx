import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import instantContextImage from "../../bilder/rose-instant-context.png";
import noReadingImage from "../../bilder/rose-no-reading-required.png";
import safeFaithfulImage from "../../bilder/rose-safe-faithful.png";
import saveHoursImage from "../../bilder/rose-save-hours.png";
import { howGalenHelps } from "../data/mockData";

const helpImages = {
  1: noReadingImage,
  2: instantContextImage,
  3: safeFaithfulImage,
  4: saveHoursImage,
};

const HelpScreenPreview = ({ item }) => {
  const screen = item.screen;
  const backgroundImage = helpImages[item.id];
  const waveBars = [26, 42, 34, 56, 72, 44, 30, 58, 36, 24, 40, 32, 54, 46, 60, 38];

  return (
    <div className="relative min-h-[720px] overflow-hidden rounded-[36px] bg-gray-950 p-4 shadow-2xl">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-xl"
      />
      <div className="absolute inset-0 bg-gray-950/30" />

      <div className="relative mx-auto flex min-h-[690px] max-w-[460px] flex-col overflow-hidden rounded-[36px] border border-white/25 bg-gray-900 text-white shadow-2xl">
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/35 via-gray-950/15 to-gray-950/70" />
        <div className="absolute inset-0 bg-[#0F172A]/16 mix-blend-multiply" />

        <div className="relative z-10 flex min-h-[690px] flex-col p-6 sm:p-8">
          <div className="pt-6">
            <h3 className="text-2xl font-bold leading-tight text-white">
              {item.title}
            </h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-bold leading-none">3</span>
              <span className="pb-2 text-xl font-medium leading-none">
                verses
              </span>
            </div>
            <div className="mt-6 flex min-h-24 items-center gap-2">
              {waveBars.map((height, index) => (
                <i
                  key={`${height}-${index}`}
                  className="rose-voice-wave-bar w-1.5 rounded-full bg-white"
                  style={{
                    height,
                    animationDelay: `${(index + item.id) * 70}ms`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <div className="ml-auto max-w-[280px] rounded-2xl border border-white/25 bg-white/35 px-4 py-3 text-sm font-medium leading-relaxed text-white shadow-lg backdrop-blur-md">
              {screen.question}
            </div>

            <div className="rounded-2xl border border-white/25 bg-gray-950/45 px-4 py-3 text-sm leading-relaxed text-white shadow-lg backdrop-blur-md">
              <strong className="block font-semibold">{screen.reference}</strong>
              {screen.verse}
            </div>

            <div className="rounded-2xl border border-white/25 bg-gray-950/35 px-4 py-3 text-sm leading-relaxed text-white shadow-lg backdrop-blur-md">
              {screen.answer}
            </div>

            <div className="mt-1 flex min-h-16 items-center gap-3 rounded-2xl border border-white/25 bg-gray-950/35 px-4 text-white shadow-xl backdrop-blur-md">
              <span className="flex-1 text-base font-medium text-white/70">
                Ask a follow-up...
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-950">
                <ArrowUp size={20} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowGalenHelpsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = howGalenHelps[activeTab];

  return (
    <section id="how-galen-helps" className="py-20 md:py-32 bg-[#F5F9FB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#8F1010] tracking-wider uppercase mb-4">
            HOW ROSE HELPS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            Why talking to Rose is better than just reading.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-2">
            {howGalenHelps.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white shadow-lg"
                    : "bg-transparent hover:bg-white/50"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors ${
                    activeTab === index ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </h3>
                {activeTab === index && (
                  <p className="text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {item.description}
                  </p>
                )}
                {activeTab === index && (
                  <div className="mt-4 flex gap-1">
                    <div className="h-1 w-12 bg-[#0F172A] rounded-full" />
                    <div className="h-1 w-8 bg-[#0F172A]/30 rounded-full" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <HelpScreenPreview item={activeItem} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGalenHelpsSection;
