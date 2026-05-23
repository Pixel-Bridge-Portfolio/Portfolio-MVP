import { WorkProject } from "@/data/workDetails";

export default function ProjectTestimonial({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <section className="rounded-4xl bg-black p-8 text-white md:p-12">
      <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
        Testimonial
      </p>

      <blockquote className="mt-6 max-w-4xl text-2xl font-medium leading-relaxed md:text-4xl">
        “{project.testimonial.quote}”
      </blockquote>

      <div className="mt-8">
        <p className="text-lg font-semibold">
          {project.testimonial.author}
        </p>

        <p className="mt-2 text-neutral-400">
          {project.testimonial.role}
        </p>
      </div>
    </section>
  );
}
