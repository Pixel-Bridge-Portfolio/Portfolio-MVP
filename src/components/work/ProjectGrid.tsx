"use client";

import ProjectsCard from "./ProjectsCard";
import { WorkProject } from "@/data/workDetails";

type Props = {
  projects: WorkProject[];
};

export default function ProjectGrid({ projects }: Props) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectsCard key={project.slug} project={project} />
      ))}
    </section>
  );
}