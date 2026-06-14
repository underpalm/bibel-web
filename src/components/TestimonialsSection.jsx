import React, { useEffect, useRef } from "react";
import { testimonials } from "../data/mockData";

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return undefined;

    let animationId;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1000);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="community" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#0F172A] tracking-wider uppercase mb-4">
            OUR COMMUNITY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
            What people say about Rose
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-[#0F172A]">{testimonial.useCase}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
