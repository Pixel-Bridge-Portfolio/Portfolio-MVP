"use client";

import { philosophy } from "@/data/about";

export default function BridgePhilosophy() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500 mb-3">
            Bridge Philosophy
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl lg:text-5xl mb-6">
            {philosophy.title}
          </h2>

          {/* SVG Bridge Illustration */}
          <div className="my-12 flex justify-center">
            <svg
              width="400"
              height="120"
              viewBox="0 0 400 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-sm md:max-w-md"
            >
              {/* Water */}
              <path
                d="M0 100 Q50 90 100 95 Q150 100 200 95 Q250 90 300 95 Q350 100 400 95 L400 120 L0 120 Z"
                fill="currentColor"
                className="text-neutral-300 dark:text-neutral-700"
                fillOpacity="0.3"
              />
              {/* Main Cable */}
              <path
                d="M50 85 Q100 35 200 35 Q300 35 350 85"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                className="text-neutral-700 dark:text-neutral-300"
                strokeLinecap="round"
              />
              {/* Towers */}
              <rect
                x="80"
                y="48"
                width="5"
                height="42"
                fill="currentColor"
                className="text-neutral-600 dark:text-neutral-400"
                rx="2"
              />
              <rect
                x="315"
                y="48"
                width="5"
                height="42"
                fill="currentColor"
                className="text-neutral-600 dark:text-neutral-400"
                rx="2"
              />
              {/* Vertical Cables */}
              <line
                x1="120"
                y1="40"
                x2="120"
                y2="75"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-500 dark:text-neutral-500"
              />
              <line
                x1="160"
                y1="36"
                x2="160"
                y2="75"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-500 dark:text-neutral-500"
              />
              <line
                x1="200"
                y1="35"
                x2="200"
                y2="75"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-500 dark:text-neutral-500"
              />
              <line
                x1="240"
                y1="36"
                x2="240"
                y2="75"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-500 dark:text-neutral-500"
              />
              <line
                x1="280"
                y1="40"
                x2="280"
                y2="75"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-500 dark:text-neutral-500"
              />
              {/* Road */}
              <rect
                x="55"
                y="75"
                width="290"
                height="5"
                fill="currentColor"
                className="text-neutral-800 dark:text-neutral-200"
                opacity="0.5"
                rx="2"
              />
            </svg>
          </div>

          {/* Description */}
          <p className="text-lg text-neutral-600 dark:text-neutral-400 md:text-xl leading-relaxed mb-8">
            {philosophy.description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Design", "Development", "Strategy", "Storytelling"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}