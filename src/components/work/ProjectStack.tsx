import { WorkProject } from "@/data/workDetails";

export default function ProjectStack({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_10px_50px_rgba(0,0,0,0.05)] sm:p-6 md:rounded-4xl md:p-8">
  <div>
    <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
      Tech Stack
    </p>

    <h2 className="mt-3 text-2xl font-semibold text-black md:text-3xl">
      Tools & Technologies
    </h2>
  </div>

  <div className="mt-8 flex flex-wrap gap-3">
    {project.stack.map((tool) => (
      <span
        key={tool}
        className="rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-lg sm:px-5 sm:py-3 sm:text-sm"
      >
        {tool}
      </span>
    ))}
  </div>
</section>
  );
}
