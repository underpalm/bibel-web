import React from "react";
import { Mic } from "lucide-react";
import businessesPartnersDesktop from "../../bilder/02_businesses_partners_desktop.webp";
import businessesPrivacyDesktop from "../../bilder/03_businesses_privacy_desktop.webp";
import businessesWorkloadDesktop from "../../bilder/01_businesses_workload_desktop.webp";

const demoScreens = [
  {
    id: "fear",
    backgroundImage: businessesWorkloadDesktop,
    question: "Rose, what does the Bible say when I feel afraid?",
    status: "FINDING COMFORT VERSES...",
    match: "MATCHING ISAIAH 41:10...",
    answer:
      "Psalm 23:4 and Isaiah 41:10 speak directly into fear. The Bible takes fear seriously and redirects your attention to God's presence.",
    reference: "Isaiah 41:10",
    verse: "Fear not, for I am with you.",
    headline: "Guidance for fear and anxiety",
    subline: "Rose connects your question to verses, context, and a clear explanation you can understand.",
  },
  {
    id: "forgiveness",
    backgroundImage: businessesPartnersDesktop,
    question: "Rose, how can I forgive someone who hurt me?",
    status: "READING RELATED PASSAGES...",
    match: "MATCHING COLOSSIANS 3:13...",
    answer:
      "Matthew 18 and Colossians 3 show forgiveness as a response to God's mercy. It does not deny pain, but it opens a path toward freedom.",
    reference: "Colossians 3:13",
    verse: "Forgive as the Lord forgave you.",
    headline: "Answers shaped by Scripture",
    subline: "Every response stays grounded in the Bible, with references you can revisit yourself.",
  },
  {
    id: "purpose",
    backgroundImage: businessesPrivacyDesktop,
    question: "Rose, how do I know what God wants me to do?",
    status: "CHECKING BIBLICAL CONTEXT...",
    match: "MATCHING MICAH 6:8...",
    answer:
      "Micah 6:8 and Romans 12 point toward humility, mercy, justice, and faithful use of the gifts God has already placed in you.",
    reference: "Micah 6:8",
    verse: "Act justly, love mercy, and walk humbly.",
    headline: "Context when you need direction",
    subline: "Ask follow-up questions naturally and keep exploring the same topic without starting over.",
  },
];

const RoseInsightPreview = ({ demo }) => {
  const voiceBars = [12, 18, 24, 16, 28, 14];

  return (
    <article className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/80 bg-gray-950 text-left shadow-2xl shadow-gray-950/10">
      <img
        src={demo.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/10 via-gray-950/25 to-gray-950/85" />
      <div className="absolute inset-0 bg-[#8F1010]/10 mix-blend-multiply" />

      <div className="relative z-10 flex min-h-[520px] flex-col p-5 sm:p-6">
        <div className="ml-auto mt-16 max-w-[255px] rounded-[18px] border border-white/25 bg-[#0F172A]/70 px-4 py-3 text-sm leading-relaxed text-white shadow-lg backdrop-blur-md">
          <div className="mb-3 flex items-center gap-2 text-white">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0F172A]">
              <Mic size={15} aria-hidden="true" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wide text-white/70">
              Voice question
            </span>
            <span className="ml-auto flex h-7 items-center gap-1">
              {voiceBars.map((height, index) => (
                <i
                  key={`${demo.id}-${height}-${index}`}
                  className="rose-voice-wave-bar w-1 rounded-full bg-white"
                  style={{
                    height,
                    animationDelay: `${(index + demo.id.length) * 80}ms`,
                  }}
                />
              ))}
            </span>
          </div>
          <p>{demo.question}</p>
        </div>

        <div className="mt-4 rounded-[18px] bg-[#45A0BE]/95 p-5 text-white shadow-xl backdrop-blur-sm">
          <p className="text-xs font-bold uppercase leading-none tracking-wide text-yellow-200">
            {demo.status}
          </p>
          <p className="mt-3 text-xs font-medium uppercase leading-none tracking-wide text-emerald-100">
            {demo.match}
          </p>
          <p className="mt-5 text-sm leading-relaxed">{demo.answer}</p>
          <div className="mt-4 rounded-xl bg-white/15 px-3 py-2">
            <strong className="block text-sm font-semibold">
              {demo.reference}
            </strong>
            <span className="text-sm text-white/90">{demo.verse}</span>
          </div>
        </div>

        <div className="mt-auto pt-10 text-white">
          <h3 className="text-2xl font-semibold leading-tight">
            {demo.headline}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/85">
            {demo.subline}
          </p>
        </div>
      </div>
    </article>
  );
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#0F172A] tracking-wider uppercase mb-4">
            HOW ROSE WORKS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            Understanding the Bible isn't always easy.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
            Ask open questions. Rose answers in full sentences, with verse
            references. You can ask follow-up questions like a normal
            conversation. Rose remembers the context.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {demoScreens.map((demo) => (
              <RoseInsightPreview key={demo.id} demo={demo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
