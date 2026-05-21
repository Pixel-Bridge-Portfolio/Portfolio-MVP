"use client";

import { timeline } from "@/data/about";
import { useRef, useEffect } from "react";

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".timeline-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500 mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl lg:text-5xl">
            Milestones Along The Way
          </h2>
          <div className="w-20 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-auto mt-6" />
        </div>

چ        <div className="relative">
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-800 hidden md:block" />

          <div className="flex flex-col gap-8 md:flex-row md:gap-6 relative">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="timeline-card flex-1 opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Year Circle */}
                <div className="relative flex justify-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-400 dark:border-neutral-600 flex items-center justify-center shadow-md z-10">
                    <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 dark:border-neutral-800">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}