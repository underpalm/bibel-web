import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8">
          A simpler, kinder way to spend time with god.
        </h2>
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
    </section>
  );
};

export default CTASection;
