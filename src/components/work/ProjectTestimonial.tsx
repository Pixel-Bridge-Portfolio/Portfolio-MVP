import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { WorkProject } from "@/data/workDetails";

export default function ProjectTestimonial({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black px-8 py-14 text-white md:px-14">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-neutral-700/20 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <FormatQuoteIcon />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Client Feedback
            </p>

            <div className="mt-2 h-px w-24 bg-white/10" />
          </div>
        </div>

        <blockquote className="mt-10 max-w-5xl text-3xl font-medium leading-[1.4] tracking-tight text-white md:text-5xl">
          “{project.testimonial.quote}”
        </blockquote>

        <div className="mt-12 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-2xl">
            {project.testimonial.author.charAt(0)}
          </div>

          <div>
            <p className="text-xl font-semibold text-white">
              {project.testimonial.author}
            </p>

            <p className="mt-1 text-neutral-400">
              {project.testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}