"use client";

import { coreValues } from "@/data/about";

export default function CoreValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500 mb-3">
            Core Values
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl lg:text-5xl">
            Principles That Shape Our Work
          </h2>
          <div className="w-20 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-auto mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-neutral-100 dark:border-neutral-800"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-neutral-300 dark:bg-neutral-700 mx-auto my-4 transition-all duration-300 group-hover:w-20" />

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}