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
    <main className="min-h-screen bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Selected Work
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-6xl lg:text-7xl">
            Portfolio & Projects
          </h1>

          <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
            Explore a collection of creative projects including web development, branding, UI design, and digital experiences crafted with a strong focus on aesthetics, usability, and performance.
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <FilterBar
            active={activeFilter}
            setActive={setActiveFilter}
          />
        </div>

        <div className="mt-10 md:mt-16">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </main>
  );
}

