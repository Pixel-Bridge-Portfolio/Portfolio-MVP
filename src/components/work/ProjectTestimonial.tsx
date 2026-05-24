import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { WorkProject } from "@/data/workDetails";

export default function ProjectTestimonial({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black px-5 py-10 text-white sm:px-8 md:rounded-[36px] md:px-14 md:py-14">
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

        <blockquote className="mt-8 max-w-5xl text-xl font-medium leading-[1.45] tracking-tight text-white sm:text-2xl md:mt-10 md:text-5xl">
          &ldquo;{project.testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-9 flex items-center gap-4 md:mt-12 md:gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-base font-bold text-black shadow-2xl md:h-16 md:w-16 md:text-xl">
            {project.testimonial.author.charAt(0)}
          </div>

          <div>
            <p className="text-base font-semibold text-white md:text-xl">
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
