import { mission } from "@/data/about";

export default function MissionStatement() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-1.5 mb-8 shadow-sm">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
            Our Mission
          </span>
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl mb-6 leading-tight">
          {mission.title}
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400 md:text-xl leading-relaxed">
          {mission.description}
        </p>
      </div>
    </section>
  );
}