"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { WorkProject } from "@/data/workDetails";

type Props = {
  project: WorkProject;
};

export default function ProjectsCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-4xl bg-neutral-900"
    >
      <div className="relative aspect-[4/4.8] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/55 opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-end p-5 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="w-full space-y-4">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-wide text-white backdrop-blur-md"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-300">
                {project.shortDescription}
              </p>
            </div>

            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
            >
              See Details
              <ArrowOutwardIcon sx={{ fontSize: 16 }} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
