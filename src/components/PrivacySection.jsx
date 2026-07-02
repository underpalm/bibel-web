import React from "react";
import { Heart, Lock, ShieldCheck } from "lucide-react";
import aboutFamilyImage from "../../bilder/rose-about-afro-family.png";
import { privacyFeatures } from "../data/mockData";

const PrivacyIcon = ({ type }) => {
  if (type === "private") {
    return (
      <div className="w-8 h-8 flex items-center justify-center">
        <Heart className="w-6 h-6 text-[#C0705E]" />
      </div>
    );
  }
  if (type === "encrypted") {
    return (
      <div className="w-8 h-8 flex items-center justify-center">
        <Lock className="w-6 h-6 text-[#33302A]" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <ShieldCheck className="w-6 h-6 text-amber-500" />
    </div>
  );
};

const PrivacySection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="bg-gradient-to-br from-[#C0705E]/5 to-white rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Rose helps you understand the Bible through conversation.
              </h2>
              <div className="space-y-5 text-left text-gray-600 leading-relaxed">
                <p>
                  Not by talking to the past. Not by speaking with Jesus. But
                  by making the Bible accessible – for everyone.
                </p>
                <p className="font-serif text-2xl text-gray-900">
                  Why we built Rose
                </p>
                <p>
                  We believe the Bible should not be locked behind literacy,
                  eyesight, or theological degrees. Thousands of people give up
                  reading the Bible because it feels overwhelming or abstract.
                  So we built Rose – an AI that helps you explore Scripture
                  through natural conversation.
                </p>
                <p>
                  Ask Rose anything: "What does grace mean?" – "Explain the
                  Good Samaritan to me like I am 10 years old." – "What does
                  the Bible say about rest and weariness?" Rose gives you
                  answers, verses, and context. Our mission: Biblical
                  understanding for every human being, regardless of who they
                  are.
                </p>
                <p className="font-serif text-2xl text-gray-900">
                  A new way to explore the Bible.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutFamilyImage}
                alt="Family speaking with Rose about the Bible"
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {privacyFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`p-6 rounded-2xl ${
                index === 0
                  ? "bg-[#C0705E]/5"
                  : index === 1
                    ? "bg-amber-50"
                    : "bg-[#33302A]/5"
              }`}
            >
              <div className="mb-4">
                <PrivacyIcon type={feature.icon} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
            href="https://app.galenai.com/"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex min-w-[190px] items-center justify-center px-8 py-4 bg-[#C0705E] hover:bg-[#b15f4d] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C0705E]/40"
            >
              Download for iOS
            </a>
            <a
              href="https://app.galenai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[190px] items-center justify-center px-8 py-4 bg-[#33302A] hover:bg-[#4A443B] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#33302A]/25"
            >
              Download for Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
