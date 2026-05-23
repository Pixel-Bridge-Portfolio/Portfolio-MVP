import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WorkProject } from "@/data/workDetails";

export default function NextProjectCard({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex items-center justify-between rounded-4xl border border-black/10 bg-neutral-100 p-8 transition hover:bg-black hover:text-white"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 group-hover:text-neutral-400">
          Next Project
        </p>

        <h3 className="mt-4 text-3xl font-semibold group-hover:text-white">
          {project.title}
        </h3>
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white transition group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-white/80">
        <ArrowForwardIcon />
      </div>
    </Link>
  );
}