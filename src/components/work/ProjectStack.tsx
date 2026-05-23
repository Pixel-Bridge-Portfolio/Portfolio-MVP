import { WorkProject } from "@/data/workDetails";

export default function ProjectStack({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Tech Stack
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-black">
          Tools & Technologies
        </h2>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-black/10 bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}