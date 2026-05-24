"use client";

import { useMemo, useState } from "react";

import ProjectGrid from "@/components/work/ProjectGrid";
import FilterBar from "@/components/work/FilterBar";

import { workDetails } from "@/data/workDetails";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return workDetails;
    }

    return workDetails.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Selected Work
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-black md:text-7xl">
            Portfolio & Projects
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Explore a collection of creative projects including web development, branding, UI design, and digital experiences crafted with a strong focus on aesthetics, usability, and performance.
          </p>
        </div>

        <div className="mt-14">
          <FilterBar
            active={activeFilter}
            setActive={setActiveFilter}
          />
        </div>

        <div className="mt-16">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </main>
  );
}

